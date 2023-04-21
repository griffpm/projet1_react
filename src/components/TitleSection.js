import React from 'react'

export default function TitleSection({title, subtitle, description}) {
    return (
    <div className='{`${title} ${subtitle} ${description}`} my-24'>
        <p className='uppercase text-blue-500 text-sm flex justify-center'>{title}</p>
        <p className='font-bold text-3xl pb-2 flex justify-center'>{subtitle}</p>
        <p className='font-light flex justify-center'>{description}</p>
    </div>
    )
}
