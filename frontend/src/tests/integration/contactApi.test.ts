import axios from 'axios';

describe('Contact API Integration Tests', () => {
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000/api/contact';

    it('should fetch contact information', async () => {
        const response = await axios.get(apiUrl);
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('name');
    });

    it('should return 404 for non-existing endpoint', async () => {
        try {
            await axios.get(`${apiUrl}/non-existing`);
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                expect(error.response.status).toBe(404);
            } else {
                throw error; // Re-lança o erro se não for do tipo esperado
            }
        }
    });
});