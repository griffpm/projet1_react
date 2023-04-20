import React from 'react';
import { HiArrowDownRight } from "react-icons/hi2";

export default function Carte5() {
    return (
    <div className='{`${titre} ${texte}`} my-8 mx-2'>
        <div>
            <HiArrowDownRight />
            <p className='font-bold text-2xl'>{titre}</p>
        </div>
        <div>
            <p>{texte}</p>
        </div>
    </div>
    )
}
