
// ============================================
// PROJECT INTERFACES
// ============================================

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string; // optional - not all projects have a long description
    technologies: string[];
    categories: ProjectCategory; // 
    imageUrl: string;
    githubLink: string;
    liveLink?: string; //optional - not all projects are deployed
    featured: boolean; // for highlighting top projects
    createdAt: Date;
}

export enum ProjectCategory {
    WEB_APP = "Web Application",
    MOBILE_APP = "Mobile Application",
    UI_COMPONENTS = "UI Components",
    TOOLS = "Developer Tools",
    OTHER = "Other"
}

// ============================================
// SKILL INTERFACES
// ============================================

export interface Skill {
    id : string;
    name :string;
    category : SkillCategory;
    proficiency : SkillLevel;
    icon? : string;
    description? : string;
}

export enum SkillCategory {
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  TOOLS = "Tools & Workflow",
  DESIGN = "Design",
  OTHER = "Other"
}

export enum SkillLevel {
  BEGINNER = "Beginner",
  INTERMEDIATE = "Intermediate",
  ADVANCED = "Advanced",
  EXPERT = "Expert"
}

// Alternative: using union types instead of enum
// export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

// ============================================
// BLOG POST INTERFACES
// ============================================

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string; // Short summary
  content: string; // Full article content (can be markdown)
  author: Author;
  tags: string[];
  category: BlogCategory;
  publishedAt: Date;
  updatedAt?: Date;
  readTimeMinutes: number;
  imageUrl?: string;
  featured: boolean;
}

export interface Author {
  name: string;
  avatar?: string;
  bio?: string;
}

export enum BlogCategory {
  TUTORIAL = "Tutorial",
  OPINION = "Opinion",
  NEWS = "News",
  CAREER = "Career",
  PROJECT_SHOWCASE = "Project Showcase"
}

// ============================================
// CONTACT FORM INTERFACES
// ============================================

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// ============================================
// DASHBOARD STATS INTERFACES
// ============================================

export interface DashboardStats {
  totalProjects: number;
  yearsOfExperience: number;
  totalCommits: number;
  technologiesCount: number;
}

// ============================================
// NAVIGATION INTERFACES
// ============================================

export interface NavLink {
  label: string;
  path: string;
  icon?: string;
}

// ============================================
// THEME INTERFACES
// ============================================

export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}