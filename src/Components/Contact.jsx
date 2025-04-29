import React from 'react'
import axios from 'axios';
import img1 from '../images/github.webp';
import img2 from '../images/linkdin.webp';
import img3 from '../images/insta.webp';  
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const Contact = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async(data) => {
        const userInfo = {  
            name: data.name,
            email: data.email,
            message: data.message
        }
        try {
           await axios.post("https://getform.io/f/bjjmpqzb", userInfo);
           toast.success("Your message  sent successfully!");
        } catch (error) {
            toast.error("Error sending form data:", error);
        }
    }
    const iconList = [
        {
          Image: img1,
          link: "https://github.com/nikhilsharma9548"
        },
        {
          Image: img2,
          link: "https://www.linkedin.com/in/nikhil-sharma-43a013341/"
        },
        {
          Image: img3,
          link: "https://www.instagram.com/sharmaharrdy/?hl=en"
        }
      ];
      

    return(
       <section  id="Contact" className=" pt-14 bg-gradient-to-r from-gray-200 to-gray-700 h-full md:h-screen overflow-hidden max-sm:pt-40">
        <h1 className='flex items-center justify-center text-4xl font-bold'>Contact-Me</h1>
        <p className='text-center text-xl md:text-2xl mt-20'>Please Fill out the form below to discuss anywork opportunities.</p>
        <div className='mt-10 max-md:w-[80%] relative left-14'>
            <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/bjjmpqzb"
            // method="POST"
             className='flex flex-col items-center text-xl justify-center gap-4 mt-10 relative right-10'>
                <input 
                {...register("name", { required: true })}
                type="text"
                name='name'
                placeholder='Name' className='w-[90%] md:w-[40%] h-16 rounded-md border-2 border-gray-400 px-4'/>
                {errors.name && <span>This field is required</span>}

                <input
                  {...register("email", { required: true })} 
                type="email"
                name='email'
                placeholder='Email' className='w-[90%] md:w-[40%] h-16 rounded-md border-2 border-gray-400 px-4'/>
                 {errors.email && <span>This field is required</span>}
                <textarea 
                {...register("message", { required: true })} 
                name='message'
                placeholder='Message' className='w-[90%] md:w-[40%] h-48 rounded-md border-2 border-gray-400 px-4'/>
                {errors.message && <span>This field is required</span>}
                <button type="submit" className='bg-black text-white w-40 h-14 mt-5 rounded-md'>Send</button>
            </form>
        </div >

        <div className='mt-10  flex items-center relative left-4  justify-center gap-7'>
        {iconList.map((icon, index) => (
            <div key={index} className='w-14 h-14 rounded-full relative bottom-5 md:bottom-0 bg-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-all hover:scale-105 duration-500 cursor-pointer'>
                <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <img src={icon.Image} alt="icon" className='w-10 h-10 object-cover' />
                </a>
            </div>
        ))}
         </div>


       </section>
    )
  
}

export default Contact; 