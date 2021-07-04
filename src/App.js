import './App.css';
import restaurant from "./restaurant.jpg"
import React, { useState, useEffect, useReducer } from 'react';
import {Routes, Route} from 'react-router-dom'
import pagesExports from './pages'

const Home = pagesExports.Home
const About = pagesExports.About
const Events = pagesExports.Events
const Contact = pagesExports.Contact
const Whoops404 = pagesExports.Whoops404
const Services = pagesExports.Services
const CompanyHistory = pagesExports.CompanyHistory
const Location = pagesExports.Location

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function Header(props) {
  console.log(props);
  return(
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Main(props) {
  return(
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <img src={restaurant} height={200} alt="Restaurant" />
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </section>
  )
}

function Footer(props) {
  return(
    <p>Copyright {props.year}</p>
  )
}

const dishes = ["Macaroni", "Salmon", "Vegetables"];
const dishObjects = dishes.map((item, index) => ({
  id: index, 
  title: item
}))
console.log(dishObjects)

function App() {
  return (
    <div className="App">
      <Header name="Aurora" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

function AppTwo() {
  return(
    <h1>This is the Second App</h1>
  )
}

//Using ConditionalAPP component to render our component conditionally based on properties
function SecretComponent() {
  return (
    <h1>Secret information for authorized users only.</h1>
  )
}

function RegularComponent() {
  return(
    <h1>Everyone can see this component.</h1>
  )
}

function ConditionalApp(props){
  return (
    <>
      {props.authorized ? <SecretComponent /> : <RegularComponent />}
    </>
  )
}

//Using useState Hook
function StateApp() {
  const what = useState();
  console.log(what)
//(2) [undefined, ƒ]
// 0: undefined
// 1: ƒ ()

  return (
    <h1>Hello Word</h1>
  )
}

//Using useState Hook
function StateAppTwo() {
  const [initialEmotion, setEmotion] = useState("Happy");
  console.log(initialEmotion)
  //Happy

  const [secondaryEmotion, setSecondaryEmotion] = useState("Tired");
  console.log(secondaryEmotion)

  useEffect(() => {
    console.log(`It is ${initialEmotion} around here!`);
   }, [initialEmotion]);
  //It is Happy around here!

  useEffect(() => {
    console.log(`It's ${secondaryEmotion} around here!`)
  }, [secondaryEmotion]);

  return (
    <>
    <h1>Current Emotion: {initialEmotion} and {secondaryEmotion}. </h1>
    <button onClick={() => setEmotion("Frustrated")}>Set Frustrated</button>
    <button onClick={() => setEmotion("Happy")}>Set Happy</button>
    <button onClick={() => setSecondaryEmotion("Crabby")}>Set Crabby</button>
    </>
  )
}

function CheckBox() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(`The checkbox is checked: ${checked}`)
  }, [checked]);

  return (
    <>
     <input type="checkbox" value={checked} onChange={()=>setChecked((checked)=>!checked)} />
     <p>{checked ? "Checked" : "Not Checked"}</p>
    </>
  )
}

function CheckBoxTwo() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(`The checkbox is checked: ${checked}`)
  }, [checked]);

  // A reducer function's most simple definition is it takes in the current state and it returns a new state.
  function toggle() {
    setChecked((checked)=>!checked)
  }

  return (
    <>
     <input type="checkbox" value={checked} onChange={toggle} />
     <p>{checked ? "Checked" : "Not Checked"}</p>
    </>
  )
}

function CheckBoxThree() {
  const [checked, toggle] = useReducer(
    (checked)=>!checked,
    false
  );

  useEffect(() => {
    console.log(`The checkbox is checked: ${checked}`)
  }, [checked]);

  return (
    <>
     <input type="checkbox" value={checked} onChange={toggle} />
     <p>{checked ? "Checked" : "Not Checked"}</p>
    </>
  )
}

function FetchApi({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => (response.json()))
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError)
  },[login]);

  if(loading) return(<h1>Loading...</h1>);
  if(error) return (<pre>{JSON.stringify(error,null,2)}</pre>);
  if(!data) return null;

  console.log(data)
  console.log(typeof(data.login))
  return (
    <div>
      {JSON.stringify(data)}
      <h1>{data.name}</h1>
      <p>{data.location}</p>
      <img alt={data.login} src={data.avatar_url} />
    </div>
  )
}

function AppRoutes(){
  return(
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}>
          <Route path='services' element={<Services />} />
          <Route path='history' element={<CompanyHistory />} />
          <Route path='location' element={<Location />} />
        </Route>
        <Route path='/events' element={<Events />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Whoops404 />} />
      </Routes>
    </div>
  )

}

const exports = {App, AppTwo, ConditionalApp, StateApp, StateAppTwo, CheckBox, CheckBoxTwo, CheckBoxThree, FetchApi, AppRoutes}

export default exports;