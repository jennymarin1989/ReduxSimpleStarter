import React, {Component } from 'react'; // react works with components
import ReactDOM from 'react-dom';   // is a react library, to render the components into the DOM
import SearchBar from './components/Search_bar';
import NewsAPI from 'newsapi';

const newsapi = new NewsAPI('6c0b6c850dc14ee0b9363ec9279f0792');



 class App extends Component {
   constructor(props){
     super(props)

     this.state = { news: []}
     
     newsapi.v2.everything({ sources: 'bbc-news', q: 'trump'}).then(response => {
        this.setState({news: response});
    });
   }
  
  render(){
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));  // targets the App component, compiles the code get the html
// and render it into a DOM, in this case   
// youtube api AIzaSyDLOJ3OhCRdwzaDB8fXj4lVm_ygKN5bWcw