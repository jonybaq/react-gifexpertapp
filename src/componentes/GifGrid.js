import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {
    const [images, setImages] = useState([])
    useEffect(() => {
        const getGifs=async()=>{
            const api_key="3oqN5d8hX8sWktmbdSEOr7xDcT83uTRP";
            const url="http://api.giphy.com/v1/gifs/search?api_key="+api_key+"&q="+categoria+"&limit=10";
            const res=await fetch(url);
            const {data}= await res.json();
            //console.log(data);
            const gifs=data.map(img=>{
                return {
                    id: img.id,
                    title:img.title,
                    url:img.images?.downsized_medium.url
                }
            });
            //console.log(gifs);
            setImages(gifs);
        }
        getGifs();
    },[categoria]);
    
    return (
        <>
        <h3>{categoria}</h3>
        <div className="card-grid"> 
            {
                images.map((image)=>
                    <GifGridItem key={image.id}{...image}/>   
                )
            }
            
        </div>
        </>
    )
}
