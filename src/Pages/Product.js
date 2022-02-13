import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import { Container, Col, Row } from 'react-bootstrap';
import { Card, ListGroup, Alert } from 'react-bootstrap';
import ProductsBlock from '../Componets/ProductsBlock';
import { List } from '@mui/material';
import { Helmet } from "react-helmet";

const Products = (props) => {


  return (

    <><Helmet>
      <meta charSet="utf-8" />
      <title>{props.products.title}</title>
      <meta name="description" content={props.titles.description}></meta>
    </Helmet>
      <Container>
        <Row className="mt-5">
          <Col md="3" className="mt-2">
            <Card>
              <Card.Header className="text-center">Продукция</Card.Header>
              <ListGroup variant="flush" striped bordered hover>
                <List component="nav" aria-label="mailbox folders">
                  <ProductsBlock />
                </List>
              </ListGroup>
            </Card>
          </Col>
          <Col md="9">
            <h3 className="font-weight-bold mb-3 p-0 text-center">
              <strong>{props.products.title}</strong>
            </h3>
            <MDBCard>
              <MDBCardBody>
                {props.product.map((item) =>
                  <><hr className="my-3" /><MDBRow className='g-0'>
                    <MDBCol md='4'>
                      <MDBCardImage src={item.imgUrl} height="310px" width="290px" alt={item.name} fluid />
                    </MDBCol>
                    <MDBCol md='8'>
                      <MDBCardBody>
                        <MDBCardTitle>{item.name}</MDBCardTitle>
                        <MDBCardText>
                          {item.text}
                        </MDBCardText>
                        <hr className="my-3" />
                      </MDBCardBody>
                      <Alert variant='info'>Цена: {item.price}</Alert>
                    </MDBCol>
                  </MDBRow></>
                )}
              </MDBCardBody>
            </MDBCard>
          </Col>
        </Row>
      </Container></>
  )
}
export default Products;