import React, { ReactNode } from 'react';

interface TextBoxProps {
    title: string;
    content: ReactNode; // Changed from string to ReactNode
}

const TextBox: React.FC<TextBoxProps> = ({ title, content }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-full text-center">
            <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
            <div className="text-gray-600 mt-4">{content}</div> {/* Updated to render ReactNode */}
        </div>
    );
};

export default TextBox;
