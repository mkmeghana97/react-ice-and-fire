import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './Allegiances.module.css';
import loadingIcon from '../../resources/images/loading_icon.gif'

const Allegiances = () => {
    const [data, setData] = useState('')
    // const [founder, setFounder] = useState('')
    const [ dataLoading, setisDataLoading ] = useState(false)
    const [ hasError, setHasError ] = useState(false)

    useEffect(() => {
        axios.get('https://anapioficeandfire.com/api/houses/')
        .then((response) => {
            setData(response.data)
            setisDataLoading(true)
        })
        .catch(response => {
            setHasError(true)
        })
    }, [])
    
    const bookList = data && data.length && data.map((ele, i) => {
        return (
            <>
                <tr key={`${i}-${Math.random()}`}>
                    <td>{ele.name||"Anonymous"}</td>
                    <td>{ele.region||"Region"}</td>
                    <td>{ele.coatOfArms||"Coat of arms"}</td>
                </tr>
            </>
        )
    })

    return dataLoading && !hasError ? (
        <div className={classes.allegiancesBlock}>
            <table className={classes.list}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Region</th>
                        <th>Coat Of Arms</th>
                    </tr>
                </thead>
                <tbody>
                    {bookList}
                </tbody>
            </table>
        </div>
    ): hasError ? <div className={classes.errorMsg}>Oops! Something went wrong.</div>:
    <img className={classes.loadingIcon} src={loadingIcon} alt="loading-icon" />
}

export default Allegiances