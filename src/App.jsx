import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;