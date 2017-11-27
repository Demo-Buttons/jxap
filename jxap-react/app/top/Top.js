import React, { Component } from 'react'; 
// import React from 'react';
import ReactDOM from "react-dom";
import '../css/index.css';

class Top extends Component {
     constructor(props) {
       super(props);	
    }

    render() {
         return (
           <div className="nav"> 
             <h1 className="title">
               <a href="#" id="title-nav">
                 极限社区
               </a>
            </h1>

              <div id="header-primary-custom" className="Header-primary">
                <ul className="Header-controls">
                      <li>
                        <a href="#" className="button1" target="_blank">博客</a>
                     </li>
                     <li>
                        <a href="#" className="button1" target="_blank">GIT 库</a>
                     </li>
                     <li>
                         <a href="#" className="button1" target="_blank">关于我们</a>
                     </li>
                </ul>

                <div id="header-secondary" className="Header-secondary">
                     <ul className="Header-controls">
                           <li className="item-search">
                            <div className="Search ">
                                <div className="Search-input">
                                    
                                            <i className="icon iconfont00"></i>
                                        
                                    <input className="FormControl" placeholder="搜索其实很简单" />
                                </div>
                                <ul className="Dropdown-menu Search-results"></ul>
                            </div>
                        </li>
                         
                         <li className="item-signUp">
                            <button className="button1 Button--link" type="button"><span className="Button-label">注册</span>
                            </button>
                        </li>

                           <li className="item-logIn">
                                    <button className="button1 Button--link" type="button"><span className="Button-label">登入</span>
                                  </button>
                          </li>


                     </ul>
                </div>

              </div>

           </div>
         );
    }	
}

export default Top;










