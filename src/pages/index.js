import React from 'react';

import Layout from '../components/Layout';

import Sidebar from '../components/Sidebar';
import Resume from '../components/sections/Resume';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <Resume
        firstName={config.firstName}
        lastName={config.lastName}
        address={config.address}
        phone={config.phone}
        email={config.email}
        socialLinks={config.socialLinks}
      />
      <hr className="m-0" />
      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Senior Software Developer</h3>
              <div className="subheading mb-3">Dasa</div>
              <p>
                Responsável pela arquitetura e desenvolvimento da aplicação Lívia Saúde que roda sob a definição de microfrontend com o uso de React como biblioteca principal, utilizando TypeScript como linguagem e embarca outras tecnologias como Hooks, Apollo Client e Context API, consumindo uma API em GraphQL, desenvolvida com Node.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Setembro/2020 - Atualmente</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Tech Lead</h3>
              <div className="subheading mb-3">Teresa Perez Tours</div>
              <p>
                Encarregado de liderar um time de quinze pessoas entre desenvolvedores, designers, PO e analistas de devops, fui responsável por desenvolver a transformação digital da companhia que girou em torno do desenvolvimento de dois produtos, sendo um deles B2C e outro B2B. As aplicações foram desenvolvidas usando uma stack baseada em JavaScript, sendo aplicações frontend desenvolvidas com o uso de React, aplicativos móveis com o uso de React Native e backend em Node. Fui responsável por definir arquitetura e gerenciar o capital humano da empresa no que diz respeito às resoluções de conflitos, além de tomar responsabilidade da negociação com prestadores de serviços e tornar viabilizar a transformação cultural da companhia por meio de táticas de implementação de Design Thinking e transformação digital.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Setembro/2019 - Janeiro/2021</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Senior Software Developer</h3>
              <div className="subheading mb-3">Grupo Fleury</div>
              <p>
                Responsável pelo desenvolvimento das primeiras aplicações do escopo de transformação digital do Grupo Fleury, onde, estando entre os cinco primeiros, pude ser um dos pioneiros na iniciativa de transformação. Me encarreguei de desenvolver aplicações backend, frontend e mobile no grupo, utilizando tecnologias como React, React Native, Node, GraphQL, Angular, Swift, JavaScript e TypeScript. No período de pouco mais de um ano, fui capaz de entregar diversos MVPs e participar de diversos projetos, onde inclusive pude assumir posições de liderança técnica de diversas células do grupo
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Julho/2018 - Setembro/2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Senior Software Developer</h3>
              <div className="subheading mb-3">Amerisourcebergen</div>
              <p>
                Incubido de desenvolver uma ferramenta web de gestão de pacientes para a industria farmacêutica. Tive como responsabilidade entregar uma plataforma que é utilizada pelo time de atendimento da empresa, o frontend da aplicação foi desenvolvido utilizando como tecnologias primárias Angular e TypeScript, enquanto o backend foi desenvolvido no formato de API com o uso de C# e .NET Core integrados a um banco de dados Microsoft SQL.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Julho/2018 - Setembro/2019</span>
            </div>
          </div>

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">University of Colorado Boulder</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science - Web Development Track</div>
              <p>GPA: 3.23</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2006 - May 2010</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">James Buchanan High School</h3>
              <div className="subheading mb-3">Technology Magnet Program</div>
              <p>GPA: 3.56</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2002 - May 2006</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-gulp" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm" />
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check" />
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              Google Analytics Certified Developer
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              Mobile Web Specialist - Google Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              1
              <sup>st</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2009
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              1
              <sup>st</sup>
              Place - University of Colorado Boulder - Adobe Creative Jam 2008
              (UI Design Category)
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              2
              <sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2008
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              1
              <sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              3
              <sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
