// src/pages/Dashboard.tsx

import { mockProjects, mockDashboardStats } from '../data/mockData';
import ProjectCard from '../components/ProjectCard';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            Hello, I'm <span className="text-blue-500">Your Name</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Junior Frontend Developer | React Enthusiast | Building the Future
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
              View My Work
            </button>
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500">
              {mockDashboardStats.yearsOfExperience}+
            </div>
            <div className="text-gray-400 mt-2">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500">
              {mockDashboardStats.totalProjects}+
            </div>
            <div className="text-gray-400 mt-2">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500">
              {mockDashboardStats.totalCommits}+
            </div>
            <div className="text-gray-400 mt-2">Commits</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500">
              {mockDashboardStats.technologiesCount}+
            </div>
            <div className="text-gray-400 mt-2">Technologies</div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProjects
              .filter(project => project.featured)
              .map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;