import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        images: [],
        loading: true
    })

    useEffect(() => {

        // El .then se utiliza porque obviamente getGifs retorna una promesa

        getGifs( category )
            .then( imgs => {

                setState({
                    images: imgs,
                    loading: false
                });
                
            })

        // El useEffect se va a volver a llamar cada vez que category cambie
    }, [category])

    return state;

}