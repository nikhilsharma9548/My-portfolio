import React from 'react'
import axios from 'axios';
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
    return(
       <section  id="Contact" className="bg-gradient-to-r from-gray-200 to-gray-700 h-full md:h-screen overflow-hidden">
        <h1 className='flex items-center justify-center text-4xl font-bold'>Contact-Me</h1>
        <p className='text-center text-2xl mt-20'>Please Fill out the form below to discuss anywork opportunities.</p>
        <div className='mt-10'>
            <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/bjjmpqzb"
            // method="POST"
             className='flex flex-col items-center text-xl justify-center gap-4 mt-10  '>
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
        </div>


       </section>
    )
  
}

export default Contact; 