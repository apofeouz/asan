import React, { Component } from 'react';
import { Figure, Container, Col, Row } from 'react-bootstrap';
import ArticlesBlock from '../Componets/ArticlesBlock';
import { Card, ListGroup } from 'react-bootstrap';
import NewsBlock from '../Componets/NewsBlock';
import { Helmet } from "react-helmet";


const Articles = (props) => {
 
    return (
      <><Helmet>
      <meta charSet="utf-8" />
      <title>{props.titles.Статьи}</title>
      <meta name="description" content={props.titles.description}></meta>
    </Helmet>
    <Container>
        <Row className="mt-5">

          <Col md="3" className="mt-2">
            <Card>
              <Card.Header className="text-center">Полезные статьи</Card.Header>
              <ListGroup variant="flush" striped bordered hover>
                <ArticlesBlock new = {props.news}/>
              </ListGroup>
            </Card>
          </Col>
          <Col md="9">
            <h3 className="text-center">Полезные статьи мастерской АсАн</h3>
            <NewsBlock />
          </Col>
        </Row>
      </Container></>
    );
  
}

export default Articles;