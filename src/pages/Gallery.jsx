import { motion } from 'framer-motion';
import classroomImg from '../assets/Classroom img.png';
import creativeArtsImg from '../assets/Creative Arts & Crafts.jpg';
import sportsImg from '../assets/Sports & Physical Activity_img3.png';
import scienceImg from '../assets/Science & Experiments_img4.png';
import musicImg from '../assets/Music & Performing Arts_img5.png';

const Gallery = () => {
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
            School Activities Gallery
          </motion.h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Classroom Learning', src: classroomImg, alt: 'Indian kids studying in classroom' },
              { title: 'Creative Arts & Crafts', src: creativeArtsImg, alt: 'Kids drawing classroom arts and crafts' },
              { title: 'Sports & Physical Activity', src: sportsImg, alt: 'Sports activity' },
              { title: 'Science & Experiments', src: scienceImg, alt: 'Science experiments' },
              { title: 'Music & Performing Arts', src: musicImg, alt: 'Music activities' },
              { title: 'Group Collaboration', src: null, alt: 'Group collaboration' },
              { title: 'Reading & Library Time', src: null, alt: 'Library reading' },
              { title: 'Outdoor Activities', src: null, alt: 'Outdoor activities' },
              { title: 'Celebration & Events', src: null, alt: 'Celebration events' }            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                style={{
                  overflow: 'hidden',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  background: '#0B1021',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {activity.src && (
                  <img
                    src={activity.src}
                    alt={activity.alt}
                    style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = classroomImg;
                    }}
                  />
                )}
                <div style={{ padding: '14px 16px', background: activity.src ? 'rgba(11, 15, 25, 0.75)' : 'rgba(11, 15, 25, 1)' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#FFFFFF', margin: '0 0 8px' }}>{activity.title}</h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.94rem', margin: 0 }}>{activity.subtitle || ''}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;