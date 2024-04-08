import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<ErrorPage/>}/>
        <Route index element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
