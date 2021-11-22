import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Aliases from '../Aliases/Aliases';
import TvSeries from '../TvSeries/TvSeries';
import banner from '../../resources/images/banner.jpg';
import classes from './Home.module.css';
import loadingIcon from '../../resources/images/loading_icon.gif'

const Home = () => {
    const [ data, setData ] = useState('')
    const [ dataLoaded, setDataLoaded ] = useState(false)
    const [ hasError, setHasError ] = useState(false)

    useEffect(() => {
        setDataLoaded(false)
        axios.get('https://anapioficeandfire.com/api/characters/583')
        .then(response => {
            setData(response.data)
            setDataLoaded(true)
        })
        .catch(response => {
            setHasError(true)
            setDataLoaded(true)
        })
    }, [])

    return dataLoaded && !hasError ? (
        <>
            <img src={banner} className={classes.banner} alt="banner" />
            <div className={classes.detailsPage} alt="banner">
                <div><b>Name:</b> {data.name}</div>
                <div><b>Gender:</b> {data.gender}</div>
                <div><b>Culture:</b> {data.culture}</div>
                <div><b>Born:</b> {data.born}</div>
                <div><b>Titles:</b> {data.titles}</div>
                <Aliases
                    aliases={data.aliases}
                />
                <Link to="/books">Books</Link>
                <Link to="/allegiances">Allegiances</Link>
                <TvSeries
                    tvSeries={data.tvSeries}
                />
            </div>
        </>
    ) : hasError ? <div className={classes.errorMsg}>Oops! Something went wrong.</div>:
    <img className={classes.loadingIcon} src={loadingIcon} alt="loading-icon" />
}

export default Home