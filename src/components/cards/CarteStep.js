export default function CarteStep({title, text, image, step}) {

    let toto = 1;
    if (toto === 1){

    }
    return (
        <div className="flex">
            <div className=' flex space-x-4 '>
                <div className="flex flex-col items-center">
                    <div className="text-2xl">{image}</div>
                    {step === "Ready!" ? "" :  <div className="bg-gray-500 h-full w-[1px]"></div> }
                    {/* {step !== "Ready!" && (<div className="bg-gray-500 h-full w-[1px]"></div>)} */}

                </div>
                
            </div>
            <div className='ml-4 pb-8'  >
                <p className=' text-2xl pb-2'>
                    <span className="font-bold">{step}</span>  {title}</p>
                <p className="font-light">{text}</p>
            </div>
        </div>
    )
}
