import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Info from './pages/Info';
import Menus from './pages/Menus';
import Gallery from './pages/Gallery';
import Specials from './pages/Specials';
import Contact from './pages/Contact';
import Reservations from './pages/Reservations';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'info':
        return <Info />;
      case 'menus':
        return <Menus />;
      case 'gallery':
        return <Gallery />;
      case 'specials':
        return <Specials />;
      case 'contact':
        return <Contact />;
      case 'reservations':
        return <Reservations />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="transition-all duration-500 ease-in-out">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;