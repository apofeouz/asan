import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import { List, ListItem,} from '@mui/material';
import data from './data';

const ArticlesBlock = (props) => {
    return (
        <List component="nav" aria-label="mailbox folders">
            {data.news.map((news, id) => (
                <ListItem button divider component={Link} to={`/article/${id + 1}`}>{news.title}
                    

                </ListItem>

            ))}
        </List>



    );
}
export default ArticlesBlock;
