const Projects = () => {
    const projectList = [
      {
        title: "Tic Tac Toe Game",
        description: "A classic two-player Tic Tac Toe game built using React. Simple, fun, and interactive!",
        github: "#", // GitHub link yahan daal
        demo: "#",   // Live demo link yahan daal
      },
      {
        title: "Weather App",
        description: "A React app that fetches live weather data using an API. Displays current temperature and conditions.",
        github: "#",
        demo: "#",
      },
    ];
  
    return (
      <section id="projects"  className="py-16 h-screen bg-gray-100 text-gray-800">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">My Projects</h2>
          <p className="text-lg mt-2">Some cool stuff I’ve built recently 👇</p>
        </div>
        <div className="max-w-7xl max-h-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  