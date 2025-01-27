  import HeaderSection from '../Components/HeaderSection'
import bgImage from '../Images/bgServices.jpg'
import imgService1 from '../Images/imgService1.jpg'
import ServiceCards from '../Components/ServiceCards'

const Services = () => {
  return (
    <>
      <HeaderSection bgImage={bgImage}
        heading="Services"
        subHeading="We are dedicated to providing top-notch services."
      />

      <div className="py-8 w-full">
        <div className="flex flex-wrap lg:flex-nowrap items-center w-full">
          <div className="w-full lg:w-1/2">
            <img src={imgService1} alt="" className="w-full h-auto" />
          </div>
          <div className="w-full lg:w-1/2 px-8">
            <div className="text-center">
              <h2 className="font-poppins text-slate-900 font-semibold text-3xl sm:text-4xl md:text-4xl leading-[42px] sm:leading-[48px] lg:leading-[52px] my-5">
                We are always ahead<span className="text-color-2 text-5xl">.</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl mb-8 font-light">
                Professional solutions for your business development.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="w-full sm:w-1/3 lg:w-1/3 p-4 bg-white rounded-lg shadow-lg">
                <p className="text-black text-xl font-semibold p-2 border-2 border-color-2 rounded-full">
                  2064
                </p>
                <p className="text-lg font-semibold mt-4">Satisfied Clients</p>
                <p className="text-base">Excellent customer service</p>
              </div>
              <div className="w-full sm:w-1/3 lg:w-1/3 p-4 bg-white rounded-lg shadow-lg">
                <p className="text-black text-xl font-semibold p-2 border-2 border-color-2 rounded-full">
                  850
                </p>
                <p className="text-lg font-semibold mt-4">Investments</p>
                <p className="text-base">Long Term gains and profits</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className='relative pt-12 pb-12 bg-contain '>
        <div className='container mx-auto'>
          <div className="flex justify-center px-2 lg:px-4 ">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-full">
              <div className="relative z-10 text-center p-0">
                <h2 className="font-poppins text-slate-900 font-semibold text-3xl sm:text-4xl md:text-4xl leading-[42px] sm:leading-[48px] lg:leading-[52px] my-5">Some of the Avid Features from <span className="text-color-1 text-4xl">Manjul Soni & </span><span className="text-color-2 text-4xl">Co.</span></h2>
                <p className="text-base text-black sm:text-lg lg:text-xl mb-8 font-light"> Any Investment Types that you like. </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <ServiceCards />
          </div>
        </div>
      </div>

    </>
  )
}

export default Services