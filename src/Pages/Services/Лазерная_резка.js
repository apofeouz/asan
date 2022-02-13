import React, { Component } from 'react';
import  {Container, Col, Row, Card, ListGroup, Table} from 'react-bootstrap';
import { BrowserRouter as Route,} from "react-router-dom";
import ServicesBlock from '../../Componets/ServicesBlock';
import Typography from '@mui/material/Typography';
import { Helmet } from "react-helmet";

const Services_Лазерная_резка = (props) => {
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
                            <Card.Header className="text-center" ><h4>Требование к файлам</h4></Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <Typography variant="body1" color="text.secondary">

                                    <li>CorelDraw не старше x3 версии</li>
                                    <li> Масштаб 1:1</li> 
                                    <li>Все символы и текст должны быть переведены в кривые</li>
                                    <li>Растровые изображения не допускаются. Толщина кривых – «0» или "Hair line". Недопустимо формировать изображение заданием толщины кривых.</li>
                                    <li>Недопустимо наложение слоёв</li>
                                    <li>Расстояние между отдельными объектами минимально 1мм</li>
                                    </Typography>

                                </blockquote>
                                
                            </Card.Body>
                        </Card>
                        <Card className="mt-5">
                            <Card.Header className="text-center" ><h4>Информация для заказчиков</h4></Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <Typography variant="body1" color="text.secondary">

                                    <li>В стоимость лазерной резки не включена стоимость материала.</li>
                                    <li> Минимальная сумма заказа составляет 1000 рублей.</li> 
                                    <li>Выполнение срочного заказа +50%</li>
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
                                    Лазерно-гравировальная мастерская АсАн предоставляетуслуги по лазерной резке неметаллических материалов таких как: бумага, картон (гофрокартон), пенокартон, поролон, изолон, фанера, кожа толщиной до 15 мм по доступным ценам в короткие сроки. Выполняем срочные заказы (изготовление при Вас) на лазерную резку. Для постоянных клиентов предусмотрены скидки. 
                                    </Typography>


                                </blockquote>
                            </Card.Body>
                        </Card>
                        <Table striped bordered hover>
                            <thead>
                                <tr className="text-center">
                                    <th colSpan="5">Стоимость Лазерной резки</th>
                                </tr>
                                <tr>
                                    <th>Материал</th>
                                    <th>толщина материала (мм)</th>
                                    <th className="text-primary">до 100</th>
                                    <th className="text-primary">до 500</th>
                                    <th className="text-primary">Свыше 500</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Картон/Бумага</td>
                                    <td>до 100 г/м2
                                    <td>до 300 г/м2
                                    <td>до 600 г/м2
                                    <td>600 г/м2</td>
                                    </td>
                                    </td>
                                    </td>
                                    <td>4.5 р.
                                    <td>6 р.
                                    <td>11 р.
                                    <td>16 р.</td>
                                    </td>
                                    </td>
                                    </td>
                                    <td>3.5 р.
                                    <td>5 р.
                                    <td>8 р.
                                    <td>11 р.</td>
                                    </td>
                                    </td>
                                    </td>
                                    <td>3 р.
                                    <td>4.5 р.
                                    <td>5.5 р.
                                    <td>8 р.</td>
                                    </td>
                                    </td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Гофрокартон</td>
                                    <td>двухслойный
                                    <td>трехслойный</td>
                                    </td>
                                    <td>17 р.
                                    <td>21 р.</td>
                                    </td>
                                    <td>11 р.
                                    <td>19 р.</td>
                                    </td>
                                    <td>7 р.
                                    <td>17 р.</td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Поролон</td>
                                    <td>10 и менее
                                    <td>20 мм
                                    <td>30 мм</td>
                                    </td>
                                    </td>
                                    <td>14 р.
                                    <td>25 р.
                                    <td>59 р.</td>
                                    </td>
                                    </td>
                                    <td>12 р.
                                    <td>22 р.
                                    <td>54 р.</td>
                                    </td>
                                    </td>
                                    <td>10 р.
                                    <td>20 р.
                                    <td>49 р.</td>
                                    </td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Изолон</td>
                                    <td>10 и менее
                                    <td>20 мм
                                    <td>30 мм</td>
                                    </td>
                                    </td>
                                    <td>15 р.
                                    <td>25 р.
                                    <td>42 р.</td>
                                    </td>
                                    </td>
                                    <td>13 р.
                                    <td>20 р.
                                    <td>38 р.</td>
                                    </td>
                                    </td>
                                    <td>11.5 р.
                                    <td>18 р.
                                    <td>35 р.</td>
                                    </td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Пенокартон</td>
                                    <td>5 мм
                                    <td>10 мм</td>
                                    </td>
                                    <td>50 р.
                                    <td>69 р.</td>
                                    </td>
                                    <td>49 р.
                                    <td>66 р.</td>
                                    </td>
                                    <td>47 р.
                                    <td>63 р.</td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Кожа</td>
                                    <td>1 мм</td>
                                    <td>20 р.</td>
                                    <td>16 р.</td>
                                    <td>14 р.</td>
                                </tr>   
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container></>
        );
    
}

export default Services_Лазерная_резка;