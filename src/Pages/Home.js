import React from 'react';
import CarouselBox from '../Componets/CarouselBox';
import { Container, Col, Row, Card, ListGroup } from 'react-bootstrap';
import ServicesBlock from '../Componets/ServicesBlock';
import NewsBlockHome from '../Componets/NewsBlockHome';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Helmet } from "react-helmet";



const Home = (props) => {
  return (
    <><Helmet>
      <meta charSet="utf-8" />
      <title>{props.titles.Главная}</title>
      <meta name="description" content={props.titles.description}></meta>
    </Helmet>
      <CarouselBox /><>
        <Container>
          <Row className='mt-5'>
            <Col md={3}>
              <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={"http://asan-pro.ru/images/73_share.jpg"}
                    alt="img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {"Мы ценим Ваше время!"}

                    </Typography>
                    <Typography variant="body" color="text.secondary">
                      {"Лазерно-гравировальная мастерская АсАн"}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <Card.Header className="text-center"><h2>Гравировальная мастерская АсАн</h2></Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <Typography variant="body1" color="text.secondary">
                      Мы рады приветствовать Вас на странице лазерно-гравировальной мастерской АсАн. Мы занимаемся оформлением мест продаж.
                      Предоставляем услуги по лазерной резке неметаллических материалов таких как: бумага, картон (гофрокартон), пенокартон, поролон, изолон, фанера, кожа толщиной до 15 мм.
                      Выполняем гравировку на бумаге, дереве, металле, силикатном стекле, бутылках, бокалах. Выполняем фрезерную резку.
                      Мы работаем для Вас и принимаем заказы по всей России и странам ближнего и дальнего зарубежья. Доставка осуществляется транспортными компаниями.
                      В кротчайщие сроки и по низкой цене, выполним ваш заказ. Мы ценим Ваше время!"
                    </Typography>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
            <Col Col md={3}>
              <Card>
                <Card.Header className="text-center">Наши услуги</Card.Header>
                <ListGroup variant="flush" striped bordered hover>
                  <ServicesBlock />
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <NewsBlockHome news = {props.news} />
        </Container>
      </></>
  );
}
export default Home;