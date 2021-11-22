import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Characters from '../Characters/Characters';
import classes from './Books.module.css';
import loadingIcon from '../../resources/images/loading_icon.gif'

const Books = () => {
    const [ data, setData ] = useState('')
    const [ dataLoading, setisDataLoading ] = useState(false)
    const [ hasError, setHasError ] = useState(false)

    useEffect(() => {
        axios.get('https://anapioficeandfire.com/api/books/5')  
        .then((response) => {
            setData(response.data)
            setisDataLoading(true)
        })
        .catch(response => {
            setHasError(true)
            setisDataLoading(true)
        })
    }, [])

    const authors = data.authors && data.authors.length && data.authors.map((ele, i) => ele)
    
    return dataLoading && !hasError ? (
        <div className={classes.bookDetails}>
            <h3>Book Details</h3>
            <div><b>Name:</b> {data.name}</div>
            <div><b>Authors:</b> {authors}</div>
            <div><b>Number Of Pages:</b> {data.numberOfPages}</div>
            <div><b>Publisher:</b> {data.publisher}</div>
            <div><b>Country:</b> {data.country}</div>
            <Characters 
                characterLength={data.characters && data.characters.length}
            />
        </div>
    ): hasError ? <div className={classes.errorMsg}>Oops! Something went wrong.</div>:
    <img className={classes.loadingIcon} src={loadingIcon} alt="loading-icon" />
}

export default Books