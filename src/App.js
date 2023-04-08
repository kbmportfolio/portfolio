
import './App.css';
import './twscript';
import './'
// import './form.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero'
import Projects from './components/Projects'
// import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import C2 from './components/C2'
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <center>
    <div className="App">
      
      <Navigation />
      <Hero style={{ margin: '40px'}}  />
      <Projects id="projects" className="malign" />
      {/* <ContactForm /> */}
      <C2 id="contact" className="malign" />
      <Footer className="malign" />
      
    </div>
    </center>
  );
}

export default App;
