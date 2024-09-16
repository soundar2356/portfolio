import AboutImg from '../assets/about.png';

export default function About(){



  const config ={
    line1 :`Hello! I'm Soundra Pandi,a Highly modivated and detail-driven in computer science enthusiast
    currently pursuing my Master's degree in Computer Science Engineering ,`,
    line2 :`I'm now seeking opportunities to join a dynamic team where i can leverage my skills, learn from experinced professionals and make a meaningful contributions to the tech community`,
    line3 :'Feel free to explore my portfolio to discover more about my projects, skills and my projects',
    line4 : 'Beyond this slides,  innovation awaits..!!'
  }


  return<section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
    <div className='md:w-1/2 py-5'>
      <img src={AboutImg}/>
    </div>
    <div className='md:w-1/2 flex justify-center'>
    <div className='flex flex-col justify-center text-white'>
      <h1 className='text-4xl  border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
      <p className='pb-5 font-OpenSans-font'>{config.line1}</p>
      <p className='pb-5 font-OpenSans-font'>{config.line2}</p>
      <p className='pb-5 font-OpenSans-font'>{config.line3}</p>
      <p className='pb-5 pt-2 text-lg font-OpenSans-font'>{config.line4}</p>
    </div>
    </div>
  </section>
}