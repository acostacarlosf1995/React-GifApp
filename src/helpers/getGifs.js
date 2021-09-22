// helpers son funciones que se encargan simplemente de realizar un return

export const getGifs = async( category ) => {

    //encodeURI funciona para enviar la peticion correctamente remplazando los espacios vacios u otras cosas

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=20&api_key=lqIiVjqEVduKby433b4DZR9QnlJse2Cm`
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            image: img.images?.downsized_medium.url
        }
    })

    return gifs;
}