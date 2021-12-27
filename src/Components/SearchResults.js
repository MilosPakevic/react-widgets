import React, { useEffect } from 'react'
import SearchResultItem from './SearchResultItem'

export default function SearchResults({ results }) {

    if (results) {
        if (results.length > 0) {
            return (
                <div className='search-results'>
                    {results.map((result, ixr) => {
                        return (
                            <SearchResultItem key={ixr} result={result} />
                        )
                    })}
                </div>
            )
        }
        else return (
            <div className='search-results'>
                <div className='empty-item'>no results...</div>
            </div>
        )
    }
    else return (
        null
    )
}
