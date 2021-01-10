import { useState } from 'react';
import ProductItem from './ProductItem';
import DeleteModal from '../Modals/DeleteModal';
import ProductDataService from '../../Services/ProductService';
import SectionError from '../Error/SectionError';
function ProductContainer(props){
    const [productId, setProductId] = useState(null);
    const [modalActive, setModalActive] = useState(false);
    const [deleteError, setDeleteError] = useState(null);
    const [deleteStatus, setDeleteStatus ] = useState('idle');
    const { fetchProducts } = props;

    const deleteProduct = (e) => {
        setDeleteStatus('deleting');
        ProductDataService.remove(productId)
        .then((res) => {
            setModalActive(false);
            fetchProducts();
            setDeleteError(res.data.message);
            setDeleteStatus('success');
        }).catch((err) => {
            setDeleteError(err.data.message);
            setDeleteStatus('error');
        });
    };

    const selectProduct = (e) => {
        const id = e.target.dataset.id;
        setProductId(id);
        setModalActive(true);
    };
    
    const ProjectsContent = () => {
        if(props.loading === false && props.error === ''){
            return (
                <div>
                    <div>
                        <h2 className="products-header">Products</h2>
                        <SectionError error={deleteError} status={deleteStatus} reset={setDeleteError}/>
                        <ul>
                            {props.error !== '' ? <p>Something went wrong whilst fetching products.</p> : ''}
                            {props.data.map((item, key) => (
                                <ProductItem key={key} products={item} selectProduct={selectProduct}/>
                            ))}
                        </ul>
                    </div>
                </div>
            );
        }else {
            return null
        }
    }
    
    return(
        <div className={props.loading === true ? 'loading' : ''}>
            <DeleteModal 
                deleteProduct={deleteProduct}
                modalActive={modalActive}
                setActive={setModalActive}
            />
            <ProjectsContent />
        </div>  
    )
}

export default ProductContainer;