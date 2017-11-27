import React, { Component } from 'react'; 
// import React from 'react';
import ReactDOM from "react-dom";
import Top  from './top/Top';
import './css/index.css';


class App extends Component {
   constructor(props) {
       super(props);	
    }
    
    render() {
       return (
           <div className="wrap">
               <div className="jxtop">
                      <Top></Top>
               </div>
            </div>
       );
    }	
}

export default App;