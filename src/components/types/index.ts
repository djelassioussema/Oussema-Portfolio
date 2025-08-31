export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  featured: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export type Section = 'home' | 'about' | 'experience' | 'projects' | 'case-studies' | 'contact';