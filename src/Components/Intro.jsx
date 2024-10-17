import React from 'react'
import './Intro.css'
import './Responsive.css'
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import {useTypewriter,Cursor} from 'react-simple-typewriter'

const Intro = () => {
  var [typeEffect] = useTypewriter({
    words:['MERN Developer','Freelancer','Full stack Developer'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:30,
    Color:'blue',
    cursorChar:'|',
  })

  return (
    <>

    <div className='grid-rows-1 border flex justify-around p-6 intro-color '>
         <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3  intro">
              <div className='text-7xl my-8 flex-column justify-center items-center ps-14'>
                <h1 className='text-3xl font-semibold mt-1'>Hi, There! </h1>
                <h1 className='text-6xl font-semibold mt-4'>I'm <span className='myname'>Himanshu Nigam</span> </h1>
                <h1 className='text-3xl font-semibold mt-4'>And I'm a <span className='myname'>{typeEffect} </span></h1>
                <p className='text-xl font-400 mt-1 in-p'>Hello, I'm Himanshu Nigam, an accomplished Full Stack Website Developer with a year of hands-on experience. Proficient in HTML, CSS, JS, Bootstrap, Tailwind CSS, MERN Stack ( React js, Node js, Express js, MongoDB ). Committed to delivering innovative solutions, I merge creativity with technical skills for impactful digital experiences.</p>
                {/* <h1>I'm </h1>
                <h1>Er. Himanshu </h1>
                <h1> Nigam </h1> */}
                
              </div>

            <div className='ps-14 intro-leftdata '>
              <div className='icons'>
                <p className='text-base font-semibold leading-9'>A fullstack website developer</p>
                <p className='text-base font-semibold flex items-center leading-4'><IoIosCall/> <span className='mx-1 me-2'>+918318159403</span><CiMail /><span className='mx-1 '>hnigam853@gmail.com</span></p>
              </div>  
                <button type="submit" className="left-bt mt-10 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                {/* <a href="https://wa.me/918318159403">Say Hello</a> */}
                <a href="https://wa.me/918318159403" target='_blank'>Hire Me</a>
                </button>
                 
                <button type="download" className=" ms-5 left-bt mt-10 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                <a href="document/My_Resume.pdf" target='_blank'> Download CV </a>
                </button>
               
                 
            </div>
              </div>

              <div className="sm:col-span-3 flex justify-center  ms-4 me-4  ">
                 {/* <div className='borde'>
                 <div className='borde2'></div>
                 </div> */}
                 <div className='mt-7 ms-3 '>
                  <div className='border-8 w-72 m-auto overflow-hidden img-bor'>
                    <img src='images/pp1.png' alt='' />
                  </div>
              </div>
              </div>

              {/* <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}

              {/* <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div> */}

              {/* <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    id="street-address"
                    name="street-address"
                    type="text"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}

              {/* <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}

              {/* <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    id="region"
                    name="region"
                    type="text"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}

              {/* <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    id="postal-code"
                    name="postal-code"
                    type="text"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}
            </div>
          </div>
        {/* <div className='grid-cols-1'> */}
            {/* <div className='text-7xl my-8 flex-column justify-center items-center'>
                <h1>I'm </h1>
                <h1>Er. Himanshu </h1>
                <h1> Nigam </h1>
            </div>

            <div>
                <p className='text-xl leading-9'>A fullstack website developer</p>
                <p className='text-xl flex items-center leading-8'><IoIosCall/> <span className='mx-1 me-4'>+91831859403</span><CiMail /><span className='mx-1 '>hnigam853@gmail.com</span></p>
            </div> */}
           
        {/* </div> */}
        {/* <div className='grid-cols-1'>
            <div className='text-7xl my-8 flex-column justify-center items-center'>
                <h1>I'm </h1>
                <h1>Er. Himanshu </h1>
                <h1> Nigam </h1>
            </div>

            <div>
                <p className='text-xl leading-9'>A fullstack website developer</p>
                <p className='text-xl flex items-center leading-8'><IoIosCall/> <span className='mx-1 me-4'>+91831859403</span><CiMail /><span className='mx-1 '>hnigam853@gmail.com</span></p>
            </div>
           
        </div> */}

        {/* <div className='grid-cols-1'>
           
        </div> */}
    </div>
  
    </>
  )
}

export default Intro
