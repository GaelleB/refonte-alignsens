import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <main className="pt-20 space-y-16">
        <Hero />
        <About />
      </main>
    </div>
  );
}