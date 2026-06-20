import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/axios';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export default function AddEditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const response = await api.get(`/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user.name.trim() || !user.email.trim()) {
      alert('Name and email are required.');
      return;
    }
    try {
      if (id) {
        await api.put(`/users/${id}`, user);
      } else {
        await api.post('/users', user);
      }
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Unable to save user.');
    }
  };

  return (
    <div className="page-wrapper">
      <div className="form-card">
        <h2>{id ? 'Edit User' : 'Add New User'}</h2>
        <form onSubmit={handleSubmit} className="user-form">
          <label className="field-label">
            Name
            <InputText
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Enter name"
              className="input-field"
            />
          </label>
          <label className="field-label">
            Email
            <InputText
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter email"
              type="email"
              className="input-field"
            />
          </label>
          <div className="button-row">
            <Button label={id ? 'Update' : 'Create'} icon="pi pi-save" loading={loading} type="submit" />
            <Button
              label="Back"
              icon="pi pi-arrow-left"
              className="p-button-secondary p-button-outlined"
              type="button"
              onClick={() => navigate('/')}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
