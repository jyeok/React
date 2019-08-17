import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        msg : '',
        hi: ''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleClick = (e) => {
        alert(this.state.msg + ", " + this.state.hi + "!");
        this.setState({
            msg: '',
            hi: ''
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') this.handleClick();
    }

    render() {
        return (
            <div>
                <h1> Event Practice </h1>
                <input
                type="text"
                name="msg"
                placeholder="이름"
                value={this.state.msg}
                onChange = {this.handleChange}
                />

                <input
                type="text"
                name="hi"
                placeholder="인삿말"
                value={this.state.hi}
                onChange = {this.handleChange}
                onKeyPress = {this.handleKeyPress}
                />

                <button onClick={this.handleClick}>Confirm</button>
            </div>
        );
    }
}

export default EventPractice;