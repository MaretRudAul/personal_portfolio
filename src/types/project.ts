export interface Project {
  title: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
  image?: string;
  year?: string; // Year(s) worked on or completed
  techStack?: string[]; // Array of technologies used
}