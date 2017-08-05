import React from 'react';
import ForestListEntry from './ForestListEntry.jsx';

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
      <div>
        {forests}
      </div>
    );
  }
}

export default ForestList;