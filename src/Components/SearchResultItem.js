import React from 'react'

export default function SearchResultItem({ result }) {
        return (
            <div data-id={result.id} data-type={result.itemTypeName} className='search-result-item'>
                <span className='item-name'>{result.name} {result.suffix}</span><span className='item-type'>{result.type}</span>
            </div>
        )
}
