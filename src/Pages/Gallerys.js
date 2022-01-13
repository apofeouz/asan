import React from "react";
import ReactDOM from "react-dom";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import { Container, Col, Row } from 'react-bootstrap';
import { Card, ListGroup, Alert } from 'react-bootstrap';
import ProductsBlock from '../Componets/ProductsBlock';
import { List, ListItem, } from '@mui/material';
import GalleryBlock from '../Componets/GalleryBlock';
import "react-image-gallery/styles/css/image-gallery.css";




  class Gallerys extends React.Component {
  render() {
    return  <Container>
    <Row className="mt-5">
      <Col md="3" className="mt-2">
        <Card>
          <Card.Header className="text-center">ФотоГалерея</Card.Header>
          <ListGroup variant="flush" striped bordered hover>
          </ListGroup>
        </Card>
      </Col>
      <Col md="9">
     
        
          <MDBCard>
            <MDBCardBody>
           
              <h3 className="font-weight-bold mb-3 p-0 text-center">
                <strong>Фотогалерея мастерской АсАн</strong>
              </h3>
        
               </MDBCardBody>
               
                <><hr className="my-3" />
                <MDBRow className='g-0'>
                 
                  <MDBCol md='12'>
                    <MDBCardBody>
                <p>Этот раздел сайта посвящён фотоотчётам, о проделанной работе нашей лазерно-гравировальной мастерской. Подписывайтесь на нашу страничку В Контакте там вы найдёте ещё больше информации о нашей продукции и услугах. Будем рады если на страницах нашего сайта, Вы найдёте вдохновение для реализации своих проектов, будь-то день рождения друга, родственников или коллег по бизнесу. Открытки, бокалы, брелоки и многое другое приобретут свою уникальность если Вы закажите на них гравировку в нашей мастерской. Также с помощью нашего оборудования Вы сможете заказать фигурную резку на бумаге или дереве. Специалисты гравировальной мастерской АсАн качественно и в срок произведут все работы, мы ценим Ваше время и уделяем максимальное внимание своим клиентам. Фотогалерея сайта будет постоянно пополняться и мы будем всегда рады видеть Вас на страницах нашего сайта! Для того чтобы сделать заказ или проконсультироваться с нашими специалистами Вы можете позвонить по телефону 8-863-529-96-50 или воспользоваться формой обратной связи.</p>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow></>
              

           
          </MDBCard>
      
      </Col>
    </Row>
  </Container>

    
    
  }
}


export default Gallerys;
