import React from 'react'

export default function Carte3({titre, texte, image}) {
    return (
    <div className=' my-2 mx-2 w-[300px] shadow-lg bg-white'>
        <div className='flex items-center space-x-3 '>
            <img src={image} alt="" className='w-[40px]'/> 
            <p className='font-bold text-2xl'>{titre}</p>
        </div>
        <div className='px-2 py-2'>
            <p>{texte}</p>
        </div>
    </div>
    )
}
