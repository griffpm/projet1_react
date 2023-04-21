import React from 'react'
import TitleSection from './TitleSection'
import Carte2 from './cards/Carte2'

export default function SectionTemplate() {
    return (
    <div>
        <div className=' mb-4 bg-blue-100 px-20 py-20'>
            <TitleSection title="INSIDE TEMPLATE" subtitle="Ans what's inside? ..." />
        </div>
        <div className='w-[80%] ml-auto mr-auto'>
            <div className='flex justify-between'>
                <div className='w-[50%]'>
                    <div>
                        <p className='font-bold'>Ad vix debet docendi</p>
                        <p>Maecenas maximus congue vestibulum. Curabitur sit amet hendrerit lorem. Mauris vulputate, ipsum vitae sollicitudin laoreet, diam ligula vehicula risus, volutpat lacinia elit est sit amet erat.</p>
                    </div>
                    <div>
                        <Carte2 titre="Per ei quaeque sensibus" texte="Maecenas maximus congue vestibulum. Curabitur sit amet hendrerit lorem. Mauris vulputate"/>
                        <Carte2 titre="Cu imperdiet posidium sed" texte="Maecenas maximus congue vestibulum. Curabitur sit amet hendrerit lorem. Mauris vulputate"/>
                        <Carte2 titre="Nulla omittam sadipscing mel ne" texte="Maecenas maximus congue vestibulum. Curabitur sit amet hendrerit lorem. Mauris vulputate"/>
                    </div>
                </div>
                <div className='w-[45%]'>
                    <img src="img/2.jpg" alt="" className='rounded-[5%]' />
                </div>
            </div>

            <div className='my-6'>
                
                    <div className='flex justify-between'>
                        <div className='w-[45%]'>
                            <img src="img/3.jpg" alt="" className='rounded-[5%]' />
                        </div>
                        <div className='w-[50%]'>
                            <Carte2 titre="Per ei quaeque sensibus"/>
                            <Carte2 titre="Cu imperdiet posidium sed"/>
                            <Carte2 titre="Nulla omittam sadipscing mel ne"/>
                            <Carte2 titre="Per ei quaeque sensibus"/>
                            <Carte2 titre="Cu imperdiet posidium sed"/>
                            <Carte2 titre="Nulla omittam sadipscing mel ne"/>
                        </div>
                    </div>
                
            </div>
        </div>

    </div>
    )
}
