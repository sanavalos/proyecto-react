import React, {useState, useEffect} from "react";
import Cards from "./Cards";
import getGifs from "../services/getGifs";

export default function ListOfCards({ palabraClave }){
    
    const [gif, setGif] = useState([]);
    
    useEffect(function(){
        getGifs({ palabraClave }).then(gifs => setGif(gifs))
    },[palabraClave])

    return gif.map(({title, id, url}) => <Cards title={title} id={id} url={url} /> )

}