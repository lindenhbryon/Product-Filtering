import { useState } from 'react';
const Searchbar = (props) => {
    const [search, updateSearch] = useState('');
    function handleSubmit(e){
        e.preventDefault();
        console.log(search);
    }
    return(
        <>
            <form id="search-product-form" onSubmit={e => handleSubmit(e)}>
                <label>Search</label>
                <input type="text" onChange={e => updateSearch(e.target.value)} name="search" required/> 
            </form>
        </>
    )
}

export default Searchbar