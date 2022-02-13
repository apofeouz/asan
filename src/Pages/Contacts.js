import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Alert } from '@mui/material';
import ContactUs from '../Componets/ContactUs';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import { Helmet } from "react-helmet";



const Contacts = (props) => {
  return (

    <><Helmet>
      <meta charSet="utf-8" />
      <title>{props.titles.Контакты}</title>
      <meta name="description" content={props.titles.description}></meta>
    </Helmet><Container>
        <Row className="mt-5">
          <Col md="4" className="mt-2">
            <Typography gutterBottom variant="h5" component="div" className="text-center">
              Обратная связь
            </Typography>
            <hr className="my-3" />
            <ContactUs />
            <Typography gutterBottom variant="h6" component="div" className="text-center mt-2">
              Наши реквизиты
            </Typography>
            <hr className="my-3" /><Card>
              <Typography variant="body2" color="text.secondary">
                <p className='text-center'>ОГРНИП: 315619200002926 от 13.05.2015</p>
                <p className='text-center'>ИНН: 614209056125</p>
              </Typography>
            </Card>

          </Col>
          <Col md="8">
            <MDBCard>
              <MDBCardBody>

                <h3 className="text-center">
                  <strong>Контактная информация</strong>
                </h3>

              </MDBCardBody>

              <hr className="my-3" />

              <MDBCardBody>
                <p> Уважаемы клиенты, если у Вас появились вопросы, мы всегда рады на них ответить.
                  Ждём ваших звонков, а также Вы можете воспользоваться формой обратной связи.
                  Специалисты нашей лазерно-гравировальной мастерской в самое ближайшее время ответят
                  Вам на вопросы, связанные с услугой лазерной резки и гравировки неметаллических материалов.
                  Мы искренне надеемся, что на страницах нашего сайта Вы нашли то, что искали.</p>
                <Alert severity="info">Мы принимаем заказы из других регионов РФ. Заказы отправляются
                  транспортными компаниями или почтой России. Пункт самовывоза товаров и изделий находится по адресу:</Alert>
              </MDBCardBody>

              <List>


                <ListItem>
                  <ListItemAvatar>

                    <HomeIcon color="primary" />

                  </ListItemAvatar>
                  <ListItemText primary="Лазерно-гравильная мастерская АсАн" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>

                    <FmdGoodIcon color="primary" />

                  </ListItemAvatar>
                  <ListItemText primary="город Белая Калитва, Кольцова 25 А" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>

                    <LocalPhoneIcon color="primary" />

                  </ListItemAvatar>
                  <ListItemText primary="Наши телефоны:" secondary="+7 (863) 529 96 50, +7 (951) 49 57 354" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <EventAvailableIcon color="primary" />
                  </ListItemAvatar>
                  <ListItemText primary="Режим работы:" secondary="Понедельник - пятница: 10:00 - 19:00" />
                </ListItem>

                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <EventAvailableIcon color="error" />
                  </ListItemAvatar>
                  <ListItemText primary="Режим работы:" secondary="Суббота: 10:00 - 18:00" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <AttachEmailIcon color="primary" />
                  </ListItemAvatar>
                  <ListItemText primary="E-mail" secondary="laser@asan-pro.ru" />
                </ListItem>
              </List>

            </MDBCard>

          </Col>
        </Row>
      </Container></>

  );
}

export default Contacts;