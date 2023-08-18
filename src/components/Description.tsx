import { BlinkingLamp } from "./BlinkingLamp";

const Description = () => {
  function scrollDown() {
    const section = document.getElementById('stack');
    if(section){
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  }
  function scrollProject() {
    const section = document.getElementById('projects');
    if(section){
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  }
  function scrollNow() {
    const section = document.getElementById('now');
    if(section){
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  }
  return (
    <div className='font-dmmono line-mono flex-row text-mono font-normal tracking-normal mb-5 text-left'>
      <p className='mt-3'>
        Front-end developer
      </p>
      <p className='font-normal tracking-normal leading-loose mb-3 mt-5 text-left'>
        I design and build website templates so you can launch your website in minutes. Check out my latest <a onClick={scrollProject} className='underline cursor-pointer'>projects</a>, <a onClick={scrollDown} className='underline cursor-pointer'>stacks</a> and what I’m up to right <a onClick={scrollNow} className='underline cursor-pointer'>now</a>.
      </p>
      <div className='flex gap-16'>
        <div className='flex items-center justify-center gap-2 min-h-min min-w-min overflow-hidden p-0 relative'>
          <div className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>

          </div>
          <div className=''>
            <p className=''>Seoul, South Korea</p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <BlinkingLamp />
          <div className=''>
            Available for work
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Description;