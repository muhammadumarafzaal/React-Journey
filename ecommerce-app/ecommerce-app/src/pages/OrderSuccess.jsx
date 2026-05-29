import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OrderSuccess() {
  return (
    <div className="page-transition">
      <div className="text-center py-20">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="mb-6"
        >
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold font-display mb-4">Order Confirmed!</h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-2">
            Thank you for your purchase
          </p>
          <p className="text-neutral-500 dark:text-neutral-500 mb-8">
            Order #12345 • Confirmation email sent
          </p>

          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-8 max-w-md mx-auto mb-8">
            <div className="space-y-4 text-left">
              <div className="flex justify-between pb-4 border-b border-neutral-200 dark:border-neutral-700">
                <span className="text-neutral-600 dark:text-neutral-400">Estimated Delivery</span>
                <span className="font-semibold">5-7 Business Days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600 dark:text-neutral-400">Tracking Number</span>
                <span className="font-semibold">TRK12345678901</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Link to="/" className="btn-primary">
              Back to Home
            </Link>
            <Link to="/dashboard" className="btn-secondary">
              View Orders
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
