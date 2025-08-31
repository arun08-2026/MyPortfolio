import './App.css';
import About from './componets/About';
import Header from './componets/Header';
import Hero from './componets/hero';
import Projects from './componets/Projects';
import Skills from './componets/Skills';
import Certificates from './componets/Certificates';
import Contact from './componets/Contact';
import FadeIn from './componets/FadeIn'; // Import the FadeIn component

function App() {
  return (
    <div className="App text-gray-800">
        <Header/>
        <Hero/>
        {/* Each section is wrapped in FadeIn for the animation */}
        <FadeIn><About/></FadeIn>
        <FadeIn><Projects /></FadeIn>
        <FadeIn><Skills /></FadeIn>
        <FadeIn><Certificates /></FadeIn>
        <FadeIn><Contact /></FadeIn>
    </div>
  );
}

export default App;