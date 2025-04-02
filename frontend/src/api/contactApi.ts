const API_URL = process.env.REACT_APP_API_URL || '';

export const fetchContactInfo = async () => {
    const response = await fetch(`${API_URL}/contacts`); // Use a variável de ambiente para construir a URL
    if (!response.ok) {
        throw new Error('Failed to fetch contact information');
    }
    return response.json();
};