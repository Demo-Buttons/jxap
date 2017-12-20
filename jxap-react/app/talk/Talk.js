import React, { Component } from 'react'; 
// import React from 'react';
import ReactDOM from "react-dom";
import '../css/index.css';

class Talk extends Component {
     constructor(props) {
       super(props);	
    }

    render() {
         return (
          <div className="talkList"> 
                <div className="talkLeft">
                  <p className="talkLeft-title">左侧标签栏</p>
                  </div>
                <div className="talkRight">
                <p className="talkRight-title">右侧答疑区</p>
                </div>
           

          </div>
         );
    }	
}

export default Talk;
