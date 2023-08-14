import React from 'react'

export default function Now() {
  return (
    <div id='now' className="h-full pt-16 pb-2 leading-tight">
      <h3 className='font-inter font-title italic text-xl text-black dark:text-white pt-4'>
        Now
      </h3>
      <div className="flex-col gap-4 font-dmmono">
        <p className='pb-4 line-mono font-normal text-[#4f5352]'>
          Last Updated: August 21st
        </p>
        <div className='leading-loose'>
          <h2>
            What I am working on:
          </h2>
          <ul className='list-disc ml-6 line-custom'>
            <li className=''>Building Full-stack application with features like authentication and auhtorazation.</li>
            <li>Learning Backend using framework Nestjs.</li>
            <li>Preparing for interviews, technical assigments, and building competitive resume.</li>
            <li>Making healthy lifestyle, not only foods :D</li>
          </ul>
        </div>

      </div>
    </div>
  )
}
