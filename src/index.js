import React from 'react';
import ReactDOM from 'react-dom';

//unlike libraries (which are namespaced) we need to import our own files with a file path
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAXP4htP7AJBlLpDUd4FnefgG5iDGJGPno'

// Create a new component, which should produce some HTML

//Fat arrow is basically same as 'function'
const App = () => {
  //JSX allows us to use what looks like HTML as JavaScript
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));