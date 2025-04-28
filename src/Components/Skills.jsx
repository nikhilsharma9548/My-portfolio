import React from 'react';
import img1 from '../images/HTML.webp';
import img2 from '../images/CSS.webp';
import img3 from '../images/JS.webp';
import img4 from '../images/React.webp';
import img5 from '../images/Tailwind.webp';
import img6 from '../images/nodeJS.webp';

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
        },
        {
            name: "node-JS",
            image: img6
        },
    ]

  return (
    <section id='Skills' className="h-full w-full  md:h-auto p-32 pt-32 overflow-hidden bg-gradient-to-r from-gray-200 to-gray-700">
            <h1 className='text-5xl text-center right-3'>Skills</h1>
            <h1 className='text-xl w-64 relative right-8 mt-10 md:w-full md:text-center md:left-5 left-3 '>I have a lot of experience in web development and I have worked with these technologies:</h1>

            <div className='w-[80%] md:left-44 right-5 h-full max-md:flex-col relative  flex justify-center gap-10 mt-10 md:mt-20 flex-wrap'>


                {SkillsList.map((skill, index) => (
                    <div key={index} className="bg-white w-80 h-16 border border-black p-2 rounded-xl shadow-lg hover:shadow-2xl  transition-all hover:scale-105 duration-700 flex items-center gap-4 cursor-pointer">
                        <img src={skill.image} alt={skill.name} className="w-10 h-10 m-3 object-cover rounded-md mb-4 "/>
                        <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                    </div>
                ))}


            </div>

    </section>
  )
}

export default Skills