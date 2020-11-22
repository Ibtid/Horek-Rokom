import React from 'react'
import "./Button.css"

const Buttons = (props) => {
    return (
        <div className="button">
            <div className={props.type}>
                {props.icon}
                {props.message}
            </div>
        </div>
    )
}

export default Buttons
