import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        isLoaded: false,
        items: []
      }
    }

    componentDidMount() {
      

      const myHeaders = new Headers();

      myHeaders.append('x-api-key', 'b2ac60d8-6e21-41b1-980f-33ec13134ed0');
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('cache-control', 'no-cache')

      fetch('http://testing.euw.istaffsystems.com', {
        method: 'GET',
        headers: myHeaders,
        async: true,
      })
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
    }
    
render() {
      var{isLoaded, items} = this.state;
      if(!isLoaded) {
        return <div>Loading...</div>;
      }
      
      else{
       return (
         <div className="App">
           <ul>
             {items.map(item => (
               <li key={item.id}>
                 Name: {item.name} | Id:{item.id}
               </li>
             ))};
           </ul>
         </div>
       );
      }
    }
  }
  
  export default App;
  