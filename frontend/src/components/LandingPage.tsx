import React, { useEffect, useState } from 'react';
import { fetchContactInfo } from '../api/contactApi';

const LandingPage: React.FC = () => {
    const [contactInfo, setContactInfo] = useState<{ name: string; linkedin: string; github: string } | null>(null);

    useEffect(() => {
        const getContactInfo = async () => {
            const data = await fetchContactInfo();
            setContactInfo(data);
        };

        getContactInfo();
    }, []);

    return (
        <div>
            <h1>Welcome to My Landing Page</h1>
            {contactInfo ? (
                <div>
                    <h2>Contact Information</h2>
                    <p>Name: {contactInfo.name}</p>
                    <p>LinkedIn: <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">{contactInfo.linkedin}</a></p>
                    <p>GitHub: <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">{contactInfo.github}</a></p>
                </div>
            ) : (
                <p>Loading contact information...</p>
            )}
        </div>
    );
};

export default LandingPage;