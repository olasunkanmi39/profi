import skills from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-16">
      {/* 🔴 PASTE YOUR SKILLS JSX HERE (unchanged) */}
          <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Technical Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Software Skills */}
            <div className="bg-gradient-to-b from-blue-50 to-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold ml-4 text-gray-800">Software Development</h3>
              </div>
              <ul className="space-y-3">
                {skills.software.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Electrical Skills */}
            <div className="bg-gradient-to-b from-green-50 to-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.265-.633z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold ml-4 text-gray-800">Electrical Engineering</h3>
              </div>
              <ul className="space-y-3">
                {skills.electrical.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Welding Skills */}
            <div className="bg-gradient-to-b from-orange-50 to-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold ml-4 text-gray-800">Welding & Fabrication</h3>
              </div>
              <ul className="space-y-3">
                {skills.welding.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Skills;