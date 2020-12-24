import { Component } from 'react';
import axios from 'axios';
import FormError from '../Error/FormError';
class AddProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            productName: '',
            productDesc: '',
            productPrice: '',
            errors: [],
            productAdded: false
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
        this.createProduct({
            productName: this.state.productName,
            productDesc: this.state.productDesc,
            productPrice: this.state.productPrice
        }, (res) => {
            console.log(res);
            this.setState({errors: [res.data.message], productAdded:res.data.success});
            document.getElementById('create-post-form').reset();
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
                <FormError errors={this.state.errors} productAdded={this.state.productAdded}/>
                <form id="create-post-form" onSubmit={this.handleSubmit}>
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
                            type="text"
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