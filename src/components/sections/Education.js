import React from 'react';

const Education = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="education"
    >
      <div className="w-100">
        <h2 className="mb-5">Acadêmico</h2>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Universidade Anhembi Morumbi</h3>
            <div className="subheading mb-3">Engenharia de Computação</div>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">2020 - 2024</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Fatec</h3>
            <div className="subheading mb-3">Análise e Desenvolvimento de Sistemas</div>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">2015 - 2017</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
