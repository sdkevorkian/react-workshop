import React, { Component } from 'react';

class Side extends Component {
    render() {
        return (<div>
                <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAqsAAAAJGVkMzYwZDg1LWYxMGMtNDQ4Yy05NDUwLTU5YjcxNGE0MjliNg.jpg" alt="me" />
        <h2>{this.props.name}</h2>
        <p>Web Developer looking to building things that make lives easier and have fun doing it!</p>
      </div>)
    }
}

export default Side;
