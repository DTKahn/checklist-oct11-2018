import React from 'react';

const Checklist = props => {

    if(props.checklistItems){
        return (
            <ul>
                {props.checklistItems.map( item => {
                    return (
                        <li>{item.checklistItem} is {item.done ? `done` : `not done`}</li>   
                    )    
                })}
            </ul>
        )
    }
    else {
        return null;
    }
}

export default Checklist;