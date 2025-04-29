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
    <section
  id="Skills"
  className="min-h-screen w-full px-4 py-20 overflow-hidden bg-gradient-to-r from-gray-200 to-gray-700 flex flex-col justify-center items-center text-center"
>
  <h1 className="text-5xl font-bold mb-6">Skills</h1>
  <p className="text-xl max-w-2xl mb-12">
    I have a lot of experience in web development and I have worked with these technologies:
  </p>

  <div className="flex flex-wrap w-[70%] justify-center gap-6">
    {SkillsList.map((skill, index) => (
      <div
        key={index}
        className="bg-white w-72 h-16 border border-black p-2 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 duration-700 flex items-center gap-4 cursor-pointer"
      >
        <img
          src={skill.image}
          alt={skill.name}
          className="w-10 h-10 object-cover rounded-md"
        />
        <h3 className="text-lg font-semibold">{skill.name}</h3>
      </div>
    ))}
  </div>
</section>

  )
}

export default Skills