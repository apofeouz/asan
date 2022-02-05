import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MDBInput } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

const refreshPage = () => {
  window.alert('Ваше сообщение успешно отправленно')
  setTimeout(() => { window.location.reload(); }, 1000);
}
const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_smt2u1o', 'template_l0ngofd', form.current, 'user_OmlYoOtBYBuJylWZFaV6z')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
      <form ref={form} onSubmit={sendEmail}>
        <MDBInput label='Ваше имя' name="user_name" type='text' />
        <MDBInput label='Ваш Email' name="user_email" type='email' />
        <MDBInput label='Ваше сообщение' name="message" textarea rows={4} />
        <Button variant="primary" type="submit" onClick={refreshPage} >Отправить</Button>
      </form>
  );
};

export default ContactUs;