import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import DeleteModal from '../Modals/DeleteModal';
import ProductDataService from '../../Services/ProductService';
function ProductContainer(){
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [productId, setProductId] = useState(null);
    const [modalActive, setModalActive] = useState(false);
    
    useEffect(() =>{
        fetchProducts();
    }, []);   
    const fetchProducts = () => {
        ProductDataService.getAll()
        .then((res) => {
            setData(res.data.products);
            setLoading(false);
        }).catch((err) => {
            setError('Something went wrong whilst fetching products');
            setLoading(false);
        })
    }

    const deleteProduct = (e) => {
        ProductDataService.remove(productId)
        .then((res) => {
            setModalActive(false);
            fetchProducts();
        }).catch((err) => {
            console.log(err);
            
        });
    };

    const selectProduct = (e) => {
        const id = e.target.dataset.id;
        setProductId(id);
        setModalActive(true);
    };
    
    const ProjectsContent = () => {
        if(loading === false && error !== ''){
            return (
                <div>
                    <div>
                        <h2 className="products-header">Products</h2>
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