const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#111827', color: '#FFFFFF', borderTop: '1px solid #1a1f2e', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem', color: '#FFFFFF' }}>Merry Kids Academy</h3>
            <p style={{ color: '#9CA3AF', lineHeight: '1.6', fontSize: '0.95rem' }}>
              Empowering children with modern education and Indian heritage through safe, nurturing classrooms.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem', color: '#FFFFFF' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/" style={{ color: '#9CA3AF', textDecoration: 'none' }} className="hover:text-white transition-colors">Home</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/classes" style={{ color: '#9CA3AF', textDecoration: 'none' }} className="hover:text-white transition-colors">Classes</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/facilities" style={{ color: '#9CA3AF', textDecoration: 'none' }} className="hover:text-white transition-colors">Facilities</a>
              </li>
              <li>
                <a href="/gallery" style={{ color: '#9CA3AF', textDecoration: 'none' }} className="hover:text-white transition-colors">Gallery</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem', color: '#FFFFFF' }}>Contact</h4>
            <p style={{ color: '#9CA3AF', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Email: admissions@merrykids.in</p>
            <p style={{ color: '#9CA3AF', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Phone: +91 98765 43210</p>
            <p style={{ color: '#9CA3AF', fontSize: '0.95rem' }}>Address: 21 Education Lane, Delhi, India</p>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem', color: '#FFFFFF' }}>Newsletter</h4>
            <p style={{ color: '#9CA3AF', fontSize: '0.95rem', marginBottom: '0.75rem' }}>Subscribe for updates on admissions and campus events.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <input
                type="email"
                placeholder="your.email@example.com"
                style={{ backgroundColor: '#0B0F19', color: '#FFFFFF', border: '1px solid rgba(156, 163, 175, 0.4)', borderRadius: '8px', padding: '10px', width: '100%' }}
              />
              <button
                style={{ background: 'linear-gradient(135deg, #3b4e8a 0%, #5f52a9 100%)', color: '#FFF', border: 'none', borderRadius: '8px', padding: '10px', cursor: 'pointer' }}
                className="transition-all hover:brightness-110"
              >
                Subscribe
              </button>
            </div>
            <div style={{ marginTop: '1rem', display: 'flex', gap: '12px' }}>
              <a href="#" style={{ color: '#9CA3AF', fontSize: '1.25rem' }}>📘</a>
              <a href="#" style={{ color: '#9CA3AF', fontSize: '1.25rem' }}>📷</a>
              <a href="#" style={{ color: '#9CA3AF', fontSize: '1.25rem' }}>🐦</a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1a1f2e', paddingTop: '1.2rem', textAlign: 'center', color: '#9CA3AF', fontSize: '0.9rem' }}>
          <p>© {new Date().getFullYear()} Merry Kids Academy. All rights reserved.</p>
          <p style={{ marginTop: '0.4rem' }}>Designed for modern school operations, mobile-friendly, and secure for production.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;