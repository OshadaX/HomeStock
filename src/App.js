import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <div>
        <h1>HomeStock</h1>
        <Routes>  {/* Use Routes instead of Switch */}
          <Route path="/login" element={<Login />} />  {/* Update Route syntax */}
      
        </Routes>
      </div>
    </Router>
  );
}

export default App;
