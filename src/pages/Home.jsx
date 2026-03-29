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
