import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { ToastContext } from '../context/ToastContext';
import { formatPrice } from '../utils/helpers';
import Skeleton from '../components/Common/Skeleton';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const { success } = useContext(ToastContext);
  const inWishlist = isInWishlist(parseInt(id));

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (isLoading) {
    return (
      <div className="page-transition">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 mb-8 text-accent hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Skeleton className="h-96 rounded-lg" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4 rounded" />
            <Skeleton className="h-6 w-1/2 rounded" />
            <Skeleton className="h-20 w-full rounded" />
            <Skeleton className="h-12 w-full rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-16">
        <p className="text-neutral-500">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    success('Added to cart!');
  };

  const handleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
      success('Added to wishlist!');
    }
  };

  return (
    <div className="page-transition">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 mb-8 text-accent hover:underline font-semibold">
        <ArrowLeft className="w-4 h-4" /> Back to Products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-8 flex items-center justify-center h-96"
        >
          <img
            src={product.image}
            alt={product.title}
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col"
        >
          <div className="mb-6">
            <p className="text-accent text-sm font-semibold uppercase mb-2">{product.category}</p>
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">{product.title}</h1>
            
            {product.rating && (
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating.rate) ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>
            )}
          </div>

          <div className="mb-6">
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              {product.description}
            </p>
          </div>

          <div className="mb-8">
            <p className="text-5xl font-bold text-accent mb-4">{formatPrice(product.price)}</p>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-6">
            <label className="text-sm font-semibold">Quantity:</label>
            <div className="flex items-center border border-neutral-300 dark:border-neutral-700 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                −
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 text-center border-0 focus:outline-none bg-transparent"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="flex-1 btn-primary flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWishlist}
              className="px-6 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <Heart className={`w-5 h-5 ${inWishlist ? 'fill-red-500 text-red-500' : ''}`} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold mb-2">Free Shipping</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">On orders over $50</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold mb-2">Easy Returns</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">30-day return policy</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold mb-2">Secure Payment</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">SSL encrypted checkout</p>
        </div>
      </div>
    </div>
  );
}