import Link from "next/link";
import DarkModeButton from "./DarkModeButton";

export default function Navbar() {
  return (
    <div className='max-w-2xl pt-10'>
      <div className='flex justify-between h-16'>
        <div className='flex justify-between w-full'>
          <div className='flex items-center'>
            <Link href='/'>
              <h1 className='font-inter text-4xl font-bold dark:text-white'>
                <span className='italic'>Temirbekov Abdirakhym</span>
              </h1>
            </Link>
          </div>
          <div className='hidden sm:ml-6 sm:flex sm:space-x-8 font-sans'>
            <DarkModeButton />
          </div>
        </div>
      </div>
    </div>
  )
}