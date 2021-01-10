import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import DeleteModal from '../Modals/DeleteModal';
import ProductDataService from '../../Services/ProductService';
import SectionError from '../Error/SectionError';
function ProductContainer(){
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [productId, setProductId] = useState(null);
    const [modalActive, setModalActive] = useState(false);
    const [deleteError, setDeleteError] = useState(null);
    const [deleteStatus, setDeleteStatus ] = useState('idle');
    
    useEffect(() =>{
        fetchProducts();
    }, []);   
    const fetchProducts = () => {
        ProductDataService.getAll()
        .then((res) => {
            setData(res.data.products);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setError('Something went wrong whilst fetching products');
            setLoading(false);
        });
    }

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
        if(loading === false && error === ''){
            return (
                <div>
                    <div>
                        <h2 className="products-header">Products</h2>
                        <SectionError error={deleteError} status={deleteStatus} reset={setDeleteError}/>
                        <ul>
                            {error !== '' ? <p>Something went wrong whilst fetching products.</p> : ''}
                            {data.map((item, key) => (
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
        <div className={loading === true ? 'loading' : ''}>
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