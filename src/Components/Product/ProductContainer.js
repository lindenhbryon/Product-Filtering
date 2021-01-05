import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
function ProductContainer(){
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    
    useEffect(() =>{
        fetch('http://localhost:8080/api/get-products')
        .then((res) => res.json())
        .then((res) => setData(res.products))
        .catch((err) => {
            setError(err.message);
        });
    }, []);   
    
    return(
        <div>
            <h2 style={{textAlign: 'center'}}>Products</h2>
            <ul>
                {error !== '' ? <p>error</p> : ''}
                {data.map((item, key) => (
                    <ProductItem key={key} products={item} />
                ))}
            </ul>
        </div>  
    )
}

export default ProductContainer;