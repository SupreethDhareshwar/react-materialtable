//src/components/RightArea.js
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
    card: {
        width: '45%',
        marginLeft:'24px',
        marginTop:'24px',
        float:'right',
        marginRight:'24px',
        marginBottom:'24px'
    },
    floarRight:{
      textAlign: 'right'
    }
  };

export default withStyles(styles) (class RightArea extends Component{
  
render(){
    const classes = this.props.classes;
    if(this.props.selectedRow == null ) {
        return (<Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Additional Details
            </Typography>
            <Typography gutterBottom variant="subheading" component="p">
              No Row Selected
            </Typography>
          </CardContent>
          </Card>);
    }
    else {
        return(
            <Card className={classes.card}>
             
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Additional Details
                </Typography>
                <List component="nav">
        <ListItem >
          <ListItemText primary="Movie Title" />
          <ListItemText className={classes.floarRight} primary={this.props.selectedRow.movie_title} />
        </ListItem>
        <ListItem >
          <ListItemText primary="Year" />
          <ListItemText className={classes.floarRight} primary={this.props.selectedRow.title_year} />
        </ListItem>
           <ListItem >
          <ListItemText primary="Genres" />
          <ListItemText className={classes.floarRight} primary={this.props.selectedRow.genres} />
        </ListItem>
        <ListItem >
          <ListItemText primary="Actors" />
          <ListItemText className={classes.floarRight} primary={this.props.selectedRow.actor_1_name + "  ,  " + this.props.selectedRow.actor_2_name } />
        </ListItem>
        <ListItem >
          <ListItemText primary="Director" />
          <ListItemText className={classes.floarRight} primary={this.props.selectedRow.director_name} />
        </ListItem>
        <ListItem >
          <ListItemText primary="Budget" />
          <ListItemText className={classes.floarRight} primary={"$"+this.props.selectedRow.budget} />
        </ListItem>
        <ListItem >
          <ListItemText primary="Director" />
          <ListItemText className={classes.floarRight} primary={this.props.selectedRow.director_name} />
        </ListItem>
        <ListItem >
          <ListItemText primary="Content Rating" />
          <ListItemText className={classes.floarRight} primary={this.props.selectedRow.content_rating} />
        </ListItem>
        <ListItem >
          <ListItemText primary="Language" />
          <ListItemText className={classes.floarRight} primary={this.props.selectedRow.language} />
        </ListItem>
        <ListItem >
          <ListItemText primary="Country" />
          <ListItemText className={classes.floarRight} primary={this.props.selectedRow.country} />
        </ListItem>
  <ListItem >
          <ListItemText primary="Plot Keywords" />
          <ListItemText className={classes.floarRight} primary={this.props.selectedRow.plot_keywords} />
        </ListItem>
        <ListItem >
          <ListItemText primary="IMDB Link" />
          <ListItemText className={classes.floarRight}>
          <a target="_blank" href={this.props.selectedRow.movie_imdb_link}>Click Here</a>
          </ListItemText>
        </ListItem>
      </List>
              </CardContent>
         
            </Card>
        );
      }
    }
})
