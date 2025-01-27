// import React from 'react';
import PropTypes from 'prop-types';

const HeaderSection = ({ bgImage, heading, subHeading }) => {
  return (
    <div className="relative p-8 md:p-20 lg:mt-0 w-full h-full text-center overflow-hidden z-0 bg-gradient-to-r from-[#ffdee9] to-[#c8fff4] bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-gray-950 opacity-75 z-0"></div>
      <div className="relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center mt-0 md:mt-16">
            <div className="w-full md:w-2/3 px-4 md:px-20 self-center">
              <h2 className="text-lg md:text-xl font-semibold text-white">{heading}</h2>
              <h2 className="text-2xl md:text-4xl font-semibold mt-4 text-white">{subHeading}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeaderSection.propTypes = {
  bgImage: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default HeaderSection;