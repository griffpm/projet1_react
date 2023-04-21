import React from 'react'

export default function Carte4({titre, texte, image}) {
    return (
        <div className='my-8 mx-2 w-[300px]'>
            {image}
            <p className='font-bold text-2xl'>{titre}</p>
            <p>{texte}</p>
    </div>
    )
}
