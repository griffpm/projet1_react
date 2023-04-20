import React from 'react'

export default function Carte4() {
    return (
        <div className='{`${titre} ${texte} ${image}`} my-8 mx-2 w-[300px]'>
            <img src="img/{{image}}" alt="" />
            <p className='font-bold text-2xl'>{titre}</p>
            <p>{texte}</p>
    </div>
    )
}
