import React from 'react'; // react works with components
import ReactDOM from 'react-dom';   // is a react library, to render the components into the DOM
import SearchBar from './components/Search_bar';

// CONST API_KEY= '6c0b6c850dc14ee0b9363ec9279f0792';


const App = () => {
  return (
    <SearchBar />
  )
}
ReactDOM.render(<App />, document.querySelector('.container'));  // targets the App component, compiles the code get the html
// and render it into a DOM, in this case   

// youtube api AIzaSyDLOJ3OhCRdwzaDB8fXj4lVm_ygKN5bWcw