import React from 'react';

const Skills = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="skills"
    >
      <div className="w-100">
        <h2 className="mb-5">Habilidades</h2>

        <div className="subheading mb-3">
          Principais Linguagens de Programação e Ferramentas
          </div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <i className="fab fa-js" />
          </li>
          <li className="list-inline-item">
            <i className="fab fa-react" />
          </li>
          <li className="list-inline-item">
            <i className="fab fa-node-js" />
          </li>
          <li className="list-inline-item">
            <i className="fab fa-npm" />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills
