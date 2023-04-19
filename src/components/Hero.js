import React from 'react';
import ButtonWithIcon from './btn/ButtonWithIcon';
import Button from './btn/Button';

export default function hero() {
    return (
        <div className='w-[60%] mr-auto ml-auto'>
            <h1 className='mr-auto ml-auto font-bold text-[3rem]'>Free template for creating your website with <span className='text-indigo-400'>Astro 2.0</span> + Tailwind CSS</h1>
            <p className='mr-auto ml-auto font-semi-bold'> <span>AstroWind</span> is a free, customizable and production-ready template for Astro 2.0 + Tailwind CSS. Suitable for Startup, Small Business, Professional Portfollio, Marketing Website, Landing Page & Blogs.  </p>
            <div className='w-[80%] flex justify-center mr-auto ml-auto gap-[2rem] mt-[1rem]'>
                <Button className='flex bg-indigo-400 text-white text-2xl rounded-full border-[#ccc] border-[1px] px-3 py-1'/>
                <ButtonWithIcon title="get template" bgColor="bg-blue-700"/>
            </div>
            <img src="img/1.png" alt="" />
        </div>
    )
}
