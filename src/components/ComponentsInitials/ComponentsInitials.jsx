import React, { Component } from 'react'

import "./ComponentsInitialsStyles.css"

export function ComponentsInitials({ heading, text }) {
    return (
        <div className="ciContainer">
            <div className="heading">
                <h1>{heading}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}