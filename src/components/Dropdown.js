import React, { Component } from 'react';

export default class Dropdown extends Component {

    state = {
        open: false
    };


    getComponent = (key) => {
        return this.props.children.filter(comp => comp.key === key);
    };

    toggleOpen = () => {
        this.setState(({ open }) => ( { open: !open } ));
    };

    handleClick = (e) => {
        if (this.state.open && !this.node.contains(e.target)) {
            this.setState({ open: false });
        }
    };

    handleKeydown = (e) => {
        if (this.state.open && e.keyCode === 27 ) {
            this.setState({ open: false });
        }
    };

    render() {
        return (
            <div className="dropdown" ref={node => this.node = node}>
                <div className="dropdown__trigger" onClick={this.toggleOpen}>
                    {this.getComponent('dropdown-trigger')}
                </div>
                <div className="dropdown__content" open={this.state.open}>
                    {
                        this.getComponent('dropdown-content')
                    }
                </div>
            </div>
        );
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
        document.addEventListener('keydown', this.handleKeydown, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
        document.removeEventListener('keydown', this.handleKeydown, false);
    }
}