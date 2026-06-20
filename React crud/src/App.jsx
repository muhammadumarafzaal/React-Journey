import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './pages/UserList';
import AddEditUser from './pages/AddEditUser';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<AddEditUser />} />
        <Route path="/edit/:id" element={<AddEditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
