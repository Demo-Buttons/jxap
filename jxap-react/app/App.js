import React, { Component } from 'react'; 
// import React from 'react';
import ReactDOM from "react-dom";
import Top  from './top/Top';
import Talk from './talk/Talk';
import Footer from './footer/Footer';
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
          
               <div className="jxcontent">
                      <Talk></Talk>
               </div>

               <div className="jxfooter">
                      <Footer></Footer>
               </div>
          
            </div>
       );
    }	
}

export default App;
