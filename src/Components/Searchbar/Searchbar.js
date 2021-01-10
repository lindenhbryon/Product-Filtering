import { useState } from 'react';
const Searchbar = (props) => {
    const { fetchProducts } = props;
    const [search, updateSearch] = useState('');
    function handleSubmit(e){
        e.preventDefault();
        fetchProducts(search);
    }
    return(
        <>
            <form className="input-group mb-3" id="search-product-form" onSubmit={e => handleSubmit(e)}>
                <input type="text" placeholder="Search for a product.." className="form-control" onChange={e => updateSearch(e.target.value)} name="search" required/> 
                <button className="input-group-text" style={{cursor: "pointer"}} id="basic-addon2">Search</button>
            </form>
        </>
    )
}

export default Searchbar