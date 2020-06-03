import React, { Component } from 'react';
import styles from './App.module.scss';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

class App extends Component {
  //getCountry is a method
  getCountry = (e) => {
    const country = e.target.elements.country.value;
    e.preventDefault();
    console.log(country);
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
