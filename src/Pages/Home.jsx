// import React from 'react'
import Concept from "../Images/concept.webp"
import IconLight from "../Images/ico-light.webp"
import IconDrak from "../Images/ico-dark.webp"
import BGIcon from "../Images/bg-icons.webp"
import Rocket from "../Images/rocket-icon.webp"
import Notepad from "../Images/icon-notepad.svg"

import TestimonialCarousel from "../Components/TestimonialCarousel"
import ServiceCards from "../Components/ServiceCards"
import Cards from "../Components/Cards"

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#E7F0F8] py-6 sm:py-12 max-h-[100vh] sm:max-h-[120vh]">
        {/* <img src={Beams} alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" /> */}
        {/* <div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{ backgroundImage: `url(${Grid})`, backgroundSize: '50px 50px' }}></div> */}
        <div className="relative container mx-auto">
          <div className="flex flex-wrap mt-0 lg:mx-4">
            <div className="self-center lg:w-5/12">
              <div className='visible' data-aos="fade-up">
                <div className="m-2">
                  <img src={Rocket} alt="" />
                </div>
                <div className="text-2xl lg:text-5xl font-montserrat font-bold bg-gradient-to-b from-gray-950 to-slate-800 text-center lg:text-start pb-3 mx-12 md:mx-28 lg:mx-0 mb-7">Best Prediction for the Business Future</div>
                <div className="text-blue-400 font-normal md:text-2xl  text-sm mb-9 mx-8 lg:mx-0 text-center lg:text-start">We help businesses navigate and invest in the best opportunities through expert tax compliance and financial planning</div>
                <div className="flex items-center justify-center lg:justify-start">
                  {/* <button className="flex relative text-lg font-normal rounded-full bg-color-1 px-8 py-3 text-slate-50 shadow-2xl hover:bg-color-2 transition-all ease-linear group overflow-hidden uppercase">
                    View Case Studies
                  </button> */}
                </div>
              </div>
            </div>
            <div className="self-center lg:w-7/12 lg:mt-60">
              <div className="animate-fadeIn visible mx-4 lg:mx-0 relative">
                <img src={IconLight} alt="Concept 2" className="absolute -top-28 left-24 z-0" />
                <img src={IconDrak} alt="Concept 3" className="absolute -top-32 left-32 z-0" />
                <img src={BGIcon} alt="Concept 3" className="absolute -top-44 -left-8 z-0" />
                <img src={Concept} alt="Concept 1" className="relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className='relative py-28 bg-contain '>
        <div className='container mx-auto'>
          <div className="flex justify-center px-2 lg:px-4 ">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
              <div className="relative z-10 text-center p-0">
                <h2 className="font-poppins text-slate-900 font-semibold text-3xl sm:text-4xl md:text-4xl leading-[42px] sm:leading-[48px] lg:leading-[52px] my-5"> Our Services<span className="text-color-2 text-5xl">...</span> </h2>
                <p className="text-base sm:text-lg lg:text-xl mb-8 font-light"> Empowering your business with expert solutions through our CA firm. </p>
              </div>
            </div>
          </div>
          <Cards />
        </div>

      </div>

      {/* Third Section */}
      {/* <div className='relative py-28 bg-contain '>
        <div className='container mx-auto'>
          <div className="flex justify-center px-2 lg:px-4 ">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-full">
              <div className="relative z-10 text-center p-0">
                <h2 className="font-poppins text-slate-900 font-semibold text-3xl sm:text-4xl md:text-4xl leading-[42px] sm:leading-[48px] lg:leading-[52px] my-5">All the results are transparent<span className="text-color-2 text-5xl">.</span> Nothing Hidden<span className="text-color-2 text-5xl">.</span> </h2>
                <p className="text-base sm:text-lg lg:text-xl mb-8 font-light"> Any Investment Types that you like. </p>
              </div>
            </div>
          </div>
          <div className="border rounded-lg border-slate-200">
          </div>
        </div>
      </div> */}

      <div className='relative pt-3 mb-[1800px] lg:mb-[0px] pb-5 bg-color-1' style={{ height: '525px' }}>
        <div className='container mx-auto'>
          <div className='flex flex-wrap justify-center mt-5 md:mt-16 lg:mx-4'>
            <div className='lg:w-full flex-none'>
              <div className='relative text-center z-10 p-0'>
                <h2 className="font-poppins text-white font-semibold text-3xl sm:text-4xl md:text-4xl leading-[42px] sm:leading-[48px] lg:leading-[52px] my-5">Your Trusted Financial Partner Since 2010<span className="text-color-2 text-5xl">.</span></h2>
                <p className="text-base text-white sm:text-lg lg:text-xl mb-8 font-light"> we specialize in delivering expert solutions in auditing, taxation, finance, and compliance. Our dedicated team of professionals is committed to helping businesses and individuals achieve financial excellence. </p>
                <div className="mb-8">
                  <ul className="flex item-center justify-center gap-8">
                    <li className="px-8 py-3 rounded-full bg-color-2 shadow-2xl">tax planning</li>
                    <li className="px-8 py-3 rounded-full bg-color-2 shadow-2xl">compliance </li>
                    <li className="px-8 py-3 rounded-full bg-color-2 shadow-2xl">project financing</li>
                    <li className="px-8 py-3 rounded-full bg-color-2 shadow-2xl">GST registration</li>
                    <li className="px-8 py-3 rounded-full bg-color-2 shadow-2xl">secretarial services</li>
                  </ul>
                </div>
                <p className="text-base text-white sm:text-lg lg:text-xl mb-8 underline"> Contact us today   </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg relative top-28 lg:-top-10 flex flex-wrap gap-8 md:mt-16 lg:mx-4 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-8 p-12 w-full">
              {/* Card 1 */}
              <div className="flex flex-row gap-4 items-center">
                <img src={Notepad} alt="Notepad Icon" className="w-20" />
                <div className="ml-8">
                  <h3 className="text-xl font-semibold py-2">We Help You Achieve Financial Excellence</h3>
                  <p className="text-sm lg:text-base py-2">
                  With expert tax planning, compliance services, and tailored financial solutions, we ensure your business thrives while staying compliant.
                  </p>
                  {/* <button className="text-color-1 font-semibold px-4 py-2 rounded hover:text-color-2">
                    View Details
                  </button> */}
                </div>
              </div>
              {/* Vertical Line */}
              <div className="hidden lg:block border-l border-gray-300"></div>
              {/* Card 2 */}
              <div className="flex flex-row gap-4 items-center">
                <img src={Notepad} alt="Notepad Icon" className="w-20" />
                <div className="ml-8">
                  <h3 className="text-xl font-semibold py-2">We Help You Simplify Complex Financial Processes</h3>
                  <p className="text-sm lg:text-base py-2">
                  From company formation to audits and project financing, our comprehensive services make managing finances effortless.
                  </p>
                  {/* <button className="text-color-1 font-semibold px-4 py-2 rounded hover:text-color-2">
                    View Details
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className='relative pt-36 pb-12 bg-contain '>
        <div className='container mx-auto'>
          <div className="flex justify-center px-2 lg:px-4 ">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-full">
              <div className="relative z-10 text-center p-0">
                <h2 className="font-poppins text-slate-900 font-semibold text-3xl sm:text-4xl md:text-4xl leading-[42px] sm:leading-[48px] lg:leading-[52px] my-5">Some of the Key Features We Offer <span className="text-color-1 text-4xl">Manjul Soni & </span><span className="text-color-2 text-4xl">Co.</span></h2>
                <p className="text-base text-black sm:text-lg lg:text-xl mb-8 font-light"> Any service Types that you like. </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <ServiceCards />
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className='relative py-28 bg-contain bg-[#e6eff8] '>
        <div className='container mx-auto'>
          <div className="flex justify-center px-2 lg:px-4 ">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-full">
              <div className="relative z-10 text-center p-0">
                <h2 className="text-slate-900 font-semibold text-3xl sm:text-4xl md:text-4xl text-center lg:text-left leading-[42px] sm:leading-[48px] lg:leading-[52px] my-5">Clients Words<span className="text-color-2 text-5xl">.</span> </h2>
                <p className="text-base sm:text-lg lg:text-xl text-center lg:text-left w-full lg:w-2/3 mb-8 font-light"> Using the outcomes from the job, we will put together a plan for the most effective marketing strategy to get the best results. </p>
              </div>
            </div>
            <div className="w-full">
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
