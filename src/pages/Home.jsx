import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import AnimatedButton from '../components/AnimatedButton';
import Card from '../components/Card';
import HeroBackground from '../assets/hero-background.svg';
import HeroMain from '../assets/working-together.svg';
import './Home.css';

const Home = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (svgRef.current) {
        // Trigger a brief scale animation
        svgRef.current.style.transform = 'scale(1.05)';
        setTimeout(() => {
          if (svgRef.current) {
            svgRef.current.style.transform = 'scale(1)';
          }
        }, 200);
      }
    }, 5000); // Every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const HeroIllustration = () => (
    <div
      className="hero-svg"
      role="img"
      aria-label="Kids learning illustration"
      ref={svgRef}
      style={{ backgroundImage: `url(${HeroMain})` }}
    />
  );
  const classes = [
    { name: 'PlaySchool', age: '2-3', image: 'https://images.unsplash.com/photo-1601951764136-191fb1277b20?auto=format&fit=crop&w=800&q=80' },
    { name: 'Nursery', age: '3-4', image: 'https://images.unsplash.com/photo-1622063859385-3417fb4f713a?auto=format&fit=crop&w=800&q=80' },
    { name: 'LKG', age: '4-5', image: 'https://images.unsplash.com/photo-1534766203348-01f3030a66ed?auto=format&fit=crop&w=800&q=80' },
    { name: 'UKG', age: '5-6', image: 'https://images.unsplash.com/photo-1560184897-6b8de58a45ad?auto=format&fit=crop&w=800&q=80' },
  ];

  const stats = [
    { number: '500+', label: 'Happy Kids' },
    { number: '50+', label: 'Expert Teachers' },
    { number: '10+', label: 'Years Experience' },
    { number: '100%', label: 'Safety First' },
  ];

  return (
    <div className="home-page" style={{ backgroundColor: '#0B0F19', color: '#FFFFFF' }}>
      <div
        className="home-page-bg"
        aria-hidden="true"
        style={{ backgroundImage: `url(${HeroBackground})` }}
      />
      {/* Hero Section */}
      <section className="hero-section">
        <div
          className="hero-bg-layer"
          aria-hidden="true"
          style={{ backgroundImage: `url(${HeroBackground})` }}
        />
        <div className="hero-inner">
          {/* Left Content */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empower Learning with <span className="hero-highlight">Merry Kids</span>
            </motion.h1>
            
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Premium digital school experience with expert educators, structured classes, and a safe, nurturing environment for every child.
            </motion.p>

            <motion.div
              className="hero-features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Expert Teachers</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Safe Learning</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Interactive Classes</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <AnimatedButton onClick={() => alert('Enroll Now!')} className="hero-button">
                Enroll Now
              </AnimatedButton>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            className="hero-illustration-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <motion.div
              className="illustration-wrapper"
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <HeroIllustration />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '80px 24px', backgroundColor: '#0B0F19' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80"
                alt="Indian Classroom"
                style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px' }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '24px', color: '#FFFFFF' }}>
                About Merry Kids
              </h2>
              <p style={{ color: '#9CA3AF', lineHeight: '1.6', marginBottom: '16px' }}>
                Merry Kids is a premier educational institution dedicated to providing a nurturing and innovative learning environment for young minds. Our experienced educators focus on holistic development, combining academic excellence with creative activities and character building.
              </p>
              <p style={{ color: '#9CA3AF', lineHeight: '1.6' }}>
                We believe in creating a safe, inclusive space where every child can thrive, learn, and grow into confident individuals ready to face the future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section with Glass Morphism */}
      <section style={{ padding: '80px 24px', backgroundColor: '#0B0F19' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{ fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '3rem', color: '#FFFFFF' }}
          >
            Why Choose Merry Kids?
          </motion.h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              { title: 'Digital Learning', desc: 'Modern computer labs for interactive education', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&q=80' },
              { title: 'Interactive Classes', desc: 'Engaging learning experiences for young minds', image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1200&q=80' },
              { title: 'Activity Based Learning', desc: 'Fun classroom activities that inspire creativity', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                style={{
                  padding: '32px 24px',
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
                <img
                  src={feature.image}
                  alt={feature.title}
                  style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px', marginBottom: '12px' }}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1571003129878-b663d3e0676c?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '12px', color: '#FFFFFF' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#9CA3AF', lineHeight: '1.6' }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '80px 24px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                style={{
                  textAlign: 'center',
                  padding: '24px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <h3 style={{ fontSize: '2.8rem', fontWeight: '700', marginBottom: '0.5rem', background: 'linear-gradient(135deg, #3b4e8a 0%, #5f52a9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {stat.number}
                </h3>
                <p style={{ color: '#9CA3AF' }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section style={{ padding: '80px 24px', backgroundColor: '#0B0F19' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{ fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '3rem', color: '#FFFFFF' }}
          >
            Our Classes
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', textAlign: 'center', marginBottom: '8px', color: '#FFFFFF' }}>
                  {cls.name}
                </h3>
                <p style={{ textAlign: 'center', marginBottom: '8px', color: '#9CA3AF' }}>Age: {cls.age}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section style={{ padding: '80px 24px', backgroundColor: 'rgba(255, 255, 255, 0.02)', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{ fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '3rem', color: '#FFFFFF' }}
          >
            Our Facilities
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'AC Classrooms', desc: 'Comfortable learning environment', icon: '❄️' },
              { name: 'Daycare', desc: 'Safe care for extended hours', icon: '🏠' },
              { name: 'Experienced Teachers', desc: 'Qualified and caring educators', icon: '👩‍🏫' },
            ].map((fac, index) => (
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
                  textAlign: 'center',
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
                <div style={{ fontSize: '3rem', marginBottom: '12px' }}>{fac.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px', color: '#FFFFFF' }}>
                  {fac.name}
                </h3>
                <p style={{ color: '#9CA3AF' }}>{fac.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ padding: '80px 24px', backgroundColor: '#0B0F19' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '3rem', color: '#FFFFFF' }}
          >
            School Activities & Moments
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {[
              { src: 'https://images.unsplash.com/photo-1561414927-6eef0672ed36?auto=format&fit=crop&w=1200&q=80', alt: 'Indian Kids Studying', title: 'Classroom Focus', subtitle: 'Students learning with Indian teacher guidance' },
              { src: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1200&q=80', alt: 'Indian Teacher Teaching', title: 'Teacher Mentorship', subtitle: 'Indian teacher explaining topics with care' },
              { src: 'https://images.unsplash.com/photo-1562771832-f608546c00d6?auto=format&fit=crop&w=1200&q=80', alt: 'Indian Classroom', title: 'Smart Classroom', subtitle: 'Modern classroom environment with engaged students' },
              { src: 'https://images.unsplash.com/photo-1571089517320-2f4f0448e921?auto=format&fit=crop&w=1200&q=80', alt: 'Indian Kids Playing', title: 'Playtime Fun', subtitle: 'Children playing on school field with smiles' },
              { src: 'https://images.unsplash.com/photo-1576631211880-a2268f28dbdd?auto=format&fit=crop&w=1200&q=80', alt: 'Indian School Activities', title: 'Creative Activities', subtitle: 'Art, music and group learning in India school' },
              { src: 'https://images.unsplash.com/photo-1592928301201-409dfa8c3311?auto=format&fit=crop&w=1200&q=80', alt: 'Indian Kids Learning', title: 'Learning Journey', subtitle: 'Kids exploring and writing with joyful energy' },
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  minHeight: '280px',
                  transition: 'transform 0.3s ease',
                  background: '#0B1021',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                  e.currentTarget.querySelector('[data-overlay]').style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.querySelector('[data-overlay]').style.opacity = '0';
                }}
              >
                <img
                  src={activity.src}
                  alt={activity.alt}
                  style={{ width: '100%', height: '170px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1571003129878-b663d3e0676c?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
                <div style={{ padding: '14px' }}>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.2rem', marginBottom: '6px' }}>{activity.title}</h3>
                  <p style={{ color: '#9CA3AF', fontSize: '0.95rem', lineHeight: 1.4 }}>{activity.subtitle}</p>
                </div>
                <div
                  data-overlay
                  style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.32)',
                    opacity: 0,
                    transition: 'opacity 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <span style={{ color: 'white', fontSize: '1rem', fontWeight: '600' }}>Indian School Moment</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: '80px 24px', backgroundColor: '#0B0F19' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{ fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '3rem', color: '#FFFFFF' }}
          >
            What Parents Say
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {[
              { name: 'Priya Sharma', text: '"Merry Kids has transformed my child\'s learning experience. The teachers are amazing!"', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80' },
              { name: 'Rahul Kumar', text: '"Safe environment and excellent curriculum. Highly recommend!"', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80' },
              { name: 'Anjali Patel', text: '"My kids love coming to school every day. Great activities and caring staff."', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=80' },
            ].map((test, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                style={{
                  textAlign: 'center',
                  padding: '24px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                }}
              >
                <img src={test.image} alt={test.name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px' }} />
                <p style={{ color: '#9CA3AF', lineHeight: '1.6', marginBottom: '12px' }}>{test.text}</p>
                <p style={{ color: '#FFFFFF', fontWeight: '600' }}>{test.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;