import SectionError from '../Error/SectionError';
import { useEffect, useState } from 'react';
import useInput from '../Helper/useInput';
import ProductDataService from '../../Services/ProductService';
function AddProduct() {
    const {value: productName, bind: bindProductName, reset: resetProductName} = useInput('');
    const {value: productDesc, bind: bindProductDesc, reset: resetProductDesc} = useInput('');
    const {value: productPrice, bind: bindProductPrice, reset: resetProductPrice} = useInput('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('idle');
    const [ createSuccess, setCreateSuccess ] = useState(false);
    
    
    const createProduct = () => {
        setStatus('pending');
        ProductDataService.create({
            productName: productName,
            productDesc: productDesc,
            productPrice: productPrice
        }).then((res) => {
            setError(res.data.message);
            setCreateSuccess('success');
            setStatus('finished');
        }).catch((err) => {
            setCreateSuccess('error');
            setStatus('idle');
            if(typeof err.data === 'undefined'){
                setError('Something went wrong whilst attemping to add the product.');
            }else {
                setError(err.data.message);
            }
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct();
    }
    useEffect(() => {
        if(status === 'finished'){
            resetProductName();
            resetProductDesc();
            resetProductPrice();
            setStatus('idle');
        }
    },  [
            resetProductName,
            resetProductDesc,
            resetProductPrice,
            setStatus,
            status
        ]
    );
    
      return(
        <div className="center-container">
            <h2>Add Product</h2>
            <SectionError error={error} status={createSuccess}/>
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