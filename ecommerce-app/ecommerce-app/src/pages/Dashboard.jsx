import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { LogOut, Package, User as UserIcon, Calendar } from 'lucide-react';
import { formatDate, formatPrice } from '../utils/helpers';

export default function Dashboard() {
  const { user, isLoading, logout } = useUser();
  const navigate = useNavigate();

  if (isLoading) {
    return <div className="text-center py-16">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="text-center py-16">
        <p className="text-neutral-500 mb-4">You need to log in first</p>
        <button
          onClick={() => navigate('/login')}
          className="btn-primary"
        >
          Go to Login
        </button>
      </div>
    );
  }

  const mockOrders = [
    {
      id: '12345',
      date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      total: 249.99,
      status: 'Delivered',
      items: 3,
    },
    {
      id: '12346',
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      total: 149.99,
      status: 'Processing',
      items: 2,
    },
    {
      id: '12347',
      date: new Date(),
      total: 99.99,
      status: 'Pending',
      items: 1,
    },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="page-transition">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-1"
        >
          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <UserIcon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">{user.email}</p>
            <p className="text-neutral-500 text-xs mb-6">
              Member since {formatDate(user.joinedDate)}
            </p>
            <button
              onClick={handleLogout}
              className="btn-secondary w-full flex items-center justify-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">{mockOrders.length}</div>
            <p className="text-neutral-600 dark:text-neutral-400">Total Orders</p>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {formatPrice(mockOrders.reduce((sum, o) => sum + o.total, 0))}
            </div>
            <p className="text-neutral-600 dark:text-neutral-400">Total Spent</p>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {mockOrders.filter((o) => o.status === 'Delivered').length}
            </div>
            <p className="text-neutral-600 dark:text-neutral-400">Delivered</p>
          </div>
        </motion.div>
      </div>

      {/* Orders Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold font-display mb-6">Your Orders</h3>
        <div className="space-y-4">
          {mockOrders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="card p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Package className="w-5 h-5 text-accent" />
                  <h4 className="font-semibold">Order #{order.id}</h4>
                </div>
                <div className="flex gap-6 text-sm text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(order.date)}
                  </div>
                  <div>{order.items} item{order.items > 1 ? 's' : ''}</div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-6">
                <div className="text-right">
                  <p className="font-bold text-lg">{formatPrice(order.total)}</p>
                </div>
                <div>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      order.status === 'Delivered'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
                        : order.status === 'Processing'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300'
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
