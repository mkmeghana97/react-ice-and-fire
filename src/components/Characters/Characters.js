import React, { useEffect, useState } from 'react';
import Pagination from "react-js-pagination";
import axios from 'axios';
import List from './CharacterList/CharacterList';
import classes from './Characters.module.css';
import loadingIcon from '../../resources/images/loading_icon.gif'

const Characters = (props) => {
    const [ data, setData ] = useState('')
    const [ pageno, setPageno ] = useState(1)
    const [ dataLoading, setisDataLoading ] = useState(false)
    const [ activePage, setActivePage ] = useState(1)
    const [ hasError, setHasError ] = useState(false)

    useEffect(() => {
        getCharactersList()
    }, [])

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber)
        setPageno(pageNumber)
        getCharactersList()
    }

    const getCharactersList = () => {
        axios.get(`https://www.anapioficeandfire.com/api/characters?page=${pageno}&pageSize=10`)
        .then(response => {
            setData(response.data)
            setisDataLoading(true)
        })
        .catch(response => {
            setHasError(true)
            setisDataLoading(true)
        })
    }

    return dataLoading && !hasError ? (
        <>
            <List
                list = {data}
            />
            <Pagination
                activePage={activePage}
                itemsCountPerPage={10} 
                totalItemsCount={props.characterLength || 0}
                pageRangeDisplayed={10}
                onChange={handlePageChange}
            />
        </> 
    ) : hasError ? <div className={classes.errorMsg}>Oops! Something went wrong.</div>:
    <img className={classes.loadingIcon} src={loadingIcon} alt="loading-icon" />
}

export default Characters