import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles.css'

const root = document.getElementById('app')

// Utilizando ReactDOM.createRoot
const reactRoot = ReactDOM.createRoot(root)
reactRoot.render(<App />)