import React from 'react'

export default function CarteStat({nombre, mot}) {
    return (
    <div className=' my-8 mx-2 w-[300px]'>
        <p className='align-center text-3xl text-blue-700'>{nombre}</p>
        <p className='uppercase'>{mot}</p>
    </div>
    )
}
