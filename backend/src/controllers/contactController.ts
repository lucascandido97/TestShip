import { Request, Response } from 'express';
import { ContactService } from '@services/contactService';
import Contact from '@models/contact';

const contactService = new ContactService();

// GET all contacts
export const getAllContacts = async (req: Request, res: Response): Promise<void> => {
  try {
    const contacts = await Contact.findAll(); // Fetch contacts from the database
    const formattedContacts = contacts.map(contact => contactService.formatContactData(contact));
    res.json(formattedContacts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contacts' });
  }
};

// GET a single contact by ID
export const getContactById = async (req: Request, res: Response): Promise<void> => {
  try {
    const contact = await Contact.findByPk(Number(req.params.id));
    if (contact) {
      res.json(contactService.formatContactData(contact));
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contact' });
  }
};

// POST a new contact
export const createContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, github, linkedin } = req.body;
    const isValid = contactService.validateContactData({ name, github, linkedin });

    if (!isValid) {
      res.status(400).json({ message: 'Invalid contact data' });
      return;
    }

    const newContact = await Contact.create({ name, github, linkedin }); // Save to the database
    res.status(201).json(contactService.formatContactData(newContact));
  } catch (error) {
    res.status(500).json({ message: 'Error creating contact' });
  }
};

// PUT update a contact
export const updateContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, github, linkedin } = req.body;
    const contact = await Contact.findByPk(Number(req.params.id));

    if (!contact) {
      res.status(404).json({ message: 'Contact not found' });
      return;
    }

    const isValid = contactService.validateContactData({ name, github, linkedin });
    if (!isValid) {
      res.status(400).json({ message: 'Invalid contact data' });
      return;
    }

    await contact.update({ name, github, linkedin });
    res.json(contactService.formatContactData(contact));
  } catch (error) {
    res.status(500).json({ message: 'Error updating contact' });
  }
};

// DELETE a contact
export const deleteContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const contact = await Contact.findByPk(Number(req.params.id));

    if (!contact) {
      res.status(404).json({ message: 'Contact not found' });
      return;
    }

    await contact.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting contact' });
  }
};

// GET search contacts by name
export const searchContactsByName = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.query;
    if (typeof name !== 'string') {
      res.status(400).json({ message: 'Invalid query parameter' });
      return;
    }

    const contacts = await Contact.findAll({
      where: {
        name: {
          [require('sequelize').Op.like]: `%${name}%`,
        },
      },
    });

    const formattedContacts = contacts.map(contact => contactService.formatContactData(contact));
    res.json(formattedContacts);
  } catch (error) {
    res.status(500).json({ message: 'Error searching contacts' });
  }
};

// GET filtered contacts by field
export const filterContacts = async (req: Request, res: Response): Promise<void> => {
  try {
    const { field, value } = req.query;
    if (typeof field !== 'string' || typeof value !== 'string') {
      res.status(400).json({ message: 'Invalid query parameters' });
      return;
    }

    const contacts = await Contact.findAll(); // Fetch contacts from the database
    const filteredContacts = contactService.filterContactsByField(contacts, field as keyof Contact, value);
    res.json(filteredContacts.map(contact => contactService.formatContactData(contact)));
  } catch (error) {
    res.status(500).json({ message: 'Error filtering contacts' });
  }
};