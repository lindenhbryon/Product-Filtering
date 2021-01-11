import { useState } from 'react';
const Searchbar = (props) => {
    const { fetchProducts } = props;
    const [search, updateSearch] = useState('');
    const [recentSearches, setRecentSearches] = useState([]);
    const updateRecentSearches = (value) =>{
        if(recentSearches.length > 4){
            setRecentSearches([...recentSearches.slice(1, recentSearches.length), value]);    
        }else {
            setRecentSearches([...recentSearches, value]);
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        updateRecentSearches(search);
        fetchProducts(search);
    }
    const selectRecentSearch = (e) => {
        const value = e.target.innerHTML;
        updateSearch(value);
        updateRecentSearches(value);
        fetchProducts(value);
    }
    const RecentSearches = () => {
        
        return(
            <div className="recent-searches">
                <div className="recent-search-header">
                    <span>Recent Searches..</span>
                </div>
                <ol className="breadcrumb">
                    {recentSearches.map((item, key) => (
                        <li 
                            className="breadcrumb-item"
                            key={key}
                            onClick={(e) => selectRecentSearch(e)}
                        >
                            {item}
                        </li>
                    ))}    
                </ol>
            </div>
            )
    }
    return(
        <>
            <form className="input-group mb-3" id="search-product-form" onSubmit={e => handleSubmit(e)}>
                <input type="text" placeholder="Search for a product.." value={search} className="form-control" onChange={e => updateSearch(e.target.value)} name="search"/> 
                <button className="input-group-text" style={{cursor: "pointer"}} id="basic-addon2">Search</button>
            </form>
            {recentSearches.length > 0 ? <RecentSearches /> : ''}
        </>
    )
}

export default Searchbar