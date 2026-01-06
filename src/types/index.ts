
/**
 * ============================================
 * PROJECT INTERFACES
 * ============================================
 * This section defines the structure for "Project" objects.
 * An Interface acts like a blueprint or a contract for your data.
 */

/**
 * Represents a single project in the portfolio.
 */
export interface Project {
    /** Unique identifier (usually a UUID or a database slug) */
    id: string;
    
    /** The display name of the project */
    title: string;
    
    /** A short, catchy summary of the project */
    description: string;
    
    /** 
     * Detailed breakdown of the project.
     * The '?' means it is OPTIONAL. Not all projects need a long description.
     */
    longDescription?: string;
    
    /** A list of technologies used (e.g., ["React", "Node.js"]) */
    technologies: string[];
    
    /** The category this project falls into (Web App, Mobile, etc.) */
    categories: ProjectCategory;
    
    /** Path to the thumbnail image (relative path or full URL) */
    imageUrl: string;
    
    /** Link to the GitHub repository */
    githubLink: string;
    
    /** 
     * Link to the live demo of the project.
     * Optional because some projects might be private or not hosted.
     */
    liveLink?: string;
    
    /** Set to true to highlight this project on the homepage */
    featured: boolean;
    
    /** The date the project was added or completed */
    createdAt: Date;
}

/**
 * ERASABLE SYNTAX PATTERN:
 * We use a const object and a union type instead of an 'enum'.
 * This is better for performance and modern TypeScript tools.
 */
export const ProjectCategory = {
    WEB_APP: "Web Application",
    MOBILE_APP: "Mobile Application",
    UI_COMPONENTS: "UI Components",
    TOOLS: "Developer Tools",
    OTHER: "Other"
} as const; // 'as const' makes the values read-only and strictly typed.

/**
 * This creates a type that only accepts the values from the ProjectCategory object.
 * (e.g., "Web Application" | "Mobile Application" | ...)
 */
export type ProjectCategory = (typeof ProjectCategory)[keyof typeof ProjectCategory];

// -----------------------------------------------------------
// NOTE: Enums (shown below) are an older way to do the same thing.
// We commented them out because they generate extra code in JavaScript.
/*
    export enum ProjectCategory {
    WEB_APP = "Web Application",
    MOBILE_APP = "Mobile Application",
    UI_COMPONENTS = "UI Components",
    TOOLS = "Developer Tools",
    OTHER = "Other"
}
*/
// -----------------------------------------------------------


/**
 * ============================================
 * SKILL INTERFACES
 * ============================================
 * Defines the structure for technical skills and ratings.
 */

/**
 * Represents a technical skill (e.g., "JavaScript", "Photoshop").
 */
export interface Skill {
    /** Unique identifier */
    id : string;
    
    /** Name of the skill */
    name :string;
    
    /** Grouping (e.g., Frontend, Backend) */
    category : SkillCategory;
    
    /** How good you are at it (Beginner to Expert) */
    proficiency : SkillLevel;
    
    /** Optional path to an icon image or SVG string */
    icon? : string;
    
    /** Optional brief description of your experience with this skill */
    description? : string;
}

/**
 * Groups for categorizing your skills.
 */
export enum SkillCategory {
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  TOOLS = "Tools & Workflow",
  DESIGN = "Design",
  OTHER = "Other"
}

/**
 * standardized levels of proficiency.
 */
export enum SkillLevel {
  BEGINNER = "Beginner",
  INTERMEDIATE = "Intermediate",
  ADVANCED = "Advanced",
  EXPERT = "Expert"
}


/**
 * ============================================
 * BLOG POST INTERFACES
 * ============================================
 * Structure for a personal engineering blog.
 */

/**
 * Represents a blog article.
 */
export interface BlogPost {
  /** Unique identifier/slug for the URL */
  id: string;
  
  /** Title of the article */
  title: string;
  
  /** A short summary to show on the blog listing page */
  excerpt: string;
  
  /** The full text. This could be plain text or Markdown. */
  content: string;
  
  /** Uses the Author interface defined below */
  author: Author;
  
  /** Words for SEO and searching (e.g., ["react", "frontend"]) */
  tags: string[];
  
  /** The specific category of the blog post */
  category: BlogCategory;
  
  /** Date the post was first visible to the public */
  publishedAt: Date;
  
  /** Optional date for when the post was last modified */
  updatedAt?: Date;
  
  /** Estimated time to read the article in minutes */
  readTimeMinutes: number;
  
  /** Main banner image for the post */
  imageUrl?: string;
  
  /** If true, the post will be featured on the blog homepage */
  featured: boolean;
}

/**
 * Representation of the person who wrote the post.
 */
export interface Author {
  /** Full name */
  name: string;
  
  /** Link to a profile picture */
  avatar?: string;
  
  /** A 1-2 sentence description of the author */
  bio?: string;
}

/**
 * Types of content you write about.
 */
export enum BlogCategory {
  TUTORIAL = "Tutorial",
  OPINION = "Opinion",
  NEWS = "News",
  CAREER = "Career",
  PROJECT_SHOWCASE = "Project Showcase"
}


/**
 * ============================================
 * CONTACT FORM INTERFACES
 * ============================================
 * used to handle the state and validation of your contact form.
 */

/**
 * The raw data submitted by the user.
 */
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Used for storing error messages for each field.
 * If a field is valid, its value will be 'undefined' or an empty string.
 */
export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}


/**
 * ============================================
 * DASHBOARD STATS INTERFACES
 * ============================================
 */

/**
 * Metrics to show off on your profile or dashboard.
 */
export interface DashboardStats {
  totalProjects: number;
  yearsOfExperience: number;
  totalCommits: number;
  technologiesCount: number;
}


/**
 * ============================================
 * NAVIGATION INTERFACES
 * ============================================
 */

/**
 * Link object used to build Navbars or Footers dynamically.
 */
export interface NavLink {
  /** The text the user clicks on */
  label: string;
  
  /** The URL path (e.g., "/about") */
  path: string;
  
  /** Optional icon name for the link */
  icon?: string;
}


/**
 * ============================================
 * THEME INTERFACES (Dark Mode)
 * ============================================
 */

/**
 * Union type that only allows two specific strings.
 */
export type Theme = "light" | "dark";

/**
 * blueprint for the state shared by the whole app for switching themes.
 */
export interface ThemeContextType {
  /** Current active theme */
  theme: Theme;
  
  /** Function to switch between light and dark */
  toggleTheme: () => void;
}