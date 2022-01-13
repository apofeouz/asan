import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './logo192.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from '../Pages/Home';
import Products from '../Pages/Products';
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


export default class Header extends Component {
    render() {
        return (
            <>
                <Router>
                    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">

                        <Container>
                            <Navbar.Brand href="/">
                                <img
                                    src={logo}
                                    height="30"
                                    width="30"
                                    className="d-inline-block align-top"
                                    alt="Logo"
                                /> Лазерно-Гравировальная мастерская АсАн
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to="/"> Главная </Nav.Link>
                                    <Nav.Link as={Link} to="/products/1"> Продукция </Nav.Link>
                                    <Nav.Link as={Link} to="/services"> Услуги </Nav.Link>
                                    <Nav.Link as={Link} to="/gallery/1"> Галерея </Nav.Link>
                                    <Nav.Link as={Link} to="/contacts"> Контакты </Nav.Link>
                                    <Nav.Link as={Link} to="/articles"> Статьи </Nav.Link>
                                    <Nav.Link as={Link} to="/about"> О компании </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/products/" component={Products} />
                        <Route exact path="/products/:title" component={Products} />
                        <Route exact path="/services" component={Services} />
                        <Route exact path="/services/лазерная_резка/" component={Services_Лазерная_резка} />
                        <Route exact path="/services/лазерная_гравировка/" component={Services_Лазерная_гравировка} />
                        <Route exact path="/services/Плотерная_резка" component={Services_Плотерная_резка} />
                        <Route exact path="/services/Ремонт_станков_с_ЧПУ" component={Services_Ремонт_станков_с_ЧПУ} />
                    
                        <Route exact path="/gallery/:title" component={Gallery} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route exact path="/articles" component={Articles} />
                        <Route exact path="/article/:title" component={Article} />
                        <Route exact path="/about" component={About} />
                    </Switch>
                </Router>
            </>
        );
    }
}
