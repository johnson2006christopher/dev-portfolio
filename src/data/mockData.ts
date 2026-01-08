import type { Project } from '../types';

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    description: "...",
    technologies: ["React", "TypeScript"],
    category: "Web Application",  // Note: now it's just a string
    imageUrl: "/projects/ecommerce.jpg",
    githubUrl: "https://github.com/...",  // Fixed: Url not Link
    liveUrl: "https://demo.com",          // Fixed: Url not Link
    featured: true,
    createdAt: new Date("2024-01-15")
  }
];