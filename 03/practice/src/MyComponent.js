import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: 'world'
    }
    
    static propTypes = {
        name: PropTypes.string.isRequired
    }

    state = {
        number: 0
    }

    render() {
        return (
            <div>
                <p>Hello, { this.props.name }!</p>
                <p>Number: {this.state.number}</p>
                <p> <button onClick = {() => { this.setState({
                    number: this.state.number + 1
                })
            }}> 더하기 </button></p>
            </div>
        );
    }
}

MyComponent.defaultProps = {
    name: 'world'
}

MyComponent.propTypes = {
    name : PropTypes.string.isRequired
}

export default MyComponent;