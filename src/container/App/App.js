import React, { Component} from 'react';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <h2>This is an H2 inside the App container</h2>
      </div>
    );
  }
}

export default App;
