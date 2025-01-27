import { useState, useEffect } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import User from '../Images/user.jpg'; // Make sure to update the image path

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample testimonials data
  const testimonials = [
    {
      name: 'Piyush Sharma',
      position: 'Founder at Itawa Real Estate',
      image: User,
      text: 'I have been working with many CAs hit working with Manjul Soni & Co. was amazing. Starting from company formation to consulting in every small thing, I have good experience. They are incredibly knowledgeable, thorough, and always professional. Their guidance has been invaluable, and they are always available to answer any questions I have. I highly recommend CA Manjul Soni to anyone in need of a reliable and skilled chartered accountant.',
    },
    {
      name: 'Harpalsinh Vaghela',
      position: 'CEO',
      image: User,
      text: 'Right from our incorporation as a proprietor firm to recently upgrading to Private Limited, Manjul Soni & Team has been a big part of our corporate journey. Manjulbhai is excellent at what he does and always advices us the best! His entire team is very helpful. We have been super happy for all of their services. Highly recommended!',
    },
    {
      name: 'Reepal Soni',
      position: 'CTO at ABC Tech',
      image: User,
      text: 'A well reputed firm having a team with in-depth knowledge. Extremely professional and prompt, excellent service and maintaing high confidentiality. Very good staff and nice  working environment. They nurture the client relationship',
    },
    {
      name: 'Kashyap Patel',
      position: 'Product Manager at Acme Inc.',
      image: User,
      text: 'From last so many years I filled my IT returns with Manjulbhai.his knowledge of Tax Filling rules are outstanding and always ready to spare time to meet you and discuss your issues positively.And also his team is very accurate in there work.',
    }
  ];

  // Function to go to the next testimonial
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Use useEffect to auto-cycle the testimonials
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="relative bg-white pb-10 lg:py-14 px-0 lg:px-10 w-full rounded-lg shadow-lg">
      <div className="overflow-hidden w-full">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-full px-0">
              <div className="relative overflow-hidden">
                <div className="bg-white p-5 lg:py-4 lg:px-8 rounded-lg shadow-md transition-all duration-300">
                  <div className="flex items-center pb-2">
                    <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover" />
                    <div className="ml-4 lg:ml-5">
                      <h5 className="text-base lg:text-xl font-semibold text-slate-800">{testimonial.name}</h5>
                      <p className="text-sm md:text-base text-slate-500">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-sm md:text-base lg:text-lg text-slate-500 mb-6 leading-relaxed">{testimonial.text}</p>
                    <span className="absolute right-5 lg:right-10 bottom-0 text-4xl lg:text-6xl text-green-400">
                      <FaQuoteRight />
                    </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
        {testimonials.map((_, index) => (
          <button key={index} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-green-400' : 'bg-gray-300'}`} onClick={() => setCurrentIndex(index)} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;