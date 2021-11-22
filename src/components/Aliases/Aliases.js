import React, { useState } from 'react';
import classes from './Aliases.module.css'

const Aliases = (props) => {
    const [ active, setActive ] = useState(false)

    const aliasesList = props.aliases && props.aliases.length && props.aliases.map((ele, i) => {
        return (
            <li key={`${ele}-${i}`}>{ele}</li>
        )
    })

    return (
        <>
            <div className={`${classes.aliases} ${active ? `${classes.active}` : ''}`} onClick={() => setActive(!active)}><b>Aliases</b></div>
            <ul className={classes.aliasesList}>
                {aliasesList}
            </ul>
        </>
    )
}

export default Aliases;