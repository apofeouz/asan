import React from 'react';
import { List, ListItem} from '@mui/material';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const ServicesBlock = (props) => {

  return (

    <List component="nav" aria-label="mailbox folders">
     
        
           <ListItem button divider component={Link} to={`/services/`}>Фрезерная резка</ListItem>
           <ListItem button divider component={Link} to={`/services/Лазерная_резка/`}>Лазерная резка</ListItem>
           <ListItem button divider component={Link} to={`/services/Лазерная_гравировка/`}>Лазерная гравировка</ListItem>
           <ListItem button divider component={Link} to={`/services/Плотерная_резка/`}>Плотерная резка</ListItem>
           <ListItem button divider component={Link} to={`/services/Ремонт_станков_с_ЧПУ/`}>Ремонт станков с ЧПУ</ListItem>

    
    </List>

  );

}

export default ServicesBlock;