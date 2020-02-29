import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Link,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  EmojiObjects as LightBulbIcon,
} from '@material-ui/icons';


const useStyles = makeStyles( theme => ({
  headerContainer: {

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  /* 
   * NOTE: you can either use this offset class in a
   * naked div, or put a proper 'paddingTop' in the 
   * mainContainer class below. A value of 96 is ok.
   * This 'magic' number was obtained based on the
   * minHeight of the Toolbar component (double the 
   * minimal value it can take). Since the Material-UI
   * API does not expose a nice way to get this value,
   * it would need to be hardcoded. If you are using
   * this approach and something breaks (like text 
   * going behing the toolbar), check this value first.
   */
  /*offset: theme.mixins.toolbar,*/
  mainContainer: {
    paddingTop: 96,
    /*paddingTop: theme.spacing(2),*/
    paddingBottom: theme.spacing(2),
  },
  footerContainer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  proTip: {
    margin: theme.spacing(6, 0, 4),
  },
  lightBulbIcon: {
    verticalAlign: 'bottom',
    marginRight: theme.spacing(1),
  },
}) );

/* 
 * Use only 'fixed' and 'maxWidth', or you
 * are going to have problems with the 
 * Toolbar using the Container as native
 * element (props collision).
 */
const myContainer = {
  fixed: true,
  maxWidth: 'md',
};

const App = () => {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      
      <AppBar>
        <Toolbar disableGutters variant='dense'
          component={Container} {...myContainer} className={classes.headerContainer}
        >
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='h1' className={classes.title} noWrap>
            Material-UI
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>

      <Container component='main' {...myContainer} className={classes.mainContainer}>
        <Typography variant='h4' component='h2' align='center'>
          Create React App example
        </Typography>

        <Typography align='center' className={classes.proTip}>
          <LightBulbIcon className={classes.lightBulbIcon}/>
          {'Pro tip: See more '}
          <Link href='https://material-ui.com/getting-started/templates/'>
            templates
          </Link>
          {' on the Material-UI documentation.'}
        </Typography>

        <Typography gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam at risus convallis euismod. Nullam ac tortor sed ligula tempus vestibulum. Maecenas in semper ante. Curabitur lorem justo, mattis eu lacus vel, laoreet rutrum turpis. Cras nec sem ultricies ipsum aliquet tristique. Quisque elementum interdum dolor in pretium. Nullam rutrum faucibus dolor vitae fermentum. Vestibulum eget viverra tortor. Vestibulum tempor lorem mi, nec iaculis nunc ultricies a. Mauris aliquam arcu purus, quis gravida odio ultrices ac.
        </Typography>
        <Typography gutterBottom>
          Nam ut dapibus lorem, nec gravida orci. Integer bibendum magna eros, sit amet finibus nisi convallis quis. Sed in tincidunt lorem. Duis sed blandit quam, id mollis neque. Aenean aliquet dapibus justo, quis malesuada justo porta et. Praesent neque lectus, convallis ac diam in, euismod rutrum dui. Cras quis convallis neque. Integer aliquam semper turpis nec placerat. In ante arcu, condimentum eget tempus sit amet, efficitur vitae libero.
        </Typography>
        <Typography gutterBottom>
          Phasellus nec tortor nec elit dictum sodales vitae sed sapien. Sed condimentum mauris vel lectus imperdiet, vitae lobortis lorem pulvinar. Praesent vitae dictum est, sit amet blandit nibh. Maecenas sit amet purus eget elit lobortis pretium. Suspendisse potenti. Proin ut tellus vel odio gravida condimentum. Nullam a nibh sit amet odio vestibulum placerat id a arcu. Sed pretium arcu turpis. Maecenas congue tortor quam, a dignissim quam blandit id. Morbi condimentum ullamcorper feugiat.
        </Typography>
        <Typography gutterBottom>
          Quisque imperdiet et eros at ultricies. Sed ac egestas nulla. Vivamus sit amet cursus tellus. Nunc quam nisl, finibus eget ante in, commodo dapibus sapien. Mauris pharetra efficitur ipsum non sodales. Nam posuere semper elit quis tristique. Praesent vestibulum leo vel purus fringilla dignissim. Maecenas eget mauris ante. Mauris ac interdum felis. Aliquam dapibus tincidunt pellentesque.
        </Typography>
        <Typography>
          Cras ut ipsum orci. Fusce magna mi, fringilla quis fermentum id, pharetra eget massa. Suspendisse ullamcorper ultricies ex, id egestas lacus. Nunc interdum purus nec purus iaculis, et placerat risus vehicula. Sed a ultrices augue. Nam luctus lacus pulvinar, gravida arcu sit amet, congue ex. Donec nec hendrerit sem, ut tempus ligula. Quisque lobortis magna eget ante tempus ullamcorper. Sed massa augue, pretium sit amet lacus sit amet, scelerisque varius dui. Sed venenatis diam sed leo euismod euismod nec vitae velit. Maecenas tempus bibendum facilisis. Nulla ut ipsum at arcu consequat commodo. 
        </Typography>
      </Container>

      <Container component='footer' {...myContainer} className={classes.footerContainer}>
        <Typography variant='body2' color='textSecondary' align='center'>
          {'Copyright © '}
          <Link color='inherit' href='https://material-ui.com/'>
            Your Website
          </Link>
          {' '}{new Date().getFullYear()}{'.'}
        </Typography>
      </Container>
      
    </React.Fragment>
  );
};

export default App;