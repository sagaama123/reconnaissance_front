import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, FormControl, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import Swal from "sweetalert2";

const UserActions = ({ userId, onDelete, onEdit }) => (
  <td className="cellAction">
    <Button variant="primary" onClick={() => onEdit(userId)}>Modifier</Button>
    <Button variant="danger" onClick={() => onDelete(userId)}>Supprimer</Button>
  </td>
);

const Datatable = () => {
  const [userData, setUserData] = useState([]);
  const [dbName, setDbName] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [newUser, setNewUser] = useState({
    cin: '',
    nom: '',
    prenom: '',
    email: '',
    password: '',
    age: '',
    gender: ''
  });
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/users');
        if (!response.data) {
          throw new Error('Aucune donnée utilisateur trouvée');
        }
        setUserData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/dbname');
        if (!response.data) {
          throw new Error('Aucun nom de base de données trouvé');
        }
        setDbName(response.data.dbname);
      } catch (error) {
        console.error('Erreur lors de la récupération du nom de la base de données:', error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirmation = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmation.isConfirmed) {
      try {
        await axios.delete(`http://localhost:4000/users/${id}`);
        setUserData(prevUserData => prevUserData.filter(user => user.id !== id));
        Swal.fire("Deleted!", "The user has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting user:", error);
        Swal.fire("Error!", "Failed to delete the user.", "error");
      }
    }
  };

  const handleEdit = async (user) => {
    setEditingUser(user);
    setShowEditModal(true);
  };
  
  const handleCloseEditModal = () => {
    setEditingUser(null);
    setShowEditModal(false);
  };

  const handleAdd = () => {
    setShowAddModal(true);
  };

  const handleSaveAdd = async () => {
    try {
      await axios.post('http://localhost:4000/users', newUser);
      const response = await axios.get('http://localhost:4000/users');
      setUserData(response.data);
      setNewUser({ cin: '', nom: '', prenom: '', email: '', password: '', age: '', gender: '' });
      handleCloseAddModal();
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'utilisateur:', error);
    }
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(`http://localhost:4000/users/${editingUser.id}`, editingUser);
      const response = await axios.get('http://localhost:4000/users');
      setUserData(response.data);
      handleCloseEditModal();
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filteredData = userData.filter(user => user.nom.toLowerCase().includes(searchTerm.toLowerCase()) || user.prenom.toLowerCase().includes(searchTerm.toLowerCase()));
    setUserData(filteredData);
  };

  return (
    <div className='datatableAdmin'>
      <h3>{dbName}</h3>
      <div className="d-flex justify-content-between mb-3">
        <Button variant="success" onClick={handleAdd}>Ajouter</Button>
        <InputGroup className="w-25">
          <FormControl
            placeholder="Recherche par nom ou prénom"
            aria-label="Recherche"
            aria-describedby="basic-addon2"
            onChange={handleSearch}
          />
        </InputGroup>
      </div>
      <div className='datatable'>
        <table className="table table-bordered" id="dataTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>CIN</th>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Password</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.cin}</td>
                <td>{user.nom}</td>
                <td>{user.prenom}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <UserActions
                  userId={user.id}
                  onDelete={handleDelete}
                  onEdit={() => handleEdit(user)}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Fenêtre modale pour l'édition */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier les informations de l'utilisateur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicCIN">
              <Form.Label>CIN</Form.Label>
              <Form.Control type="text" value={editingUser?.cin} onChange={(e) => setEditingUser({ ...editingUser, cin: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formBasicNom">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" value={editingUser?.nom} onChange={(e) => setEditingUser({ ...editingUser, nom: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formBasicPrenom">
              <Form.Label>Prénom</Form.Label>
              <Form.Control type="text" value={editingUser?.prenom} onChange={(e) => setEditingUser({ ...editingUser, prenom: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={editingUser?.email} onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={editingUser?.password} onChange={(e) => setEditingUser({ ...editingUser, password: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formBasicAge">
              <Form.Label>Age</Form.Label>
              <Form.Control type="text" value={editingUser?.age} onChange={(e) => setEditingUser({ ...editingUser, age: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formBasicGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control as="select" value={editingUser?.gender} onChange={(e) => setEditingUser({ ...editingUser, gender: e.target.value })}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Control>
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Enregistrer les modifications
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Fenêtre modale pour l'ajout */}
      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un nouvel utilisateur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicCIN">
              <Form.Label>CIN</Form.Label>
              <Form.Control type="text" value={newUser.cin} onChange={(e) => setNewUser({ ...newUser, cin: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formBasicNom">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" value={newUser.nom} onChange={(e) => setNewUser({ ...newUser, nom: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formBasicPrenom">
              <Form.Label>Prénom</Form.Label>
              <Form.Control type="text" value={newUser.prenom} onChange={(e) => setNewUser({ ...newUser, prenom: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formBasicAge">
              <Form.Label>Age</Form.Label>
              <Form.Control type="text" value={newUser.age} onChange={(e) => setNewUser({ ...newUser, age: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formBasicGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control as="select" value={newUser.gender} onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}>
              <option value="">select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Control>
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddModal}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleSaveAdd}>
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Datatable;
