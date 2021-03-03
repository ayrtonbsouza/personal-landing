import React from 'react';

const Experience = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="experience"
    >
      <div className="w-100">
        <h2 className="mb-5">Profissional</h2>

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
  )
}

export default Experience
