import my from "../assets/my.jpg";

const Hero = () => {
  return (
    <section id="home" className="container mx-auto px-4 py-12 md:py-20">
      {/* 🔴 PASTE YOUR HERO JSX HERE (unchanged) */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Profile Picture Column */}
          <div className="lg:w-1/3 mb-10 lg:mb-0 flex flex-col items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-gray-300 flex items-center justify-center">
                <div className="text-center text-white ">
                  <img src={my} alt="John Doe" />
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <h1 className="text-3xl font-bold text-gray-800">Emmanuel  Olasunkanmi</h1>
              <p className="text-lg text-gray-600 mt-2">Software Developer & Electrical Engineer</p>
              <div className="flex justify-center space-x-4 mt-6">
                <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition duration-300">
                  Hire Me
                </a>
                <a href="#contact" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-medium transition duration-300">
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="lg:w-2/3 lg:pl-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Bridging <span className="text-blue-600">Digital</span> & <span className="text-orange-600">Physical</span> Solutions
            </h2>
            <p className="text-xl text-gray-600 mt-6">
              I combine expertise in software development, electrical engineering, and welding fabrication to deliver comprehensive technical solutions. From designing applications to building physical systems, I provide end-to-end project execution.
            </p>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Software Development</h3>
                <p className="text-gray-600 mt-2">Custom web applications, mobile solutions, and cloud-based systems tailored to your business needs.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.265-.633z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Electrical Engineering</h3>
                <p className="text-gray-600 mt-2">Circuit design, automation systems, power solutions, and industrial control systems implementation.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-500">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Welding & Fabrication</h3>
                <p className="text-gray-600 mt-2">Professional metal fabrication, custom welding projects, and structural work with precision and safety.</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;