import React from 'react';
import classes from './CharacterList.module.css';

const List = (props) => {
    
    const list = props.list && props.list.length && props.list.map((ele, i) => {
        return (
            <tr key={`${i}-${Math.random()}`}>
                <td>{ele.name||"Anonymous"}</td>
                <td>{ele.culture||"Culture"}</td>
                <td>{ele.gender}</td>
            </tr>
        )
    })

    return (
        <table className={classes.list}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Culture</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {list}
            </tbody>
        </table>
    )
}

export default List;