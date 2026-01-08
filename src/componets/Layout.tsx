// src/components/Layout.tsx

import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main>
        <Outlet />  {/* This is where page content will render */}
      </main>
    </div>
  );
}

export default Layout;