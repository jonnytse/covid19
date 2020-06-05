import React, { Component } from 'react';
import styles from './Country.module.scss';

class Country extends Component {
    state = {
        countryInfo: []
    }
    render() {
        return (
            <div className={styles.country}>

            </div>
        )
    }
}

export default Country;