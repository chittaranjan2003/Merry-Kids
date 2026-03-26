import { motion } from 'framer-motion';
import Card from '../components/Card';

const Classes = () => {
  const classes = [
    { name: 'PlaySchool', age: '2-3', desc: 'Introduction to learning through play.', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Nursery', age: '3-4', desc: 'Basic skills and social interaction.', image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'LKG', age: '4-5', desc: 'Preparatory for kindergarten.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'UKG', age: '5-6', desc: 'Advanced prep for primary school.', image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div style={{ backgroundColor: '#0B0F19', color: '#FFFFFF', minHeight: '100vh' }}>
      <section style={{ padding: '80px 24px', paddingTop: '120px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '3rem', color: '#FFFFFF' }}
          >
            Our Classes
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {classes.map((cls, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                style={{
                  padding: '32px',
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
                <div style={{ fontSize: '2.5rem', marginBottom: '12px', textAlign: 'center' }}>
                  {['🎓', '📚', '✏️', '🚀'][index]}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '8px', color: '#FFFFFF' }}>
                  {cls.name}
                </h3>
                <p style={{ textAlign: 'center', marginBottom: '8px', color: '#9CA3AF' }}>Age: {cls.age}</p>
                <p style={{ textAlign: 'center', color: '#9CA3AF', lineHeight: '1.6' }}>{cls.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classes;