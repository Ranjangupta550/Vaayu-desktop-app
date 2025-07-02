// src/components/Map/SkeletonMap.jsx
import { motion } from 'framer-motion';

const Skeleton = () => {
  return (
    <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="text-white text-3xl font-extrabold tracking-wide"
      >
        🛰️ Loading Map Interface...
      </motion.div>
    </div>
  );
};

export default Skeleton;
