import React from 'react'
import Main from "./component/2/Main"
import Quotes from "./1/Quotes"
import { BrowserRouter , Route , Router, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
    <Switch>
       <Route path="/" exact component = {Main} />
       <Route path ="/temp" component = {Quotes} />

      </Switch>
   
    </>
  )
}

export default App
