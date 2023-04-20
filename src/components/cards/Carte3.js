import React from 'react'

export default function Carte3({titre, texte, image}) {
    return (
    <div className='{`${titre} ${texte} ${image}`} my-8 mx-2'>
        <div className='flex'>
            <img src="img/{{image}}" alt="" />
            <p className='font-bold text-2xl'>{titre}</p>
        </div>
        <div>
            <p>{texte}</p>
        </div>
    </div>
    )
}
