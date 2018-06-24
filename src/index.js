import React from 'react'; // react works with components
import ReactDOM from 'react-dom';   // is a react library, to render the components into the DOM

const App = () => {
  return <div>Hello</div>
}
ReactDOM.render(<App />, document.querySelector('.container'));  // targets the App component, compiles the code get the html
// and render it into a DOM, in this case   