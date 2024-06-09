import React, { Component } from 'react'

import "./ComponentsInitialsStyles.css"

function ComponentsInitials({ heading, text }) {
    return (
        <div className="ciContainer">
            <div className="heading">
                <h1>{heading}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ComponentsInitials;