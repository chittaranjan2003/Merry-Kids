import { motion } from 'framer-motion';

const FloatingElement = ({ children, delay = 0 }) => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;