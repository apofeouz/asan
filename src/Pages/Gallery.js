import { MDBCard, MDBCardBody, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import React from "react";
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import '../App.css';
import data from '../Componets/data';

import GalleryBlock from '../Componets/GalleryBlock';




const Gallery = ({ match, location }) => {

    const {
        params: { title }
      } = match;
    
  
  
    return (
  <Container>
    <Row className="mt-5">
      <Col md="3" className="mt-2">
        <Card>
          <Card.Header className="text-center">ФотоГалерея</Card.Header>
          <ListGroup variant="flush" striped bordered hover>
         <GalleryBlock/>
          </ListGroup>
        </Card>
      </Col>
      <Col md="9">
          <MDBCard>
            <MDBCardBody>
           
              <h3 className="text-center">
              <strong>{data.images[title - 1].name}</strong>
              </h3>
           
               </MDBCardBody>
               
                <><hr className="my-3" />
                <MDBRow className='g-0'>
                 
                  <MDBCol md='12'>
                    <MDBCardBody >
                     <ImageGallery items={data.images[title - 1].foto} /> 
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow></>
              

           
          </MDBCard>
      
      </Col>
    </Row>
  </Container>

    
    
    );
}


export default Gallery;
