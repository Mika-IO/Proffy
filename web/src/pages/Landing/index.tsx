import React from 'react'
import './style.css'
import LogoImg from '../../assets/images/logo.svg'
import LandingImg from '../../assets/images/landing.svg'
import GiveImg from '../../assets/images/icons/give-classes.svg'
import StudyImg from '../../assets/images/icons/study.svg'
import HeartImg from '../../assets/images/icons/purple-heart.svg'

export default function Landing() {
    return (
        <div id='content'>
            <div id='logo-container'>
                <img src={LogoImg} alt="proffy" id='proffy'/> 
                <h2>Sua plataforma de estudos online</h2>
            </div>
           <img src={LandingImg} alt="" id='landing'/>
           <div className='buttons-container'>
               <a href="study" className='study'>
                <img src={StudyImg} alt="estudar"/>
                Estudar
               </a>
               <a href="Giveclasses" className='give'>
                <img src={GiveImg} alt="estudar"/>
                Dar aulas
               </a>
           </div>
           <span>
               Total de 300 conexões já realizadas <img src={HeartImg} alt="Coração roxo"/>
           </span>
        </div>
    )
}
