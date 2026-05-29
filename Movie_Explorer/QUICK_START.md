# 📋 Quick Start Guide - Movie Explorer

## ✅ What's Included

### ✨ Features
- ✅ Real-time movie search with pagination
- ✅ Detailed movie information pages
- ✅ Beautiful dark theme UI with responsive design
- ✅ React Hooks: useState, useEffect, useRef
- ✅ React Router for navigation
- ✅ OMDb API integration
- ✅ Professional README and documentation

### 📁 Project Structure
```
Movie_Explorer/
└── my-app/
    ├── src/
    │   ├── pages/
    │   │   ├── HomePage.jsx (Search & results)
    │   │   └── MovieDetail.jsx (Movie details)
    │   ├── components/
    │   │   └── MovieCard.jsx (Movie card component)
    │   ├── services/
    │   │   └── movieService.js (API calls)
    │   ├── styles/
    │   │   ├── HomePage.css
    │   │   ├── MovieCard.css
    │   │   └── MovieDetail.css
    │   ├── App.jsx (Router setup)
    │   ├── App.css (Global styles)
    │   └── main.jsx (Entry point)
    ├── README.md (Professional documentation)
    ├── package.json
    ├── vite.config.js
    └── index.html
```

## 🚀 Running the App

### Development Mode
```bash
cd "d:\semester 3rd\React 2\Movie_Explorer\my-app"
npm run dev
```
Open: http://localhost:5173/

### Build for Production
```bash
npm run build
npm run preview
```

## 🔧 Git Commands

### First Time Setup (Push to GitHub)
```bash
cd "d:\semester 3rd\React 2\Movie_Explorer\my-app"
git branch -M main
git remote add origin https://github.com/muhammadumarafzaal/Movie-Explorer-ReactJs.git
git push -u origin main
```

### Regular Commits
```bash
git add .
git commit -m "Your message here"
git push
```

### Check Status
```bash
git status
git log --oneline
```

## 🎨 Customization

### Change API Key
Edit: `src/services/movieService.js`
```javascript
const API_KEY = 'YOUR_NEW_KEY_HERE';
```

### Change Color Scheme
Edit: `src/App.css`
```css
:root {
  --primary-color: #6366f1;     /* Change this */
  --secondary-color: #ec4899;   /* Change this */
  --dark-bg: #0f172a;
  /* ... */
}
```

### Add More Pages
1. Create new file in `src/pages/`
2. Add route in `src/App.jsx`:
```javascript
<Route path="/new-page" element={<NewPage />} />
```

## 📊 Key React Hooks Used

### useState() - State Management
```javascript
const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(false);
```

### useEffect() - Side Effects
```javascript
useEffect(() => {
  fetchMovieDetails(imdbID);
}, [imdbID]);
```

### useRef() - Direct DOM Access
```javascript
const searchInputRef = useRef(null);
searchInputRef.current?.focus();
```

## 🐛 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Port 5173 already in use | `npm run dev -- --port 3000` |
| Module not found | `npm install` |
| API not working | Check API key in `movieService.js` |
| Styling broken | Clear cache: Ctrl+Shift+Delete |
| Git push fails | Use GitHub personal access token |

## 📞 Contact & Links

- **Email**: umarafzaal182@gmail.com
- **GitHub**: https://github.com/muhammadumarafzaal
- **Repository**: https://github.com/muhammadumarafzaal/Movie-Explorer-ReactJs
- **OMDb API**: http://www.omdbapi.com

## 🔗 Resources

- [React Docs](https://react.dev)
- [React Router](https://reactrouter.com)
- [Vite Docs](https://vitejs.dev)
- [OMDb API](http://www.omdbapi.com)

## 📝 Next Steps

1. ✅ Push to GitHub (see GITHUB_SETUP.md)
2. ⏭️ Deploy to Vercel or Netlify
3. ⏭️ Add more features (favorites, ratings, etc.)
4. ⏭️ Optimize performance
5. ⏭️ Add unit tests

---

**Happy Exploring! 🍿🎬**
