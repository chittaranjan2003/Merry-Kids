import { motion } from "framer-motion";
import classroomImg from "../assets/Classroom img.png";
import creativeArtsImg from "../assets/Creative Arts & Crafts.jpg";
import sportsImg from "../assets/Sports & Physical Activity_img3.png";
import scienceImg from "../assets/Science & Experiments_img4.png";
import musicImg from "../assets/Music & Performing Arts_img5.png";
import groupCollaborationImg from "../assets/Group Collaboration.avif";
import readingLibraryImg from "../assets/Reading & Library Time.jpg";
import outdoorActivitiesImg from "../assets/Outdoor Activities (1).jpg";
import celebrationEventsImg from "../assets/Celebration & Events.webp";

const Gallery = () => {
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
            <span className="kid-title-accent">School Activities Gallery</span>
          </motion.h1>
          <div className="kid-grid-auto">
            {[
              {
                title: "Classroom Learning",
                src: classroomImg,
                alt: "Indian kids studying in classroom",
              },
              {
                title: "Creative Arts & Crafts",
                src: creativeArtsImg,
                alt: "Kids drawing classroom arts and crafts",
              },
              {
                title: "Sports & Physical Activity",
                src: sportsImg,
                alt: "Sports activity",
              },
              {
                title: "Science & Experiments",
                src: scienceImg,
                alt: "Science experiments",
              },
              {
                title: "Music & Performing Arts",
                src: musicImg,
                alt: "Music activities",
              },
              {
                title: "Group Collaboration",
                src: groupCollaborationImg,
                alt: "Group collaboration",
              },
              {
                title: "Reading & Library Time",
                src: readingLibraryImg,
                alt: "Library reading",
              },
              {
                title: "Outdoor Activities",
                src: outdoorActivitiesImg,
                alt: "Outdoor activities",
              },
              {
                title: "Celebration & Events",
                src: celebrationEventsImg,
                alt: "Celebration events",
              },
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                className="kid-gallery-item"
              >
                <div className="kid-gallery-overlay" aria-hidden="true" />
                {activity.src && (
                  <img
                    src={activity.src}
                    alt={activity.alt}
                    className="kid-gallery-image"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = classroomImg;
                    }}
                  />
                )}
                <div className="kid-gallery-meta">
                  <h3 className="kid-gallery-title">{activity.title}</h3>
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
