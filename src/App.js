import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "material-ui-search-bar";

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <header>Math Base</header>
        <p class="sub">A motto will go here one day...</p>
        <SearchBar
          class="search" 
          placeholder="Insert a formula..."
          style={{
            margin: 'auto',
            marginTop: '-250px',
            width: '40vw'
          }}
        />
        <formulas />
      </div>
    );
  }
}

export default App;
