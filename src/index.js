import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import exports from './App'
import pagesExports from './pages'
import {BrowserRouter as Router} from 'react-router-dom'

const App = exports.App
const AppTwo = exports.AppTwo
const ConditionalApp = exports.ConditionalApp
const StateApp = exports.StateApp
const StateAppTwo = exports.StateAppTwo
const CheckBox = exports.CheckBox
const CheckBoxTwo = exports.CheckBoxTwo
const CheckBoxThree = exports.CheckBoxThree
const FetchApi = exports.FetchApi
const AppRoutes = exports.AppRoutes

// ReactDOM.render(
//   React.createElement(
//     "h1",
//     {style: {color: "blue" } },
//     "Hello World!"
//   ),
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <ul>
//     <li>Monday</li>
//     <li>Tuesday</li>
//     <li>Wednesday</li>
//   </ul>,
//   document.getElementById('root')
// );

// const checkList = ["boots", "tent", "headlamp"];
// checkList.forEach(item => console.log(item))

// const [mostImportantItem] = ["boots", "tent", "headlamp"];
// console.log(mostImportantItem)

// const [first, second] = ["boots", "tent", "headlamp"];
// console.log(first, second)

// const [ , , third] = ["boots", "tent", "headlamp"];
// console.log(third)

ReactDOM.render(
  <React.Fragment>
    {/* < App />
    < AppTwo />
    < ConditionalApp authorized={false} />
    < StateApp />
    < StateAppTwo /> */}
    {/* < CheckBox />
    < CheckBoxTwo />
    < CheckBoxThree /> */}
    {/* < FetchApi login="luizfernandopezzi" /> */}
    
    <Router>
      <AppRoutes />
    </Router>
  </React.Fragment>,
  document.getElementById('root')
);