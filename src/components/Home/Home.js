import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Aliases from '../Aliases/Aliases';
import TvSeries from '../TvSeries/TvSeries';
import banner from '../../resources/images/banner.jpg';
import classes from './Home.module.css';
import loadingIcon from '../../resources/images/loading_icon.gif';
import API_URL from '../../Services/ApiUrl';
import { fetchHomepageData } from '../../store/actions';

const Home = () => {
    debugger
    // const [ data, setData ] = useState('')
    // const [ dataLoaded, setDataLoaded ] = useState(false)
    // const [ hasError, setHasError ] = useState(false)
    const dispatch = useDispatch()
    const data = useSelector(state => state.ui.homePageData)
    const dataLoaded = useSelector(state => state.ui.dataLoaded)
    const hasError = useSelector(state => state.ui.hasError)

    // useEffect(() => {
    //     setDataLoaded(false)
    //     axios.get(`${API_URL}/characters/583`)
    //     .then(response => {
    //         setData(response.data)
    //         setDataLoaded(true)
    //     })
    //     .catch(response => {
    //         setHasError(true)
    //         setDataLoaded(true)
    //     })
    // }, [])

    useEffect(() => {
        dispatch(fetchHomepageData())
    }, [dispatch])


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