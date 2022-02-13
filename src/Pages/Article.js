
import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ArticlesBlock from '../Componets/ArticlesBlock';
import { Card, ListGroup } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBContainer } from 'mdb-react-ui-kit';
import '../App.css'
import Like from '../Componets/Like';
import data from '../Componets/data';
import { Helmet } from "react-helmet";


  

const NewPage = ({ match, location }) => {

// state = {array : []}

// const newArray = this.state.array
// newArray.push('test')
// this.setState({array : newArray})

  const {
    params: { title }
  } = match;


  return (
    <><Helmet>
      <meta charSet="utf-8" />
      <title>{data.news[title - 1].title}</title>
      <meta name="description" content={data.news[title - 1].description}></meta>
    </Helmet><Container>
        <Row className="mt-5">
          <Col md="3" className="mt-2">
            <Card>
              <Card.Header className="text-center">Полезные статьи</Card.Header>
              <ListGroup variant="flush" striped bordered hover>
                <ArticlesBlock />
              </ListGroup>
            </Card>
          </Col>
          <Col md="9">
            <MDBCard>
              <MDBCardBody>
                <h3 className="font-weight-bold mb-3 p-0 text-center">
                  <strong>{data.news[title - 1].title}</strong>
                </h3>
                <hr className="my-3" />
                <MDBRow>
                  <MDBCol>
                    <img
                      className="img-responsive img-right"
                      src={data.news[title - 1].imgUrl}
                      alt={data.news[title - 1].title} />
                    <p>
                      {data.news[title - 1].text}
                    </p>
                  </MDBCol>
                </MDBRow>
                <MDBContainer>
                  <p className="text-left">
                    <strong>Опубликованно: </strong>{data.news[title - 1].data}

                  </p>
                  {/* <Like like={data.news[title - 1].likes} /> */}
                </MDBContainer>
              </MDBCardBody>
            </MDBCard>
          </Col>
        </Row>
      </Container></>
  );

}

export default NewPage;