import FormError from '../Error/FormError';
import axios from 'axios';
import { useEffect } from 'react';
import useInput from '../Helper/useInput';
import useAsync from '../Helper/useAsync';
function AddProduct() {
    const {value: productName, bind: bindProductName, reset: resetProductName} = useInput('');
    const {value: productDesc, bind: bindProductDesc, reset: resetProductDesc} = useInput('');
    const {value: productPrice, bind: bindProductPrice, reset: resetProductPrice} = useInput('');
    
    const fetchProducts = () => {
        return axios
        .post('http://localhost:8080/api/create-product', {
            productName: productName,
            productDesc: productDesc,
            productPrice: productPrice
        });
    }
    const { execute, status, error } = useAsync(fetchProducts, false);    

    const handleSubmit = (e) => {
        e.preventDefault();
        execute();
    }
    useEffect(() => {
        if(status === 'success'){
            resetProductName();
            resetProductDesc();
            resetProductPrice();
        }
    },  [
            resetProductName,
            resetProductDesc,
            resetProductPrice,
            status
        ]
    );
    
      return(
        <div className="center-container">
            <h2>Add Product</h2>
            <FormError error={error}/>
            <form id="create-post-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username-label" className="form-label">Product Name</label>
                    <input 
                        type="text"
                        className="form-control"
                        name="productName"
                        id="productName"
                        aria-describedby="product name"
                        required
                        {...bindProductName}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password-field" className="form-label">Product Description</label>
                    <textarea
                        type="text"
                        className="form-control"
                        name="productDesc"
                        id="productDesc"
                        rows="8"
                        cols="50"
                        required
                        {...bindProductDesc}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="password-field" className="form-label">Product Price</label>
                    <input 
                        type="price"
                        className="form-control"
                        name="productPrice"
                        id="price"
                        required
                        {...bindProductPrice}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    {status === 'pending' ? 'Adding Product..' : 'Add Product'}
                </button>
            </form>
        </div>
      )
  }

  export default AddProduct;