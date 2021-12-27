import React, { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/client';
import { SEARCH_ALL_SOLR } from '../DataStore/Queries'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'
import SearchButton from './SearchButton';

export default function SearchWidget({ placeholder }) {
    const [keywords, setKeywords] = useState('')
    const [loadSearch, { called, loading, data }] = useLazyQuery(SEARCH_ALL_SOLR, { variables: { keywords: keywords } });

    // Trigger search on keyword change
    useEffect(() => {
        if (keywords) {
            loadSearch()
        }
    }, [keywords])

    return (
        <div className='site-search-widget'>
            <div className='site-search-box'>
                <div className='search-input-box'>
                <SearchInput setKeywords={setKeywords} placeholder={placeholder} />
                <SearchResults results={(keywords && data) ? data.search : null} />
                </div>
                    <SearchButton />
            </div>            
        </div>
    )
}