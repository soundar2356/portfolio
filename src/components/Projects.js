import websiteImg1 from '../assets/Youtube-clone.png'
import websiteImg2 from '../assets/ecommerce-amazon-websites.png'
import websiteImg3 from '../assets/website-blog.jpg'
import websiteImg4 from '../assets/ecommerce-websites.jpg'
export default function Projects(){

    const config = {
      projects:[
        {
           image : websiteImg1,
           description : 'A static replica of the Youtube homepage built using HTML and CSS, showcasing my skills in Front-End development and design ',
           link:'https://github.com/soundar2356/Youtube-Clone-Using-HTML-And-CSS.git'
        },
        {
          image : websiteImg2,
          description : 'A javascript based implementation of Amazon E-commerce website replica in dynamic that focus solely on Front-End development',
          link:'https://github.com/soundar2356/amazon-clone-.git'
       },
       {
        image : websiteImg3,
        description : 'this are created by help of talewind css and react js',
        link:''
     },
     {
      image : websiteImg4,
      description :'new des',
      link :''
     }
      ]
    }

  return <section className='flex flex-col py-20 px-5 justify-center bg-primary text-white' id='project'>
    <div className="w-full">
      <div className="flex flex-col px-10 py-5">
        <h1 className='text-4xl  border-b-4 border-secondary mb-5 w-[150px] font-bold'>Projects</h1>
        <p >These are my some of my project and i have build the projects using html,css and javascript</p>
      </div>
    </div>
    <div className="w-full">
      <div className='flex flex-col md:flex-row px-10 gap-10'>
          {config.projects.map((projects)=>( 
              <div className='relative'>
                <img className = 'h-[150px] w-[300px]' src = {projects.image}/>
                  <div className='project-desc'>
                    <p className='text-center text-xs px-5 py-10'>{projects.description}</p>
                      <div className='flex justify-center'>
                        <a className='btn' target='_blank' href={projects.link}>View Project</a>
                      </div>
                  </div>
                </div>
            ))}
       </div>
    </div>
  </section>
}