import React, { Component } from 'react';
import styles from './App.module.scss';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import CountryList from '../../components/CountryList';

class App extends Component {
  state = {
    countries: [],
    searchText: "",
    filteredCountry: []
  }

  setSearchText = (event) => {
    const searchText = event.target.value.toLowerCase();
    this.setState({ searchText }, this.filteredCountry)
  }

  filteredCountry = () => {
    let filteredCountry = this.state.countries.filter(country => {
      return country.Country.toLowerCase().includes(this.state.searchText.toLowerCase());
    });
    this.setState({ filteredCountry});
  }

  async componentDidMount() {
    const api_call = await fetch(`https://api.covid19api.com/summary`);
    const data = await api_call.json();
    // console.log(data); //thisis an object
    // console.log(data.Countries); //this is the array
    this.setState({ countries: data.Countries });
    console.log(this.state.countries);
  }

  render() {
    // console.log(this.SearchText);
    return ( 
      <div className={styles.app}>
        <Header />
        <SearchBar searchText={this.state.searchText} setSearchText={this.setSearchText} />
        <CountryList countryData={this.state.filteredCountry} />
          {/* this outputs/displays the country list to the brower */}
          { this.state.countries.map((country) => {
          return <p key={country.CountryCode}>{ country.Country }</p>
        })}
        <h1>This is an H1 inside the App container</h1>
      </div>
    );
  }
}

export default App;
