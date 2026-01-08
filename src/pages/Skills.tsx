// src/pages/Skills.tsx

import { mockSkills } from '../data/mockData';
import { SkillCategory, SkillLevel } from '../types';

function Skills() {
  // Group skills by category
  const groupedSkills = mockSkills.reduce((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<SkillCategory, typeof mockSkills>);

  // Get proficiency percentage for visual display
  const getProficiencyPercentage = (level: SkillLevel): number => {
    switch (level) {
      case SkillLevel.BEGINNER: return 25;
      case SkillLevel.INTERMEDIATE: return 50;
      case SkillLevel.ADVANCED: return 75;
      case SkillLevel.EXPERT: return 100;
      default: return 0;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Technical Skills</h1>
        <p className="text-gray-400 mb-12">
          My technology stack and proficiency levels
        </p>

        {/* Skills by Category */}
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-blue-500">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map(skill => (
                <div key={skill.id} className="bg-gray-800 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                    <span className="text-sm text-gray-400">
                      {skill.proficiency}
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-3 mb-3">
                    <div
                      className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${getProficiencyPercentage(skill.proficiency)}%` }}
                    />
                  </div>
                  
                  {skill.description && (
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;