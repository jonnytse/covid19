import React, { Component } from 'react';
import styles from './SearchBar.module.scss';

class SearchBar extends Component {
    render() {
        return (
            <div className={styles.searchbar}>
                {/* <input 
                    placeholder="SEARCHBAR COMPONENT: Type country to search"
                /> */}
                <form onSubmit={this.props.getCountry}>
                    <input type="text" name="country" placeholder="Find a country" />
                    <button>Search</button>
                </form>
            </div>
           
        )
    }
}

export default SearchBar;