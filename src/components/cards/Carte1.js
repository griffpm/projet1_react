export default function Carte1({titre, texte, image}) {
    return (
    <div className=' flex space-x-4'>
        {image}
        <div className="w-3/4">
            <p className='font-bold text-2xl pb-2'>{titre}</p>
            <p className="font-light">{texte}</p>
        </div>
    </div>
    )
}
