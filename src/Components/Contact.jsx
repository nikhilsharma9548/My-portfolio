import React from 'react'
import axios from 'axios';
import{motion} from 'motion/react'
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
       <section  id="Contact" className=" md:pt-10 pt-24  bg-gradient-to-r from-gray-200 to-gray-700 h-full overflow-hidden  flex-col justify-center sm:pt-0">
        <motion.h1 
        initial={{opacity:0,translateY:'-100%'}}
        whileInView={{opacity:1,translateY:0}}
        transition={{duration:0.5}}
        className='flex items-center justify-center text-3xl font-semibold'>Contact-Me</motion.h1>
        <p className='text-center text-xl md:text-2xl mt-10 px-5'>Please Fill out the form below to discuss anywork opportunities.</p>
        <div className='mt-10 '>
            <form
            onSubmit={handleSubmit(onSubmit)}
             className='flex flex-col items-center text-xl justify-center gap-4 mt-10  '>
                <motion.input 
                initial={{opacity:0,translateX: -100}}
                whileInView={{opacity:1,translateX:0}}
                transition={{duration:0.7}}

                {...register("name", { required: true})}
                type="text"
                name='name'
                placeholder='Name' className='w-[80%] md:w-[38%] h-14 rounded-md border-2 border-gray-400 px-4'/>
                {errors.name && <span className='text-sm flex'>This field is required</span>}

                <motion.input
                 initial={{opacity:0,translateX: 100}}
                whileInView={{opacity:1,translateX:0}}
                transition={{duration:0.7}}

                  {...register("email", { required: true })} 
                type="email"
                name='email'
                placeholder='Email' className='w-[80%] md:w-[38%] h-14 rounded-md border-2 border-gray-400 px-4'/>
                 {errors.email && <span className='text-sm flex'>This field is required</span>}
                <motion.textarea 
                 initial={{opacity:0,translateY: 100}}
                whileInView={{opacity:1,translateY:0}}
                transition={{duration:0.7}}

                {...register("message", { required: true })} 
                name='message'
                placeholder='Message' className='w-[80%] md:w-[38%] h-48 rounded-md border-2 border-gray-400 px-4'/>
                {errors.message && <span className='text-sm flex'>This field is required</span>}

                <motion.button 
                 initial={{opacity:0,translateY: 80}}
                  whileInView={{opacity:1,translateY:0}}
                  transition={{duration:0.7}}
                  whileTap={{scale:0.8}}
                type="submit" className='bg-black text-white w-36 h-12  rounded-md'>Send</motion.button>
            </form>
        </div >

        <div className='m-10 p-5 flex items-center justify-center gap-7'>
        {iconList.map((icon, index) => (
            <motion.div
              initial={{opacity:0,scale:0.5}}
              whileInView={{opacity:1,scale: 1}}
              transition={{duration:0.1}}
            key={index} className='w-12 h-12 rounded-full relative bottom-5 md:bottom-0 bg-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-all hover:scale-105 duration-500 cursor-pointer'>
                <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <img src={icon.Image} alt="icon" className='w-8 h-8 object-cover' />
                </a>
            </motion.div>
        ))}
         </div>


       </section>
    )
  
}

export default Contact; 