import React from 'react';
import Header from './Header';
import sprite from '../img/sprite.svg';
import StatsChart from './StatsChart';
import ButtonGroup from './ButtonGroup';
import StatProgress from './StatProgress';
import Card from './Card';

const DashboardPage = () => (
    <div>
        <Header/>
        <div className="container">
            <nav className="sidebar">
                SIDEBAR
            </nav>
            <section className="stats">

                <Card title="Income">
                    <label key="top-actions" className="label label--blue">Monthly</label>
                    <div key="content" className="stat">
                        <span className="stat__number">40 886,200</span>
                        <span className="stat__description text-description">Total income</span>
                        <span className="stat__percent text-blue">
                            98%
                            <svg className="stat__icon">
                                <use xlinkHref={`${sprite}#icon-flash`}/>
                            </svg>
                        </span>
                    </div>
                </Card>

                <Card title="Orders">
                    <label key="top-actions" className="label label--primary-light">Annual</label>
                    <div key="content" className="stat">
                        <span className="stat__number">275,800</span>
                        <span className="stat__description text-description">New orders</span>
                        <span className="stat__percent text-primary-light">
                            20%
                            <svg className="stat__icon rotate-90">
                                <use xlinkHref={`${sprite}#icon-subdirectory_arrow_right`}/>
                            </svg>
                        </span>
                    </div>
                </Card>

                <Card title="Visits">
                    <label key="top-actions" className="label label--primary">Today</label>
                    <div key="content" className="stat">
                        <span className="stat__number">106,120</span>
                        <span className="stat__description text-description">New visits</span>
                        <span className="stat__percent text-primary">
                            44%
                            <svg className="stat__icon rotate-90">
                                <use xlinkHref={`${sprite}#icon-subdirectory_arrow_right`}/>
                            </svg>
                        </span>
                    </div>
                </Card>

                <Card title="User activity">
                    <label key="top-actions" className="label label--danger">Low value</label>
                    <div key="content" className="stat">
                        <span className="stat__number">80,600</span>
                        <span className="stat__description text-description">In first month</span>
                        <span className="stat__percent text-danger">
                            38%
                            <svg className="stat__icon rotate-90">
                                <use xlinkHref={`${sprite}#icon-subdirectory_arrow_left`}/>
                            </svg>
                        </span>
                    </div>
                </Card>
                <div className="stat-graph">
                    <Card title="Orders">
                        <ButtonGroup
                            key="top-actions"
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
                        <div key="content" className="stat-graph__content">
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
                    </Card>
                </div>
            </section>

            <main className="main">
                <div className="main__messages">
                    <Card title="Messages" closable collapsible>
                        <div key="content" >
                            <p>ndlkfsmldnflmqsdnfmsndf:g,n:</p>
                            <p>ndlkfsmldnflmqsdnfmsndf:g,n:</p>
                            <p>ndlkfsmldnflmqsdnfmsndf:g,n:</p>
                            <p>ndlkfsmldnflmqsdnfmsndf:g,n:</p>
                            <p>ndlkfsmldnflmqsdnfmsndf:g,n:</p>
                        </div>
                    </Card>
                </div>

                <Card title="User project list" closable collapsible>
                    <div className="content"/>
                </Card>

                <Card title="Small todo list" closable collapsible>
                    <div className="content"/>
                </Card>

                <div className="main__transactions" >
                    <Card title="Transactions worldwide" closable collapsible>
                        <div key="content"/>
                    </Card>
                </div>

            </main>
            <footer className="footer">
                FOOTER
            </footer>
        </div>
    </div>
);

export default DashboardPage;