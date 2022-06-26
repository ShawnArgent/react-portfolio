import React from 'react';
import PageContent from '../PageContent/PageContent';
import About from '../About/About';
import Portfolio from '../Portfolio/portfolio';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'skills':
        return <Skills />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
