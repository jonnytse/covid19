import React, { Component } from 'react';
import styles from './CountryList.module.scss';
import Country from '../Country/Country';

class CountryList extends Component {
    render() {
        return (
            <>
                {this.props.countryData ? (
                    <div className={styles.countrylist}>
                    {this.props.countryData.map((country, index) => (
                        <Country countryData={country} key={index} />
                    ))}
                </div>
                ) : (<h2>Loading</h2>)}
                
            </>    
        )
    }
}

export default CountryList;