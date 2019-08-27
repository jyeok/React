import React, { Component } from 'react';

class Scrollbox extends Component {

    scrolltoBottom = () => {
        const {scrollHeight, clientHeight} = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
        /*
            Destructing Assignment: same code as
            scrollHeight = this.box.scrollHeight;
            clientHeight = this.box.clientHeight;   
        */
    }

    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        }
    
        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)'
        }

        return (
            <div style={style}
            ref={(ref) => this.box = ref}>
                <div style={innerStyle}/>
            </div>
        );
    }
}

export default Scrollbox;