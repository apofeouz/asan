import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../favicon.ico';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from '../Pages/Home';
// import Products from '../Pages/Products';
import Product from '../Pages/Product';
import Product_1 from '../Pages/Product_1';
import Services from '../Pages/Services';
import Services_Лазерная_резка from '../Pages/Services/Лазерная_резка';
import Services_Лазерная_гравировка from '../Pages/Services/Лазерная_гравировка';
import Services_Плотерная_резка from '../Pages/Services/Плотерная_резка';
import Services_Ремонт_станков_с_ЧПУ from '../Pages/Services/Ремонт_станков_с_ЧПУ';

import Gallery from '../Pages/Gallery';
import Contacts from '../Pages/Contacts';
import Articles from '../Pages/Articles';
import Article from '../Pages/Article';
import About from '../Pages/About';

import data from './data';


export default class Header extends Component {
    render() {
        return (
            <>
            
                <Router>
                    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">

                        <Container>
                            <Navbar.Brand  href="/">
                                <img 
                                    src={logo}
                                    height="30"
                                    width="30"
                                    className="d-inline-block align-top"
                                    alt="Logo"
                                />Лазерно-Гравировальная мастерская
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to="/">{data.titles[0].Главная}</Nav.Link>
                                    <Nav.Link as={Link} to="/product/Информационные_стенды">{data.titles[1].Продукция}</Nav.Link>
                                    <Nav.Link as={Link} to="/services">{data.titles[2].Услуги}</Nav.Link>
                                    <Nav.Link as={Link} to="/gallery/1">{data.titles[3].Галерея}</Nav.Link>
                                    <Nav.Link as={Link} to="/contacts">{data.titles[4].Контакты}</Nav.Link>
                                    <Nav.Link as={Link} to="/articles">{data.titles[5].Статьи}</Nav.Link>
                                    <Nav.Link as={Link} to="/about">{data.titles[6].О_нас}</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Switch>
                        <Route exact path="/" render= { () =><Home titles = {data.titles[0]} news = {data.news}/> } />
                        {/* <Route exact path="/products/" render= { () =><Products titles = {data.titles[1].Продукция}/> } /> */}
                        <Route exact path="/product/Информационные_стенды" render= { () =><Product titles = {data.titles[1]} product = {data.product} products = {data.products[0]} /> } />
                        <Route exact path="/product/Свадебная_атрибутика" render= { () =><Product titles = {data.titles[1]} product = {data.product} products = {data.products[1]} /> }/>
                        <Route exact path="/services" render= { () =><Services titles = {data.titles[2].Dop[0].ФрезернаяРезка} description = {data.titles[2].Dop[0].description}/> } />
                        <Route exact path="/services/лазерная_резка" render= { () =><Services_Лазерная_резка titles = {data.titles[2].Dop[1].ЛазернаяРезка} description = {data.titles[2].Dop[1].description}/>  } />
                        <Route exact path="/services/лазерная_гравировка" render= { () =><Services_Лазерная_гравировка titles = {data.titles[2].Dop[2].ЛазернаяГравировка} description = {data.titles[2].Dop[2].description}/> } />
                        <Route exact path="/services/Плотерная_резка" render= { () =><Services_Плотерная_резка titles = {data.titles[2].Dop[3].ПлотернаяРезка} description = {data.titles[2].Dop[3].description}/>  } />
                        <Route exact path="/services/Ремонт_станков_с_ЧПУ" render= { () =><Services_Ремонт_станков_с_ЧПУ titles = {data.titles[2].Dop[4].РемонтСтанковСЧПУ} description = {data.titles[2].Dop[4].description}/>  } />
                        <Route exact path="/gallery/:title"  component={Gallery}  />
                        <Route exact path="/contacts" render= { () =><Contacts titles = {data.titles[4]}/> } />
                        <Route exact path="/articles" render= { () =><Articles titles = {data.titles[5]} />} />
                        <Route exact path="/article/:title" component={Article} />
                        <Route exact path="/about" render= { () =><About titles = {data.titles[6]} partners ={data.partners} maps = {data.maps}/> } />
                    </Switch>
                </Router>
            </>
        );
    }
}
