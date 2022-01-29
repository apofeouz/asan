import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import GavelIcon from '@mui/icons-material/Gavel';
import { orange, grey } from '@mui/material/colors';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import CallIcon from '@mui/icons-material/Call';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import NativeSelect from '@mui/material/NativeSelect';
import Metrika from './Metrika'


const divStyle = {
  marginLeft: '25px',
};

const Footer = () => {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" className='mt-5'>
        <Nav className="m-auto">
          <Nav.Link to="" className="nav-link">
            <GavelIcon sx={{ color: orange[500] }} />
            All rights reserved
            <p>Copyrights © 2013-{new Date().getFullYear()}</p>
          </Nav.Link>
          <Nav.Link to="" className="nav-link">
            <StoreMallDirectoryIcon sx={{ color: orange[500] }} />
            Наш адрес:
            <p>Белая Калитва, Кольцова 25 А</p>
          </Nav.Link>
          <Nav.Link to="" className="nav-link">
            <CallIcon sx={{ color: orange[500] }} />
            Наши телефоны:
            <p><NativeSelect style={divStyle} sx={{ color: grey[500] }} >
              <option>8-863-529-96-50</option>
              <option>8-951-49-57-354</option>
            </NativeSelect></p>
          </Nav.Link>
          <Nav.Link to="" className="nav-link">
            <MarkEmailReadIcon sx={{ color: orange[500] }} />
            Наш e-mail:
            <p>laser@asan-pro.ru</p>
          </Nav.Link>
          <Metrika />
        </Nav>
      </Navbar>
    </Fragment>
  );
}

export default Footer;
