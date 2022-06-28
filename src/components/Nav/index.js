
import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import 'react-bootstrap';

function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);


  return (
    <nav className='navbar navbar-expand-md navbar-light'>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
        {pages.map((Page) => (
          <li className={`nav-item navbar-text'><Link to=${currentPage.name === Page.name && 'nav-link'}`} key={Page.name}>
            <span onClick={() => setCurrentPage(Page)}>{capitalizeFirstLetter(Page.name)}</span>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
}


export default Nav;