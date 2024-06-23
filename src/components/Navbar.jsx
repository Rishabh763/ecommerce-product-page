import React, { useState } from 'react'

function Navbar() {
    const [toggle,setToggle] = useState(true);

    const toggleMenu = () => {
        setToggle(!toggle);
      };

  return (
    <div className='full-width h-fit'>

       <nav className='border-b-2 py-8 flex justify-between items-center'>
        <div className='block md:hidden z-1000' onClick={toggleMenu}>
        {toggle ? <img src="/assets/icon-menu.svg" alt=""/> : <img  src="/assets/icon-close.svg" alt=""/> }
        </div>
       <div className="flex gap-24">
        <img src="/assets/logo.svg" alt="" />
        <ul className={`${toggle ? 'translate-x-[-100%]':'translate-x-[0%]'} md:translate-x-0 fixed top-0 left-0 md:static md:flex gap-4 transition-all`}  >
            <li><a href="#">Collections</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
            
            
            
           
           
       </div>
       <div className='flex gap-12 items-center'>
        <img src="/assets/icon-cart.svg" alt="" />
        <img className='size-12' src="/assets/image-avatar.png" alt="" />

       </div>
       </nav>
    </div>
  )
}

export default Navbar