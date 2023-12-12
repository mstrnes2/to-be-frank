import React, { useEffect, useState } from 'react';


export default function Results(props) {
    return(
        <div>
            <h2>{props.username}</h2>
            <figure>
            <a href={props.link}>
            <img src={props.image} alt={props.restaurant} className="resultImage"/>
            </a>
            </figure>
        </div>
    )
}