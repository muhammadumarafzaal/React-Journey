import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // default 'en'

  // A simple dictionary for our translations
  const translations = {
    en: {
      greeting: "Welcome to the Dashboard",
      loginPrompt: "Please login to continue",
      logoutBtn: "Logout",
      loginBtn: "Login",
      themeBtn: "Toggle Theme",
      homeInfo: "This is a simple demo using Theme, Auth, and Language Contexts."
    },
    es: {
      greeting: "Bienvenido al Tablero",
      loginPrompt: "Por favor inicie sesión para continuar",
      logoutBtn: "Cerrar sesión",
      loginBtn: "Iniciar sesión",
      themeBtn: "Cambiar Tema",
      homeInfo: "Esta es una simple demostración usando Contextos de Tema, Autenticación e Idioma."
    },
    fr: {
      greeting: "Bienvenue sur le tableau de bord",
      loginPrompt: "Veuillez vous connecter pour continuer",
      logoutBtn: "Se déconnecter",
      loginBtn: "Se connecter",
      themeBtn: "Changer de thème",
      homeInfo: "Ceci est une simple démonstration utilisant les contextes de Thème, d'Authentification et de Langue."
    }
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
