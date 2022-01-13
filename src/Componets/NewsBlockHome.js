import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Container, Col, Row } from 'react-bootstrap';
import { BrowserRouter as Nav, Link } from "react-router-dom";
import data from './data';

const GetLocalPosts = (props) => {
  const divStyle = {
    marginLeft: '20px',
  };
  return (
    <Container>
      <Row>
        {
          data.news.filter(id => id.id < 4).map(id => (
            <Card style={divStyle} className='mt-5' sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={id.imgUrl}
                  alt="img"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {id.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {id.preview}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" component={Link} to={`/article/${id.id}`}>
                  Подробнее
                </Button>
              </CardActions>
            </Card>


          ))}
      </Row>
    </Container>
  );

}

export default GetLocalPosts;


