import React from 'react'
import SearchFormReset from './SearchFormReset'
import { Search } from 'lucide-react'

const SearchForm = ({ query } : { query?: string }) => {

    //We put a client side compomnent in the server component so lets put it in a diffrent fill 

    return (
        <form
            action="/"
            scroll={false}
            className='search-form'
        >
            <input
                name="query"
                defaultValue={query}
                className='search-input'
                placeholder='Search startups....'
            />

            <div className='flex gap-2'>
                {
                    query && (
                        <SearchFormReset />
                    )
                }
                    <button type="submit" className='text-white search-btn'>
                        <Search className='size-5'/>
                    </button>
            </div>
        </form>
    )
}

export default SearchForm