import React from 'react';
import { List, ListItem} from '@mui/material';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import data from './data';

const ServicesBlock = (props) => {

  return (

    <List component="nav" aria-label="mailbox folders">
     
        
           <ListItem button divider component={Link} to={`/services/`}>{data.titles[2].Dop[0].ФрезернаяРезка}</ListItem>
           <ListItem button divider component={Link} to={`/services/Лазерная_резка/`}>{data.titles[2].Dop[1].ЛазернаяРезка}</ListItem>
           <ListItem button divider component={Link} to={`/services/Лазерная_гравировка/`}>{data.titles[2].Dop[2].ЛазернаяГравировка}</ListItem>
           <ListItem button divider component={Link} to={`/services/Плотерная_резка/`}>{data.titles[2].Dop[3].ПлотернаяРезка}</ListItem>
           <ListItem button divider component={Link} to={`/services/Ремонт_станков_с_ЧПУ/`}>{data.titles[2].Dop[4].РемонтСтанковСЧПУ}</ListItem>

    
    </List>

  );

}

export default ServicesBlock;