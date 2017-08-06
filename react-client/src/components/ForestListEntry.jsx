import React from 'react';
import { Link } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap';
import {Panel, Grid, Row, Col, Image, Thumbnail, Media} from 'react-bootstrap';
import {Button, ButtonGroup, Glyphicon} from 'react-bootstrap'

class ForestListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //TODO: Refactor this and Forest Entry Panel to Component
    let forest = this.props.forest;
    let footer = () => {
      return (
        <ButtonGroup >
          <LinkContainer to={`/forests/${forest._id}`}>
            <Button><Glyphicon glyph="heart" /></Button>
          </LinkContainer>
          <LinkContainer to={`/forests/${forest._id}`}>
            <Button><Glyphicon glyph="comment" /></Button>
          </LinkContainer>
          <Button href={this.props.forest.usfs}><Glyphicon glyph="info-sign" /></Button>
        </ButtonGroup>
      );
    };

    let header = () => {
      return (<Link to={`/forests/${forest._id}`}>{forest.name}</Link>)
    }

    return(
      <Panel header={header()} bsStyle="success" footer={footer()}>
        <Image src={this.props.forest.image} rounded />
          {this.props.forest.description}
      </Panel>
    );
  }
}

export default ForestListEntry;