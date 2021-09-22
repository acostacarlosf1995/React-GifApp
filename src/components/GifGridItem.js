import React, { useEffect } from 'react'

export const GifGridItem = ({ title, image }) => {

    const titleCut = title.split(' ').slice(0,2).join(' ');

    return (
        <div className="card animate__animated animate__fadeIn animate__delay-1s" >
            <img src={ image } alt={ title } />
            <p>{ titleCut }</p>
        </div>
    )
}
