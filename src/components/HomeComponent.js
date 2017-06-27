import React, { Component } from 'react'

class FAQ extends Component {
    render() {
        return (
            <div className="questions">
          <p className="question">Where are you located?</p>
          <p>Seattle, WA</p>
          <p className="question">What do I work in?</p>
          <p>I particularly love JavaScript (Angular, jQuery, and Node - soon to be react!) but am flexible to learn any technology!</p>
          <p className="question">What is my favorite restaurant?</p>
          <p>Art of the Table- so fancy</p>
          </div>
        )
    }
}

class Desc extends Component {
    render() {
        return (
            <p>I grew up near Seattle and enjoy living in the PNW. My main goal is to make peoples lives easier and enjoy doing it! I am an observant full stack developer that learns quickly by identifying patterns in new material. My experience in biotech has taught me the importance of flexibility and the mindset to break concepts down into testable pieces. I make every hour happy hour and bring a balance of fun and serious work ethic to any team.</p>)
    }
}

class Home extends Component {
    render() {
        return (
            <div>
        <h1>Home</h1>
        <p>Hi, I'm Sara. Web Developer, former clinical biotechnologist, pet lover</p>
        <FAQ />
        <Desc />
      </div>)
    }
}

export default Home;
