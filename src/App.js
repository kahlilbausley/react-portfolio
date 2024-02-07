import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        
        
        <footer>
          <a id="BackToTop" href="#nav">Back to Top!</a>
        <Contact />
        </footer>
      </main>
    </div>
  );
}

export default App;
