import React from 'react';
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiPostgresql, SiGithubactions, SiJest, SiEsbuild, SiPlaywright } from 'react-icons/si';

const Technologies: React.FC = () => {
    return (
        <section className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
            <div className="flex justify-center flex-wrap gap-6 text-4xl">
                <FaReact title="React" className="text-blue-400 hover:text-blue-300" />
                <SiTypescript title="TypeScript" className="text-blue-500 hover:text-blue-400" />
                <FaNodeJs title="Node.js" className="text-green-500 hover:text-green-400" />
                <SiTailwindcss title="TailwindCSS" className="text-teal-400 hover:text-teal-300" />
                <SiPostgresql title="PostgreSQL" className="text-blue-600 hover:text-blue-500" />
                <FaDocker title="Docker" className="text-blue-500 hover:text-blue-400" />
                <FaAws title="AWS" className="text-orange-400 hover:text-orange-300" />
                <SiGithubactions title="GitHub Actions" className="text-gray-400 hover:text-gray-300" />
                <FaGitAlt title="Git" className="text-orange-500 hover:text-orange-400" />
                <FaGithub title="GitHub" className="text-gray-400 hover:text-gray-300" />
                <SiJest title="Jest" className="text-red-400 hover:text-red-300" />
                <SiEsbuild title="esbuild" className="text-yellow-400 hover:text-yellow-300" />
                <SiPlaywright title="Playwright" className="text-purple-400 hover:text-purple-300" />
            </div>
        </section>
    );
};

export default Technologies;
