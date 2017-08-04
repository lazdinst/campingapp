import React from 'react';

class ForestListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {  
    return(
      <div>
        {this.props.forest.name}
      </div>
    );
  }
}

export default ForestListEntry;