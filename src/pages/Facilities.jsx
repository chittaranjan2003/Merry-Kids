import { motion } from 'framer-motion';

const Facilities = () => {
  const facilities = [
    { name: 'AC Classrooms', desc: 'Comfortable learning environment.', icon: '❄️', image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Daycare', desc: 'Safe care for extended hours.', icon: '🏠', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Experienced Teachers', desc: 'Qualified and caring educators.', icon: '👩‍🏫', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div style={{ backgroundColor: '#0B0F19', color: '#FFFFFF', minHeight: '100vh' }}>
      <section style={{ padding: '80px 24px', paddingTop: '120px', backgroundColor: '#111827' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '3rem', color: '#FFFFFF' }}
          >
            Our Facilities
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((fac, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                style={{
                  padding: '32px',
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(59, 78, 138, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="text-6xl text-center mb-4">{fac.icon}</div>
                <h3 className="text-2xl font-bold text-center mb-2">{fac.name}</h3>
                <p className="text-center" style={{ color: '#9CA3AF' }}>{fac.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;