import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../utils/helpers';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const total = getTotalPrice();

  if (cart.length === 0) {
    return (
      <div className="page-transition text-center py-16">
        <ShoppingBag className="w-16 h-16 text-neutral-300 dark:text-neutral-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Your Cart is Empty</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
          Start shopping to add items to your cart
        </p>
        <Link to="/products" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4 rotate-180" /> Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="page-transition">
      <h1 className="text-4xl font-bold font-display mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="card p-0 divide-y divide-neutral-200 dark:divide-neutral-700">
            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-6 flex gap-6"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain flex-shrink-0"
                />

                <div className="flex-1">
                  <h3 className="font-semibold mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-accent font-bold mb-4">{formatPrice(item.price)}</p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-neutral-300 dark:border-neutral-700 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      >
                        −
                      </button>
                      <span className="px-4 py-1 min-w-12 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      >
                        +
                      </button>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold">{formatPrice(item.price * item.quantity)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="card p-6 sticky top-20">
            <h3 className="text-lg font-bold mb-6">Order Summary</h3>

            <div className="space-y-4 mb-6 pb-6 border-b border-neutral-200 dark:border-neutral-700">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax</span>
                <span>{formatPrice(total * 0.1)}</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-accent">{formatPrice(total * 1.1)}</span>
              </div>
            </div>

            <Link to="/checkout" className="btn-primary w-full text-center block mb-3">
              Proceed to Checkout
            </Link>
            <Link to="/products" className="btn-secondary w-full text-center block">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}