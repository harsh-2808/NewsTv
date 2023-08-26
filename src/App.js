import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News key="general" pageSize={12} country='in' category='general' />} />
          <Route path="/business" element={<News key="business" pageSize={12} country='in' category='business' />} />
          <Route path="/sports" element={<News key="sports" pageSize={12} country='in' category='sports' />} />
          <Route path="/entertainment" element={<News key="entertainment" pageSize={12} country='in' category='entertainment' />} />
          <Route path="/technology" element={<News key="technology" pageSize={12} country='in' category='technology' />} />
          <Route path="/science" element={<News key="science" pageSize={12} country='in' category='science' />} />
        </Routes>
      </Router>
    )
  }
}

export default App;
