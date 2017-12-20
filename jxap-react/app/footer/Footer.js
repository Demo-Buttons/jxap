import React, { Component } from 'react'; 
// import React from 'react';
import ReactDOM from "react-dom";
import '../css/index.css';

class Footer extends Component {
     constructor(props) {
       super(props);	
    }

    render() {
         return (
          <div className="footerList"> 
                
           <p className="footer-content">Footer 组件</p>

          </div>
         );
    }	
}

export default Footer;
