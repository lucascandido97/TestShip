export const fetchContactInfo = async () => {
    const response = await fetch('/api/contact');
    if (!response.ok) {
        throw new Error('Failed to fetch contact information');
    }
    return response.json();
};