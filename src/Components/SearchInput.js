import React from 'react'

export default function SearchInput({setKeywords, placeholder}) {

    const handleChange = (input) => {
        setKeywords(input)
    }

    return (
            <input type='text'
                className='search-input'
                placeholder={placeholder}
                required=''
                autoFocus=''
                onChange={ e => handleChange(e.target.value)}
            />
    )
}