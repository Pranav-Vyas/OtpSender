import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Home from './components/Home/Home';
import MessagesPage from './components/MessagesPage/MessagesPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/"  element={<Home/>}></Route>
        <Route exact path="/contact-info"  element={<ContactInfo/>}></Route>
        <Route exact path="/messages"  element={<MessagesPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
