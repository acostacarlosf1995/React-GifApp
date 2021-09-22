import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { images, loading } = useFetchGifs( category );

    console.log(images)
    console.log(loading)

    return (
        <>
            <h3 className="animate__animated animate__fadeIn animate__delay-1s" >{ category }</h3>

            {/* Si loading es igual a "true" has esto <p>Loading</p>, con el operador && nos 
            encargamos de que si no es true, simplemente no haga nada */}

            {/* { loading && <p className="animate__animated animate__flash">Loading...</p> } */}

            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id} 
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
