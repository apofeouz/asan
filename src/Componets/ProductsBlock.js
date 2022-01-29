import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import { List, ListItem,} from '@mui/material';
import data from './data';

const ProductsBlock = (props) => {
    return (
        <List component="nav" aria-label="mailbox folders">
            {data.products.map((products, id, product,url) => (
                <ListItem button divider component={Link} to={`/product/${products.url}`}>{products.title}
                    

                </ListItem>

            ))}
        </List>
    );
}
export default ProductsBlock;