import React from 'react';
import  {Container, Col, Row, Card, ListGroup, Table} from 'react-bootstrap';
import ServicesBlock from '../../Componets/ServicesBlock';
import Typography from '@mui/material/Typography';
import { Helmet } from "react-helmet";


const Services_Лазерная_гравировка = (props) => {

        return (
            <><Helmet>
            <meta charSet="utf-8" />
            <title>{props.titles}</title>
            <meta name="description" content={props.description}></meta>
          </Helmet>
           <Container>
                <Row className="mt-5">

                    <Col md="3" className="mt-2">
                        <Card>
                            <Card.Header className="text-center">Наши услуги</Card.Header>
                            <ListGroup variant="flush" striped bordered hover>
                                <ServicesBlock />
                            </ListGroup>
                        </Card>
                        <Card className="mt-5">
                            <Card.Header className="text-center" ><h4>Информация для заказчиков</h4></Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <Typography variant="body1" color="text.secondary">

                                    <li>Наценка на круговую лазерную гравировку + 30%</li>
                                    </Typography>


                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={9}>
                        <Card>
                            <Card.Header className="text-center"><h2>{props.titles}</h2></Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <Typography variant="body1" color="text.secondary">
                                    Лазерно-гравировальная мастерская АсАн предлагет Вам услуги по лазерной гравировке: на дереве, силакатном стекле, бумаге, бокалах, бутылках, брелках, пластике. Изготавливаем атрибутику для свадебных торжеств, юбилеев, общественных мероприятий, праздников. По всем вопросам Вы можете связаться с нашими менеджерами по телефону, воcпользоваться формой обратной связи или написать в нашей группе vk.com/asanpro
                                    </Typography>


                                </blockquote>
                            </Card.Body>
                        </Card>
                        <Table striped bordered hover>
                            <thead>
                                <tr className="text-center">
                                    <th colSpan="5">Лазерная гравировка изделий (плоская поверхность), руб./см2.</th>
                                </tr>
                                <tr>
                                    <th>Материал</th>
                                    <th className="text-primary">от 10-50 шт</th>
                                    <th className="text-primary">от 50 - 100 шт</th>
                                    <th className="text-primary">от 100 - 500 шт</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Металл, дерево</td>
                                    <td>11 р.</td>
                                    <td>10 р.</td>
                                    <td>9 р.</td>
                                </tr>
                                <tr>
                                    <td>Кожа</td>
                                    <td>12 р.</td>
                                    <td>10 р.</td>
                                    <td>9 р.</td>
                                </tr>
                                <tr>
                                <td>Стекло</td>
                                    <td>12 р.</td>
                                    <td>11 р.</td>
                                    <td>10р.</td>
                                </tr>
                                
                                
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container></>
        );
    }

export default Services_Лазерная_гравировка;