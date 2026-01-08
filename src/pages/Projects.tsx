// src/pages/Projects.tsx

import { useState } from 'react';
import { mockProjects } from '../data/mockData';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Get unique categories
  const categories = ['All', ...new Set(mockProjects.map(p => p.category))];

  // Filter projects
  const filteredProjects = selectedCategory === 'All'
    ? mockProjects
    : mockProjects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-gray-400 mb-8">
          Explore my work and side projects
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-400 py-12">
            No projects found in this category.
          </p>
        )}
      </div>
    </div>
  );
}

export default Projects;