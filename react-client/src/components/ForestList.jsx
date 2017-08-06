import React from 'react';
import ForestListEntry from './ForestListEntry.jsx';
import {Grid, Row, Col} from 'react-bootstrap';

class ForestList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    let forests = this.props.forests.map((forest, i) => { 
      return <ForestListEntry forest={forest} key={i} />
    });

    return(
      <div className="container-fluid">
        {forests}
      </div>
    );
  }
}

export default ForestList;