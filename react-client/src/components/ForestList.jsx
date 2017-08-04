import React from 'react';
import ForestListEntry from './ForestListEntry.jsx';

class ForestList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {  
    return(
      <div>
        <h4> List Component </h4>
        There are { this.props.forests.length } items.
        {this.props.forests.map((forest, i)=>{
          return <ForestListEntry forest={forest} key={i}/>
        })}
        
      </div>
    );
  }
}

export default ForestList;


