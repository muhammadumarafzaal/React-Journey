import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import './MainContent.css';

const MainContent = () => {
  const { isAuthenticated, user } = useAuth();
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <main className={`main-content ${theme}`}>
      <div className="card">
        <h1>{t.greeting}</h1>
        {isAuthenticated ? (
           <p className="welcome-msg">Hey {user.name}! {t.homeInfo}</p>
        ) : (
           <p className="login-prompt">⚠️ {t.loginPrompt}</p>
        )}
      </div>
    </main>
  );
};

export default MainContent;
