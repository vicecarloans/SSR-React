// Startup point for the client side
import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'

// This will breathe life to our component
ReactDOM.hydrate(<Home/>, document.getElementById("root"))