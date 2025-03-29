import axios from 'axios';

describe('Contact API Integration Tests', () => {
    const apiUrl = 'http://localhost:3000/api/contact'; // Adjust the URL as needed

    it('should fetch contact information', async () => {
        const response = await axios.get(apiUrl);
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('name');
        expect(response.data).toHaveProperty('linkedin');
        expect(response.data).toHaveProperty('github');
    });

    it('should return 404 for non-existing endpoint', async () => {
        try {
            await axios.get(`${apiUrl}/non-existing`);
        } catch (error) {
            expect(error.response.status).toBe(404);
        }
    });
});