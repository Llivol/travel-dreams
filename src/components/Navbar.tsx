// components/Navbar.tsx
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#f8f9fa', color: '#000' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/logo.svg" alt="Travel Dreams Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
      </div>
      <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
        Create New Trip
      </button>
    </nav>
  );
};

export default Navbar;
