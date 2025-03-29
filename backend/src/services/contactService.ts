import Contact from '../models/contact';

export class ContactService {
  // Format contact data
  public formatContactData(contact: Contact): { id: number; name: string; github: string; linkedin: string } {
    return {
      id: contact.id,
      name: contact.name.toUpperCase(), // Convert name to uppercase
      github: contact.github,
      linkedin: contact.linkedin,
    };
  }

  // Validate contact data
  public validateContactData(data: { name: string; github: string; linkedin: string }): boolean {
    if (!data.name || !data.github || !data.linkedin) {
      return false; // All fields are required
    }
    if (!data.github.startsWith('https://github.com/')) {
      return false; // GitHub URL must be valid
    }
    if (!data.linkedin.startsWith('https://linkedin.com/in/')) {
      return false; // LinkedIn URL must be valid
    }
    return true;
  }

  // Filter contacts by a specific field
  public filterContactsByField(contacts: Contact[], field: keyof Contact, value: string): Contact[] {
    return contacts.filter(contact => contact[field] && contact[field].includes(value));
  }

  // Sort contacts by name
  public sortContactsByName(contacts: Contact[]): Contact[] {
    return contacts.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Count contacts by a specific field
  public countContactsByField(contacts: Contact[], field: keyof Contact): number {
    return contacts.filter(contact => contact[field]).length;
  }
}