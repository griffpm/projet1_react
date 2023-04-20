import React from 'react'
import { VscPassFilled } from "react-icons/vsc";

export default function Carte2({titre, texte}) {
    return (
    <div className='{`${titre} ${texte}`} my-8 mx-2 flex display-center my-4 py-2'>
        <div>
        <VscPassFilled className='align-start' />
        </div>
        <div>
            <p className='font-bold text-2xl'>{titre}</p>
            <p>{texte}</p>
        </div>
    </div>
    )
}
