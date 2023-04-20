import React from 'react'

export default function CarteFin() {
    return (
        <div className='w-[60%] mr-auto ml-auto'>
            <h3 className='mr-auto ml-auto font-bold text-[3rem] text-center'>Astro +Tailwind CSS</h3>
            <p className='mr-auto ml-auto font-semi-bold text-center'>Screw the pooch nail it down. On this journey. Personal development disband the squad but rehydrate as needed, so blue sky.</p>
            <div className='w-[80%] flex justify-center mr-auto ml-auto gap-[2rem] mt-[1rem]'>
                <ButtonWithIcon title="get template" bgColor="bg-blue-700"/>
            </div>
        </div>
    )
};
