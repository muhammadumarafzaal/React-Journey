import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { useContext } from 'react';
import { ToastContext } from '../../context/ToastContext';
import { formatPrice } from '../../utils/helpers';

export default function ProductCard({ product }) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const { success, error } = useContext(ToastContext);
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    success('Added to cart!');
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
      success('Added to wishlist!');
    }
  };

  return (
    <Link to={`/products/${product.id}`}>
      <motion.div
        whileHover={{ y: -8 }}
        className="card h-full overflow-hidden cursor-pointer group"
      >
        {/* Image */}
        <div className="relative w-full h-48 bg-neutral-100 dark:bg-neutral-700 overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 p-4"
          />
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleWishlist}
            className="absolute top-3 right-3 p-2 bg-white dark:bg-neutral-800 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                inWishlist ? 'fill-red-500 text-red-500' : 'text-neutral-600'
              }`}
            />
          </motion.button>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col h-full">
          <h3 className="text-sm font-semibold mb-2 line-clamp-2 text-neutral-900 dark:text-white">
            {product.title}
          </h3>
          
          <div className="flex items-center gap-2 mb-3 mt-auto">
            <span className="text-accent font-bold">{formatPrice(product.price)}</span>
            {product.rating && (
              <span className="text-xs text-neutral-500">★ {product.rating.rate}</span>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="w-full btn-primary flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add</span>
          </motion.button>
        </div>
      </motion.div>
    </Link>
  );
}