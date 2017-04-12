// React import statements needed for all components using JSX
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Creating 'class' allows component to communicate with other components - we are extending React component so that our class has its functionality

//Functional components DO NOT HAVE STATE, only class-based ones do
class SearchBar extends Component {
  constructor(props) {
    super(props);
    //defining the property 'search term' on state
    this.state = { term: ''};
  }

  //this.setState allows us to update the state (which was initially set up as above) - this.setState allows us to inform React of a change
  render() {
    return ( 
      <div className="search-bar">
        <input 
          //initial value = empty string (term), this section makes the component a controlled component
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>  
      );
    }

    onInputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term);
    }
  }

export default SearchBar;