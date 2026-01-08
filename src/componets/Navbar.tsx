// src/components/Navbar.tsx

import { Link, useLocation } from 'react-router-dom';
import { NavLink as NavLinkType } from '../types';

function Navbar() {
  const location = useLocation();

  const navLinks: NavLinkType[] = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-white hover:text-blue-400 transition">
            DevPortfolio
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition ${
                  location.pathname === link.path
                    ? 'text-blue-400 font-semibold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;