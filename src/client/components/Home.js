import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          I'm the Home Component
        </div>
        <button onClick={() => console.log("Hi there")}>Press Me</button>
      </div>
      
    )
  }
}
