import React from 'react'
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


export default function App() {
  return (
    // <div style={{backgroundColor:"#dcdfe6"}}>
    <>
      {/* <Router> */}
        <Header/>
        <Home/>
        {/* <Switch>
          <Route exact path="/college-finder" >
            <Home/>
          </Route>
          <Route exact path="/college-finder/about" >
            <About/>
          </Route>
          <Route exact path="/college-finder/contact" >
            <Contact/>
          </Route>
        </Switch>
      </Router> */}
    </>
  )
}
