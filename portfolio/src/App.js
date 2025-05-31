import Header from "./components/header";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Certifications from "./components/certificates";
import Contact from "./components/contact";
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}
export default App