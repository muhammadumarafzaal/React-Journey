import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/Product/ProductCard';
import Input from '../components/Common/Input';
import Skeleton from '../components/Common/Skeleton';
import { debounce } from '../utils/helpers';

export default function Products() {
  const { products, isLoading } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState('featured');

  const categories = useMemo(() => {
    const cats = ['all'];
    products.forEach((p) => {
      if (!cats.includes(p.category)) cats.push(p.category);
    });
    return cats;
  }, [products]);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(
      (p) =>
        (selectedCategory === 'all' || p.category === selectedCategory) &&
        p.price >= priceRange[0] &&
        p.price <= priceRange[1] &&
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
    }

    return filtered;
  }, [products, selectedCategory, priceRange, searchTerm, sortBy]);

  return (
    <div className="page-transition">
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-display mb-4">Shop Products</h1>
        <p className="text-neutral-600 dark:text-neutral-400">Explore our premium collection</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 space-y-6">
            {/* Search */}
            <div>
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold mb-3">Category</label>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <motion.label
                    key={cat}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={selectedCategory === cat}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <span className="capitalize text-sm">{cat}</span>
                  </motion.label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-semibold mb-3">Price Range</label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="text-xs text-neutral-500">
                  Up to ${priceRange[1]}
                </div>
              </div>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-semibold mb-3">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-field text-sm"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(9).fill(0).map((_, i) => (
                <Skeleton key={i} className="h-64 rounded-lg" />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <p className="text-neutral-500 text-lg">No products found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}