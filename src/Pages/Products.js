import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import { Container, Col, Row } from 'react-bootstrap';
import { Card, ListGroup, Alert } from 'react-bootstrap';
import ProductsBlock from '../Componets/ProductsBlock';
import { BrowserRouter as Route, Link } from "react-router-dom";
import { List, ListItem, } from '@mui/material';
import data from '../Componets/data';

const Products = ({ match, location }) => {

  const {
      params: { title }
    } = match;
  

  return (
    <Container>
      <Row className="mt-5">
        <Col md="3" className="mt-2">
          <Card>
            <Card.Header className="text-center">Продукция</Card.Header>
            <ListGroup variant="flush" striped bordered hover>
              <List component="nav" aria-label="mailbox folders">

              <ProductsBlock/>
              </List>
            </ListGroup>
          </Card>
        </Col>
        <Col md="9">
          
          

                <h3 className="font-weight-bold mb-3 p-0 text-center">
                  <strong>{data.products[title - 1].title}</strong>
                </h3>
              {/* титл страницы */}
          {data.products.map(({product }) => (
            <MDBCard>
              <MDBCardBody>
 
                {/* Вывод вложения */}
                {product.map(({ name, price, text, imgUrl }) => (
                  <><hr className="my-3" />
                  
                  <MDBRow className='g-0'>
                    <MDBCol md='4'>
                      <MDBCardImage src={imgUrl} alt='...' fluid />
                    </MDBCol>
                    <MDBCol md='8'>
                      <MDBCardBody>
                        <MDBCardTitle>{name}</MDBCardTitle>
                        <MDBCardText>
                          {text}
                        </MDBCardText>
                        <hr className="my-3" />
                        <Alert variant='info'>Цена: {price}</Alert>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow></>
                ))}
 
              </MDBCardBody>
            </MDBCard>
          ))}
                
        </Col>
      </Row>
    </Container>

  )
}

export default Products;