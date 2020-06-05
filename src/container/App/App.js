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
    const searchText = event.target.value;
    console.log(searchText);
    this.setState({ searchText: searchText }, this.filteredCountry)
  }

  filteredCountry = () => {
    let filteredCountry = this.state.countries.filter(country => {
      return country.Country.toLowerCase().includes(this.state.searchText.toLowerCase());
    });
    this.setState({ filteredCountry: filteredCountry});
    console.log(filteredCountry);
  }

  async componentDidMount() {
    const api_call = await fetch(`https://api.covid19api.com/summary`);
    const data = await api_call.json();
    // console.log(data); //thisis an object
    // console.log(data.Countries); //this is the array
    this.setState({ countries: data.Countries });
    console.log(this.state.countries);

    // //this targets the specific data points from within the countries array and console logs
    // for (let i = 0; i < data.Countries.length; i++) {
    //   console.log(
    //     data.Countries[i].Country,
    //     data.Countries[i].NewDeaths,
    //     data.Countries[i].NewConfirmed,
    //     data.Countries[i].TotalDeaths)
    // };

  }

  render() {
    return ( 
      <div className={styles.app}>
        <Header />
        <SearchBar searchText={this.state.searchText} setSearchText={this.setSearchText} />
        <CountryList countryData={this.state.filteredCountry} />

          {/* this outputs/displays the country list to the brower, straight from the countries array in line 9 */}
          {/* { this.state.countries.map((country) => {
          return <p key={country.CountryCode}>{ country.Country }</p> */}

        { this.state.countries.map((country) => {
            return (
              <div className={styles.countryCard} key={country.CountryCode}>
                <h2>{ country.Country }</h2>
                <p>Daily deaths: { country.NewDeaths }</p>
                <p>New confirmed cases: { country.NewConfirmed }</p>
                <p>Total Covid deaths: { country.TotalDeaths }</p>
              </div>
            )
          })
        }
        {/* <h1>This is an H1 inside the App container</h1> */}
      </div>
    );
  }
}

export default App;
