import React from 'react';
import { Alert } from 'react-bootstrap';
import { Helmet } from "react-helmet";
import { Col, Container, Row } from 'react-bootstrap';


const time = 10;

const NotFoundPage = () => (
    <div>
        <meta http-equiv="refresh" content=" 10 URL='http://asan-pro.ru/'" />
        <Helmet>
            <meta charSet="utf-8" />
            <title>"404 страница не найдена"</title>
            <meta name="description" content='Страница 404. Страница не найдена или удалена'></meta>
        </Helmet>
        <Container className="mt-5">
        <Alert variant="success">
            <Alert.Heading className="text-center">404 страница не найдена или была удалена</Alert.Heading>
            <p>
                Приветствуем вас на сайте лазерно-гравировальной мастерской АсАн. Вы перешли на страницу, которой уже не существует. Не надо переживать, всё в порядке. Сейчас вы будете перенаправлены
                на главную страницу нашего сайта и дальше пользуясь меню вы найдёте всю нужну информацию для себя.</p><p> Вы всегда можете связаться с нами по телефону +7 (863) 529 96 50, +7 (951) 49 57 354
                    или написать нам письмо laser@asan-pro.ru
            </p>
            <hr />
            <p className="mb-0 text-center">
                Вы будете перенаправлены на главную страницу через {time} секунд
            </p>
        </Alert>
        </Container>
    </div>


);

export default NotFoundPage;