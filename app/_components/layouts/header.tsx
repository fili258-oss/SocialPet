"use client"
import Link from 'next/link'
import Button1 from "../buttons/button1"
import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
  }

  const navigationItems = [
    { href: "/", label: "Inicio" },
    { href: "/pets", label: "Mascotas" },
    { href: "/about", label: "Nosotros" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contacto" }
  ]

  return (    
    <header className='bg-white bg-[url(/assets/huellas-uno.png)] bg-contain bg-position-[bottom_right_18rem] bg-no-repeat p-4 shadow-lg sticky top-0 z-50'>      
      <nav className="flex items-center">
        <div className="basis-[50%] lg:basis-[25%]">
          <h3 className="font-heading font-bold text-primary-600">El rincon de las mascotas</h3>
        </div>        
        <div className="hidden lg:flex lg:gap-x-12 md:basis-[60%] justify-center">        
          {navigationItems.map((item, index) => (
            <ul key={index} className='list-none'>
              <li key={index}>
                  <Link href={item.href} className="text-slate-800 hover:text-primary-600 font-heading font-bold text-sm lg:text-base xl:text-lg transition-colors duration-200 hover:scale-105 transform">
                      {item.label}
                  </Link>
              </li>
            </ul>
              
          ))}                         
        </div>
        <div className='flex lg:hidden basis-[50%] justify-end items-end'>
          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="w-8 h-8 space-y-1.5 focus:outline-none focus:ring-2 focus:ring-slate-800 rounded-md p-1" aria-label="Abrir menú de navegación">
              <span className={`block w-6 h-0.5 bg-primary-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-primary-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-primary-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
        
        <div className="hidden md:flex basis-1/3 justify-end">
          <Button1 url="https://gmail.com" text="Registrate gratis!"/>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <nav className="px-4 py-4">
              <ul className="space-y-4 list-none">
                  {navigationItems.map((item, index) => (
                      <li key={index}>
                          <Link 
                              href={item.href}
                              className="block text-slate-800 hover:text-primary-600 font-medium text-base py-2 px-3 rounded-md hover:bg-gray-50 transition-colors duration-200"
                              onClick={() => setIsMenuOpen(false)}
                          >
                              {item.label}
                          </Link>
                      </li>
                  ))}
              </ul>
          </nav>
      </div>
    </header>
  )
}

export default Header