import React from 'react'

export default function Carte1({titre, texte, image}) {
    return (
    <div className='{`${titre} ${texte} ${image}`} my-8 mx-2'>
        <div>
            <img src="img/{{image}}" alt="" />
        </div>
        <div>
            <p className='font-bold text-2xl'>{titre}</p>
            <p>{texte}</p>
        </div>
    </div>
    )
}
