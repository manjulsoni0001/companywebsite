import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from "../../public/Logo.png";
import { IoMenu, IoClose } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const nav_links = [
  {
    path: '',
    display: 'Home'
  },
  {
    path: 'about',
    display: 'About'
  },
  {
    path: 'services',
    display: 'Services'
  },
  {
    path: 'team',
    display: 'Team'
  },
  // {
  //   path: 'FAQ',
  //   display: 'FAQ'
  // },
  // {
  //   path: 'contact',
  //   display: 'Contact'
  // },
];

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm shadow-gray-500/50'>
      <div className="bg-color-1 p-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <MdEmail className="text-2xl text-white mr-2" />
                <a href="mailto:info@example.com" className="text-lg font-thin text-white">
                manjulsoni@yahoo.com
                </a>
              </div>
              <p className="text-white font-extralight">|</p>
              <div className="flex items-center">
                <FaPhoneAlt className="text-lg text-white mr-2" />
                <p className="text-lg font-thin text-white">079-4897-0011</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-2 '>
        <div className='flex justify-between items-center py-2 relative'>
          <Link to="/" className='flex items-center space-x-2'>
            <img src={Logo} alt="Nexonify Logo" className='w-14 h-14 rounded-full' />
            <span className='text-xl font-normal tracking-tight'>Manjul Soni & Co. </span>
          </Link>
          <div className='hidden md:flex items-center space-x-8'>
            {nav_links.map((item, index) => (
              <NavLink
                key={index}
                to={`/${item.path}`}
                className={({ isActive }) =>
                  isActive
                    ? "nav_active text-gray-900 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-custom-blue"
                    : "relative inline-block text-gray-600 hover:text-gray-900 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-custom-blue after:transition-all after:duration-300 hover:after:w-full"
                }
                onClick={toggleMenu} // Close menu on link click
              >
                {item.display}
              </NavLink>

            ))}
            <div className="gap-4 hidden md:flex items-center justify-center">
              <Link to="/contact" className="relative md:text-md text-base rounded-full  px-8 py-3 text-slate-50 bg-color-1 hover:bg-color-2 shadow-slate-300 shadow-xl transition-all ease-linear group overflow-hidden duration-300">
                Get A Quote
              </Link>
            </div>
          </div>
          {/* <div className='gap-4 hidden md:flex items-center justify-center'>
            <button className='md:text-md text-sm font-medium rounded-full px-4 py-3 hover:bg-slate-100/50 transition-all ease-linear border border-gray-300'>Login</button>
            <button className='md:text-md text-sm font-semibold rounded-full px-4 py-3 text-slate-50 hover:shadow-lg hover:shadow-slate-200 ease-linear bg-gradient-to-r from-[#007694] to-[#00C7FA] hover:bg-gradient-to-r hover:from-[#00579A] hover:to-[#001D34] transition-all duration-300'>Create Account</button>
          </div> */}
          <button
            className='md:hidden text-gray-500 focus:outline-none z-50 absolute right-4 top-1/2 transform -translate-y-1/2'
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />} {/* Toggle between IoMenu and IoClose */}
          </button>
        </div>
      </div>
      <div className={`fixed inset-0 z-40 bg-gray-50/80 backdrop-blur transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-4 pt-16">
          <div className='flex flex-col items-center space-y-4'>
            {nav_links.map((item, index) => (
              <NavLink
                key={index}
                to={`/${item.path}`}
                className={({ isActive }) => isActive ? "nav_active text-gray-900" : "text-gray-600 hover:text-gray-900 transition-colors"}
                onClick={toggleMenu} // Close menu on link click
              >
                {item.display}
              </NavLink>
            ))}
            <div className="gap-4 md:flex items-center justify-center">
              <Link to="/contact" className="relative md:text-md text-base rounded-full  px-8 py-3 text-slate-50 bg-color-1 hover:bg-color-2 shadow-slate-300 shadow-xl transition-all ease-linear group overflow-hidden duration-300">
                Get A Quote
              </Link>
            </div>
          </div>
          {/* <div className="space-y-4 w-full max-w-xs flex flex-col">
            <button className='md:text-md text-sm font-medium rounded-full px-4 py-3 hover:bg-slate-100/50 transition-all ease-linear border border-gray-300' onClick={toggleMenu}>
              Login
            </button>
            <button className='md:text-md text-sm font-semibold rounded-full bg-slate-950 px-4 py-3 text-slate-50 hover:shadow-lg hover:shadow-slate-200 transition-all ease-linear hover:bg-slate-900' onClick={toggleMenu}>
              Create Account
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;