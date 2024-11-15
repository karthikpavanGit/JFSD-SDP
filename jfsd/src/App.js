import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Use Routes instead of Switch
import Home from './Home';
import Login from './login';
import SignUp from './SignUp';
import About from './About';
import Welcome from './Welcome';  // Import the About component

const App = () => {
  return (
    <Router>
      <Routes>  {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/products" element={<Welcome />} />{/* Route for Welcome page */}
      </Routes>
    </Router>
  );
};

export default App;