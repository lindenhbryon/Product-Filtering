import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import DeleteModal from '../Modals/DeleteModal';
function ProductContainer(){
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [productId, setProductId] = useState(null);
    const [modalActive, setModalActive] = useState(false);
    
    useEffect(() =>{
        fetch('http://localhost:8080/api/get-products')
        .then((res) => res.json())
        .then((res) => {
            setData(res.products);
            setLoading(true);
        })
        .catch((err) => {
            setError(err.message);
        });
    }, []);   

    const deleteProduct = (e) => {
        console.log(productId);
        fetch('http://localhost:8080/api/delete-product/'+productId)
        .then((res) => res.json())
        .then((res) => {
            
        })
        .catch((err) => {
            console.log("err");
        });
    };
    const selectProduct = (e) => {
        const id = e.target.dataset.id;
        setProductId(id);
        setModalActive(true);
    };


    const ProjectsContent = () => {
        if(data.length > 0){
            return (
                <div>
                    <DeleteModal 
                        deleteProduct={deleteProduct}
                        modalActive={modalActive}
                        setActive={setModalActive}
                    />
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
        }else { return false }
    }
    
    return(
        <div className={loading === false ? 'loading' : ''}>
            <ProjectsContent />
        </div>  
    )
}

export default ProductContainer;