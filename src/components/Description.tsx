const Description = () => {
  return (
    <div className='flex-row text-base font-normal tracking-normal leading-loose mb-5 text-left'>
      <p className='mt-3'>
        Front-end developer
      </p>
      <p className='font-normal tracking-normal leading-loose mb-3 mt-5 text-left'>
        I design and build website templates so you can launch your website in minutes. Check out my latest <a href='./#project' className='underline'>projects</a>, <a href='./templates' className='underline'>templates</a> and what I’m up to right <a href='./#now' className='underline'>now</a>.
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
        <div className=''>
          <div className=''>
            Available for work
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Description;