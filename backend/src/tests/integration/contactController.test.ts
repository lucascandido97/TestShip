import request from 'supertest';
import app from 'app';
import Contact from '@models/contact';
import sequelize from '@config/database';

describe('ContactController Integration Tests', () => {
  afterAll(async () => {
    await sequelize.close(); // Closes the database connection after all integration tests
  });

  it('should fetch all contacts', async () => {
    await Contact.create({ name: 'John Doe', github: 'https://github.com/johndoe', linkedin: 'https://linkedin.com/in/johndoe' });

    const response = await request(app).get('/contacts');

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0].name).toBe('JOHN DOE'); // Verifies if the name was formatted
  });

  it('should fetch a single contact by ID', async () => {
    const contact = await Contact.create({ name: 'John Doe', github: 'https://github.com/johndoe', linkedin: 'https://linkedin.com/in/johndoe' });

    const response = await request(app).get(`/contacts/${contact.id}`);

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('JOHN DOE'); // Verifies if the name was formatted
  });

  it('should return 404 if contact is not found', async () => {
    const response = await request(app).get('/contacts/999');

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Contact not found');
  });

  it('should create a new contact', async () => {
    const newContact = { name: 'Jane Doe', github: 'https://github.com/janedoe', linkedin: 'https://linkedin.com/in/janedoe' };

    const response = await request(app).post('/contacts').send(newContact);

    expect(response.status).toBe(201);
    expect(response.body.name).toBe('JANE DOE'); // Verifies if the name was formatted
  });

  it('should return 400 for invalid contact data', async () => {
    const invalidContact = { name: '', github: 'invalid-url', linkedin: '' };

    const response = await request(app).post('/contacts').send(invalidContact);

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Invalid contact data');
  });

  it('should update an existing contact', async () => {
    const contact = await Contact.create({ name: 'John Doe', github: 'https://github.com/johndoe', linkedin: 'https://linkedin.com/in/johndoe' });

    const updatedData = { name: 'John Smith', github: 'https://github.com/johnsmith', linkedin: 'https://linkedin.com/in/johnsmith' };

    const response = await request(app).put(`/contacts/${contact.id}`).send(updatedData);

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('JOHN SMITH'); // Verifies if the name was formatted
  });

  it('should return 404 when updating a non-existent contact', async () => {
    const updatedData = { name: 'John Smith', github: 'https://github.com/johnsmith', linkedin: 'https://linkedin.com/in/johnsmith' };

    const response = await request(app).put('/contacts/999').send(updatedData);

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Contact not found');
  });

  it('should delete a contact', async () => {
    const contact = await Contact.create({ name: 'John Doe', github: 'https://github.com/johndoe', linkedin: 'https://linkedin.com/in/johndoe' });

    const response = await request(app).delete(`/contacts/${contact.id}`);

    expect(response.status).toBe(204);

    const deletedContact = await Contact.findByPk(contact.id);
    expect(deletedContact).toBeNull(); // Verifies if the contact was deleted
  });

  it('should return 404 when deleting a non-existent contact', async () => {
    const response = await request(app).delete('/contacts/999');

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Contact not found');
  });

  it('should search contacts by name', async () => {
    await Contact.create({ name: 'John Doe', github: 'https://github.com/johndoe', linkedin: 'https://linkedin.com/in/johndoe' });
    await Contact.create({ name: 'Jane Doe', github: 'https://github.com/janedoe', linkedin: 'https://linkedin.com/in/janedoe' });

    const response = await request(app).get('/contacts?name=John');

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0].name).toBe('JOHN DOE');
  });
});
