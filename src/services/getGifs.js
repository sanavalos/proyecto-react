import React from "react";

const apiKEY = '5PccOCzRCAIR3r9ubJhpAi5gs0ayP0NA'


const getGifs = ({palabraClave = 'karate'} = {}) => { 
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKEY}&q=${palabraClave}&limit=10&offset=0&rating=g&lang=en` 

    return fetch(apiURL)
            .then(r => r.json())
            .then(resp => {
            const {data = []} = resp
            const gifs = data.map(gif => {
                
                const {images, title, id} = gif
                const {url} = images.fixed_height
                
                return {title, id, url}
                
            }
            )
            return gifs
})
}

export default getGifs