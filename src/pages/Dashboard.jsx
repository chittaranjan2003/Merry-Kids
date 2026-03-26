import { motion } from 'framer-motion';
import Card from '../components/Card';

const Dashboard = () => {
  const items = [
    { title: 'My Classes', desc: 'View enrolled classes.', icon: '📚' },
    { title: 'Progress', desc: 'Track learning progress.', icon: '📈' },
    { title: 'Activities', desc: 'Upcoming activities.', icon: '🎨' },
    { title: 'Profile', desc: 'Manage profile.', icon: '👤' },
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
            Dashboard
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card>
                  <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', textAlign: 'center', marginBottom: '0.5rem', color: '#FFFFFF' }}>{item.title}</h3>
                  <p style={{ textAlign: 'center', color: '#9CA3AF' }}>{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;