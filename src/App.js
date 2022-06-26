import React, { useState } from 'react';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Page from './components/Page/Page'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer/Footer'

const App = () => {
  const [pages] = useState([
    {
      name: 'about',
    },
    { name: 'portfolio' },
    { name: 'contact' },
    {
      name: 'skills',
    },
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
       <Header>
        <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}></Nav>
      </Header>
      <main>
      <Page currentPage={currentPage}></Page>

      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App;
