import React from 'react'
import CarteFooter from './cards/CarteFooter'
import CarteImageFooter from './cards/CarteImageFooter'

export default function Footer() {
    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <p>AstroWind</p>
                    <p>Perms privacy Policy</p>
                </div>
                <div className='flex justify-evenly'>
                    <CarteFooter titre="Product" nb1="Features" nb2="Security" nb3="Team" nb4="Entreprise" nb5="Customer stories" nb6="pricing" nb7="ressources" nb8="" nb9="" nb10="" />
                    <CarteFooter titre="Platform" nb1="Developer API" nb2="Partners" nb3="Atom" nb4="Electron" nb5="Astrowind Desktop" nb6="" nb7="" nb8="" nb9="" nb10="" />
                    <CarteFooter titre="Support" nb1="Docs" nb2="Community Forum" nb3="Professional Services" nb4="Skills" nb5="Status" nb6="" nb7="" nb8="" nb9="" nb10="" />
                    <CarteFooter titre="Company" nb1="About" nb2="Blog" nb3="Carrers" nb4="Press" nb5="Inclusion" nb6="Social Impact" nb7="Shop" nb8="" nb9="" nb10="" />
                </div>
                <div className='flex justify-between'>
                    <div><p>Made by XXXXXXXXX All right reserved</p></div>
                    <div>
                        <CarteImageFooter />
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}
