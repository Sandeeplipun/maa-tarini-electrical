import { motion } from 'framer-motion';

export default function AnimatedCircuit() {
  return (
    <div className="w-full h-40 overflow-hidden">
      <motion.svg
        viewBox="0 0 800 100"
        className="w-full h-full"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
      >
        <motion.path
          d="M0,50 Q200,10 400,50 T800,50"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="2"
        />
        <motion.circle cx="0" cy="50" r="5" fill="#3B82F6" />
        <motion.circle cx="200" cy="10" r="5" fill="#3B82F6" />
        <motion.circle cx="400" cy="50" r="5" fill="#3B82F6" />
        <motion.circle cx="600" cy="90" r="5" fill="#3B82F6" />
        <motion.circle cx="800" cy="50" r="5" fill="#3B82F6" />
      </motion.svg>
    </div>
  );
}
