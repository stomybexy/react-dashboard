import React from 'react';
import Dropdown from './Dropdown';
import sprite from '../img/sprite.svg';
import img1 from '../img/msg-img-1.jpg';
import img2 from '../img/msg-img-2.jpg';
import img3 from '../img/msg-img-3.jpg';

const HeaderMessages = () => (
    <Dropdown>
        <button key="dropdown-trigger" className="btn">
            <svg className="btn__icon">
                <use xlinkHref={`${sprite}#icon-mail`}/>
            </svg>
            <span className="btn__notification label label--warning">16</span>
        </button>
        <div key="dropdown-content" className="panel header__dropdown-content">
            <div className="header__list">
                <a href="/msg" className="header__msg header__list__item ">
                    <img className="header__msg-img" src={img1} alt="Message 1 author"/>
                    <p className="header__msg-content">
                        <span className="header__msg-name">Mike Loreipsum</span> started following <span
                        className="header__msg-name">Monika Smith</span>.
                    </p>
                    <span className="header__msg-timestamp">3 days ago at 7:58 pm - 10.06.2014</span>
                    <span className="header__msg-time">46h ago</span>
                </a>

                <a href="/msg" className="header__msg header__list__item ">
                    <img className="header__msg-img" src={img2} alt="Message 3 author"/>
                    <p className="header__msg-content">
                        <span className="header__msg-name">Monika Smith</span> loves <span className="header__msg-name">Kim Smith</span>.
                    </p>
                    <span className="header__msg-timestamp">2 days ago at 2:30 am - 11.06.2014</span>
                    <span className="header__msg-time">23h ago</span>
                </a>

                <a href="/msg" className="header__msg header__list__item ">
                    <img className="header__msg-img" src={img3} alt="Message 2 author"/>
                    <p className="header__msg-content">
                        <span className="header__msg-name">Chris Jonathan Overtunk</span> started following <span
                        className="header__msg-name">Monika Smith</span>.
                    </p>
                    <span className="header__msg-timestamp">Yesterday 1:21 pm - 11.06.2014</span> <span
                    className="header__msg-time text-primary">5h ago</span>
                </a>



                <a href="/msg" className="header__list-link">
                    <svg className="header__msg-icon">
                        <use xlinkHref={`${sprite}#icon-mail`}/>
                    </svg>
                    Read All Messages
                </a>
            </div>
        </div>
    </Dropdown>
);

export default HeaderMessages;