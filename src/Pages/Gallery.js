import { MDBCard, MDBCardBody, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import React from "react";
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import '../App.css';
import data from '../Componets/data';
import GalleryBlock from '../Componets/GalleryBlock';
import { Helmet } from "react-helmet";



const Gallery = ({ match, location, props }) => {

  const {
    params: { title }
  } = match;
  return (

    <><Helmet>
      <meta charSet="utf-8" />
      <title>{data.titles[3].Галерея}/{data.images[title - 1].title}</title>
      <meta name="description" content={data.images[title - 1].description}></meta>
    </Helmet><Container>
        <Row className="mt-5">
          <Col md="3" className="mt-2">
            <Card>
              <Card.Header className="text-center">ФотоГалерея</Card.Header>
              <ListGroup variant="flush" striped bordered hover>
                <GalleryBlock />
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
                    <MDBCardBody>
                      <ImageGallery items={data.images[title - 1].foto} />
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow></>
            </MDBCard>
          </Col>
        </Row>
      </Container></>

  );
}


export default Gallery;
