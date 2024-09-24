import websiteImg1 from '../assets/Youtube-clone.png'
import websiteImg2 from '../assets/amazon clone.jpg'
import websiteImg3 from '../assets/hotel management.jpg'
import websiteImg4 from '../assets/portfolio.png'
export default function Projects(){

    const config = {
      projects:[
        {
           image : websiteImg1,
           description : 'A static replica of the Youtube homepage built using HTML and CSS',
           link:' https://soundar2356.github.io/Youtube-Clone-Using-HTML-And-CSS/'
        },
        {
          image : websiteImg2,
          description : 'A javascript based implementation of Amazon E-commerce website replica',
          link:'https://soundar2356.github.io/amazon-clone-static-website/'
       },
       {
        image : websiteImg3,
        description : 'A full stack application using Spring Boot and React-Js',
        link:'https://github.com/soundar2356/LeeviHotel.git'
     },
     {
      image : websiteImg4,
      description :'A professional Portfolio Websites using React-Js',
      link :' https://soundar2356.github.io/professional-portfolio/'
     }
      ]
    }

  return <section className='flex flex-col py-20 px-5 justify-center bg-primary text-white' id='project'>
    <div className="w-full">
      <div className="flex flex-col px-10 py-5">
        <h1 className='text-4xl  border-b-4 border-secondary mb-5 w-[150px] font-bold'>Projects</h1>
        <p >These are my some of my project </p>
      </div>
    </div>
    <div className="w-full">
      <div className='flex flex-col md:flex-row px-10 gap-20'>
          {config.projects.map((projects)=>( 
              <div className='relative'>
                <img className = 'h-[200px] w-[350px]' src = {projects.image}/>
                  <div className='project-desc h-[200px] w-[350px]'>
                    <p className='text-center text-sm px-5 py-10'>{projects.description}</p>
                      </div>
                  <div className='flex justify-center '>
                        <a className='btn mt-3' target='_blank' href={projects.link}>View Project</a>
                      </div>
                </div>
            ))}
       </div>
    </div>
  </section>
}