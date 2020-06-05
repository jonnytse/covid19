import React, { Component } from 'react';
import styles from './SearchBar.module.scss';

class SearchBar extends Component {
    render() {
        return (
            <div className={styles.searchbar}>
                {/* <form onSubmit={this.props.getCountry}>
                    <input type="text" name="country" placeholder="Find a country" />
                    <button>Search</button>
                </form> */}
                <form>
                    <input 
                        type="text"
                        placeholder="Find a country..."
                        name="country"
                        value={this.props.searchText}
                        onChange={this.props.setSearchText}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar;