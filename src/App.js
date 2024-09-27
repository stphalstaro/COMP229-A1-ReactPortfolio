/*File Name: app.js
//Student Name: Stephanie Figueira
//StudentID: 301303854
//Date: 09/24/24*/


//import statements for the location of all project files
import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Services from './components/Services/services';
import Contact from './components/Contact/contact';

//Registration of all functions that are .js files in the project
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />   
      <About />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
