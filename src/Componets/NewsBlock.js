import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Container, Col, Row, Nav } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import data from './data';


const NewsBlock = (props) => {
  const divStyle = {
    marginLeft: '10px',
  };

  return (

    <Container>
      <Row>

      {data.news.map((news, id) => (
          
          
            <Card style={divStyle} className='mt-5' sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                key={id}
                  component="img"
                  height="140"
                  image={news.imgUrl}
                  alt="img" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {news.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {news.preview}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
              <Link to={`/article/${id + 1}`}>Подробнее</Link>
              </CardActions>
            </Card>
    
          
        ))}

        

      </Row>
    </Container>

  );

}





export default NewsBlock;


