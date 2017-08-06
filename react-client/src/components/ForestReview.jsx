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

  generateStars (review) {
    var stars = [];
    console.log('Rating:', review.rating)
    var rating = this.props.review.rating;
    for(var i = 0; i < rating; i++) {
      stars.push(<Glyphicon glyph="star" key={i}/>);
    }
    return stars;
  }

  render() {
    if(this.props.review.reviewer === 'Ben Franklin') {
      var imgsrc = 'https://a.spirited.media/wp-content/uploads/sites/2/2017/01/BENJAMIN_FRANKLIN.jpg';
    } else if (this.props.review.reviewer === 'Jimmy Madison') {
      var imgsrc = 'https://media1.britannica.com/eb-media/50/2250-004-1F1AED00.jpg';
    } else {
      var imgsrc = 'https://pbs.twimg.com/profile_images/716487122224439296/HWPluyjs.jpg';
    }
    var stars = this.generateStars(this.props.review);

    return(
      <Media>
        <Media.Left align="top">
          <img width={64} height={64} src={imgsrc} alt={this.props.review.reviewer}/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>
          <div>{this.props.review.title} </div>
          <div><i>{this.props.review.reviewer}</i></div>
          </Media.Heading>
          <Well bsSize="small">{this.props.review.review}</Well>
          <h5>Rating: {stars}</h5>
        </Media.Body>
      </Media>
    );
  }
}

export default ForestReview;