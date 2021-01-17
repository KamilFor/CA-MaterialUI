import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import theme from './theme';
import { Box, Container, Grid, Avatar } from '@material-ui/core';

// CARD IMPORT
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

// icon
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#fff',
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
    textAlign: 'center',
    height: '500px',
    backgroundPosition: 'center',
    backgroundReapet: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '4rem',
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxwidth: '100%',
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: 'flex',
    margin: '0 10px',
    justifyContent: 'space-between',
  },
  author: {
    display: 'flex',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <AppBar className={classes.appBar} position='static'>
          <Toolbar>
            <Typography color='primary' variant='h6'>
              Blog
            </Typography>
          </Toolbar>
        </AppBar>
        <Box className={classes.hero}>
          <Box>React Blog</Box>
        </Box>
        <Container maxWidth='lg' className={classes.blogsContainer}>
          <Typography variant='h4' className={classes.blogTitle}>
            Articles
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image='https://images.unsplash.com/photo-1610859898100-c0d6c5b01345?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      React useContext
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                      continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar src='https://images.unsplash.com/photo-1610831797444-162a3e8dba30?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' />
                    <Box ml={2}>
                      <Typography variant='subtitle' component='p'>
                        Guy Clemons
                      </Typography>
                      <Typography variant='subtitle2' color='textSecondary' component='p'>
                        May 14, 2020
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <TurnedInNotIcon />
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image='https://images.unsplash.com/photo-1610779615424-10180250e460?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      React useContext
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                      continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar src='https://images.unsplash.com/photo-1610594885823-1d8516dc4ca6?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' />
                    <Box ml={2}>
                      <Typography variant='subtitle' component='p'>
                        Guy Clemons
                      </Typography>
                      <Typography variant='subtitle2' color='textSecondary' component='p'>
                        May 14, 2020
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <TurnedInNotIcon />
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image='https://images.unsplash.com/photo-1610649332976-24884b3a5c28?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      React useContext
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                      continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar src='https://images.unsplash.com/photo-1610494163039-f757e22ebd30?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' />
                    <Box ml={2}>
                      <Typography variant='subtitle' component='p'>
                        Guy Clemons
                      </Typography>
                      <Typography variant='subtitle2' color='textSecondary' component='p'>
                        May 14, 2020
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <TurnedInNotIcon />
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image='https://images.unsplash.com/photo-1610816425076-3d808482f103?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      React useContext
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                      continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar src='https://images.unsplash.com/photo-1610658085813-cdfe3c512b02?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' />
                    <Box ml={2}>
                      <Typography variant='subtitle' component='p'>
                        Guy Clemons
                      </Typography>
                      <Typography variant='subtitle2' color='textSecondary' component='p'>
                        May 14, 2020
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <TurnedInNotIcon />
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export { App };
