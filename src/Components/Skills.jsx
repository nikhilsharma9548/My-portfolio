import React from 'react';
import{motion} from 'motion/react';
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
    <section
  id="Skills"
  className="w-full px-4 pt-24 md:pt-10 pb-10 overflow-hidden bg-gradient-to-r from-gray-200 to-gray-700 flex flex-col justify-center items-center text-center">

  <motion.h1 
      initial={{opacity:0,translateY:"-100%"}}
      whileInView={{opacity:1,translateY:0}}
      transition={{duration:0.7}}
  className="md:text-4xl text-3xl font-semibold mb-6">Skills</motion.h1>

  <motion.p
      initial={{opacity:0,translateX:"100%"}}
      whileInView={{opacity:1,translateX:0}}
      transition={{duration:0.7}}

      className="text-lg max-w-2xl mb-12">
    I have a lot of experience in web development <br />and I have worked with these technologies:
  </motion.p>

  <div className="flex flex-wrap w-[70%] justify-center gap-6">
    {SkillsList.map((skill, index) => (
      <motion.div
        initial={{opacity:0,scale:0}}
      whileInView={{opacity:1,scale:1}}
      transition={{duration:0.5}}
      
        key={index}
        className="bg-white w-72 h-14 border border-black p-2 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 duration-700 flex items-center gap-4 cursor-pointer">
        <img
          src={skill.image}
          alt={skill.name}
          className="w-8 h-8 object-cover rounded-md"
        />
        <h3 className="text-sm font-semibold">{skill.name}</h3>
      </motion.div>

    ))}
  </div>

</section>

  )
}

export default Skills