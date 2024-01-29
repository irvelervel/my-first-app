import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// notiamo come nel percorso di import "./App" NON SERVA scrivere .js

// stiamo recuperando da index.html il div vuoto con id="root"
const root = ReactDOM.createRoot(document.getElementById('root'))
// e lo stiamo utilizzando per creare una sorta di "elemento radice" con ReactDOM
root.render(<App />)
