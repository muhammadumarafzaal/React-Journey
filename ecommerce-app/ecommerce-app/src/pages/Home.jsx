import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/Product/ProductCard';
import Skeleton from '../components/Common/Skeleton';

export default function Home() {
  const { products, isLoading } = useProducts();
  const featured = products.slice(0, 8);

  const MotionLink = motion(Link);

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="mb-16 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-accent to-purple-600 rounded-2xl p-12 md:p-16 text-white overflow-hidden relative"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-semibold">Welcome to Luxe Market</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              Discover Premium Products
            </h1>
            <p className="text-lg text-white/90 mb-6 max-w-md">
              Shop the finest selection of electronics, jewelry, and clothing from trusted brands.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-white text-accent px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
            >
              Start Shopping
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold font-display">Featured Products</h2>
          <Link to="/products" className="text-accent hover:underline font-semibold flex items-center gap-2">
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            Array(8).fill(0).map((_, i) => (
              <Skeleton key={i} className="h-64 rounded-lg" />
            ))
          ) : (
            featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold font-display mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Electronics', 'Jewelry', "Men's Clothing", "Women's Clothing"].map((category) => (
            <MotionLink
              key={category}
              to="/products"
              whileHover={{ y: -4 }}
              className="card p-8 text-center cursor-pointer group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {category === 'Electronics' && '📱'}
                {category === 'Jewelry' && '💎'}
                {category === "Men's Clothing" && '👔'}
                {category === "Women's Clothing" && '👗'}
              </div>
              <h3 className="font-semibold text-lg">{category}</h3>
            </MotionLink>
          ))}
        </div>
      </section>
    </div>
  );
}