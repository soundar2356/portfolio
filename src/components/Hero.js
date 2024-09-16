import HeroImg from '../assets/hero.png'
import { AiOutlineGithub,AiOutlineLinkedin } from 'react-icons/ai'

export default function Hero(){
   
  const config ={
      subtitle :'Your next team member is just a scroll away..!!',
      social:{
        github:'',
        linkedin:'https://www.linkedin.com/in/soundra-pandi-77525b284'
      }
    }

    return<section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
    <div className='md:w-1/2 flex flex-col '>
    <div className='flex pb-3'> 
    <h1 className='welcome-text'>Welcome to my Portfolio</h1></div>
      <h1 className=' text-white text-6xl '>I'm Soundra<span className='text-blue-200'> Pandi</span>  
    <p className='text-lg'>{config.subtitle}</p>
    </h1>
    <div className='flex py-10'>
        <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={30}/></a>
        <a href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={30}/></a>
      </div>
      </div>
      
    <img className='md: w-1/3 ' src={HeroImg}/>
  </section>
} 