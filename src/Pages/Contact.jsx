import { useState, useEffect, useRef } from "react";
// import { supabase } from "../../supabaseClient";
import HeaderSection from "../Components/HeaderSection"
import bgImage from "../Images/bgcontact.jpg"
import { FaPhone, FaMapLocationDot, FaClock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    requirement: "",
    message: "",
  });

  // const [isSubmitting, setIsSubmitting] = useState(false);

  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      delay: 200,
      once: true,
    });

    // Initialize Google Map
    const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
    const callbackName = "initMap";

    // Define the initMap function globally
    window[callbackName] = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 41.8781, lng: -87.6298 }, // Chicago coordinates
        zoom: 10,
      });

      // Add a marker
      new window.google.maps.Marker({
        position: { lat: 41.8781, lng: -87.6298 },
        map: map,
        title: "Our Location",
      });
    };

    loadGoogleMapsScript(apiKey, callbackName);
  }, []);

  const loadGoogleMapsScript = (apiKey, callbackName) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=${callbackName}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  };

  useEffect(() => {
    const apiKey = "YOUR_API_KEY"; // Replace with your Google Maps API key
    const callbackName = "initMap";

    // Define the initMap function globally
    window[callbackName] = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 41.8781, lng: -87.6298 }, // Chicago coordinates
        zoom: 10,
      });

      // Add a marker
      new window.google.maps.Marker({
        position: { lat: 41.8781, lng: -87.6298 },
        map: map,
        title: "Our Location",
      });
    };

    loadGoogleMapsScript(apiKey, callbackName);
  }, []);


  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   const { data, error } = await supabase.from("contacts").insert([formData]);

  //   if (error) {
  //     console.error("Error submitting contact form:", error.message);
  //     toast.error("There was an error submitting the form. Please try again."); // Show error toast
  //   } else {
  //     console.log("Form submitted successfully:", data);
  //     toast.success("Thank you for your message! We’ll get back to you soon."); // Show success toast
  //     setFormData({
  //       name: "",
  //       email: "",
  //       mobile: "",
  //       requirement: "",
  //       message: "",
  //     });
  //   }

  //   setIsSubmitting(false);
  // };


  return (
    <>
      <HeaderSection bgImage={bgImage}
        heading="Contact Us"
        subHeading="Have any questions? Reach out to us from our contact form."
      />

      <div className='py-8'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap justify-center mt-0 md:mt-16 lg:mx-4'>
            <div className="lg:w-4/12 self-center px-4">
              <div className="visible mb-5 bg-color-1 rounded-xl">
                <div className="p-7 shadow-lg">
                  <div className="flex flex-col items-center">
                    <FaMapLocationDot className="my-3 text-5xl text-white font-black" />
                    <span className="text-2xl font-bold text-white my-4"> Location </span>
                    <Link className="text-center text-inherit text-lg text-white"> 70 W. Madison Street, St. 1400 Chicago, IL 60602</Link>
                  </div>
                </div>
              </div>
              <div className="visible mb-5 bg-color-1 rounded-xl">
                <div className="p-7 shadow-lg">
                  <div className="flex flex-col items-center">
                    <FaPhone className="my-3 text-5xl text-white font-black" />
                    <span className="text-2xl font-bold text-white my-4"> Call us </span>
                    <Link className="text-center text-inherit text-lg text-white">1234567890</Link>
                    <Link className="text-center text-inherit text-lg text-white">1234567890</Link>
                  </div>
                </div>
              </div>
              <div className="visible mb-5 bg-color-1 rounded-xl">
                <div className="p-7 shadow-lg">
                  <div className="flex flex-col items-center">
                    <MdEmail className="my-3 text-5xl text-white font-black" />
                    <span className="text-2xl font-bold text-white my-4"> Send Mail to </span>
                    <Link className="text-center text-inherit text-xl text-white">info@domain.com</Link>
                    <Link className="text-center text-inherit text-xl text-white">info@domain.com</Link>
                  </div>
                </div>
              </div>
              <div className="visible mb-5 bg-color-1 rounded-xl">
                <div className="p-7 shadow-lg">
                  <div className="flex flex-col items-center">
                    <FaClock className="my-3 text-5xl text-white font-black" />
                    <span className="text-2xl font-bold text-white my-4"> Working Hours </span>
                    <Link className="text-center text-inherit text-xl text-white">Mon-Fri: 8.00am - 5.30pm</Link>
                    <Link className="text-center text-inherit text-xl text-white">Sat: 9.00am - 2.00pm</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-center lg:w-8/12 px-4">
              <div className='relative z-10 p-0 text-center lg:text-left'>
                <h2 className='font-poppins text-slate-900 font-semibold text-3xl lg:text-5xl leading-[52px]'>Have Question? Write a Message</h2>
                <p className="my-7 text-lg text-slate-500">We will catch you as early as we receive the message</p>
              </div>
              <div className="overflow-hidden">
                <form
                  // onSubmit={handleSubmit} 
                  id="contactForm" className="bg-blue-100 p-10 rounded-xl">
                  <div className="flex flex-wrap">
                    <div className="relative w-full lg:w-1/2 px-3 flex-none mb-0">
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter name"
                        value={formData.name}
                        onChange={(e) => {
                          const value = e.target.value;
                          // Only update if the value consists of alphabet characters (a-z, A-Z)
                          if (/^[a-zA-Z]*$/.test(value)) {
                            handleChange(e);
                          }
                        }}
                        className="w-full text-base bg-white h-12 px-4 rounded-full mb-4"
                        required
                      />
                    </div>
                    <div className="relative w-full lg:w-1/2 px-3 flex-none mb-0">
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full text-base bg-white h-12 px-4 rounded-full mb-4"
                        required
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap">
                    <div className="relative w-full lg:w-full px-3 flex-none mb-0">
                      <input
                        type="text"
                        id="mobile"
                        placeholder="Enter mobile"
                        value={formData.mobile}
                        onChange={(e) => {
                          const value = e.target.value;
                          // Allow only 10 digits and restrict input to exactly 10 digits
                          if (/^\d{0,10}$/.test(value) && value.length <= 10) {
                            handleChange(e);
                          }
                        }}
                        minLength="10"
                        maxLength="10"
                        className="w-full text-base bg-white h-12 px-4 rounded-full mb-4"
                        required
                      />
                    </div>
                    {/* <div className="relative w-full lg:w-1/2 px-3 flex-none mb-0">
                      <select
                        id="requirement"
                        value={formData.requirement}
                        onChange={handleChange}
                        className="text-slate-500 w-full text-base bg-white h-12 px-4 rounded-full mb-4"
                        required
                      >
                        <option value="">Select Requirement</option>
                        <option value="Web Development">Web Development</option>
                        <option value="DevOps">DevOps</option>
                        <option value="Cloud">Cloud</option>
                        <option value="AI/ML">AI / ML</option>
                        <option value="UI/UX">Web Design (UI/UX)</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                      </select>
                    </div> */}
                  </div>
                  <div className="relative flex-none mb-2 px-3 w-full">
                    <textarea
                      id="message"
                      rows="5"
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={(e) => {
                        const value = e.target.value;
                        // Allow only alphabets, numbers, and specific symbols (e.g., space, comma, period, exclamation mark)
                        if (/^[a-zA-Z0-9,.\s!]*$/.test(value)) {
                          handleChange(e);
                        }
                      }}
                      className="p-4 w-full h-full bg-white rounded-3xl"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    // disabled={isSubmitting}
                    className="flex relative ml-4 my-2 justify-center text-base font-Poppins rounded-full bg-color-1 hover:bg-color-2 px-8 py-3 text-slate-50 hover:shadow-lg hover:shadow-slate-200 transition-all ease-linear group overflow-hidden"
                  >
                    Submit
                    {/* {isSubmitting ? "Submitting..." : "Submit"} */}
                  </button>
                </form>
              </div>
            <div
              ref={mapRef}
              className="w-full h-96 rounded-xl mt-8"
            ></div>
            </div>
          </div>
        </div>
      </div >
      {/* <ToastContainer /> */}
    </>
  )
}

export default ContactUs