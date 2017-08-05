import React from 'react';

class ForestListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {  
    return(
      <div className="section group">
        <a href={this.props.forest.usfs}>{this.props.forest.name}</a>
        <div className="col span_1_of_3">
          <img className="avatar" src={this.props.forest.image}/>
        </div>
        <div className="col span_2_of_3">
          <div>{this.props.forest.description}</div>
        </div>
      </div>
    );
  }
}

export default ForestListEntry;