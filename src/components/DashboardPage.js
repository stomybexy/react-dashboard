import React from 'react';
import Header from './Header';
import sprite from '../img/sprite.svg';
import StatsChart from './StatsChart';
import ButtonGroup from './ButtonGroup';
import StatProgress from './StatProgress';

const DashboardPage = () => (
    <div>
        <Header/>
        <div className="container">
            <nav className="sidebar">
                SIDEBAR
            </nav>
            <section className="stats">

                <div className="card">
                    <h2 className="card__title">Income</h2>
                    <label className="card__top-actions label label--blue">Monthly</label>
                    <div className="card__content stat">
                        <span className="stat__number">40 886,200</span>
                        <span className="stat__description text-description">Total income</span>
                        <span className="stat__percent text-blue">
                            98%
                            <svg className="stat__icon">
                                <use xlinkHref={`${sprite}#icon-flash`}/>
                            </svg>
                        </span>
                    </div>
                </div>

                <div className="card">
                    <h2 className="card__title">Orders</h2>
                    <label className="card__top-actions label label--primary-light">Annual</label>
                    <div className="card__content stat">
                        <span className="stat__number">275,800</span>
                        <span className="stat__description text-description">New orders</span>
                        <span className="stat__percent text-primary-light">
                            20%
                            <svg className="stat__icon rotate-90">
                                <use xlinkHref={`${sprite}#icon-subdirectory_arrow_right`}/>
                            </svg>
                        </span>
                    </div>
                </div>

                <div className="card">
                    <h2 className="card__title">Visits</h2>
                    <label className="card__top-actions label label--primary">Today</label>
                    <div className="card__content stat">
                        <span className="stat__number">106,120</span>
                        <span className="stat__description text-description">New visits</span>
                        <span className="stat__percent text-primary">
                        44%
                        <svg className="stat__icon rotate-90">
                            <use xlinkHref={`${sprite}#icon-subdirectory_arrow_right`}/>
                        </svg>
                    </span>
                    </div>
                </div>

                <div className="card">
                    <h2 className="card__title">User activity</h2>
                    <label className="card__top-actions label label--danger">Low value</label>
                    <div className="card__content stat">
                        <span className="stat__number">80,600</span>
                        <span className="stat__description text-description">In first month</span>
                        <span className="stat__percent text-danger">
                        38%
                        <svg className="stat__icon rotate-90">
                            <use xlinkHref={`${sprite}#icon-subdirectory_arrow_left`}/>
                        </svg>
                    </span>
                    </div>
                </div>

                <div className="card stat-graph">
                    <h2 className="card__title">Orders</h2>
                    <ButtonGroup
                        className="card__top-actions"
                        buttons={[
                            {
                                key: 'today',
                                name: 'Today'
                            }, {
                                key: 'monthly',
                                name: 'Monthly'
                            }, {
                                key: 'annual',
                                name: 'Annual'
                            }
                        ]}
                        activeBtn="today"
                        onActiveBtnChange={activeBtn => console.log('Active button', activeBtn)}
                    />
                    <div className="card__content stat-graph__content">
                        <StatsChart/>
                        <div className="stat-progress-group">
                            <StatProgress
                                number="2,346"
                                description="Total order in period"
                                percent="48"
                                icon="up"
                            />
                            <StatProgress
                                number="4,422"
                                description="Orders in last month"
                                percent="60"
                                icon="down"
                            />
                            <StatProgress
                                number="9,180"
                                description="Monthly income from orders"
                                percent="22"
                                icon="flash"
                            />
                        </div>
                    </div>
                </div>

            </section>
            <main className="main">
                <div className="card main__messages">
                    <h2 className="card__title">Messages</h2>
                    <div className="card__top-actions">
                        <button className="btn">
                            <svg className="btn__icon">
                                <use xlinkHref={`${sprite}#icon-chevron-small-up`}/>
                            </svg>
                        </button>
                        <button className="btn">
                            <svg className="btn__icon btn__icon--sm">
                                <use xlinkHref={`${sprite}#icon-cross`}/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <h2 className="card__title">User project list</h2>
                    <div className="card__top-actions">
                        <button className="btn">
                            <svg className="btn__icon">
                                <use xlinkHref={`${sprite}#icon-chevron-small-up`}/>
                            </svg>
                        </button>
                        <button className="btn">
                            <svg className="btn__icon btn__icon--sm">
                                <use xlinkHref={`${sprite}#icon-cross`}/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <h2 className="card__title">Small todo list</h2>
                    <div className="card__top-actions">
                        <button className="btn">
                            <svg className="btn__icon">
                                <use xlinkHref={`${sprite}#icon-chevron-small-up`}/>
                            </svg>
                        </button>
                        <button className="btn">
                            <svg className="btn__icon btn__icon--sm">
                                <use xlinkHref={`${sprite}#icon-cross`}/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="card main__transactions">
                    <h2 className="card__title">Transactions worldwide</h2>
                    <div className="card__top-actions">
                        <button className="btn">
                            <svg className="btn__icon">
                                <use xlinkHref={`${sprite}#icon-chevron-small-up`}/>
                            </svg>
                        </button>
                        <button className="btn">
                            <svg className="btn__icon btn__icon--sm">
                                <use xlinkHref={`${sprite}#icon-cross`}/>
                            </svg>
                        </button>
                    </div>
                </div>
            </main>
            <footer className="footer">
                FOOTER
            </footer>
        </div>
    </div>
);

export default DashboardPage;