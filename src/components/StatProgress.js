import React from 'react';
import sprite from '../img/sprite.svg';
import ProgressBar from './ProgressBar';

export default class StatProgress extends React.Component {

    getIcon = (icon) => {
        switch (icon) {
            case 'up':
                return (
                    <svg className="stat-progress__icon rotate-90 text-primary">
                        <use xlinkHref={`${sprite}#icon-subdirectory_arrow_right`}/>
                    </svg>
                );
            case 'down':
                return (
                    <svg className="stat-progress__icon rotate-90 text-primary">
                        <use xlinkHref={`${sprite}#icon-subdirectory_arrow_left`}/>
                    </svg>
                );
            case 'flash':
                return (
                    <svg className="stat-progress__icon text-primary">
                        <use xlinkHref={`${sprite}#icon-flash`}/>
                    </svg>

                );
            default:
                return ''
        }

    };

    render() {
        const { number, description, percent, icon } = this.props;

        return (
            <div className="stat-progress">
                <span className="stat-progress__number">{number}</span>
                <span
                    className="stat-progress__description text-description">{description}</span>
                <span className="stat-progress__percent">
                    {percent}%
                    {
                        this.getIcon(icon)
                    }
                </span>
                <div className="stat-progress__progress">
                    <ProgressBar percent={percent}/>
                </div>
            </div>
        );
    }
}