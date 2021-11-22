import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.Header}>
            <h1>Ice And Fire</h1>
            <p>All the data from the universe of Ice And Fire you've ever wanted!</p>
        </div>
    )
}

export default Header