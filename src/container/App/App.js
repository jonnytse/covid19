import React, { Component } from 'react';
import styles from './App.module.scss';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Header />
        <SearchBar />
        <h1>This is an H1 inside the App container</h1>
      </div>
    );
  }
}

export default App;
