import logo from './img/astratta-agency-logo-white.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Astratta Agency logo" />
        <div className='text-box z-index-1'>
        <h1 className='heading mx-auto my-3 text-white fw-normal'>We craft captivating digital experiences that help businesses thrive online. We're coming soon.</h1>
        <a
          className="app-link py-2 px-4 my-4 text-white link-underline link-underline-opacity-0"
          href="mailto:info@astrattaagency.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get In Touch
        </a>
        </div>
        
      </header>
    </div>
  );
}

export default App;
