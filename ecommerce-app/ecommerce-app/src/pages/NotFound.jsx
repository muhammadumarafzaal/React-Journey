import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="page-transition">
      <div className="flex items-center justify-center min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mb-6"
          >
            <AlertCircle className="w-24 h-24 text-accent mx-auto" />
          </motion.div>

          <h1 className="text-6xl font-bold font-display mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-8 max-w-md">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex gap-4 justify-center">
            <Link to="/" className="btn-primary inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <Link to="/products" className="btn-secondary inline-flex items-center gap-2">
              Continue Shopping
            </Link>
          </div>

          {/* Decorative Elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="mt-16 inline-block"
          >
            <div className="text-8xl opacity-10">✦</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
