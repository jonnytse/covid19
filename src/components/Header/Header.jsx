import React, { Component } from 'react';
import styles from './Header.module.scss';

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <h1>HEADER component aka Covid19 title</h1>
            </div>
        )
    }
}

export default Header;