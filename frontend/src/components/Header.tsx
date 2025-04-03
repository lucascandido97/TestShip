import React from 'react';
import { FaShip, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const navigate = useNavigate();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <header className="w-full bg-gradient-primary py-4 fixed top-0 z-50">
            <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
                <button
                    onClick={reloadPage}
                    className="text-white text-4xl cursor-pointer focus:outline-none"
                    aria-label="Reload Page"
                >
                    <FaShip />
                </button>
                <div className="flex space-x-4">
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-4xl hover:text-gray-300"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-4xl hover:text-gray-300"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <button
                        onClick={() => navigate('/contacts')}
                        className="text-white text-lg bg-secondary px-4 py-2 rounded hover:bg-gray-700"
                    >
                        View Contacts
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
