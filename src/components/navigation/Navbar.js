import React from 'react';
import { HiSun, HiOutlineRss } from "react-icons/hi";
import Button from '../btn/Button';
// import logo from "../../../public/img/fusee.png";


export default function Navbar() {
    return (
    <nav className='flex justify-between pt-5 ml-2 mr-2'>
        <div className='flex'>
        <img src='img/fusee.png' alt="" className='w-[30px]' />
        <p className='font-black text-xl'>AstroWind</p>
        </div>
        <ul className='flex space-x-5'>
            <li>Landing</li>
            <li>Pages</li>
            <li>Widget</li>
            <li>Blog</li>
        </ul>

        <div className='flex space-x-4 items-center'>
        <HiSun />
        <HiOutlineRss />
        <Button title="Download"/>
        </div>
    </nav>
    )
}
