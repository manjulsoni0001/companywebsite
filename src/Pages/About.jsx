import HeaderSection from '../Components/HeaderSection'
import bgImage from "../Images/bgAbout.jpg"
import imgAbout1 from "../Images/imgAbout1.jpg"

import iconAbout1 from "../Images/iconAbout1.svg"
import iconAbout2 from "../Images/iconAbout2.svg"
import iconAbout3 from "../Images/iconAbout3.svg"


const About = () => {
  return (
    <>
      <HeaderSection bgImage={bgImage}
        heading="About"
        subHeading="A company turning ideas into beautiful things."
      />

      <div className="py-8 w-full">
        <div className='container mx-auto py-4'>
          <div className="flex flex-wrap lg:flex-nowrap items-center w-full">
            <div className="w-full lg:w-1/2 px-8">
              <div className="text-left">
                <p>Welcome There!</p>
                <h2 className="font-poppins text-slate-900 font-semibold text-3xl sm:text-4xl md:text-4xl leading-[42px] sm:leading-[48px] lg:leading-[52px] my-5">
                Welcome to Manjul Soni & Co., where we transform complex financial ideas into simplified, effective, and impactful solutionsy<span className="text-color-2 text-5xl">.</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl mb-8 font-light">
                Founded by CA Manjul R. Soni, the firm was established to bridge the gap between intricate financial requirements and practical solutions. Over the years, we have expanded our expertise to encompass a broad spectrum of services, catering to diverse industries and client needs. Partnered with CA Manish Nair, our team is enriched with years of experience in auditing, taxation, corporate compliance, and financial consulting.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-10">
              <img src={imgAbout1} alt="" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto py-4 p-2'>
        {/* <h1 className="font-semibold mb-4 text-4xl text-slate-800" style={{ lineHeight: '1.15' }}>How We Do It?</h1> */}
        {/* <h5 className="text-slate-600 text-base md:text-xl mb-4">We make your spending stress-free so you can stay in complete control.</h5> */}

        <div className="relative flex flex-wrap process-wrapper line">
          <div className="hidden lg:block absolute top-10 -right-48 w-[75%] h-px bg-gray-100 z-0 transform -translate-x-1/2"></div>
          <div className="relative md:w-1/2 lg:w-1/3 z-2 p-4">
            <span className="relative text-xl w-12 h-12 opacity-100 p-0 border rounded-full inline-flex items-center justify-center text-medium-blue bg-blue-100">
              <span className="number">01</span>
            </span>
            <p className="my-2 text-gray-500">We are helpers</p>
            <h4 className="my-2 text-lg font-semibold text-gray-700">Advice and Guides</h4>
            <p className="mb-0 text-gray-500">
            Based on the results of our financial analysis and audits, Manjul Soni & Co. formulates tailored strategies to optimize your business's financial planning and compliance.
            </p>
          </div>

          <div className="relative md:w-1/2 lg:w-1/3 z-10 p-4">
            <span className="relative text-xl w-12 h-12 opacity-100 p-0 border rounded-full inline-flex items-center justify-center bg-medium-blue text-white">
              <span className="number text-black">02</span>
            </span>
            <p className="my-2 text-gray-500">Ready To Guide You</p>
            <h4 className="my-2 text-lg font-semibold text-gray-700">Support in Person</h4>
            <p className="mb-0 text-gray-500">
            Providing assistance in creating and maintaining comprehensive corporate accounting policies and procedures tailored to your business needs
            </p>
          </div>

          <div className="relative md:w-1/2 lg:w-1/3 z-10 p-4">
            <span className="relative text-xl w-12 h-12 opacity-100 p-0 border rounded-full inline-flex items-center justify-center text-medium-blue bg-blue-100">
              <span className="number">03</span>
            </span>
            <p className="my-2 text-gray-500">Assured Profit</p>
            <h4 className="my-2 text-lg font-semibold text-gray-700">Super Growth</h4>
            <p className="mb-0 text-gray-500">
              Best Strategies to businessmen for accelerating the company and clients growth.
            </p>
          </div>
        </div>
      </div>

      <div className="py-8 w-full">
        <div className='container mx-auto py-4 p-2'>
          <div className="flex flex-wrap lg:flex-nowrap items-center w-full">
            <div className="w-full lg:w-1/2 px-8">
              <div className="text-left">
                <h2 className="font-poppins text-slate-900 font-semibold text-3xl sm:text-4xl md:text-4xl leading-[42px] sm:leading-[48px] lg:leading-[52px] my-5">
                  We are Leaders on the Market<span className="text-color-2 text-5xl">.</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl mb-8 font-light">
                Since 2010, our firm has been dedicated to helping individuals and businesses navigate their financial journeys with precision and care.               </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-10">
              <div className="flex items-center gap-2 m-4 justify-between space-x-6 p-6 bg-gray-100 rounded-lg">
                <div className="bg-color-2 rounded-full p-4 flex items-center justify-center">
                  <img src={iconAbout1} alt="Icon" className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700">Satisfied Clients</h4>
                  <p className="text-gray-500">Excellent customer service</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">2064</p>
                </div>
              </div>
              <div className="flex items-center gap-2 m-4 justify-between space-x-6 p-6 bg-gray-100 rounded-lg">
                <div className="bg-color-2 rounded-full p-4 flex items-center justify-center">
                  <img src={iconAbout2} alt="Icon" className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700">Successful Business</h4>
                  <p className="text-gray-500">Long Term gains and profits</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">850</p>
                </div>
              </div>
              <div className="flex items-center gap-2 m-4 justify-between space-x-6 p-6 bg-gray-100 rounded-lg">
                <div className="bg-color-2 rounded-full p-4 flex items-center justify-center">
                  <img src={iconAbout3} alt="Icon" className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700">Awards Won</h4>
                  <p className="text-gray-500">Market-leading experience</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">68</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About