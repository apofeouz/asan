import { MDBCard, MDBCardBody, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Alert } from '@mui/material';
import Maps from '../Componets/Maps';
import { Helmet } from "react-helmet";

const About = (props) => {

  return (
    <><Helmet>
      <meta charSet="utf-8" />
      <title>{props.titles.О_нас}</title>
      <meta name="description" content={props.titles.description}></meta>
    </Helmet><Container>
        <Row className="mt-5">
          <Col md="3" className="mt-2">
            <Typography gutterBottom variant="h5" component="div">
              Наши друзья и партнёры
            </Typography>
            {props.partners.map((id) => (
              <><hr className="my-3" /><Card>
                <><CardActionArea>
                  <CardMedia
                    component="img"
                    height="120"
                    image={id.img}
                    alt={id.name} />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {id.text}
                    </Typography>
                  </CardContent>
                </CardActionArea><CardActions>
                  </CardActions></>
              </Card></>
            ))}
          </Col>
          <Col md="9">
            <MDBCard>
              <MDBCardBody>

                <h3 className="text-center">
                  <strong>О мастерской АсАн</strong>
                </h3>

              </MDBCardBody>

              <hr className="my-3" />

              <MDBCardBody>
                <p>    Лазерно-гравировальная мастерская АсАн основана летом 2013 года. Идеей создания предшествовал опыт работы в рекламно-производственных компаниях, где существовали ограничения. Индивидуальность не приветствовалась и оригинальные проекты так и не были воплощены в жизнь.
                  Возникла идея создания собственной мастерской с воплощением в жизнь оригинальных идей, творческой составляющей, индивидуальным подходом к каждому клиенту.</p>
                <Alert severity="success" className="text-center">Основной слоган компании - Мы ценим Ваше время.</Alert>
                <p>Время-это бесценная валюта, потому что время- это наша жизнь. На первое место мы ставим качество производимой продукции,
                  далее ценовой фактор, временная составляющая - просуммировав мы получаем оптимальное решение для наших клиентов.
                  Клиентам мы предоставляем свободу выбора, а не ограничиваем однозначным решением.</p>
              </MDBCardBody>

            </MDBCard>
            <MDBCard>
              <><hr className="my-3" />
                <MDBRow className='g-0'>
                  <h4 className="text-center">
                    <strong>География наших клиентов</strong>
                  </h4>
                  <MDBCol md='12'>
                    <MDBCardBody>
                      <p>Наша лазерно-гравировальная мастерская выполняет заказы для своих клиентов по всей стране и странам ближнего зарубежья. Проектируем и выполняем заказы по чертежам и эскизам наших клиентов, согласовываем макеты и приступаем к производству. Транспортными компаниями мы доставляем готовую продукцию в оговоренные сроки нашим партнёрам. Ниже представлена интерактивная карта расположения наших клиентов, постоянно она пополняется новыми городами и странами, мы рады что вы выбрали нашу мастерскую для реализации своих проектов!</p>
                    </MDBCardBody>

                  </MDBCol>
                </MDBRow></>

            </MDBCard>
            <MDBCard>

              <><hr className="my-3" />
                <MDBRow >

                  <MDBCol md='12'>
                    <MDBCardBody >
                  <Maps maps = {props.maps}/>
                    </MDBCardBody>

                  </MDBCol>
                </MDBRow></>

            </MDBCard>

          </Col>
        </Row>
      </Container></>

  );
}
export default About;

