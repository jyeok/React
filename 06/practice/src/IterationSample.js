import React, { Component } from 'react';

class IterationSample extends Component {
    state = {
        names: ['눈사람', '얼음', '눈', '바람'],
        name: ''
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleInsert = () => {
        this.setState({
            names: this.state.names.concat(this.state.name),
            name: ''
        });
    }

    handleEnter= (e) => {
        if(e.key === 'Enter') this.handleInsert();
    }

    handleRemove = (i) => {
        const {names} = this.state;

        this.setState({
            names: [
                ...names.slice(0, i),
                ...names.slice(i+1, names.length)
            ]
        });
    }

    render() {
        const nameList = this.state.names.map(
            (name, index) => (<li key={index} onDoubleClick={() => this.handleRemove(index)}>{name}</li>)
        );

        return (
            <div>
                <ul>
                    {nameList}
                </ul>

                <input
                onChange={this.handleChange}
                value={this.state.name}
                onKeyDown={this.handleEnter}
                placeholder="추가할 내용 입력"
                />

                <button onClick={this.handleInsert}>추가</button>
            </div>
        );
    }
}

export default IterationSample;