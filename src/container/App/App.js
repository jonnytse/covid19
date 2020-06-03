import React, { Component } from 'react';
import styles from './App.module.scss';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

class App extends Component {
  state = {
    //create an empty array that stores whatever is requested from the API
    countries: []
  }


  //getCountry is a method
  getCountry = async (e) => {
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.covid19api.com/summary`);
    console.log(country);

    const data = await api_call.json();
    console.log(data); //this is an object
    // console.log(data.Countries); //this is the array
    this.setState({ countries: data.Countries });
    console.log(this.state.countries);
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
