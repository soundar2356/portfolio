export default function Contact(){
  
  const config={
    Descrip:`I'm excited to take the first step in my career and would appreciate the opportunity to discuss my application with you`,
    email:'soundar2356@gmail.com',
    phone:'+91-93448 74691'
  }
  return<section className='flex flex-col bg-primary px-5 py-32  text-white' id="contact">
    <div className='flex flex-col items-center'>
    
      <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
      <p className='pb-2'>{config.Descrip}</p>    
      <p className="pb-5">please contact me at</p>
      <p className="py-2"><span className="font-bold">Email :</span>{config.email}</p>
      <p className="py-2"><span className="font-bold">Phone :</span>{config.phone}</p>
    </div>
   
  </section>
}