import React from 'react';
import Header from '../components/Header';
import TextBox from '../components/TextBox';
import Technologies from '../components/Technologies'; // Import the new component

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-primary">
            <Header />
            <main className="text-center text-white mt-20 max-w-5xl mx-auto pt-20">
                <h1 className="text-5xl font-bold mb-4">TestShip</h1>
                <p className="text-lg mb-8">
                    Personal project showcasing a CI/CD pipeline for a web application: quality assurance, containerization, and cloud computing.
                </p>
                <TextBox
                    title="About TestShip"
                    content={
                        <p>
                            This project demonstrates a complete CI/CD pipeline for a web application, including testing, containerization, and deployment.
                        </p>
                    }
                />
                <Technologies /> {/* Use the new Technologies component */}
            </main>
        </div>
    );
};

export default LandingPage;
