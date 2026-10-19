import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data pendaftaran:', formData);
  };

  return (
    <Container className="py-5">
      <Card className="mx-auto" style={{ maxWidth: '450px' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Pendaftaran</Card.Title>
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nama Pengguna</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Nama Pengguna"
                value={formData.username}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nama Depan</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                placeholder="Nama Depan"
                value={formData.first_name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nama Belakang</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                placeholder="Nama Belakang"
                value={formData.last_name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Kata Sandi</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Kata Sandi"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Daftar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;
