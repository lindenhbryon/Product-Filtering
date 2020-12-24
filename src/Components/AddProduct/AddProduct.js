import { Component, createElement } from 'react';
import axios from 'axios';

class AddProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            productName: '',
            productDesc: '',
            productPrice: ''
        };
    }
    createProduct = (data, cb) => {
        axios
      .post('http://localhost:8080/api/create-product', data)
      .then((res) => cb(res))
      .catch(err => {
        console.error(err);
      });
    }
    componentWillUnmount = () =>{
        window.removeEventListener('click', this.handleChange);
        window.removeEventListener('submit', this.handleSubmit);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
        this.createProduct(this.state, (res) => {
            console.log(res);
        });
    }
    handleChange = (e) => {
        let target = e.target;
        let name = target.name;
        this.setState({
            [name]: target.value
        });
    }
    render() {
      return(
        <>  
            <div className="center-container">
                <h2>Add Product</h2>
                <form id="login-form" onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username-label" className="form-label">Product Name</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="productName"
                            id="productName"
                            aria-describedby="product name"
                            required
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password-field" className="form-label">Product Description</label>
                        <input 
                            type="password"
                            className="form-control"
                            name="productDesc"
                            id="productDesc"
                            required
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password-field" className="form-label">Product Price</label>
                        <input 
                            type="price"
                            className="form-control"
                            name="productPrice"
                            id="price"
                            required
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Product</button>
                </form>
            </div>
        </>
      )
    }
  }

  export default AddProduct;