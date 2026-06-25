import React from 'react';
import { motion } from 'framer-motion';

/**
 * Higher Order Component to add smooth entrance animations to components.
 */
const withAnimations = (WrappedComponent, animationType = 'fadeUp') => {
  const animations = {
    fadeUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, ease: 'backOut' }
    },
    sideSlide: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const selected = animations[animationType] || animations.fadeUp;

  return (props) => {
    return (
      <motion.div
        initial={selected.initial}
        animate={selected.animate}
        transition={selected.transition}
      >
        <WrappedComponent {...props} />
      </motion.div>
    );
  };
};

export default withAnimations;
