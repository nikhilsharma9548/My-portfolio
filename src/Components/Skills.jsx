import React from 'react';
import img1 from '../images/HTML.webp';
import img2 from '../images/CSS.webp';
import img3 from '../images/JS.webp';
import img4 from '../images/React.webp';
import img5 from '../images/Tailwind.webp';

const Skills = () => {
    const SkillsList = [
        {
            name: "HTML",
            image: img1,
        },
        {
            name: "CSS",
            image: img2,
        },
        {
            name: "JavaScript",
            image: img3,
        },
        {
            name: "React",
            image: img4,
        },
        {
            name: "Tailwind CSS",
            image: img5,
        }
    ]

  return (
    <section id='Skills' className="h-full w-full  md:h-auto p-32 pt-32 overflow-hidden bg-gradient-to-r from-gray-200 to-gray-700">
            <h1 className='text-5xl text-center'>Skills</h1>
            <h1 className='text-xl w-64 relative right-10 mt-10 md:w-full md:text-center md:left-5  '>I have a lot of experience in web development and I have worked with these technologies:</h1>

            <div className='w-full h-full max-md:flex-col relative max-md:right-3 flex justify-center gap-10 mt-10 md:mt-20 flex-wrap'>


                {SkillsList.map((skill, index) => (
                    <div key={index} className="bg-white w-64 h-16 border border-black p-2 rounded-xl shadow-md hover:shadow-2xl  transition-all hover:scale-105 duration-500 flex items-center gap-4 cursor-pointer">
                        <img src={skill.image} alt={skill.name} className="w-10 h-10 m-3 object-cover rounded-md mb-4 "/>
                        <h3 className="text-2xl font-semibold mb-2">{skill.name}</h3>
                    </div>
                ))}


            </div>

    </section>
  )
}

export default Skills