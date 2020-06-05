import React, { Component } from 'react';
import styles from './CountryList.module.scss';

class CountryList extends Component {
    render() {
        return (
            <div className={styles.countrylist}>
                {this.props.filteredCountry}
            </div>
        )
    }
}

export default CountryList;