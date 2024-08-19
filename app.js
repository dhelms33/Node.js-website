import React from 'react';
import ContactInfo from './components/ContactInfo';
import Objective from './components/Objective';
import Qualifications from './components/Qualifications';
import Experience from './components/Experience';
import Education from './components/Education';
import TechnicalSkills from './components/TechnicalSkills';
import Activities from './components/Activities';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Dereck Helms</h1>
        <p>Front-End Web Developer | Social Media Manager</p>
      </header>
      <section id="contact-info">
        <ContactInfo />
      </section>
      <section id="objective">
        <Objective />
      </section>
      <section id="qualifications">
        <Qualifications />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="technical-skills">
        <TechnicalSkills />
      </section>
      <section id="activities">
        <Activities />
      </section>
    </div>
  );
}

export default App;
