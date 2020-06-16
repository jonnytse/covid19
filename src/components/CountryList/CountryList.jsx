import React, { Component } from 'react';
import styles from './CountryList.module.scss';
// import Country from '../Country/Country';

class CountryList extends Component {
    render() {
        return (
            //<></> is called a fragment, and allows wrapping more than 1 thing in a return 
            <>
            <p>CountryList component</p>
            <div className={styles.countryList}>
                {this.props.countryData.map((country) => {
                    return ( 
                        <div className={styles.countryCard} key={country.CountryCode}>
                            <h2>{ country.Country }</h2>
                            <p>Daily deaths: { country.NewDeaths }</p>
                            <p>New confirmed cases: { country.NewConfirmed }</p>
                            <p>Total Covid deaths: { country.TotalDeaths }</p>
                        </div>
                    )
                })}
            </div>
           
         

                {/* {this.props.countryData ? (
                    <div className={styles.countrylist}>
                        {this.props.countryData.map((country, CountryCode) => (
                            <Country countryData={country} key={CountryCode} />
                        ))}
                    </div>
                    ) : (<h2>Loading</h2>)
                } */}
            </>    
        );
    }
}

export default CountryList;

