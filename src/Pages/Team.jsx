// import React from 'react'
import HeaderSection from "../Components/HeaderSection"
import bgteam from "../Images/bgteam.jpg"
import team1 from "../Images/team1.jpg"

const Team = () => {
  return (
    <>
      <HeaderSection bgImage={bgteam}
        heading="Team "
      // subHeading="Have any questions? Reach out to us from our contact form."
      />

      <div className='relative py-4 bg-contain '>
        <div className='container mx-auto'>
          <div className="flex justify-center px-2 lg:px-4 ">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
              <div className="relative z-10 text-center p-0">
                <h2 className="font-poppins text-slate-900 font-semibold text-3xl sm:text-4xl md:text-4xl leading-[42px] sm:leading-[48px] lg:leading-[52px] my-5"> Meet Our Team<span className="text-color-2 text-5xl">.</span> </h2>
                <p className="text-base sm:text-lg lg:text-xl mb-8 font-light"> Our Experts </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='relative py-4 bg-contain '>
        <div className='container mx-auto'>
          <div className="flex justify-center px-2 lg:px-4 ">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
              <div className="flex justify-center items-center gap-6 bg-white rounded-xl relative z-10 text-center p-0">
                <img src={team1} alt="" className="w-64 rounded-xl"/>
                <div className="">
                  <h4 className="text-left font-semibold  text-lg">Manjul Soni</h4>
                  <p className="text-color-1">Founder & Owner of Manjul Soni & co</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Team