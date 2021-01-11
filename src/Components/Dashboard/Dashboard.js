import Searchbar from '../Searchbar/Searchbar';
import ProductContainer from '../Product/ProductContainer';
import ProductDataService from '../../Services/ProductService';
import { useState, useEffect } from 'react';


function Dashboard(){
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        fetchProducts();
    }, []); 
    const fetchProducts = (query = "") => {
        ProductDataService.getAll(query)
        .then((res) => {
            setData(res.data.products);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setError('Something went wrong whilst fetching products');
            setLoading(false);
        });
    }
  
    
      return(
          <div>
                <h2 className="products-header">Products</h2>
                <div className="center-container">
                    <Searchbar fetchProducts={fetchProducts}/>
                </div>
                <div className="container">
                    <ProductContainer 
                        fetchProducts={fetchProducts}
                        error={error}
                        loading={loading}
                        data={data}
                    />
                </div>
          </div>
      )
  }

  export default Dashboard;