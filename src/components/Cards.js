import React from "react";

export default function Cards ({title, id, url}){
    return (<div>
               <h4>{title}</h4>
               <img alt={id} src={url}></img>
              </div>)
}