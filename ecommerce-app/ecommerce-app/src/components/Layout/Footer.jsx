import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Luxe Market</h3>
            <p className="text-neutral-400">Premium shopping experience.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><Link to="/products" className="hover:text-white transition">All Products</Link></li>
              <li><Link to="/products" className="hover:text-white transition">Electronics</Link></li>
              <li><Link to="/products" className="hover:text-white transition">Clothing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><Link to="/" className="hover:text-white transition">About</Link></li>
              <li><Link to="/" className="hover:text-white transition">Contact</Link></li>
              <li><Link to="/" className="hover:text-white transition">Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              <a href="https://github.com/muhammadumarafzaal" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition"><Github className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/umar-afzaal-b3a9252a6/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-accent transition"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8">
          <p className="text-center text-neutral-400">© 2024 Luxe Market. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}