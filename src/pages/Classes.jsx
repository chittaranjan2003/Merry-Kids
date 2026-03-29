import { motion } from "framer-motion";
import "./ClassesFacilities.css";

const Classes = () => {
  const classes = [
    {
      name: "PlaySchool",
      age: "2-3",
      desc: "Introduction to learning through play.",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Nursery",
      age: "3-4",
      desc: "Basic skills and social interaction.",
      image:
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "LKG",
      age: "4-5",
      desc: "Preparatory for kindergarten.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "UKG",
      age: "5-6",
      desc: "Advanced prep for primary school.",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
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
            <span className="kid-title-accent">Our Classes</span>
          </motion.h1>
          <div className="cf-grid">
            {classes.map((cls, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                className="cf-card"
              >
                <div className="cf-media" aria-hidden="true">
                  <img
                    src={cls.image}
                    alt={`${cls.name} class`}
                    loading="lazy"
                    decoding="async"
                    className="cf-mediaImg"
                  />
                </div>
                <h3 className="cf-title">{cls.name}</h3>
                <p className="cf-meta">Age: {cls.age}</p>
                <p className="cf-desc">{cls.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classes;
