import React from 'react';
import sprite from '../img/sprite.svg';

export default class Card extends React.Component {

    state = {
        callapsed: false
    };

    getComponent = (key) => {
        if (this.props.children.constructor === Array) {
            return this.props.children.filter(comp => comp.key === key);
        }
        if (this.props.children.key === key) {
            return this.props.children;
        }

    };

    collapse = () => {
        this.setState(({ callapsed }) => ( { callapsed: !callapsed } ));
    };

    render() {
        const { title, closable, collapsible } = this.props;
        return (
            <div className="card">
                <h2 className="card__title">{title}</h2>
                <div className="card__top-actions">
                    {
                        this.getComponent('top-actions')
                    }
                    {
                        collapsible && (
                            <button className="btn" onClick={this.collapse}>
                                <svg className={`btn__icon ${this.state.callapsed ? 'rotate-180' : ''}`}>
                                    <use xlinkHref={`${sprite}#icon-chevron-small-up`}/>
                                </svg>
                            </button>
                        )
                    }
                    {
                        closable && (
                            <button className="btn">
                                <svg className="btn__icon btn__icon--sm">
                                    <use xlinkHref={`${sprite}#icon-cross`}/>
                                </svg>
                            </button>
                        )
                    }
                </div>
                <div className="card__content" state={this.state.callapsed ? 'collapsed' : 'open'}>
                    {
                        this.getComponent('content')
                    }


                </div>
            </div>
        );
    }
}