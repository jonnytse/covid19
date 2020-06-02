import React, { Component } from 'react';
import styles from './SearchBar.module.scss';

class SearchBar extends Component {
    render() {
        return (
            <div className={styles.searchbar}>
                <input 
                    placeholder="SEARCHBAR COMPONENT: Type country to search"
                />
            </div>
           
        )
    }
}

export default SearchBar;