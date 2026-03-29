import { motion } from "framer-motion";
import "./ClassesFacilities.css";

const Facilities = () => {
  const facilities = [
    {
      name: "AC Classrooms",
      desc: "Comfortable learning environment.",
      icon: "❄️",
      image:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Daycare",
      desc: "Safe care for extended hours.",
      icon: "🏠",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Experienced Teachers",
      desc: "Qualified and caring educators.",
      icon: "👩‍🏫",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="kid-page kid-page--nav">
      <section className="kid-section">
        <div className="kid-container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true, amount: 0.6 }}
            className="kid-title"
          >
            <span className="kid-title-accent">Our Facilities</span>
          </motion.h1>
          <div className="cf-grid">
            {facilities.map((fac, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                className="cf-card"
              >
                <div className="cf-media" aria-hidden="true">
                  {fac.image ? (
                    <img
                      src={fac.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="cf-mediaImg"
                    />
                  ) : (
                    <span className="cf-icon">{fac.icon}</span>
                  )}
                </div>
                <h3 className="cf-title">{fac.name}</h3>
                <p className="cf-desc">{fac.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
