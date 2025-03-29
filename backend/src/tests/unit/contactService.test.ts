import { ContactService } from '../../services/contactService';

describe('ContactService', () => {
  const contactService = new ContactService();

  it('should format contact data', () => {
    const contact = {
      id: 1,
      name: 'John Doe',
      github: 'https://github.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    };

    const formattedContact = contactService.formatContactData(contact as any);

    expect(formattedContact).toEqual({
      id: 1,
      name: 'JOHN DOE', // Name should be uppercase
      github: 'https://github.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    });
  });

  it('should validate valid contact data', () => {
    const validData = {
      name: 'John Doe',
      github: 'https://github.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    };

    const isValid = contactService.validateContactData(validData);

    expect(isValid).toBe(true);
  });

  it('should invalidate contact data with missing fields', () => {
    const invalidData = {
      name: 'John Doe',
      github: 'https://github.com/johndoe',
      linkedin: '', // Missing LinkedIn URL
    };

    const isValid = contactService.validateContactData(invalidData);

    expect(isValid).toBe(false);
  });

  it('should invalidate contact data with invalid GitHub URL', () => {
    const invalidData = {
      name: 'John Doe',
      github: 'http://github.com/johndoe', // Invalid URL
      linkedin: 'https://linkedin.com/in/johndoe',
    };

    const isValid = contactService.validateContactData(invalidData);

    expect(isValid).toBe(false);
  });

  it('should filter contacts by a specific field', () => {
    const contacts = [
      { id: 1, name: 'John Doe', github: 'https://github.com/johndoe', linkedin: 'https://linkedin.com/in/johndoe' },
      { id: 2, name: 'Jane Doe', github: 'https://github.com/janedoe', linkedin: 'https://linkedin.com/in/janedoe' },
    ];

    const filteredContacts = contactService.filterContactsByField(contacts as any, 'name', 'John');

    expect(filteredContacts).toHaveLength(1);
    expect(filteredContacts[0].name).toBe('John Doe');
  });

  it('should sort contacts by name', () => {
    const contacts = [
      { id: 2, name: 'Jane Doe', github: 'https://github.com/janedoe', linkedin: 'https://linkedin.com/in/janedoe' },
      { id: 1, name: 'John Doe', github: 'https://github.com/johndoe', linkedin: 'https://linkedin.com/in/johndoe' },
    ];

    const sortedContacts = contactService.sortContactsByName(contacts as any);

    expect(sortedContacts[0].name).toBe('Jane Doe');
    expect(sortedContacts[1].name).toBe('John Doe');
  });

  it('should count contacts by a specific field', () => {
    const contacts = [
      { id: 1, name: 'John Doe', github: 'https://github.com/johndoe', linkedin: 'https://linkedin.com/in/johndoe' },
      { id: 2, name: 'Jane Doe', github: '', linkedin: 'https://linkedin.com/in/janedoe' }, // Missing GitHub
    ];

    const count = contactService.countContactsByField(contacts as any, 'github');

    expect(count).toBe(1); // Only one contact has a GitHub URL
  });
});
