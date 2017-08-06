import React from 'react';
import { Link } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap';
import {Media, Well} from 'react-bootstrap';
import {Panel, Grid, Row, Col, Image, Thumbnail} from 'react-bootstrap';
import {Button, ButtonGroup, Glyphicon} from 'react-bootstrap'


class ForestReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  generateStars () {
    console.log('Rating:', this.props.review.rating)
    // var rating = this.props.review.rating;
    // return ((rating) => {
    //   var stars 
    //   for(var i = 0; i < rating; i++){
    //     stars.push(<Glyphicon glyph="star" />);
    //   }
    //   return stars;
    // });
  }

  render() {
    if(this.props.review.reviewer === 'Ben Franklin') {
      var imgsrc = 'https://a.spirited.media/wp-content/uploads/sites/2/2017/01/BENJAMIN_FRANKLIN.jpg';
    } else if (this.props.review.reviewer === 'Jimmy Madison') {
      var imgsrc = 'https://media1.britannica.com/eb-media/50/2250-004-1F1AED00.jpg';
    } else {
      var imgsrc = 'https://pbs.twimg.com/profile_images/716487122224439296/HWPluyjs.jpg';
    }
    //generateStars();

    return(
      <Media>
        <Media.Left align="top">
          <img width={64} height={64} src={imgsrc} alt={this.props.review.reviewer}/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>{this.props.review.title}</Media.Heading>
          <Well bsSize="small">{this.props.review.review}</Well>
        </Media.Body>
          {this.props.review.rating}
      </Media>
    );
  }
}

export default ForestReview;