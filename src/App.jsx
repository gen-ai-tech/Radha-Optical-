import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FloatingMenu from './components/FloatingMenu';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FloatingMenu />
    </div>
  );
}

export default App;
