export interface AdmissionEnquiry {
  id: string;
  parentName: string;
  phoneNumber: string;
  email?: string;
  learnerName?: string;
  gradeLevel: string;
  preferredContact: 'phone' | 'email' | 'whatsapp' | 'in-person';
  additionalEnquiry?: string;
  submittedAt: string;
  status: 'Pending Review' | 'Contacted';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Classroom' | 'Discovery' | 'Arts' | 'Library';
  image: string;
  alt: string;
  caption: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  department: string;
  credentials: string[];
  experience: string;
  image: string;
  quote: string;
  bio: string;
  specialties: string[];
  emailPlaceholder?: string;
}
