import GradientBackground from './components/GradientBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Research from './components/Research';
import Projects from './components/Projects';
import Milestones from './components/Milestones';
import Footer from './components/Footer';
import ScrollIndicator from './components/ScrollIndicator';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <GradientBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WorkExperience />
        <Research />
        <Projects />
        <Milestones />
      </main>
      <Contact />
      <Footer />
      <ScrollIndicator />
    </>
  );
}

export default App;
