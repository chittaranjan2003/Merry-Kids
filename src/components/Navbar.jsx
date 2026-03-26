import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(11, 15, 25, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#FFFFFF' }}>Merry Kids</h1>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <a href="/" style={{ color: '#9CA3AF', textDecoration: 'none' }} className="hover:text-white transition-colors">Home</a>
            <a href="/classes" style={{ color: '#9CA3AF', textDecoration: 'none' }} className="hover:text-white transition-colors">Classes</a>
            <a href="/facilities" style={{ color: '#9CA3AF', textDecoration: 'none' }} className="hover:text-white transition-colors">Facilities</a>
            <a href="/gallery" style={{ color: '#9CA3AF', textDecoration: 'none' }} className="hover:text-white transition-colors">Gallery</a>
            <a href="/login" style={{ color: '#9CA3AF', textDecoration: 'none' }} className="hover:text-white transition-colors">Login</a>
          </div>
          <div className="md:hidden">
            <button style={{ color: '#FFFFFF' }} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;