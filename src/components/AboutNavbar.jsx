import { useState, useEffect } from 'react'
import book from '../assets/book.svg'
import settings from '../assets/setting-2.svg'
import { NavLink, useLocation } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import userProfileIcon from '../assets/user3.svg'

const AboutNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isHome, setIsHome] = useState(true)
    const location = useLocation()
  
    useEffect(() => {
      if(location.pathname === '/guest' || location.pathname === '/guest-about') {
        setIsHome(false)
      }
    }, [location.pathname])

    const toggleMenu = () => setIsOpen(prev => !prev)
  return (
    <>
      {isHome ? (
        <nav className='-mx-5 top-0 bg-gray-900 py-4'>
        <div className='flex justify-between items-center px-9'>
          <NavLink to='/' className='flex gap-3 items-center'>
            <img src={book} alt='logo' width={50} height={50} />
            <h1 className='font-medium text-3xl text-[#8707f4]'>WorldWeb</h1>
          </NavLink>

          <FaBars
            onClick={toggleMenu}
            className='text-3xl text-white hidden max-[886px]:block cursor-pointer'
          />

          <div className='flex gap-5 items-center max-[886px]:hidden'>
            <NavLink to='/home' className={({isActive}) => isActive ? 'active-nav-link': 'nav-link'}>Home</NavLink>
            <NavLink to='/about' className={({isActive}) => isActive ? 'active-nav-link': 'nav-link'}>About</NavLink>
            <NavLink to='/challenge' className={({isActive}) => isActive ? 'active-nav-link': 'nav-link'}>Challenge</NavLink>
            <NavLink to='/profile' className={({isActive}) => isActive ? 'active-nav-link': 'nav-link'}>
              <img src={userProfileIcon} alt='user-icon' className='size-6 mr-2'/>
              {localStorage.getItem('user')}
            </NavLink>
            <NavLink to='/settings'>
              <img src={settings} alt='settings' width={40} height={40} className='rotate'/>
            </NavLink>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className='max-[886px]:flex flex-col gap-4 mt-4 hidden'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <NavLink to='/home' className={({isActive}) => isActive ? 'mobile-active-nav-link': 'nav-link'} onClick={toggleMenu}>Home</NavLink>
              <NavLink to='/about' className={({isActive}) => isActive ? 'mobile-active-nav-link': 'nav-link'} onClick={toggleMenu}>About</NavLink>
              <NavLink to='/challenge' className={({isActive}) => isActive ? 'mobile-active-nav-link': 'nav-link'} onClick={toggleMenu}>Challenge</NavLink>
              <NavLink to='/profile' className={({isActive}) => isActive ? 'mobile-active-nav-link': 'nav-link'} onClick={toggleMenu}>Profile</NavLink>
              <NavLink to='/settings' className='settings-link'>
                <span>Settings</span>
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      ) : (
        <nav className='-mx-5 top-0 bg-gray-900 py-4'>
        <div className='flex justify-between items-center px-9'>
          <NavLink to='/' className='flex gap-3 items-center'>
            <img src={book} alt='logo' width={50} height={50} />
            <h1 className='font-medium text-3xl text-[#8707f4]'>WorldWeb</h1>
          </NavLink>

          <FaBars
            onClick={toggleMenu}
            className='text-3xl text-white hidden max-[886px]:block cursor-pointer'
          />

          <div className='flex gap-5 items-center max-[886px]:hidden'>
            <NavLink to='/guest-about' className={({isActive}) => isActive ? 'active-nav-link': 'nav-link'}>About</NavLink>
            <NavLink to='/auth/register' className='text-white rounded-lg hover:bg-violet-500 px-4 py-3 text-center'>Register</NavLink>
            <NavLink to='/settings'>
              <img src={settings} alt='settings' width={40} height={40} className='rotate'/>
            </NavLink>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className='max-[886px]:flex mx-10 flex-col gap-4 mt-4 hidden'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            > 
              <NavLink to='/guest-about' className={({isActive}) => isActive ? 'text-violet-600 font-medium px-4 py-3 text-center': 'nav-link'} onClick={toggleMenu}>About</NavLink>
              <NavLink to='/auth/register' className='text-white rounded-lg px-4 py-3 text-center'>Register</NavLink>
              <NavLink to='/settings' className='settings-link'>
                <span>Settings</span>
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      )}
    </>
  )
}

export default AboutNavbar