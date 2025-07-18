// Definición de tipos para los candidatos
export interface Video {
  title: string;
  url: string;
  thumbnail?: string;
  duration: string;
  category: string;
}

export interface VicePresident {
  name: string;
  image: string;
  bio: string;
  profession: string;
  age: number;
  birthYear: number;
}

export interface Education {
  university: string;
  degrees: string[];
  specializations: string[];
}

export interface TimelineEvent {
  year: string;
  description: string;
}

export interface Proposal {
  title: string;
  description: string;
  category: string;
}

export interface Achievement {
  title: string;
  description: string;
  year?: string;
}

export interface Controversy {
  title: string;
  description: string;
  year?: string;
}

export interface PartyInfo {
  id: string;
  name: string;
  logo: string;
  color: string;
  description: string;
  foundedYear: number;
  ideology: string[];
}

export interface SocialMedia {
  twitter?: string;
  facebook?: string;
  instagram?: string;
  website?: string;
}

export interface Candidate {
  id: string;
  name: string;
  image: string;
  party: string;
  partyShort: string;
  partyColor: string;
  age: number;
  birthDate: string;
  birthPlace: string;
  maritalStatus: string;
  children: number;
  education: Education;
  profession: string;
  region: string;
  role: string;
  bio: string;
  professionalExperience: string[];
  socialMedia: SocialMedia;
  videos?: Video[];
  vicepresident?: VicePresident;
  vicePresident?: VicePresident; // Para mantener compatibilidad con ambas formas
  timeline: TimelineEvent[];
  proposals: Proposal[];
  controversies: Controversy[];
  achievements: Achievement[];
  partyInfo: PartyInfo;
}
