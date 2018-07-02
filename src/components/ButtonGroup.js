import React, { Component } from 'react';

export default class ButtonGroup extends Component {

    constructor(props) {
        super();

        this.state = {
            activeBtn: props.activeBtn
        };
    }



    setActiveBtn = (activeBtn) => {
        this.setState({ activeBtn });
        this.props.onActiveBtnChange && this.props.onActiveBtnChange(activeBtn)
    };

    render() {
        return (
            <div className="btn-group">
                {
                    this.props.buttons.map(btn => (
                        <button
                            key={btn.key}
                            className={`btn-group__btn ${btn.key === this.state.activeBtn ? 'btn-group__btn--active' : ''}`}
                            onClick={e => this.setActiveBtn(btn.key, e)}
                        >
                            {btn.name}
                        </button>
                    ))
                }
            </div>
        );
    }
}