import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.scss'

//creating our application using createRoot
//StrictMode forces our application to render twice
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
