import React from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'info', label: 'About' },
    { id: 'menus', label: 'Menus' },
    { id: 'gallery', label: 'Gallery' },
    // { id: 'specials', label: 'Specials' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavigation = (itemId: string) => {
    if (itemId === 'reservations') {
      window.open('https://www.opentable.com/blackhorn-steakhouse', '_blank');
    } else {
      setCurrentPage(itemId);
    }
  };

  return (
    <header className="bg-black border-b border-neutral-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <img
              src={logo}
              alt="Blackhorn Steakhouse Logo"
              className="h-10 w-auto"
            />
            <h1 className="text-2xl font-bold text-amber-400">
              Blackhorn Steakhouse
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-200 hover:bg-neutral-800 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://www.opentable.com/blackhorn-steakhouse"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-md text-sm font-medium text-neutral-200 hover:bg-neutral-800 hover:text-white transition-colors duration-200"
              >
                Reservations
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-black inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-neutral-900 rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    handleNavigation(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'bg-neutral-800 text-white'
                      : 'text-neutral-200 hover:bg-neutral-800 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://www.opentable.com/blackhorn-steakhouse"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-neutral-200 hover:bg-neutral-800 hover:text-white transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reservations
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}