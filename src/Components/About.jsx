import React from 'react'
import image4 from "../images/img2.jpg";

const About = () => {
  return ( 
    <section id='About' className="h-screen pt-40  bg-gradient-to-r from-gray-200 to-gray-700">
      <h1 className='flex items-center justify-center text-5xl font-serif font-bold'>ABOUT-ME</h1>

      <div className='flex  justify-center w-full items-center gap-40'>
                    <div className="flex justify-center md:justify-end w-full md:w-1/2">
    //                  <img
                      src={image4}
                      alt="Nikhil"
                        className="w-72 h-72 rounded-full shadow-lg border-4 mt-20 border-gray-400 object-cover"
                     />
                   </div>

                   <div className='w-full md:w-[80%] flex justify-center md:justify-start items-center'>
                    <h1 className="flex w-[80%]  text-2xl text-balance leading-relaxed">Hey there! I'm Nikhil Sharma, a passionate Frontend Web Developer with a knack for creating clean, responsive, and user-friendly web interfaces. I specialize in HTML, CSS, JavaScript, and modern frameworks like React.js.

                    I love turning ideas into real, interactive websites that not only look great but also provide a smooth user experience. I'm currently building my skills with Vite and working on exciting projects that challenge me to grow every day.</h1>
                   </div>
      </div>
    </section>
    
    
    // <section id='About' className="h-screen pt-40  bg-gradient-to-r from-gray-200 to-gray-700 "> 
    // <h1 className='flex items-center justify-center text-5xl font-serif font-bold'>ABOUT - ME</h1>
    //     <div className='flex flex-col md:flex-row justify-center w-full items-center'>
    //           <div className="mt-10 md:mt-0 md:w-1/2">
    //                  <img
    //                    src={image4}
    //                    alt="Nikhil"
    //                    className="w-72 h-72 rounded-full shadow-lg border-4 mt-20 border-gray-400 object-cover"
    //                  />
    //                </div>
    //           <div>
    //            <h1 className="flex w-3/4  text-2xl text-balance">Hey there! I'm Nikhil Sharma, a passionate Frontend Web Developer with a knack for creating clean, responsive, and user-friendly web interfaces. I specialize in HTML, CSS, JavaScript, and modern frameworks like React.js.

    //            I love turning ideas into real, interactive websites that not only look great but also provide a smooth user experience. I'm currently building my skills with Vite and working on exciting projects that challenge me to grow every day.</h1>
    //           </div>

    //     </div>

    // </section>
  )
}

export default About