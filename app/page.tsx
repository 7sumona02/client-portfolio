import { Doto, Figtree } from 'next/font/google'
import Link from 'next/link'
 
const doto = Doto({
  weight: '400',
  subsets: ['latin'],
})

const fig = Figtree({
  weight: '400',
  subsets: ['latin'],
})

const workData = [
  {
    name: 'Verdura',
    image: '/projects/p1.png',
    link: '/',
  },
  {
    name: 'Mensa',
    image: '/projects/p2.png',
    link: '/',
  },
  {
    name: 'Portfolio Website',
    image: 'https://cdn.cosmos.so/0cde1dd9-4d17-4343-bb28-44dd6677ce1c?format=jpeg',
    link: '/',
  },
  {
    name: 'Creative Landing Page',
    image: 'https://cdn.cosmos.so/664146b7-05fd-4847-b886-9ef6c1fc9f2e?format=jpeg',
    link: '/',
  },
]

const Page = () => {
  return (
    <div className="md:h-screen h-full w-full bg-black text-white p-10 flex md:flex-row flex-col items-start justify-between gap-20 overflow-hidden">
      {/* Left content */}
      <div>
        <Link href='/' className={`${doto.className} text-2xl leading-6`}>
          SUMONA <br /> BISWAS
        </Link>
        <div className="pt-20 space-y-4">
          <div className={`${fig.className} text-lg text-white/60 font-medium`}>
            Info
          </div>
          <div className={`${fig.className} text-lg text-white max-w-lg leading-tighter`}>
           I&apos;m a Frontend developer and Framer designer passionate about creating clean, modern, and user-focused websites. I help businesses and individuals bring their vision to life with minimal yet impactful designs. Check out my <Link href='https://sumona.me' className='hover:text-white/60 duration-500 transition-all space-x-1'><span className='underline-style'>developer portfolio</span><span className='text-sm'>↗</span></Link>{" "}
to see how I turn ideas into engaging digital experiences.
          </div>
        </div>
         <div className="pt-20 space-y-4">
          <div className={`${fig.className} text-lg text-white/60 font-medium`}>
            Contact
          </div>
          <div className={`${fig.className} text-lg text-white max-w-lg leading-tighter flex flex-col gap-1`}>
           <Link href='mailto:sumonadotwork@gmail.com' className='hover:text-white/60 duration-500 transition-all space-x-1'><span className='underline-style'>sumonadotwork@gmail.com</span><span className='text-sm'>↗</span></Link>
           <Link href='https://sumona.me' className='hover:text-white/60 duration-500 transition-all space-x-1'><span className='underline-style'>sumona.me</span><span className='text-sm'>↗</span></Link>
           <Link href='https://x.com/weebdev_san' className='hover:text-white/60 duration-500 transition-all space-x-1'><span className='underline-style'>twitter</span><span className='text-sm'>↗</span></Link>
          </div>
        </div>
      </div>

      {/* Right content (scrollable works) */}
      <div className="h-[94vh] overflow-y-scroll hide-scrollbar flex flex-col gap-10">
        {workData.map((work, i) => (
          <Link key={i} href={work.link}>
            <div className="md:w-[45vw] w-full cursor-pointer relative group">
              <img
                src={work.image}
                alt={work.name}
                className="w-full h-auto object-contain hover:opacity-50 duration-500 transition-all relative"
              />
              <div className="absolute left-4 group-hover:bottom-4 bottom-0 opacity-0 group-hover:opacity-100 duration-500 transition-all">
                <div className="font-medium text-lg">{work.name}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Page
