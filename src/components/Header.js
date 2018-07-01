import React, { Component } from 'react';
import sprite from '../img/sprite.svg';
import HeaderAlerts from './HeaderAlerts';
import HeaderMessages from './HeaderMessages';

class Header extends Component {

    render() {
        return (
            <header className="header">
                <button className="btn btn--primary">
                    <svg className="btn__icon btn__icon--md">
                        <use xlinkHref={`${sprite}#icon-menu`}/>
                    </svg>
                </button>
                <input className="header__search-input" type="text" placeholder="Search for something..."/>
                <h3 className="heading-tertiary">Welcome to Admin app theme.</h3>

                <HeaderMessages/>
                <HeaderAlerts/>
                <button className="btn">
                    <svg className="btn__icon btn__icon--sm">
                        <use xlinkHref={`${sprite}#icon-log-out`}/>
                    </svg>
                    <span className="btn__icon-text">Log out</span>
                </button>
                <button className="btn">
                    <svg className="btn__icon">
                        <use xlinkHref={`${sprite}#icon-menu`}/>
                    </svg>
                </button>
            </header>
        );
    }
}

export default Header;
