import { useState, useEffect } from 'react';
const Searchbar = (props) => {
    const [search, updateSearch] = useState('');
    useEffect(() => {
        console.log("search", search);
      });
    function handleSubmit(){
        
    }
    return(
        <>
            <form id="search-product-form" onSubmit={event => handleSubmit(event.target)}>
                <label>Search</label>
                <input type="text" onChange={event => updateSearch(event.target.value)} name="search" required/> 
            </form>
        </>
    )
}

export default Searchbar