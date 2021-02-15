import React, { Component } from "react";
import './App.css'

import Header from './components/Header';
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {
    state = {}
    
	render() {
        return <div className="body">
            <div className="body-title">
                <Header />
                <List />
                <Footer />
            </div>
        </div>
	}
}
