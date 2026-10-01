import { Course, Testimonial, FAQItem } from '../types';

export const ACADEMY_INFO = {
  name: 'Words and Wisdom',
  tagline: 'Practical Spoken English & Communicative Confidence',
  subheading: 'Small-group interactive training designed for real conversations, workplace respect, and fear-free English speaking.',
  location: {
    address: 'No. [Door Number Placeholder], Dasarathapuram Main Road, Saligramam, Chennai – 600093',
    landmark: 'Near [Local Landmark / Prasad Film Labs vicinity], walking distance from Saligramam Bus Terminus & Vadapalani Metro',
    city: 'Chennai, Tamil Nadu, India',
    phone: '+91 9840X XXXXX',
    whatsapp: '+91 9840X XXXXX',
    email: 'contact@[wordsandwisdom-placeholder].com',
    hours: 'Monday – Saturday: 7:30 AM – 8:30 PM | Sunday: 9:00 AM – 1:30 PM',
  },
  established: '[Founding Year Placeholder, e.g., 2018]',
  batchLimit: '8 to 10 learners per batch (Strictly enforced for maximum individual speaking time)',
  talkTimeRatio: '70% Active Student Speech / 30% Guided Trainer Feedback',
};

export const COURSES: Course[] = [
  {
    id: 'foundation-spoken-english',
    title: 'Foundation Spoken English & Grammar in Context',
    subtitle: 'Overcome hesitation, stop translating from Tamil in your head, and construct correct sentences naturally.',
    category: 'Spoken English',
    level: 'Beginner to Intermediate',
    duration: '8 Weeks (40 Hours Classroom Practice)',
    batchSize: 'Max 8 students',
    timingOptions: [
      'Morning: 7:30 AM – 8:30 AM',
      'Morning: 10:30 AM – 11:30 AM',
      'Evening: 6:00 PM – 7:00 PM'
    ],
    mode: 'In-Person (Saligramam)',
    description: 'A non-judgmental, step-by-step program tailored for learners who understand basic English when reading or listening, but feel blocked, nervous, or tongue-tied when having to speak spontaneously.',
    whoItIsFor: [
      'Adults who think in Tamil/mother tongue and struggle with rapid sentence translation',
      'Homemakers wishing to speak fluently during school interactions, banking, and social events',
      'College students feeling anxious about asking questions in seminars or classroom presentations',
      'Working professionals tired of hesitating before simple status updates'
    ],
    keyOutcomes: [
      'Eliminate translation paralysis through repetitive conversational pattern drills',
      'Master essential tenses (Past, Present Continuous, Future) without memorizing textbook tables',
      'Acquire 400+ high-frequency everyday idioms, connectors, and conversation starters',
      'Speak for 3 full minutes on spontaneous topics without trembling or losing train of thought'
    ],
    syllabusWeeks: [
      {
        week: 'Weeks 1–2',
        focus: 'Sentence Flow & Everyday Situational Dialogues',
        topics: [
          'Deconstructing the Tamil-to-English translation loop',
          'Self-introductions with warmth and clarity',
          'Navigating daily encounters: Retail, banking, restaurant ordering, medical enquiries'
        ]
      },
      {
        week: 'Weeks 3–4',
        focus: 'Practical Grammar Without Jargon',
        topics: [
          'Using tenses accurately in real stories (What happened yesterday vs what is happening today)',
          'Prepositions and conjunctions (in, on, at, although, therefore) made intuitive',
          'Forming questions with confidence: Who, Why, How long, Could you please...'
        ]
      },
      {
        week: 'Weeks 5–6',
        focus: 'Pronunciation, Word Clarity & Listening Agility',
        topics: [
          'Vowel clarity and syllable stress to reduce native language interference (MTI)',
          'Active listening drills and responding smoothly without pausing awkward seconds',
          'Telephone etiquette and conversational politeness markers'
        ]
      },
      {
        week: 'Weeks 7–8',
        focus: 'Spontaneous Speaking & Confidence Culmination',
        topics: [
          'Extempore speaking drills with positive feedback notes',
          'Expressing opinions, polite disagreement, and personal stories',
          'Final 5-minute recorded speaking benchmark with progress audit'
        ]
      }
    ],
    feePlaceholder: '₹[Fee Placeholder, e.g., ₹5,500 – ₹7,500] (Includes workbook & audio drills)',
    recommendedFor: 'Anyone wanting a secure foundation before advanced professional communication.'
  },
  {
    id: 'workplace-corporate-communication',
    title: 'Professional Workplace Communication & Fluency',
    subtitle: 'Participate actively in client scrums, write crisp emails, and present ideas with poise and authority.',
    category: 'Career & Interview',
    level: 'Intermediate to Advanced',
    duration: '6 Weeks (30 Hours + Scenario Simulations)',
    batchSize: 'Max 10 professionals',
    timingOptions: [
      'Early Bird: 7:00 AM – 8:00 AM',
      'Post-Work: 7:30 PM – 8:30 PM',
      'Weekend Intensive: Sat & Sun 10:00 AM – 1:00 PM'
    ],
    mode: 'Hybrid (Classroom + Online)',
    description: 'Specifically engineered for IT engineers, team leads, banking executives, and corporate professionals in Chennai who have domain expertise but lose career advancement due to hesitant English or weak meeting presence.',
    whoItIsFor: [
      'Software engineers and tech analysts who avoid speaking on client video calls with US/UK stakeholders',
      'Mid-level managers who need to lead team syncs and explain complex project delays politely',
      'Professionals moving from regional offices into multinational setups (DLF, Olympia Tech Park, TIDEL)'
    ],
    keyOutcomes: [
      'Interject politely and contribute smoothly during high-stakes conference calls',
      'Draft concise, diplomatic corporate emails without sounding harsh or unpolished',
      'Present slides with clear signposting language ("Turning to slide four...", "To summarize the core impact...")',
      'Master professional small talk before meetings start to build rapport effortlessly'
    ],
    syllabusWeeks: [
      {
        week: 'Weeks 1–2',
        focus: 'Meeting Fluency & Contribution Frameworks',
        topics: [
          'Opening, interjecting, and disagreeing diplomatically in meetings',
          'Signposting vocabulary for sprint reviews and project demos',
          'Handling tough questions when you do not know the immediate answer'
        ]
      },
      {
        week: 'Weeks 3–4',
        focus: 'Business Emailing & Executive Writing',
        topics: [
          'The 3-paragraph email framework: Context, Ask, Next Steps',
          'Tone calibration: Avoiding blunt or passive-aggressive phrasing',
          'Writing escalation notes, client summaries, and meeting minutes'
        ]
      },
      {
        week: 'Weeks 5–6',
        focus: 'Presentations & Executive Presence',
        topics: [
          'Structuring a 5-minute pitch or status update with logical hooks',
          'Voice modulation, eye contact calibration, and eliminating vocal fillers (umm, like, you know)',
          'Simulated client presentation with video feedback review'
        ]
      }
    ],
    feePlaceholder: '₹[Fee Placeholder, e.g., ₹7,000 – ₹9,500] (Includes corporate case study toolkit)',
    recommendedFor: 'IT employees, project managers, and finance professionals in Chennai tech corridors.'
  },
  {
    id: 'interview-skills-group-discussion',
    title: 'Job Interview Mastery & Group Discussion (GD) Accelerator',
    subtitle: 'Crush the dreaded "Tell me about yourself", tackle behavioural questions, and stand out in campus or lateral interviews.',
    category: 'Career & Interview',
    level: 'College to Corporate',
    duration: '4 Weeks Fast-Track (24 Hours Intensive)',
    batchSize: 'Max 8 candidates',
    timingOptions: [
      'Evening: 5:30 PM – 7:00 PM',
      'Weekend Fast-Track: Sat & Sun 2:00 PM – 5:00 PM'
    ],
    mode: 'In-Person (Saligramam)',
    description: 'An action-oriented bootcamp for fresh engineering graduates, MBA aspirants, and lateral job seekers who need quick, measurable interview readiness with mock interview panels and structured GD drills.',
    whoItIsFor: [
      'Freshers preparing for upcoming campus recruitment (TCS, Cognizant, Infosys, Zoho, Accenture)',
      'Experienced professionals preparing for managerial rounds or MNC role shifts',
      'Candidates who freeze when asked situational or HR behavioural questions'
    ],
    keyOutcomes: [
      'Craft a captivating, 90-second "Elevator Pitch / Self-Introduction" tailored to your domain',
      'Use the STAR Method (Situation, Task, Action, Result) to answer behavioural curveballs convincingly',
      'Lead and summarize Group Discussions without shouting or getting overshadowed',
      'Overcome physiological interview anxiety with proven breath and speech anchoring techniques'
    ],
    syllabusWeeks: [
      {
        week: 'Week 1',
        focus: 'Self-Introduction & Core Narrative',
        topics: [
          'Deconstructing "Tell me about yourself" into a memorable story',
          'Translating academic projects and technical work into clear business value',
          'Body language, handshake etiquette, and video interview camera presence'
        ]
      },
      {
        week: 'Week 2',
        focus: 'The STAR Method & Tough HR Questions',
        topics: [
          'Handling "Why should we hire you?" and "What is your greatest weakness?" with authentic poise',
          'Narrating conflict resolution and deadline pressure examples',
          'Asking insightful questions to the interview panel at the close'
        ]
      },
      {
        week: 'Week 3',
        focus: 'Group Discussion Strategy & Moderation',
        topics: [
          'Entering a heated GD within the first 60 seconds with substance',
          'Rephrasing, building on other candidates\' points, and diplomatic counter-arguments',
          'Synthesizing multiple viewpoints for an impactful GD conclusion'
        ]
      },
      {
        week: 'Week 4',
        focus: 'Live 1-on-1 Mock Panels & Performance Audit',
        topics: [
          'Two full-length simulated mock interviews with detailed scorecards',
          'Granular feedback on tone, pause management, and vocabulary richness',
          'Final personalized action plan before your scheduled interviews'
        ]
      }
    ],
    feePlaceholder: '₹[Fee Placeholder, e.g., ₹4,500 – ₹6,000] (Includes 2 video-recorded mock interviews)',
    recommendedFor: 'College final-years, fresh graduates, and active job applicants.'
  },
  {
    id: 'public-speaking-personality-teens',
    title: 'Young Communicators: Public Speaking & Speech Confidence (Ages 11–17)',
    subtitle: 'Help school students shed stage fear, build articulate vocabulary, and speak with natural expression.',
    category: 'Teens & Kids',
    level: 'All Proficiency Levels',
    duration: '8 Weeks (Weekend Batches)',
    batchSize: 'Max 8 students',
    timingOptions: [
      'Saturday: 4:00 PM – 6:00 PM',
      'Sunday: 10:00 AM – 12:00 PM'
    ],
    mode: 'In-Person (Saligramam)',
    description: 'Designed to nurture young minds into confident orators. Away from mechanical memorization, students learn storytelling, debating, elocution, and daily verbal expression in a joyful, encouraging space.',
    whoItIsFor: [
      'School students who hesitate to raise their hands or speak on stage during school assemblies',
      'Children preparing for inter-school debates, Model UN (MUN), or declamation contests',
      'Teens who feel awkward speaking in social or family gatherings'
    ],
    keyOutcomes: [
      'Overcome podium anxiety through regular 2-minute podium drills in every class',
      'Expand reading habits and expressive vocabulary beyond screen slang',
      'Structure short speeches with a catchy opening, memorable body, and powerful conclusion',
      'Develop respectful debate skills: listening patiently and countering logically'
    ],
    syllabusWeeks: [
      {
        week: 'Weeks 1–2',
        focus: 'Breaking the Shyness Barrier & Voice Warmups',
        topics: ['Vocal exercises', 'Story circle: sharing personal anecdotes', 'Body posture and smile']
      },
      {
        week: 'Weeks 3–4',
        focus: 'Vocabulary Expansion & Expressive Reading',
        topics: ['Word association games', 'Expressive read-aloud techniques', 'Eliminating "like" and "uh"']
      },
      {
        week: 'Weeks 5–6',
        focus: 'Structured Speeches & Storytelling',
        topics: ['Speech building blocks: Hook, Story, Moral/Takeaway', 'Using descriptive adjectives']
      },
      {
        week: 'Weeks 7–8',
        focus: 'Debate, Elocution Showcase & Graduation',
        topics: ['Friendly debate circle', 'Parent-attended final speech presentation showcase']
      }
    ],
    feePlaceholder: '₹[Fee Placeholder, e.g., ₹4,800 – ₹6,500] (Includes course handbook & certificate)',
    recommendedFor: 'Middle and high school students in Saligramam, Vadapalani, and Virugambakkam schools.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    studentName: 'Karthik R.',
    roleOrProfile: 'Junior Systems Engineer, Chennai IT Corridor',
    locality: 'Resident of Saligramam',
    courseCompleted: 'Professional Workplace Communication',
    rating: 5,
    initialChallenge: 'Struggled to speak during daily sprint standups. Would type answers in chat instead of speaking because of fear of grammatical mistakes.',
    outcomeAfterCourse: 'Now leads weekly client demo calls for a European retail client without pre-writing every sentence.',
    quote: 'At Words and Wisdom, they never judged my mistakes. In regular colleges, people laugh if you use the wrong preposition. Here, our mentor corrected us gently right after role-plays. Within four weeks, that heavy hesitation in my throat disappeared.',
    date: 'Enrolled January 2026'
  },
  {
    id: 'test-2',
    studentName: 'Meenakshi Sundaram',
    roleOrProfile: 'Homemaker & Aspiring Boutique Entrepreneur',
    locality: 'Resident of Vadapalani (Near Vadapalani Temple)',
    courseCompleted: 'Foundation Spoken English & Grammar in Context',
    rating: 5,
    initialChallenge: 'Felt self-conscious attending Parent-Teacher Meetings (PTMs) at her daughter\'s CBSE school and conversing with fabric vendors.',
    outcomeAfterCourse: 'Confidently speaks with school principals, conducts business calls with suppliers, and speaks English at home with her children.',
    quote: 'I had been wanting to learn spoken English for ten years, but felt too old to sit in a coaching centre. The small batch of 6 homemakers and professionals made me feel at home. Saligramam centre is just 10 minutes from my home. The course changed my self-belief completely.',
    date: 'Enrolled November 2025'
  },
  {
    id: 'test-3',
    studentName: 'Vigneshwaran P.',
    roleOrProfile: 'B.E. Mechanical Graduate (2025 Batch)',
    locality: 'Virugambakkam',
    courseCompleted: 'Job Interview Mastery & GD Accelerator',
    rating: 5,
    initialChallenge: 'Cleared technical test rounds easily, but was rejected in two HR interview rounds due to slow sentence framing and lack of eye contact.',
    outcomeAfterCourse: 'Cracked campus placement as Quality Engineer at a multinational auto-ancillary firm with ₹4.8 LPA package.',
    quote: 'The mock interviews recorded on camera were an eye-opener. I saw how fast I was fidgeting and speaking in incomplete fragments. The trainer helped me structure my project explanation with the STAR formula. When the real HR asked the same questions, I spoke smoothly without panic.',
    date: 'Enrolled February 2026'
  },
  {
    id: 'test-4',
    studentName: 'Divya Bharathi',
    roleOrProfile: 'BPO Customer Support Specialist transitioning to Team Lead',
    locality: 'K.K. Nagar',
    courseCompleted: 'Workplace Fluency & Pronunciation Refinement',
    rating: 5,
    initialChallenge: 'Had spoken English fluency, but suffered from strong regional accent interference and blunt email writing habits.',
    outcomeAfterCourse: 'Promoted to Quality Analyst & Assistant Team Lead handling international escalations.',
    quote: 'Words and Wisdom does not give you fake American accents. They teach neutral, clear, articulate Indian English that global clients understand immediately. The email etiquette sessions alone were worth every rupee.',
    date: 'Enrolled December 2025'
  }
];

export const METHODOLOGY_PILLARS = [
  {
    number: '01',
    title: 'Breaking the Native Language Translation Loop',
    description: 'Most learners in Chennai think in Tamil, translate word-by-word into English, and freeze when tenses don’t match. Our proprietary cognitive drills rewire this process so you respond instinctively.',
    practiceRatio: 'Cognitive Framing Drills'
  },
  {
    number: '02',
    title: '70% Active Student Talk Time (Zero Passive Lectures)',
    description: 'You cannot learn swimming by reading a textbook, and you cannot master spoken English by listening to a teacher talk for 60 minutes. Every student speaks in every single session.',
    practiceRatio: '70% Student Talk / 30% Mentor Guide'
  },
  {
    number: '03',
    title: 'Psychological Safety & Gentle Real-Time Calibration',
    description: 'Fear of being mocked is the #1 barrier to English fluency in India. We cultivate a warm, supportive circle where mistakes are celebrated as stepping stones, with constructive, private trainer notes.',
    practiceRatio: 'Zero-Judgment Environment'
  },
  {
    number: '04',
    title: 'Contextual Grammar Over Rote Memorization',
    description: 'Forget memorizing definitions of auxiliary verbs or past participles. We teach functional grammar embedded inside real-world scenarios: ordering food, resolving a conflict, or negotiating a deadline.',
    practiceRatio: 'Real-Life Scenario Simulations'
  }
];

export const COMPARISON_POINTS = [
  {
    feature: 'Class Batch Size',
    traditional: '30 to 50 students crammed into lecture desks',
    wordsAndWisdom: 'Strictly 8 to 10 students per batch'
  },
  {
    feature: 'Speaking Opportunity',
    traditional: 'Under 2 minutes per student per day (mostly teacher monologues)',
    wordsAndWisdom: 'Minimum 20–25 minutes of active speaking practice every day'
  },
  {
    feature: 'Grammar Approach',
    traditional: 'Heavy textbook worksheets, fill-in-the-blanks, written rule exams',
    wordsAndWisdom: 'Scenario-based conversational drills without tedious jargon'
  },
  {
    feature: 'Feedback Mechanism',
    traditional: 'Rarely personalized; corrections made in front of large crowds',
    wordsAndWisdom: 'Individual pronunciation & vocabulary scorecard after each module'
  },
  {
    feature: 'Real-World Preparation',
    traditional: 'Generic essays and outdated British textbook passages',
    wordsAndWisdom: 'Zoom/Teams meeting simulations, mock interviews, and PTM roleplays'
  }
];

export const TRAINER_CREDENTIALS = {
  headTrainer: {
    name: '[Lead Trainer Name Placeholder, e.g., Mrs. Radhika V. / Mr. S. Ramanathan]',
    title: 'Founder & Chief Communication Coach',
    credentials: 'M.A. English Literature, Certified TESOL/CELTA Trainer, 14+ Years in Language Coaching',
    background: 'Former corporate communications mentor who has trained over 3,200+ engineering graduates, working IT professionals, and homemakers across Chennai. Renowned for a warm, patient, and highly practical teaching methodology.',
    quote: 'Fluent English is not about sounding like a foreigner or using complicated words. It is simply having the confidence to express your true intellect without fear holding you back.'
  },
  academyValues: [
    'Strict adherence to small batches — no overcrowding',
    'Neutral, globally respected Indian English pronunciation (no artificial accents)',
    'Practical homework tasks: voice notes and speaking journals instead of written sheets',
    'Open-door mentoring: free doubt-clearing sessions even after course completion'
  ]
};

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Teaching Method',
    question: 'I understand English well when others speak, but I freeze when I try to reply. Will this course help me?',
    answer: 'Yes! This is the most common challenge faced by over 80% of our learners in Chennai. The issue is not your vocabulary; it is "active speech recall" and fear of grammar errors. Our entire 8-week curriculum is built around unfreezing this reflex through structured daily conversation prompts, so your mind learns to output words without overthinking.'
  },
  {
    id: 'faq-2',
    category: 'Language Anxiety',
    question: 'I studied in a Tamil medium school. Will I feel left out or embarrassed among English medium students?',
    answer: 'Absolutely not. Words and Wisdom is built specifically on a foundation of empathy and kindness. Our trainers are bilingual and understand the specific structural differences between Tamil sentence patterns (SOV) and English patterns (SVO). We explain foundational concepts with bilingual clarity when necessary, ensuring you never feel lost.'
  },
  {
    id: 'faq-3',
    category: 'Admissions & Batches',
    question: 'How many students are there in one batch?',
    answer: 'We strictly cap our batches at 8 to 10 students. Unlike commercial coaching factories with 40 students where you barely get 60 seconds to speak, our small groups ensure every learner gets dedicated speaking turns and personal attention from the mentor in every class.'
  },
  {
    id: 'faq-4',
    category: 'Fees & Timings',
    question: 'What are the batch timings? Can working professionals and college students attend?',
    answer: 'We offer flexible shifts to suit working professionals and college goers: Early Morning (7:30 AM – 8:30 AM), Late Morning (10:30 AM – 11:30 AM), Evening (6:00 PM – 7:00 PM / 7:30 PM – 8:30 PM), and Weekend-Only Intensive Batches (Saturday & Sunday). You can switch timings with prior notice if your shift changes.'
  },
  {
    id: 'faq-5',
    category: 'Fees & Timings',
    question: 'Can I attend a demo class before paying the fees?',
    answer: 'Yes! We encourage every prospective learner to book a free 30-minute level counselling session and classroom tour at our Saligramam centre. You will meet the trainer, receive an honest assessment of your current speaking level, and see a live classroom before making any financial commitment.'
  },
  {
    id: 'faq-6',
    category: 'Admissions & Batches',
    question: 'Do you offer online classes if I cannot travel to Saligramam every day?',
    answer: 'Yes. While we strongly recommend in-person training at our Saligramam academy for maximum communicative energy, we offer interactive live online batches via Google Meet for students living in other parts of Chennai or working remote shifts.'
  }
];

export const LOCATION_DETAILS = {
  address: 'No. [Door Number Placeholder], Dasarathapuram Main Road, Saligramam, Chennai – 600093',
  nearbyLandmarks: [
    '5 minutes from Saligramam Bus Stand (Routes: 17D, 25G, 37G, 12G)',
    '7 minutes from Vadapalani Metro Station & Forum Vijaya Mall',
    '3 minutes from Prasad Studios & AVM Studio vicinity',
    'Easily accessible from Virugambakkam, K.K. Nagar, and Koyambedu'
  ],
  parking: 'Two-wheeler parking available inside the academy premises; easy car parking on the adjacent street.',
  visitTimings: 'Walk-in Counselling: Monday to Saturday from 9:00 AM to 7:00 PM (Prior appointment recommended).'
};
