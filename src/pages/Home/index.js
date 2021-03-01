import Background from '@Layout/background'

export default function index() {
   return (
      <div className='home'>
         <Background />
         <div className='home-header'>
            <span className='text-glitch' aria-hidden='true'>
               Denny Angesti Pratama
            </span>
            <h1 className='text-glitch'>Denny Angesti Pratama</h1>
            <span className='text-glitch' aria-hidden='true'>
               Denny Angesti Pratama
            </span>
         </div>
         <div className='home-sub'>
            <span className='text__sub-glitch' aria-hidden='true'>
               Frontend Developer
            </span>
            <h2 className='text__sub-glitch'>Frontend Developer</h2>
            <span className='text__sub-glitch' aria-hidden='true'>
               Frontend Developer
            </span>
         </div>
      </div>
   )
}
