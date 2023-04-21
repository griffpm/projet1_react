import React from 'react';
import CarteStep from './cards/CarteStep';
import { dataStep } from '../data/DataCardStep';



export default function SectionStep() {
    
    return (
        <section className='px-20 py-20 flex justify-between'>
                <div className=''>
                    <h2 className='font-bold text-3xl pb-6'>Get your dream website up and running in no time with AstroWind</h2>
                    <div className='mt-2 pt-16 w-[80%] ml-auto mr-auto'>
                        {dataStep.map((item, index) => (
                        <CarteStep
                        key={index}
                            image={item.image} 
                            title={item.title} 
                            text={item.text}
                            step={item.step} />
                        ))} 
            </div>
                </div>

                <div className='w-1/2'>
                    <img src="img/4.jpg" alt="" className='w-full max-h-[75vh]' />
                </div>
            </section>
            )}
