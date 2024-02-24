import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';



const App: React.FC = () => {
  const [showCircle, setShowCircle] = useState(false);
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseMove = (event: MouseEvent) => {
    setCirclePosition({ x: event.clientX, y: event.clientY });
    setShowCircle(true);
  };

  return (
    <div className="App">
      {showCircle && (
        <div
          className="circle"
          style={{ top: circlePosition.y, left: circlePosition.x }}
        ></div>
      )}
      <div className='container'>
        <div className='container-fluid'>
          <div className='row'>
            <section id="nav" className=' col-xl-6 d-flex align-items-center  '>

              <div className='container '>
                <h1 id='Nombre' > <strong>Fernando Villena</strong></h1>

                <p id='carrera'>Ingeniero en informática</p>
                <p id='frase' className="text-muted-white " >“Si lo puedes imaginar, lo puedes crear.”
                  (George Lucas)</p>
                <div>
                  <a target="_blank" style={{ color: 'rgba(255, 255, 255, 0.5)' }} href="https://www.linkedin.com/in/fernando-villena-ortega-2a899b1ba/">
                    <FontAwesomeIcon className='icon-container p-1' size="2x" icon={faLinkedin} />
                  </a>
                  <a target="_blank" style={{ color: 'rgba(255, 255, 255, 0.5)' }} href="https://github.com/Fernando-Villena">
                    <FontAwesomeIcon className='icon-container p-1' icon={faGithubSquare} size="2x" />
                  </a>
                </div>
              </div>
            </section>
            <div className='col-xl-6 d-flex align-items-center justify-content-center'>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
