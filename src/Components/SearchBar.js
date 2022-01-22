import './SearchBar.css'

import { GoSearch } from 'react-icons/go'
import { AiOutlineClose } from 'react-icons/ai'

import { IconContext } from 'react-icons'
import { useEffect, useState } from 'react'

function SearchBar({ data }) {

    const [inputSearch, setInputSearch] = useState("")
    const [filterSearch, setFilterSearch] = useState([])

    const handleFilter = (event) => {
        setInputSearch(event.target.value)

        const newFilter = data.filter(value => {
            return value.title.toLowerCase().includes(inputSearch.toLowerCase())
        })

        setFilterSearch(newFilter)

    }

    useEffect(() => {

        if (inputSearch === "") {
            setFilterSearch([])
        }

    }, [inputSearch])

    function handleClickAutoComplete(value) {
        setInputSearch(value.title)
        setFilterSearch([])
    }

    function clearText() {
        setInputSearch("")
        setFilterSearch([])
    }

    return (
        <div className='search' >

            <div className='searchInputs' >
                <IconContext.Provider value={{ color: "#B8B8B8", size: "30px"}}>
                    <GoSearch />

                    <input type="text" placeholder='Pesquisar...' value={inputSearch} onChange={handleFilter} />

                    {inputSearch !== "" ? <AiOutlineClose onClick={clearText} /> : ""}
                </IconContext.Provider>
            </div>

            {filterSearch.length !== 0 &&
                <div className='dataResult'>
                    {filterSearch.slice(0, 15).map(value => (
                        <div key={value.id} className='dataItem' onClick={() => handleClickAutoComplete(value)}>
                            <IconContext.Provider value={{ color: "#B8B8B8", size: "22px" }}>
                                <GoSearch />
                            </IconContext.Provider>
                            <p>{value.title}</p>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default SearchBar