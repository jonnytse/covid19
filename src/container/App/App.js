import React, { Component } from 'react';
import styles from './App.module.scss';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

class App extends Component {
  getCountry = (e) => {
    e.preventDefault();
    console.log("It works!");
  }

  render() {
    return (
      <div className={styles.app}>
        <Header />
        <SearchBar getCountry={this.getCountry} />
        <h1>This is an H1 inside the App container</h1>
      </div>
    );
  }
}

export default App;
