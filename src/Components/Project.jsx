import React,{ useEffect }  from 'react'
import './Project.css'
// import Tilt  from 'react-tilt'
// import $ from 'jquery';
import Tilt from 'react-parallax-tilt';

const Project = () => {
 
  return (
    <>
      <div id='Project' className='grid-rows-1 border-2 flex-column p-6 project-color'>
        <h1 className='p-8 text-4xl font-semibold'>My Recent Work</h1>
        <div className='flex justify-around flex-wrap gap-7 mb-5 '>
            {/* 1 */}
          <Tilt>
            <div data-tilt className='grid-cols-3 border-2 border-solid rounded-e-3xl h-80 w-80 overflow-hidden'>
               <div className='pro m-5 '>
                <div>
                  <a href='http://qucikwritehub.free.nf/?i=1'><img src='images/pro1.png' alt='' className='port1-img cursor-pointer' /><hr></hr></a>
                  
                </div>
                <div className='content-body'>
                    
                  <div className='content-left'>
                      <h3 className='text-2xl font-semibold'><a href='http://qucikwritehub.free.nf/?i=1'>QucikwriteHub</a></h3>
                      <h5 className='text-xl pt-1'>Website</h5>
                  </div>
                
                  <div className='content-right'>
                      <img src='' alt='' />
                  </div>
            
                </div>
              </div>
            </div>
          </Tilt>

             {/* 2 */}
          <Tilt>
            <div data-tilt className='js-tilt grid-cols-3 border-2 border-solid rounded-s-3xl h-80 w-80 overflow-hidden'>
                <div className='pro m-5'>
                    <div>
                    <a href='http://freestore.great-site.net/' ><img src='images/pro2.png' alt='' className='port1-img' /><hr></hr></a>
                      
                    </div>
                    <div className='content-body'>
                        
                      <div className='content-left'>
                          <h3 className='text-2xl font-semibold'><a href='http://freestore.great-site.net/' >College Website</a></h3>
                          <h5 className='text-xl pt-1'>Website</h5>
                      </div>
                    
                      <div className='content-right'>
                          <img src='' alt='' />
                      </div>
                
                    </div>
                </div>
            </div>
          </Tilt>

          {/* 3 */}
          <Tilt>
            <div className=' grid-cols-3 border-2 border-solid rounded-e-3xl h-80 w-80 overflow-hidden'>
              <div  className='pro m-5'>
                    <div>
                    <a href='http://flipkarttest.free.nf/' ><img src='images/pro3.png' alt='img' className='port1-img' /><hr></hr></a>
                      {/* <img src='images/pro3.png' alt='img' className='port1-img' /><hr></hr> */}
                    </div>
                    <div className='content-body'>
                        
                      <div className='content-left'>
                          <h3 className='text-2xl font-semibold'><a href='http://flipkarttest.free.nf/' >Ecommerce</a></h3>
                          <h5 className='text-xl pt-1'>Website</h5>
                      </div>
                    
                      <div className='content-right'>
                          <img src='' alt='' />
                      </div>
                
                    </div>
                </div>
            </div>
          </Tilt>

          {/* 4 */}
          <Tilt>
            <div className='grid-cols-3 border-2 border-solid rounded-s-3xl h-80 w-80 overflow-hidden'>
                <div  className='pro m-5'>
                    <div>
                    <a href='https://himanshunigam.netlify.app/'><img src='images/portfolio.png' alt='' className='port1-img' /><hr></hr></a>
                      
                    </div>
                    <div className='content-body'>
                        
                      <div className='content-left'>
                          <h3 className='text-2xl font-semibold'><a href='https://himanshunigam.netlify.app/'>Portfolio</a></h3>
                          <h4 className='text-xl pt-1'>Website</h4>
                      </div>
                    
                      <div className='content-right'>
                          <img src='' alt='' />
                      </div>
                
                    </div>
                </div>
            </div>
          </Tilt>  
        </div>
    </div>
    </>
  )
}

export default Project
