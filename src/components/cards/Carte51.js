import React from 'react';
import { HiArrowDownRight } from "react-icons/hi2";

export default function Carte51({titre, texte, image}) {
    return (
    <div className=' my-8 mx-2'>
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
