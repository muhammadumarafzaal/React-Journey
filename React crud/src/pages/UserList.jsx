import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await api.get('/users');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
      alert('Failed to load users.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this user?')) return;
    try {
      await api.delete(`/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error(error);
      alert('Unable to delete user.');
    }
  };

  const actionBodyTemplate = (rowData) => (
    <div className="action-buttons">
      <Button
        icon="pi pi-pencil"
        className="p-button-sm p-button-warning p-mr-2"
        onClick={() => navigate(`/edit/${rowData.id}`)}
      />
      <Button
        icon="pi pi-trash"
        className="p-button-sm p-button-danger"
        onClick={() => handleDelete(rowData.id)}
      />
    </div>
  );

  return (
    <div className="page-wrapper">
      <div className="list-card">
        <div className="list-header">
          <div>
            <h2>User CRUD App</h2>
            <p>Use the buttons to edit or delete users, or add a new one.</p>
          </div>
          <Link to="/add" className="p-button p-button-success p-button-sm add-user-btn">
            Add User
          </Link>
        </div>
        <DataTable
          value={users}
          loading={loading}
          stripedRows
          paginator
          rows={10}
          responsiveLayout="scroll"
          emptyMessage="No users found"
        >
          <Column field="id" header="ID" style={{ width: '5rem' }}></Column>
          <Column field="name" header="Name"></Column>
          <Column field="email" header="Email"></Column>
          <Column header="Actions" body={actionBodyTemplate} style={{ width: '10rem' }}></Column>
        </DataTable>
      </div>
    </div>
  );
}
