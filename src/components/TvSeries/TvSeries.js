import React from 'react';
import SeasonImages from '../Seasons/Season';
import classes from './TvSeries.module.css';

const TvSeries = (props) => {
    const tvSeries = props.tvSeries && props.tvSeries.length && props.tvSeries.map((ele, i) => {
        return (
            <div className="col-md-2" key={`${ele}-${i}`}>
                <img className="mt-2" src={SeasonImages[i]} alt="seasons" />
            </div>
        )
    })
    return (
        <>
            <div className="mt-4 d-flex align-items-center">
                <button className={classes.seasonsButton}></button>
                <span className={classes.seasonText}>Seasons</span>
            </div>
            <div className="container-fluid mt-4">
                <div className={`row ${classes.tvSeries}`}>
                    {tvSeries}
                </div>
            </div>
        </>
    )
}

export default TvSeries;