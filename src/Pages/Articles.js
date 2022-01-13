import React, { Component } from 'react';
import { Figure, Container, Col, Row } from 'react-bootstrap';
import ArticlesBlock from '../Componets/ArticlesBlock';
import { Card, ListGroup } from 'react-bootstrap';
import NewsBlock from '../Componets/NewsBlock';


const Articles = (props) => {
 
    return (
      <><Container>
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
            <h3 className="text-center">Полезные статьи мастерской АсАн</h3>
            <NewsBlock />
          </Col>
        </Row>
      </Container></>
    );
  
}

export default Articles;