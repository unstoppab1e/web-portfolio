const BreakLines = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <div className='contents'>
        <div className="relative border-b border-solid border-gray-500 border-opacity-100 w-full">            
            <a onClick={scrollToTop} className="flex justify-end text-center text-gray-500 py-2 text-sm font-medium hover:text-gray-600 transition duration-300 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>

            </a>
        </div>
    </div>
  )
  
}

export default BreakLines;