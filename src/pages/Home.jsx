<<<<<<< HEAD
import { motion } from "framer-motion";
import { useMemo } from "react";
import HeroBg from "../assets/home-hero-bg.svg";
import ChildrenPlayingHero from "../assets/Children walking ill.png";
import FunLearningIcon from "../assets/Children playing wit.png";
import CreativeActivitiesIcon from "../assets/Children drawing out.png";
import SafeEnvironmentIcon from "../assets/Children gardening o.png";
import DrawingImage from "../assets/drawing (1).jpg";
import PlayingImage from "../assets/playing.jpg";
import StorytellingImage from "../assets/storytelling.png";
import "./Home.css";

const Home = () => {
  const features = useMemo(
    () => [
      {
        title: "Fun Learning",
        desc: "Play-based activities that build curiosity and confidence.",
        icon: (
          <img
            src={FunLearningIcon}
            alt=""
            className="home-card-icon-img"
            loading="lazy"
            decoding="async"
          />
        ),
      },
      {
        title: "Creative Activities",
        desc: "Art, music, stories, and movement for joyful expression.",
        icon: (
          <img
            src={CreativeActivitiesIcon}
            alt=""
            className="home-card-icon-img"
            loading="lazy"
            decoding="async"
          />
        ),
      },
      {
        title: "Safe Environment",
        desc: "A caring space where every child feels secure and supported.",
        icon: (
          <img
            src={SafeEnvironmentIcon}
            alt=""
            className="home-card-icon-img"
            loading="lazy"
            decoding="async"
          />
        ),
      },
    ],
    [],
=======
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import AnimatedButton from '../components/AnimatedButton';
import Card from '../components/Card';
import HeroBackground from '../assets/hero-background.svg';
import HeroMain from '../assets/hero-main.svg';
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
    <img
      src={HeroMain}
      alt="Kids learning illustration"
      className="hero-svg"
      ref={svgRef}
    />
>>>>>>> parent of 8404c99 (Refactor assets, simplify App.css, add UI styles)
  );

  const activities = useMemo(
    () => [
      { title: "Drawing", desc: "Colors, shapes, and imagination." },
      { title: "Playing", desc: "Games that teach teamwork and sharing." },
      { title: "Storytelling", desc: "Big stories for little dreamers." },
    ],
    [],
  );

  const handleExplore = () => {
    const target = document.getElementById("home-cta");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
<<<<<<< HEAD
    <main className="home-page">
      <section className="home-hero" aria-label="Hero">
        <div
          className="home-hero-bg"
          aria-hidden="true"
          style={{ backgroundImage: `url(${HeroBg})` }}
        />

        <div className="home-decor" aria-hidden="true">
          <span className="home-shape home-shape--cloud" />
          <span className="home-shape home-shape--balloon" />
          <span className="home-shape home-shape--star" />
          <span className="home-shape home-shape--blob" />
        </div>

        <div className="home-container home-hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
=======
    <div style={{ backgroundColor: '#0B0F19', color: '#FFFFFF' }}>
      {/* Hero Section */}
      <section className="hero-section">
        {/* Left Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src={HeroBackground}
            alt=""
            className="hero-background-svg"
          />
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
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <HeroIllustration />
          </motion.div>
        </motion.div>
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
>>>>>>> parent of 8404c99 (Refactor assets, simplify App.css, add UI styles)
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <h1 className="home-hero-title">
              Welcome to{" "}
              <span className="home-hero-highlight">
                MerryKids World Bhubaneswar
              </span>
            </h1>
            <p className="home-hero-subtitle">Learn, Play, and Grow Together</p>
            <p className="home-hero-body">
              A bright, safe, and joyful play school experience—built for
              curious minds and happy hearts.
            </p>

            <div className="home-hero-actions">
              <button
                type="button"
                className="home-btn"
                onClick={handleExplore}
              >
                Explore Now
              </button>
            </div>
          </motion.div>

          <motion.div
            className="home-hero-visual"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          >
            <div className="home-hero-frame">
              <img
                src={ChildrenPlayingHero}
                alt="Children playing and learning"
                className="home-hero-illustration"
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="home-section" aria-label="Features">
        <div className="home-container">
          <motion.h2
            className="home-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            Little Learners. Big Smiles.
          </motion.h2>
          <p className="home-section-subtitle">
            Everything we do is designed to help children learn
            naturally—through play, creativity, and care.
          </p>

          <div className="home-grid home-grid--3">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                className="home-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.35 }}
              >
                <div className="home-card-icon" aria-hidden="true">
                  {feature.icon}
                </div>
                <h3 className="home-card-title">{feature.title}</h3>
                <p className="home-card-desc">{feature.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="home-section home-section--alt"
        aria-label="Activities"
      >
        <div className="home-container">
          <motion.h2
            className="home-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            Activities Kids Love
          </motion.h2>
          <p className="home-section-subtitle">
            A colorful mix of hands-on play and guided learning.
          </p>

          <div className="home-grid home-grid--3">
            {activities.map((item, index) => (
              <motion.article
                key={item.title}
                className="home-mini"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.35 }}
              >
                <div className="home-mini-media" aria-hidden="true">
                  <img
                    src={
                      index === 0
                        ? DrawingImage
                        : index === 1
                          ? PlayingImage
                          : StorytellingImage
                    }
                    alt=""
                    className="home-mini-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="home-mini-title">{item.title}</h3>
                <p className="home-mini-desc">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="home-cta" className="home-cta" aria-label="Call to action">
        <motion.div
          className="home-container home-cta-inner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div>
            <h2 className="home-cta-title">Join Us Today!</h2>
            <p className="home-cta-subtitle">
              Give your child a joyful start to lifelong learning.
            </p>
          </div>
          <button
            type="button"
            className="home-btn"
            onClick={() => alert("Enroll Now!")}
          >
            Enroll Now
          </button>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
