import { motion } from 'framer-motion';

export default function Card({ children, className = '', hoverable = true, ...props }) {
  return (
    <motion.div
      whileHover={hoverable ? { y: -4 } : {}}
      className=`card ${className}`
      {...props}
    >
      {children}
    </motion.div>
  );
}