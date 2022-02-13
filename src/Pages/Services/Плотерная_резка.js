import React, { Component } from 'react';
import  {Container, Col, Row, Card, ListGroup, Table} from 'react-bootstrap';
import { BrowserRouter as Route,} from "react-router-dom";
import ServicesBlock from '../../Componets/ServicesBlock';
import Typography from '@mui/material/Typography';
import { Helmet } from "react-helmet";

const Services_Плотерная_резка = (props) => {

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

                                    <li>Графический редактор формата:
                                        <ul>Adobe Illustrator CS3</ul>
                                        <ul>Corel Draw не старше X3 версии</ul>
                                    </li>
                                    <li> Масштаб 1:1</li> 
                                    <li>Шрифты и другие объекты маета должны быть быть переведены в «кривые», заливка исключена.</li>
                                    <li>Ширина наклейки не более 1240 мм</li>
                                    <li>Макет не должен содержать незамкнутые и пересекающиеся контуры</li>
                                    <li>Высота шрифтов не менее 10 мм</li>
                                    <li>При размещении одинаковых элементов на листе , зазор между ними не менее 4 мм</li>
                                    <li>Компонуя материалы для плоттерной обработки, учитывайте размеры изделия, на который будет наноситься изображение, ширину рабочего поля, оставляйте припуски для роликов-держателей плоттера (по 15 мм с боков, по 75 мм сверху и снизу)</li>
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
                                    Лазерно-гравировальная мастерская АсАн предоставляет услуги по плотерной резке. Это самый современный и практичный способ нанесения рисунка на информационные стенды, вывески, рекламные щиты и тд. Технология, которая позволяет вырезать из различных материалов элементы определенной формы. 
                                    </Typography>


                                </blockquote>
                            </Card.Body>
                        </Card>
                        <Table striped bordered hover>
                            <thead>
                                <tr className="text-center">
                                    <th colSpan="5">Стоимость плотерной резки</th>
                                </tr>
                                <tr>
                                    <th>Формат материала</th>
                                    <th className="text-primary">до 50 м2</th>
                                    <th className="text-primary">50-100 м2</th>
                                    <th className="text-primary">от 100 м2</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ORACAL 641, AVERY 500</td>
                                    <td>150 р.</td>
                                    <td>125 р.</td>
                                    <td>100 р.</td>         
                                </tr>  
                            </tbody>
                            </Table>
                            <Table striped bordered hover>
                            <thead>
                                <tr className="text-center">
                                    <th colSpan="5">Повышающие коэффициенты</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Высота минимального элемента меньше 3 см</td>
                                    <td>Цены на резку, выборку и накатку увеличиваются на 50%.</td>         
                                </tr>  
                                <tr>
                                    <td>Светоотражающая пленка</td>
                                    <td>Коэффициент 1,3</td>         
                                </tr>
                                <tr>
                                    <td>Пленка повышенной плотности</td>
                                    <td>Коэффициент 2</td>         
                                </tr>
                            </tbody>
                        </Table>
                        <Table striped bordered hover>
                            <thead>
                                <tr className="text-center">
                                    <th colSpan="5">Дополнительные услуги</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Удаление фона(выборка)</td>
                                    <td>150 p.</td>         
                                </tr>  
                                <tr>
                                    <td>Перенос на монтажку, включая стоимость монтажной пленки</td>
                                    <td>150 p.</td>         
                                </tr>
                                <tr>
                                    <td>Правка файла</td>
                                    <td>300 - 500 p.</td>         
                                </tr>
                                <tr>
                                    <td>Монтаж на пластик</td>
                                    <td>300 p.</td>         
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container></>
        );
    }

export default Services_Плотерная_резка;