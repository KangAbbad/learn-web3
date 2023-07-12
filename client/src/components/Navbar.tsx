import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { HiMenuAlt4 } from 'react-icons/hi'

import Logo from '../assets/images/logo.png'

const NavbarItem = ({ title, classProps = '' }: { title: string, classProps?: string }) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  )
}

export const Navbar = () => {
  const [isToggleMenu, setToggleMenu] = useState<boolean>(false)
  const navbarItems = ['Market', 'Exchange', 'Tutorials', 'Wallets']

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={Logo} alt="Logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {navbarItems.map((item, itemIndex) => (
          <NavbarItem key={itemIndex} title={item} />
        ))}
        <li className="bg-[#2952E3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546BD]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {isToggleMenu
          ? <IoClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
          : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        }
        {isToggleMenu && (
          <ul
            className="
              z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
              flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
            "
          >
            <li className="text-xl w-full my-2">
              <IoClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
            </li>
            {navbarItems.map((item, itemIndex) => (
              <NavbarItem key={itemIndex} title={item} classProps="my-2 text-lg" />
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}
