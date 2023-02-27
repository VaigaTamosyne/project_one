import { useState, useEffect } from 'react';
import { getSearchResult } from '../../services/shopService';
import Product from '../singleProduct/Product';


const Search = () => {
    const [searchValue, setsearchValue] = useState('');
    const [searchFeedback, setsearchFeedback] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchValue);
        setsearchValue(e.target.value)
    }

    const getProductsFromApi = (searchInput) => {
        getSearchResult(searchInput).then((response) => {
            setsearchFeedback([...response.products])
        })

    }

    useEffect(() => {
        getProductsFromApi(searchValue);
    }, [searchValue])
    console.log(searchFeedback);

    return (
        <div className='container'>
            <h4 className='text-secondary'>Search</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        className='form-control'
                        type="text"
                        placeholder='enter product name'
                        name='searchValue'
                        value={searchValue}
                        onChange={(e) => setsearchValue(e.target.value)}
                    />
                </div>
            </form>

           <Product searchFeedback={searchFeedback}/>

           

        </div>
    )
}

export default Search
