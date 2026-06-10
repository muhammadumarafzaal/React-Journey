import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const { user, login, logout, isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className={`navbar ${theme}`}>
      <div className="nav-brand">MyApp Context</div>
      
      <div className="nav-controls">
        <select 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)}
          className="lang-select"
        >
          <option value="en">Eng</option>
          <option value="es">Esp</option>
          <option value="fr">Fra</option>
        </select>

        <button onClick={toggleTheme} className="theme-btn">
          {theme === 'light' ? '🌙' : '☀️'} {t.themeBtn}
        </button>

        {isAuthenticated ? (
          <div className="user-info">
            <span>👤 {user.name}</span>
            <button onClick={logout} className="logout-btn">{t.logoutBtn}</button>
          </div>
        ) : (
          <button onClick={() => login('User123')} className="login-btn">
            {t.loginBtn}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
