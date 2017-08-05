import React from 'react';
import ForestListEntry from './ForestListEntry.jsx';

class ForestList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    //:TODO - Do the mapping here then render as {forests}
    // let forests = this.props.forests.map((forest, i) => { 
    //   return <ForestListEntry forest={forest} key={i} />
    // });
    // console.log(forests);
    // this.setState({
    //   myforests: forests
    // })

    return(
      <div>
        LIST ALL FORESTS
      </div>
    );
  }
}

export default ForestList;

        // <h4> List Component </h4>
        // There are { this.props.forests.length } items.
        // {this.props.forests.map((forest, i)=>{
        //   return <ForestListEntry forest={forest} key={i}/>
        // })}