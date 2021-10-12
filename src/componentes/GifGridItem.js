import React from 'react'

export const GifGridItem = ({id,title='(Sin Titulo)',url}) => {
    //console.log(id);

        if (title.length===0) {
            title="(Sin Titulo)";
        }

    return (
        <div className="card animate__animated animate__bounce animate__delay-2s">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
