export type ActiveTab = 'home' | 'courses' | 'about' | 'methodology' | 'stories' | 'diagnostic' | 'contact' | 'blueprint';

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  category: 'Spoken English' | 'Career & Interview' | 'Teens & Kids' | 'Weekend Fast-Track';
  level: 'Beginner to Intermediate' | 'Intermediate to Advanced' | 'All Proficiency Levels' | 'College to Corporate';
  duration: string;
  batchSize: string;
  timingOptions: string[];
  mode: 'In-Person (Saligramam)' | 'Hybrid (Classroom + Online)';
  description: string;
  whoItIsFor: string[];
  keyOutcomes: string[];
  syllabusWeeks: {
    week: string;
    focus: string;
    topics: string[];
  }[];
  feePlaceholder: string;
  recommendedFor: string;
}

export interface Testimonial {
  id: string;
  studentName: string;
  roleOrProfile: string;
  locality: string;
  courseCompleted: string;
  rating: number;
  initialChallenge: string;
  outcomeAfterCourse: string;
  quote: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Admissions & Batches' | 'Teaching Method' | 'Fees & Timings' | 'Language Anxiety';
}

export interface ConsultationBooking {
  fullName: string;
  phone: string;
  email: string;
  locality: string;
  preferredSlot: 'Morning (8:00 AM - 10:00 AM)' | 'Afternoon (2:00 PM - 5:00 PM)' | 'Evening (6:30 PM - 8:30 PM)' | 'Weekend Batch';
  primaryGoal: 'Everyday Fluency' | 'Job Interview Preparation' | 'Workplace Meetings & Emails' | 'Exam / Campus Placement' | 'Child / Teen Speech Confidence';
  currentChallengeNotes?: string;
  mode: 'Saligramam Classroom Visit' | '15-Min Phone Counselling';
}
