import React from 'react'

export default function CarteFooter(titre,nb1,nb2,nb3,nb4,nb5,nb6,nb7,nb8,nb9,nb10) {
    return (
        <div className='{`${titre} ${nb1} ${nb2} ${nb3} ${nb4} ${nb5} ${nb6} ${nb7} ${nb8} ${nb9} ${nb10}`} mx-4'>
            <p className='font-bold'>{titre}</p>
            <ul>
                <li>{nb1}</li>
                <li>{nb2}</li>
                <li>{nb3}</li>
                <li>{nb4}</li>
                <li>{nb5}</li>
                <li>{nb6}</li>
                <li>{nb7}</li>
                <li>{nb8}</li>
                <li>{nb9}</li>
                <li>{nb10}</li>
            </ul>
        </div>
    )
}
