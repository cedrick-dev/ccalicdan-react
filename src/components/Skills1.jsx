import React from 'react';
import { FaJsSquare, FaReact, FaHtml5,FaJava } from 'react-icons/fa';
import './Skills1.css';

function Skills() {
  return (
    <section className="skills-container">
      <h2>My Programming Skills</h2>
      <div className="skills-list">
        <div className="skill">
          <FaJsSquare size={40} color="#f0db4f" />
          <h3>JavaScript</h3>
          <p>Intermediate</p>
        </div>
        <div className="skill">
          <FaReact size={40} color="#61dafb" />
          <h3>React</h3>
          <p>Intermediate</p>
        </div>
        <div className="skill">
          <FaHtml5 size={40} color="#e34f26" />
          <h3>HTML & CSS</h3>
          <p>Intermediate</p>
        </div>
        <div className="skill">
          <FaJava size={40} color="#e34f26" />
          <h3>JAVA</h3>
          <p>Intermediate</p>
        </div>
      </div>

      <section className="skills-container">
      <div className="skills-list">
        <div className="skill">
          <h3>JavaScript</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '55%' }}></div>
          </div>
        </div>
        <div className="skill">
          <h3>React</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '50%' }}></div>
          </div>
        </div>
        <div className="skill">
          <h3>HTML&CSS</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '50%' }}></div>
          </div>
        </div>
        <div className="skill">
          <h3>JAVA</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '60%' }}></div>
          </div>
        </div>
        {/* Add more skills with progress bars */}
      </div>
    </section>
    </section>
  );
}

export default Skills;
