import React from 'react';
import Dropdown from './Dropdown';
import sprite from '../img/sprite.svg';

const HeaderAlerts = () => (
    <Dropdown>
        <button key="dropdown-trigger" className="btn">
            <svg className="btn__icon btn__icon--sm">
                <use xlinkHref={`${sprite}#icon-bell`}/>
            </svg>
            <span className="btn__notification label label--primary">8</span>

        </button>
        <div key="dropdown-content" className="panel header__dropdown-content">
            <div className="header__list">
                <a href="/alert" className="header__alert header__list__item ">
                    <svg className="header__alert-icon">
                        <use xlinkHref={`${sprite}#icon-mail`}/>
                    </svg>
                    <span className="header__alert-msg">You have 16 messages</span>
                    <span className="header__alert-time">4 minutes ago</span>
                </a>

                <a href="/alert" className="header__alert header__list__item">
                    <svg className="header__alert-icon">
                        <use xlinkHref={`${sprite}#icon-twitter`}/>
                    </svg>
                    <span className="header__alert-msg">3 New Followers</span>
                    <span className="header__alert-time">12 minutes ago</span>
                </a>

                <a href="/alert" className="header__alert header__list__item">
                    <svg className="header__alert-icon">
                        <use xlinkHref={`${sprite}#icon-upload`}/>
                    </svg>
                    <span className="header__alert-msg">Server Rebooted</span>
                    <span className="header__alert-time">4 minutes ago</span>
                </a>

                <a href="/alerts" className="header__list-link">
                    See all alerts
                    <svg className="header__alert-icon">
                        <use xlinkHref={`${sprite}#icon-chevron-small-up`}/>
                    </svg>
                </a>
            </div>
        </div>
    </Dropdown>
);

export default HeaderAlerts;