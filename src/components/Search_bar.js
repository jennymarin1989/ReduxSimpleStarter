import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { 
      searchTerm: ''
    }
  }

  render(){
    return(
      <div>
        <input 
          value={this.state.term} // the initial value of state is '', it will cange when the event on change is triggered
          onChange={ event => this.setState({ searchTerm: event.target.value})}/>
      </div>
    )
  }

}

export default SearchBar;