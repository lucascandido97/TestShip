import React, { useEffect, useState } from 'react';
import { fetchContactInfo } from '../api/contactApi';

const ContactList: React.FC = () => {
    const [contacts, setContacts] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchContactInfo();
                setContacts(data);
            } catch (err) {
                setError('Failed to fetch contacts');
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Contact List</h1>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        {contact.name} - {contact.github} - {contact.linkedin}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;