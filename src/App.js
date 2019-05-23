import React from 'react';
import dotenv from "dotenv"
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Register from "./components/Register";
import HomeMap from "./components/HomeMap";
import Report from "./components/Report"

function init()
{
    dotenv.config();

    if (dotenv.error) {
        throw dotenv.error
    }

    if (process.env.REACT_APP_API_KEY === undefined)
    {
        throw new Error("Env file not present");
    }
}

function HomePage()
{
    return (
        <div>
            <div>
                <Home/>
            </div>
            <div>
                <HomeMap api_key={process.env.REACT_APP_API_KEY}/>
            </div>
        </div>
    )
}

function App()
{
    init();
    return (
      <Router>
          <div className="App">
            <header className="App-header">
                <Header />
            </header>
            <content className="App-body">
                <Route exact={true} path="/" component={HomePage} />
                <Route path="/register" component={Register} />
                <Route path="/report" component={Report} />
            </content>
          </div>
      </Router>
    );
}


export default App;