import { Fragment } from 'react'

export default function Header() {
   return (
      <div className='header'>
         <div className='home-header'>
            <span className='text-glitch text-glitch--title' aria-hidden='true'>
               Denny Angesti Pratama
            </span>
            <h1 className='text-glitch text-glitch--title'>Denny Angesti Pratama</h1>
            <span className='text-glitch text-glitch--title' aria-hidden='true'>
               Denny Angesti Pratama
            </span>
         </div>
         <div className='home-sub'>
            <span className='text-glitch text-glitch--subtitle' aria-hidden='true'>
               Frontend Developer
            </span>
            <h2 className='text-glitch text-glitch--subtitle'>Frontend Developer</h2>
            <span className='text-glitch text-glitch--subtitle' aria-hidden='true'>
               Frontend Developer
            </span>
         </div>
         <div className='home-btn__wrap'>
            <button className='home-button home-button--left'>
               <span>Project</span>
            </button>
            <div className='home-button home-button--shadow--left home-button--left'></div>
         </div>
         <div className='home-btn__wrap'>
            <button className='home-button home-button--right'>
               <span>About</span>
            </button>
            <div className='home-button home-button--shadow--right home-button--right'></div>
         </div>
      </div>
   )
}
