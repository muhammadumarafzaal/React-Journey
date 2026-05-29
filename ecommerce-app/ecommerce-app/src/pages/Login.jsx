import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUser } from '../hooks/useUser';
import { ToastContext } from '../context/ToastContext';
import Input from '../components/Common/Input';
import Button from '../components/Common/Button';
import { validateEmail } from '../utils/helpers';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useUser();
  const { success, error } = useContext(ToastContext);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      setTimeout(() => {
        try {
          login(formData.email, formData.password);
          success('Logged in successfully!');
          navigate('/dashboard');
        } catch (err) {
          error('Login failed');
        } finally {
          setIsLoading(false);
        }
      }, 1000);
    }
  };

  return (
    <div className="page-transition">
      <div className="flex items-center justify-center min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md card p-8"
        >
          <h1 className="text-3xl font-bold font-display text-center mb-2">Welcome Back</h1>
          <p className="text-center text-neutral-600 dark:text-neutral-400 mb-8">
            Sign in to your account
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />

            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <p className="text-center text-neutral-600 dark:text-neutral-400 mt-6">
            Don't have an account?{' '}
            <Link to="/register" className="text-accent hover:underline font-semibold">
              Register here
            </Link>
          </p>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-sm text-blue-700 dark:text-blue-300">
            <p className="font-semibold mb-2">Demo Credentials:</p>
            <p>Email: demo@example.com</p>
            <p>Password: password123</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
