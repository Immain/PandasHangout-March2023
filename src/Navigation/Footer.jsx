import { SiTwitch, SiBuymeacoffee, SiYoutube, SiDiscord } from 'react-icons/si'
import { GiMountains } from 'react-icons/gi'
import { RiHeart2Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='mx-auto px-4 py-16 bg-white text-black dark:text-white text-center dark:bg-neutral border-t border-green-400'>
      <div className='max-w-[1240px] mx-auto px-4 grid grid-cols-2 lg:grid-cols-5 gap-y-4'>
        <div className='col-span-2 lg:col-span-1'>
          <h3 className='font-bold text-xl text-green-300'>PANDA'S HANGOUT</h3>
          <p className='pt-2'>Hello! My name is Panda and I broadcast a variety of games on Twitch and here on this platform. While visiting, you can enjoy friendly and positive interactions while watching fun gameplay and unique stream events!</p>
          <div className='pt-5 inline-block space-x-2'>
            <button className='rounded-full w-15 h-15 py-2 p-2 hover:text-indigo-400'>
              <a href='https://discord.gg/AADtzrDMNa'><SiDiscord size={20}/></a>
            </button>
            <button className='rounded-full w-15 h-15 py-2 p-2 hover:text-purple-400'>
              <a href='https://www.twitch.tv/king_pandakp'><SiTwitch size={20}/></a>
            </button>
            <button className='rounded-full w-15 h-15 py-2 p-2 hover:text-amber-400'>
              <a href='https://www.buymeacoffee.com/pdstech'><SiBuymeacoffee size={20} /></a>
            </button>
            <button className='rounded-full w-15 h-15 py-2 p-2 hover:text-red-500'>
              <a href='https://www.youtube.com/@pandashangout'><SiYoutube size={20} /></a>
            </button>
          </div>
          <div>
            <h1 className='pt-2 font-semibold'>LGBTQ+ Friendly 🌈 <RiHeart2Fill size={20} className='inline-block text-red-500' /></h1>
          </div>
        </div>
        <div>
          <h3 className='font-bold text-xl border-b-4 border-green-400 inline-block dark:text-white text-black'>QUICK LINKS</h3>
          <ul className='pt-5 dark:text-white text-black'>
            <Link to='/'>
            <li className='py-2 hover:text-green-400 cursor-pointer'>Home</li>
            </Link>
            <Link to='/about'>
            <li className='py-2 hover:text-green-400 cursor-pointer'>About</li>
            </Link>
            <Link to='/live'>
            <li className='py-2 hover:text-green-400 cursor-pointer'>Live</li>
            </Link>
            <Link to='/contact'>
            <li className='py-2 hover:text-green-400 cursor-pointer'>Contact</li>
            </Link>

          </ul>
        </div>
        <div>
          <h3 className='font-bold text-xl border-b-4 border-green-400 inline-block dark:text-white text-black'>SERVERS</h3>
          <ul className='pt-5 dark:text-white text-black'>
            <Link to='/servers/ark'>
            <li className='py-2 hover:text-green-400 cursor-pointer'>Ark Survival</li>
            </Link>
            <Link to='/servers/minecraft'>
            <li className='py-2 hover:text-green-400 cursor-pointer'>Minecraft</li>
            </Link>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-xl border-b-4 border-green-400 inline-block dark:text-white text-black'>RESOURCES</h3>
          <ul className='pt-5 dark:text-white text-black'>
            <li className='py-2 hover:text-green-400 cursor-pointer'><a href='https://www.dododex.com/' target='_blank' rel='noopener noreferrer'>Dododex Companion</a></li>
            <li className='py-2 hover:text-green-400 cursor-pointer'><a href='https://ark.fandom.com/wiki/ARK_Survival_Evolved_Wiki' target='_blank' rel='noopener noreferrer'>Ark Wiki</a></li>
            <li className='py-2 hover:text-green-400 cursor-pointer'><a href='https://minecraft.fandom.com/wiki/Minecraft_Wiki' target='_blank' rel='noopener noreferrer'>Minecraft Wiki</a></li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-xl border-b-4 border-green-400 inline-block text-black dark:text-white'>SUPPORT</h3>
          <ul className='pt-5 dark:text-white text-black'>
            <Link to='/legal/privacy-policy'>
            <li className='py-2 hover:text-green-400 cursor-pointer'>Privacy Policy</li>
            </Link>
            <Link to='/legal/terms-of-service'>
            <li className='py-2 hover:text-green-400 cursor-pointer'>Terms of Service</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className='content-center space-y-1 pt-2'>
        <p className='text-sm'>© 2023 Panda's Hangout. All rights reserved.</p>
        <p className='text-sm inline-flex'>Made with <span className='text-red-500 pt-1 px-1'><RiHeart2Fill size={15} /></span> in California</p>
        <div>
        <p className='text-sm text-green-300 inline-flex'><span className='pt-1 px-1'><GiMountains/></span>A High Sierra Software Company</p>
        </div>
        <div>
          <p className='text-sm text-gray-700 inline-flex select-none'>Build Number: 1.0.3.180625392 </p>
        </div>
      </div>
    </div>
  )
}

export default Footer