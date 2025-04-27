import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills"; 
import Contact  from "./Components/Contact";
import { Toaster } from "react-hot-toast";
      


function App() {
  return (
   <>
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
    <Toaster
    position="bottom-center"
    reverseOrder={false}
    />
   </>

  );
}

export default App;
