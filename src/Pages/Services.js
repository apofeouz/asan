import React  from 'react';
import  {Container, Col, Row, Card, ListGroup, Table} from 'react-bootstrap';
import { BrowserRouter as Route,} from "react-router-dom";
import ServicesBlock from '../Componets/ServicesBlock';
import Typography from '@mui/material/Typography';
import { Helmet } from "react-helmet";

    const Services = (props) => {
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
                                <ServicesBlock  />
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
                                    <li>Расстояние между отдельными объектами минимально 10 мм</li>
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
                                        Уважаемые клиенты и гости нашего сайта! Рады сообщить Вам, что в нашей мастерской пополнился автопарк и появилось новое
                                        направление - фрезерная резка материалов. Размер рабочего поля станка 2000*3000*150 позволяет обрабатывать большинство материалов,
                                        представленных на рекламном рынке, в мебельном производстве, строительстве. Мы предлагаем: низкие цены, высокое качество,
                                        быстрое выполнение заказа. Ниже представлен перечень обрабатываемых материалов:
                                    </Typography>


                                </blockquote>
                            </Card.Body>
                        </Card>
                        <Table striped bordered hover>
                            <thead>
                                <tr className="text-center">
                                    <th colSpan="5">Стоимость фрезеровки</th>
                                </tr>
                                <tr>
                                    <th>Материал</th>
                                    <th>толщина материала (мм)</th>
                                    <th className="text-primary">до 500 п.м. (р.)</th>
                                    <th className="text-primary">до 1000 п.м.(р.) </th>
                                    <th className="text-primary">от 1000 п.м. (р.)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Резка оргстекла</td>
                                    <td>1 - 2 мм
                                    <td>3 - 4 мм
                                    <td>5 - 6 мм
                                    <td>8 - 12 мм
                                    <td>20 - 25 мм</td>
                                    </td>
                                    </td>
                                    </td>
                                    </td>
                                    <td>23 р.
                                    <td>25 р.
                                    <td>30 р.
                                    <td>40 р.
                                    <td>65 р.</td>
                                    </td>
                                    </td>
                                    </td>
                                    </td>
                                    <td>20 р.
                                    <td>23 р.
                                    <td>27 р.
                                    <td>35 р.
                                    <td>60 р.</td>
                                    </td>
                                    </td>
                                    </td>
                                    </td>
                                    <td>19 р.
                                    <td>21 р.
                                    <td>23 р.
                                    <td>30 р.
                                    <td>55 р.</td>
                                    </td>
                                    </td>
                                    </td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Резка полистирола</td>
                                    <td>1 - 3 мм
                                    <td>4 - 6 мм</td>
                                    </td>
                                    <td>23 р.
                                    <td>25 р.</td>
                                    </td>
                                    <td>21 р.
                                    <td>23 р.</td>
                                    </td>
                                    <td>19 р.
                                    <td>21 р.</td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Резка ПВХ</td>
                                    <td>2 - 4 мм
                                    <td>5 - 6 мм
                                    <td>8 - 10 мм
                                    <td>19 - 24 мм</td>
                                    </td>
                                    </td>
                                    </td>
                                    <td>20 р.
                                    <td>25 р.
                                    <td>30 р.
                                    <td>30 р.</td>
                                    </td>
                                    </td>
                                    </td>
                                    <td>17 р.
                                    <td>23 р.
                                    <td>25 р.
                                    <td>27 р.</td>
                                    </td>
                                    </td>
                                    </td>
                                    <td>15 р.
                                    <td>21 р.
                                    <td>23 р.
                                    <td>25 р.</td>
                                    </td>
                                    </td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Резка литого поликарбоната</td>
                                    <td>1 - 2 мм
                                    <td>3 - 4 мм
                                    <td>5 - 6 мм
                                    <td>8 мм
                                    <td>10 мм</td>
                                    </td>
                                    </td>
                                    </td>
                                    </td>
                                    <td>45 р.
                                    <td>70 р.
                                    <td>90 р.
                                    <td>125 р.
                                    <td>165 р.</td>
                                    </td>
                                    </td>
                                    </td>
                                    </td>
                                    <td>40 р.
                                    <td>60 р.
                                    <td>80 р.
                                    <td>105 р.
                                    <td>145 р.</td>
                                    </td>
                                    </td>
                                    </td>
                                    </td>
                                    <td>35 р.
                                    <td>55 р.
                                    <td>75 р.
                                    <td>95 р.
                                    <td>125 р.</td>
                                    </td>
                                    </td>
                                    </td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Резка капролона</td>
                                    <td>4 - 6 мм
                                    <td>8 - 10 мм
                                    <td>12 - 15 мм
                                    <td>16 - 20 мм
                                    <td>21 - 25 мм</td>
                                    </td>
                                    </td>
                                    </td>
                                    </td>
                                    <td>100 р.
                                    <td>175 р.
                                    <td>255 р.
                                    <td>335 р.
                                    <td>415 р.</td>
                                    </td>
                                    </td>
                                    </td>
                                    </td>
                                    <td>90 р.
                                    <td>155 р.
                                    <td>225 р.
                                    <td>305 р.
                                    <td>375 р.</td>
                                    </td>
                                    </td>
                                    </td>
                                    </td>
                                    <td>80 р.
                                    <td>145 р.
                                    <td>205 р.
                                    <td>265 р.
                                    <td>325 р.</td>
                                    </td>
                                    </td>
                                    </td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Резка ДСП, МДФ, Фанеры</td>
                                    <td>3 - 6 мм
                                    <td>7- 10 мм
                                    <td>12- 20 мм</td>
                                    </td>
                                    </td>
                                    <td>25 р.
                                    <td>35 р.
                                    <td>55 р.</td>
                                    </td>
                                    </td>
                                    <td>23 р.
                                    <td>30 р.
                                    <td>50 р.</td>
                                    </td>
                                    </td>
                                    <td>21 р.
                                    <td>25 р.
                                    <td>45 р.</td>
                                    </td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Резка дибонда
                                        Композитные материалы</td>
                                    <td>2 мм
                                    <td>3 мм
                                    <td>4 мм
                                    <td>6 мм</td>
                                    </td>
                                    </td>
                                    </td>
                                    <td>25 р.
                                    <td>30 р.
                                    <td>40 р.
                                    <td>45 р.</td>
                                    </td>
                                    </td>
                                    </td>
                                    <td>23 р.
                                    <td>27 р.
                                    <td>35 р.
                                    <td>40 р.</td>
                                    </td>
                                    </td>
                                    </td>
                                    <td>21 р.
                                    <td>25 р.
                                    <td>30 р.
                                    <td>35 р.</td>
                                    </td>
                                    </td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Резка алюминия</td>
                                    <td>1 мм
                                    <td>2 мм
                                    <td>3 мм
                                    <td>4 мм
                                    <td>6 мм</td>
                                    </td>
                                    </td>
                                    </td>
                                    </td>
                                    <td>35 р.
                                    <td>35 р.
                                    <td>45 р.
                                    <td>55 р.
                                    <td>70 р.</td>
                                    </td>
                                    </td>
                                    </td>
                                    </td>
                                    <td>30 р.
                                    <td>30 р.
                                    <td>40 р.
                                    <td>45 р.
                                    <td>60 р.</td>
                                    </td>
                                    </td>
                                    </td>
                                    </td>
                                    <td>25 р.
                                    <td>25 р.
                                    <td>35 р.
                                    <td>40 р.
                                    <td>55 р.</td>
                                    </td>
                                    </td>
                                    </td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Резка ПЭТ</td>
                                    <td>2 мм
                                    <td>3 - 4 мм
                                    <td>5 - 6 мм</td>
                                    </td>
                                    </td>
                                    <td>23 р.
                                    <td>25 р.
                                    <td>30 р.</td>
                                    </td>
                                    </td>
                                    <td>21 р.
                                    <td>23 р.
                                    <td>25 р.</td>
                                    </td>
                                    </td>
                                    <td>19 р.
                                    <td>21 р.
                                    <td>23 р.</td>
                                    </td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Резка ГЕТИНАКСА</td>
                                    <td>2 - 3 мм
                                    <td>4  - 5 мм</td>
                                    </td>
                                    <td>50 р.
                                    <td>70 р.</td>
                                    </td>
                                    <td>40 р.
                                    <td>60 р.</td>
                                    </td>
                                    <td>35 р.
                                    <td>55 р.</td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Латунь, Медь
                                        Текстолит</td>
                                    <td>1 мм
                                    <td>2 мм
                                    <td>3 мм
                                    <td>4 мм
                                    <td>6 мм</td>
                                    </td>
                                    </td>
                                    </td>
                                    </td>
                                    <td>35 р.
                                    <td>65 р.
                                    <td>105 р.
                                    <td>115 р.
                                    <td>175 р.</td>
                                    </td>
                                    </td>
                                    </td>
                                    </td>
                                    <td>30 р.
                                    <td>55 р.
                                    <td>95 р.
                                    <td>105 р.
                                    <td>155 р.</td>
                                    </td>
                                    </td>
                                    </td>
                                    </td>
                                    <td>25 р.
                                    <td>45 р.
                                    <td>85 р.
                                    <td>95 р.
                                    <td>125 р.</td>
                                    </td>
                                    </td>
                                    </td>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container></>
        );

}

export default Services;