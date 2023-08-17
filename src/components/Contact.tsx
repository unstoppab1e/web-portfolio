import Link from "next/link";

export default function Contact() {

  const contacts = [
    {
      name: 'Email',
      linkName: 'abdirakhym2000@gmail.com',
      link: 'mailto:abdirakhym2000@gmail.com'
    },
    {
      name: 'Phone',
      linkName: '+82 010 3237 6444',
      link: 'tel:+8201032376444'
    },
    {
      name: 'Github',
      linkName: 'unstoppab1e',
      link: 'https://github.com/unstoppab1e'
    },
    {
      name: 'Telegram',
      linkName: '@unstoppab1e',
      link: 'https://t.me/abdirakhymt'
    },
    {
      name: 'Twitter',
      linkName: '@unstoppab1e',
      link: 'twitter.com/unstoppab1e'
    },
    
  ];

  return (
    <div className="flex flex-col gap-4 pt-16">
      <h3 className='font-inter font-title italic text-xl text-black dark:text-white pt-4 pb-4'>
        Contact
      </h3>
      <div className="flex flex-col gap-4 pb-4">
        {contacts && contacts.map((contact, index) => {
          return (
            <>
              <div key={index} className="flex gap-4 font-dmmono font-normal justify-between items-center">
                <h5>{contact.name}</h5>
                <span className="grow border-b border-[#5d5b5b]"></span>
                <span className='flex items-center gap-2 cursor-pointer text-[#46a4f6]'>
                  <Link href={contact.link}>{contact.linkName}</Link>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </div>
            </>
          )
          })}
      </div>
      
    </div>
    
  )
}