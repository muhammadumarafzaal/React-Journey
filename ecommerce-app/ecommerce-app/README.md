# Luxe Market - Premium eCommerce Application

A production-ready React eCommerce web application featuring a modern, polished interface with advanced state management, real-time shopping features, and complete authentication UI.

## 🚀 Features

### Core Functionality
- **Product Browsing**: Grid layout with advanced filtering and search
- **Shopping Cart**: Add/remove items, persistent storage, real-time total calculation
- **Product Details**: High-quality image display, ratings, detailed descriptions
- **Checkout**: Complete multi-step checkout with form validation
- **User Authentication**: Login and registration UI (mock authentication)
- **User Dashboard**: Order history and user profile management
- **Wishlist**: Add favorite products with persistent storage

### Technical Features
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Dark Mode**: Toggle between light and dark themes with persistence
- **Toast Notifications**: Real-time feedback for user actions
- **Framer Motion Animations**: Smooth page transitions and micro-interactions
- **State Management**: Context API with custom hooks
- **Local Storage**: Cart and theme persistence
- **Performance Optimized**: useMemo, useCallback optimization

## 📁 Project Structure

```
luxe-market/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Header.jsx        # Navigation & theme toggle
│   │   │   ├── Footer.jsx        # Footer section
│   │   │   └── Layout.jsx        # Main layout wrapper
│   │   ├── Common/
│   │   │   ├── Button.jsx        # Reusable button component
│   │   │   ├── Card.jsx          # Card wrapper with hover
│   │   │   ├── Input.jsx         # Form input with validation
│   │   │   └── Skeleton.jsx      # Loading skeleton
│   │   ├── Product/
│   │   │   └── ProductCard.jsx   # Individual product card
│   │   └── Toast/
│   │       └── Toaster.jsx       # Toast notification system
│   ├── pages/
│   │   ├── Home.jsx              # Hero + featured products
│   │   ├── Products.jsx          # Products grid with filters
│   │   ├── ProductDetails.jsx    # Single product view
│   │   ├── Cart.jsx              # Shopping cart
│   │   ├── Checkout.jsx          # Checkout form
│   │   ├── OrderSuccess.jsx      # Order confirmation
│   │   ├── Login.jsx             # Login page
│   │   ├── Register.jsx          # Registration page
│   │   ├── Dashboard.jsx         # User dashboard
│   │   └── NotFound.jsx          # 404 page
│   ├── context/
│   │   ├── CartContext.jsx       # Cart state management
│   │   ├── ThemeContext.jsx      # Theme/dark mode
│   │   ├── UserContext.jsx       # User authentication
│   │   └── ToastContext.jsx      # Toast notifications
│   ├── hooks/
│   │   ├── useCart.js            # Cart context hook
│   │   ├── useTheme.js           # Theme context hook
│   │   ├── useUser.js            # User context hook
│   │   ├── useLocalStorage.js    # LocalStorage hook
│   │   └── useProducts.js        # Products fetching hook
│   ├── utils/
│   │   └── helpers.js            # Utility functions
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Tailwind CSS & global styles
├── public/
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## 🛠️ Tech Stack

- **React 18** - UI library with hooks
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Vite** - Fast build tool
- **Lucide React** - Beautiful icons
- **FakeStore API** - Mock product data

## 🔧 Hooks Used

All required React Hooks are implemented:

```javascript
// useState - Component state management
const [searchTerm, setSearchTerm] = useState('');

// useEffect - Side effects and data fetching
useEffect(() => {
  fetchProducts();
}, [fetchProducts]);

// useContext - Global state access
const { cart, addToCart } = useContext(CartContext);

// useReducer - Complex state logic
const [state, dispatch] = useReducer(cartReducer, initialState);

// useMemo - Performance optimization
const filteredProducts = useMemo(() => {
  return products.filter(...);
}, [products, filters]);

// useCallback - Callback optimization
const handleAddToCart = useCallback((product) => {
  addToCart(product);
}, [addToCart]);

// Custom Hooks
const { cart, getTotalPrice } = useCart();
const { isDark, toggleTheme } = useTheme();
const { user, login, logout } = useUser();
```

## 🎨 Design Features

- **Modern Aesthetic**: Sophisticated color palette (Purple accent #8B5CF6)
- **Premium Typography**: Playfair Display + Inter fonts
- **Smooth Animations**: Framer Motion for transitions and interactions
- **Accessibility**: Keyboard navigation, focus states, semantic HTML
- **Dark Mode**: Full dark theme support with system preference detection
- **Responsive Grid**: Mobile-first responsive design

## 📦 Getting Started

### Prerequisites
- Node.js 14+
- npm or yarn

### Installation

1. **Extract the project**
```bash
unzip luxe-market.zip
cd ecommerce-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

## 🎯 Demo Credentials

Login with these test credentials:
```
Email: demo@example.com
Password: password123
```

## 📱 Pages & Routes

| Page | Route | Features |
|------|-------|----------|
| Home | `/` | Hero, featured products, categories |
| Products | `/products` | Grid, filters, search, sort |
| Product Details | `/products/:id` | Image, details, ratings |
| Cart | `/cart` | Items, quantities, totals |
| Checkout | `/checkout` | Form, validation, payment |
| Order Success | `/order-success` | Confirmation, tracking |
| Login | `/login` | Email, password validation |
| Register | `/register` | Name, email, password |
| Dashboard | `/dashboard` | Profile, orders, stats |
| Not Found | `*` | 404 error page |

## 🔐 State Management

### CartContext
- `cart` - Array of items
- `wishlist` - Saved items
- `addToCart()` - Add item to cart
- `removeFromCart()` - Remove item
- `updateQuantity()` - Change item quantity
- `clearCart()` - Empty cart
- `getTotalPrice()` - Calculate total
- `getTotalItems()` - Get item count

### ThemeContext
- `isDark` - Current theme
- `toggleTheme()` - Switch theme

### UserContext
- `user` - Current user data
- `isAuthenticated` - Login status
- `login()` - Mock login
- `register()` - Mock registration
- `logout()` - Clear user

## 💡 Key Optimizations

1. **useMemo** - Filter/sort calculations cached
2. **useCallback** - Event handlers memoized
3. **Lazy Loading** - Components split by routes
4. **LocalStorage** - Cart persists across sessions
5. **Skeleton Loaders** - Better perceived performance
6. **Image Optimization** - Responsive images

## 🎬 Animations

- **Page Transitions** - Fade in on route change
- **Card Hover** - Lift effect on hover
- **Button Press** - Scale down on click
- **Toast Slide** - Notification enters from right
- **Cart Badge** - Pop animation when item added
- **Skeleton Shimmer** - Loading state animation

## 📋 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🚨 Important Notes

- This is a **frontend-only** application
- Authentication is **mock** (no backend)
- Payment is simulated (no real transactions)
- Data uses public API (FakeStore)
- All data stored in **localStorage**

---

**Built with ❤️ as a premium portfolio project**
