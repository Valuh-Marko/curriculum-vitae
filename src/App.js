import './App.css';
import { About } from './components/About';
import { Banner } from './components/Banner';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Header } from './components/Header';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
        <Header />
        <Banner />
        <About />
        <Experience />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
