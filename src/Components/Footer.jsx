import { useState } from 'react';
import { Link } from 'react-router-dom'
// import { supabase } from '../../supabaseClient';
import Logo from "../../public/Logo.png"
import { FaPhone, FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaPinterestP, FaDribbble } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {

  const [email, setEmail] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!email) return;

  //   setLoading(true);
  //   setError(null);

  //   try {
  //     // Insert email into the 'subscriptions' table in Supabase
  //     const { data, error } = await supabase
  //       .from('subscriptions')
  //       .insert([{ email }]);

  //     if (error) throw error;

  //     // Optionally handle the response (data) or show a success message
  //     alert('Subscribed successfully!');

  //     setEmail('');  // Clear the input after successful submission
  //   } catch (error) {
  //     setError(error.message);
  //     console.error('Error inserting email:', error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <>
      {/* Footer Section 1 */}
      <div className='relative py-14 bg-contain bg-gray-50'>
        <div className='container mx-auto'>
          <div className="flex justify-cente flex-col px-2 lg:px-4 ">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-full">
              <div className="relative z-10 text-center p-0">
                <h2 className="font-poppins text-slate-900 font-semibold text-3xl sm:text-4xl md:text-4xl leading-[42px] sm:leading-[48px] lg:leading-[52px] my-5"> Our Newsletter<span className="text-color-2 text-5xl">.</span> </h2>
                <p className="text-base sm:text-lg lg:text-xl mb-8 font-light"> To People like you </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 self-center p-3">
              <div className="relative">
                <form
                  action=""
                  className="flex flex-col sm:flex-row items-center justify-center gap-3"
                // onSubmit={handleSubmit}
                >
                  <input
                    type="email"
                    placeholder="Enter Your Address"
                    name="emails"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    className="w-full h-12 sm:h-14 px-4 text-base bg-white border border-[#e6e6e6] rounded-full shadow-sm focus:outline-none focus:ring focus:ring-[#ffbd84]"
                    required
                  />
                  <button
                    type="submit"
                    className="relative flex items-center justify-center text-base sm:text-lg font-semibold bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] px-4 sm:px-8 py-3 text-white rounded-full hover:shadow-lg hover:shadow-slate-200 transition-all ease-linear group overflow-hidden"
                  // disabled={loading}
                  >
                    {/* <span className="sm:block">{loading ? 'Subscribing...' : 'Subscribe'}</span> */}
                    <span className="ml-2 text-sm group-hover:translate-x-1 transition-transform duration-200 ease-in">
                      <FaChevronRight />
                    </span>
                    <span className="absolute block w-52 h-52 bg-[rgba(255,255,255,0.2)] rounded-full top-[-10%] -right-32 group-hover:top-[-20%] group-hover:-right-20 transition-all duration-500 ease-linear"></span>
                  </button>
                </form>

                {/* Display error message if there's any */}
                {/* {error && <p className="text-red-500 mt-2">{error}</p>} */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section 2 */}
      <div className="bg-white pt-12 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {/* Left Section */}
            <div className="w-full lg:w-1/3 sm:w-1/2 px-4 mb-8 lg:mb-0">
              <Link className="my-7 text-xl py-1.5 flex items-center space-x-2" style={{ textDecoration: 'none' }}>
                <img src={Logo} alt="Vectia Logo" className="w-10 h-10 rounded-full" />
                <span className="text-3xl font-semibold tracking-tight text-slate-800">
                  Manjul Soni & Co.
                </span>
              </Link>
              <p className="text-lg text-slate-500 mt-4">
              At Manjul Soni & Co., we specialize in delivering expert solutions in auditing, taxation, finance, and compliance. Our dedicated team of professionals is committed to helping businesses and individuals achieve financial excellence.
              </p>
              <button className="relative my-4 text-base font-['Open Sans'] rounded-full bg-color-1 px-8 py-3 text-white hover:shadow-lg hover:shadow-slate-200 transition-all ease-linear group overflow-hidden">
                Get A Quote
                <span className="absolute block w-52 h-52 text-[#e60072] bg-[rgba(255,255,255,0.2)] rounded-full top-[-10%] -right-32 group-hover:top-[-20%] group-hover:-right-20 transition-all duration-500 ease-linear"></span>
              </button>
            </div>
            {/* Right Section */}
            <div className="w-full lg:w-1/6 sm:w-1/2 px-4">
              <h5 className="my-7 text-xl font-semibold text-slate-800">Useful Links</h5>
              <ul className="list-none">
                {[
                  'Home',
                  'About Us',
                  'Services',
                  'Case Studies',
                  'Team',
                ].map((item, index) => (
                  <li key={index} className="text-slate-500 py-1">
                    <Link className="text-base">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/6 sm:w-1/2 px-4">
              <h5 className="my-7 text-xl font-semibold text-slate-800">Company</h5>
              <ul className="list-none">
                {[
                  'Contact',
                  "Customer's FAQ",
                  'Refund Policy',
                  'Privacy Policy',
                  'Terms and Conditions',
                  'License & Copyright',
                ].map((item, index) => (
                  <li key={index} className="text-slate-500 py-1">
                    <Link className="text-base">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Middle Section */}
            {/* Middle Section */}
            <div className="w-full lg:w-1/4 sm:w-1/2 px-4 mb-8 lg:mb-0">
              <h5 className="my-7 text-2xl font-medium text-slate-800">Contact Us</h5>
              <ul className="list-none">
                <li className="flex items-start text-slate-500 pb-4">
                  <MdEmail className="mr-4 text-2xl font-black" />
                  <div>
                    <p className="font-semibold text-lg">Email</p>
                    <span className="font-normal text-base">
                      <Link to="mailto:manjulsoni@yahoo.com">
                        manjulsoni@yahoo.com
                      </Link>
                    </span>
                  </div>
                </li>
                <li className="flex items-start text-slate-500 pb-4">
                  <FaPhone className="mr-4 text-2xl font-black" />
                  <div>
                    <p className="font-semibold text-lg">Phone</p>
                    <span className="font-normal text-base">
                      <Link to="/">079-4897-0011</Link>
                    </span>
                  </div>
                </li>
                <li className="flex items-start text-slate-500 pb-4">
                  <FaLocationDot className="mr-4 text-2xl font-black" />
                  <div>
                    <p className="font-semibold text-lg">Address</p>
                    <span className="font-normal text-base">
                      <Link to="/">603-604, Solitaire Sky, Beside Hyatt Regency, Opp. 
Gujarat Vidhyapith, Ashram Road, Usmanpura, 
Ahmedabad - 380014</Link>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section 3 */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto text-slate-500 text-center">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-full flex-none mb-7">
              {[
                // { icon: <FaFacebook />, link: "" },
                // { icon: <FaXTwitter />, link: "#" },
                // { icon: <FaInstagram />, link: "#" },
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/manjul-soni-31060516/?originalSubdomain=in" },
                // { icon: <FaYoutube />, link: "#" },
                // { icon: <FaPinterestP />, link: "#" },
                // { icon: <FaDribbble />, link: "#" },
              ].map((item, index) => (
                <Link key={index} to={item.link} className="inline-block text-center text-slate-500 text-3xl rounded mx-5 my-2 w-9">
                  {item.icon}
                </Link>
              ))}
            </div>
            <p className="text-lg">© 2024. All Rights Reserved   </p>
            <p className="text-lg">|| Developed by <a href="https://nexonify.in" target="_blank" rel="noopener noreferrer">Nexonify Technology</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer