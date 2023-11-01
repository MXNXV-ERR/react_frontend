// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderForm from './pages/OrderForm';
import OrderView from './pages/OrderView';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/view" element={<OrderView/>} />
          <Route path="/" element={<OrderForm/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
