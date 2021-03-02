import React from 'react';

const Resume = ({ firstName, lastName, phone, address, email, socialLinks }) => {
  const month = new Date().getMonth()
  let year = new Date().getFullYear()
  if (month < 9) {
    year = (new Date().getFullYear()) - 1
  }

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="about"
    >
      <div className="w-100">
        <h1 className="mb-0 text-secondary">
          {firstName}
          <span className="text-primary">{lastName}</span>
        </h1>
        <div className="subheading mb-5">
          {address} · {phone} · {' '}
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <p className="lead mb-5">
          Sou um profissional com {year - 1995} anos de idade e pouco mais de {year - 2015} anos atuando na área de tecnologia.
          Durante a minha carreira tive a oportunidade de atuar no desenvolvimento de diversas aplicações
          incríveis que somam centenas de milhares de usuários e de conduzir estratégias de transformação
          digital em empresas tradicionais. Pude trabalhar durante esse período de desenvolvimento profissional
          com as principais tecnologias da atualidade do ecossistema JavaScript e TypeScript, sendo possível
          destacar tecnologias como React, React Native, Node, Express e Apollo.
        </p>
        <div className="social-icons">
          {socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <a key={url} href={url}>
                <i className={`fab ${icon}`}></i>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Resume;
