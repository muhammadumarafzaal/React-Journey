import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import './App.css'; 

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LanguageProvider>
          {/* Main App Container */}
          <div className="app-container">
            <Navbar />
            <MainContent />
          </div>
        </LanguageProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
