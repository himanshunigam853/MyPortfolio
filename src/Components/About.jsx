import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import './About.css'
import './Responsive.css'

const About = () => {
  return (
    <>
                {/* Row1 */}
    <div id='About' className="grid-rows-1 border flex justify-around about-color ">
        <div className="border-b border-gray-900/10 ">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 flex justify-around">
                  {/* Left section */}
            <div className="sm:col-span-3 m-auto">
              {/* <div className='mt-7 ms-12 '>
                  <div className='border-8 w-72 m-auto overflow-hidden img-bor'>
                    <img src='images/img.jpeg' alt='' />
                  </div>
              </div> */}
              <div className='borde'>
                 <div className='bord2'>
                   
                 </div>
                 </div>
            </div>

                  {/* Right section */}
            <div className="sm:col-span-3 ">
                <div className='p-5 right-heading'>
                    <h1 className='text-4xl font-semibold '>Professional</h1>
                    <p className='text-justify pe-14 pt-5 '>A dedicated and motivated individual with a strong foundation in web development, WordPress, and Java programming. Completed multiple certifications, including a comprehensive web development course from DigiCoders and a 40-hour WordPress website development course from Billi 4 You Institute. Additionally, successfully completed a 45-day summer training in Java from DigiCoders. Well-versed in creating responsive websites and developing web applications. Eager to contribute and grow in a dynamic and challenging work environment. Looking forward to applying my technical knowledge and learning new technologies to drive impactful results.</p>
                    {/* <p className='text-justify pe-14 pt-5'>Currently I'm Working as Senior Project Manager in DigiCoders Technologies Private Limited (Lucknow, Uttar Pradesh, India) Form January-2019 to Present, DigiCoders Technologies Private Limited has a great team of Software, Website and Mobile Application Development, it is also a top growing training providing company in North India in last 4 years, it covers all Polytechnic and B. Tech colleges in providing training and workshops in campus of engineering colleges of UP and quickly looking to expend its ventures. It has more than 30 members in team of software development and completed more than 750 projects and counting.</p> */}
                </div>
            </div>

          </div>
        </div>

    </div>

                {/* Row2 */}
    <div className="grid-rows-1 border flex justify-around  about-color">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 flex justify-around">
                  {/* Left section */}
            <div className="sm:col-span-3">
                <div className='ps-5'>
                      <h1 className='text-4xl text-center font-semibold left-heading'>Educations</h1>
                      <div className='edu-list'>
                      <ul className='mt-5 ps-14 border-5 '>
                          <li className='flex items-center'><FaLongArrowAltRight/> <span className='ms-2'>PGDCA from Government Polytechnic Kanpur (2024)</span></li>
                          <li className='flex items-center'><FaLongArrowAltRight/> <span className='ms-2'>BCA from Shri Krishna University, Chhatarpur (2021)</span></li>
                          <li className='flex items-center'><FaLongArrowAltRight/> <span className='ms-2'>Senior Secondary form UP Board(2017)</span></li>
                          <li className='flex items-center'><FaLongArrowAltRight/> <span className='ms-2'>Secondary form UP Board(2015)</span></li>
                      </ul>
                      </div>
                  </div>
            </div>

                  {/* Right section */}
            <div className="sm:col-span-3">
                <div className='ps-5'>
                      <h1 className='text-4xl font-semibold  right-heading'>Training & Certificate</h1>
                      <ul className='mt-5'>
                          <li className='flex items-center m-2'><FaLongArrowAltRight/><span className='ms-2'>Completed 45 Days Summer training on JAVA in 2023 during Polytechnic Diploma.</span></li>
                          <li className='flex items-center m-2'><FaLongArrowAltRight/><span className='ms-2'>WordPress Website Development (40 Hours) – Billi 4 You Institute</span></li>
                          <li className='flex items-center m-2'><FaLongArrowAltRight/><span className='ms-2'>Web development (56 Days) – Internshala Institute</span></li>
                          {/* <li className='flex items-center m-2'><FaLongArrowAltRight/><span className='ms-2'>Completed 56 Days Online training on Web Development in 2021 during BCA.</span></li>         */}
                      </ul> 
                  </div>
            </div>

          </div>
        </div>

    </div>
                {/* Row3 */}
    <div className="grid-rows-1 border flex justify-around  about-color">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 flex justify-around">
                  {/* Left section */}
            <div className="sm:col-span-3">
                <div className='ps-5'>
                      <h1 className='text-4xl text-center font-semibold left-heading'>Internship</h1>

                      <div className='edu-list2'>
                      <ul className='mt-5 border-5'>
                      <h1 className='text-xl text-center font-semibold left-heading2'>Web Development Intern – DigiCoders | [Aug -present]</h1>
                          <li className='flex items-center'><FaLongArrowAltRight/> <span className='ms-2'>Currently gaining practical experience in web development by working on real-world projects.</span></li>
                          <li className='flex items-center'><FaLongArrowAltRight/> <span className='ms-2'>Collaborating with senior developers to build responsive websites.</span></li>
                          <li className='flex items-center'><FaLongArrowAltRight/> <span className='ms-2'>Enhancing skills in HTML, CSS, JavaScript, and WordPress.</span></li>
                          <li className='flex items-center'><FaLongArrowAltRight/> <span className='ms-2'>Secondary form UP Board(2015)</span></li>
                      </ul>
                      </div>
                  </div>
            </div>

                  {/* Right section */}
            <div className="sm:col-span-3">
                <div className='ps-5'>
                      <h1 className='text-4xl font-semibold  right-heading'>Skiils</h1>
                      <ul className='mt-5'>
                          <li className='flex items-center m-2'><FaLongArrowAltRight/><span className='ms-2'><span className='font-semibold text-base'>Web Development:</span> HTML, CSS, JavaScript, WordPress</span></li>
                          <li className='flex items-center m-2'><FaLongArrowAltRight/><span className='ms-2'><span className='font-semibold text-base'>Programming Languages:</span> PHP, React</span></li>
                          <li className='flex items-center m-2'><FaLongArrowAltRight/><span className='ms-2'><span className='font-semibold text-base'> Tools:</span> Visual Studio Code</span></li>
                          <li className='flex items-center m-2'><FaLongArrowAltRight/><span className='ms-2'><span className='font-semibold text-base'> Frameworks: </span> Bootstrap, Tailwind</span></li>
                          <li className='flex items-center m-2'><FaLongArrowAltRight/><span className='ms-2'><span className='font-semibold text-base'> Database:  </span> MySQL (basic knowledge)</span></li>
                        
                      </ul> 
                  </div>
            </div>

          </div>
        </div>

    </div>

    </> 
  )
}

export default About
