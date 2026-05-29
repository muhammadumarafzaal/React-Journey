import Header from './Header';
import Footer from './Footer';
import { ToastProvider } from '../../context/ToastContext';

export default function Layout({ children }) {
  return (
    <ToastProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </div>
    </ToastProvider>
  );
}