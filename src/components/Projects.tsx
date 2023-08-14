import React from 'react'
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
  weight: ['700', '900'],
  variable: '--inter',
})

const Projects = () => {

    const projects = [
        {
            name: 'Project 1',
            year: '2023',
            description: 'This is a project',
            link: 'https://www.google.com'
        },
        {
            name: 'My-Unsplash',
            year: '2023',
            description: 'This is a project',
            link: 'https://www.google.com'
        },
        {
            name: 'Project 3',
            year: '2022',
            description: 'This is a project',
            link: 'https://www.google.com'
        },
        {
            name: 'Project 4',
            year: '2021',
            description: 'This is a project',
            link: 'https://www.google.com'
        },
    ];

  return (
    <><div id='projects' className='pt-12'>
          <div>
              <h3 className='font-inter font-title italic text-xl text-black dark:text-white pt-4'>
                  Projects
              </h3>
          </div>
          {projects?.map((project, index) => {
              return (
                  <>
                      <div key={index} className='flex flex-col gap-4 p-4'>
                          <div className='flex justify-start gap-4 items-center'>
                              <div>
                                  <h4 className='text-lg font-inter font-bold dark:text-white'>{project.name}</h4>
                              </div>
                              <div className='py-0.5 px-1.5 border dark:py-0.5 dark:px-1.5 dark:border-gray-500 border-black hover:bg-gray-100 cursor-pointer dark:bg-gray-500 rounded'>
                                  <p className='text-xs font-normal dark:text-white text '>{project.year}</p>
                              </div>
                          </div>
                          <div className='font-dmmono'>{project.description}</div>
                          <div className='text-sm font-mono text-[#46a4f6]'>
                              <a href={project.link} className='flex items-center gap-2'>
                                  {project.link}
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                  </svg>
                              </a>
                          </div>
                      </div>
                  </>
              );
          })}



      </div></>
  )
}

export default Projects;