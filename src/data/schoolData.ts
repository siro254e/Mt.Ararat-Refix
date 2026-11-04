import { GalleryItem, FacultyMember } from '../types';
import schoolBusImage from '../assets/images/regenerated_image_1793355637073.png';
import schoolVanImage from '../assets/images/regenerated_image_1793355638545.png';
import fellowshipLawnImage from '../assets/images/regenerated_image_1793355813219.png';
import classroomImage from '../assets/images/regenerated_image_1793726935129.png';
import creativeArtImage from '../assets/images/regenerated_image_1793773254289.png';
import aboutUsImage from '../assets/images/regenerated_image_1793726938222.jpg';
import culturalDanceImage from '../assets/images/regenerated_image_1793726939084.png';
import culturalChoirImage from '../assets/images/regenerated_image_1793726941692.png';
import classroomMathImage from '../assets/images/regenerated_image_1793772363953.png';
import outdoorGalleryImage from '../assets/images/regenerated_image_1793772735251.png';
import outdoorSchoolLifeImage from '../assets/images/regenerated_image_1793772739627.png';

export const SCHOOL_INFO = {
  name: "Mt. Ararat Shinners School",
  motto: "Excellence Is a Habit Not an Act, Shine Every Day.",
  eyebrow: "MT. ARARAT SHINNERS SCHOOL · ELDORET",
  headline: "Every Child Has a Light. We Help It Shine.",
  supportingText: "Discover a nurturing learning environment where curiosity grows, confidence flourishes, and every learner is encouraged to shine every day.",
  location: {
    estate: "Kapsoya Estate",
    town: "Eldoret, Kenya",
    landmark: "Next to Silas Police Station",
    fullAddress: "Kapsoya Estate, Eldoret, Kenya · Next to Silas Police Station",
    coordinates: "0.5230° N, 35.2910° E (Eldoret East / Kapsoya)"
  },
  contactPlaceholders: {
    phoneNotice: "0724 570 169 · 0743 901 978",
    phones: ["0724 570 169", "0743 901 978"],
    whatsapp: "0768 358 487",
    whatsappClean: "254768358487",
    whatsappLink: "https://wa.me/254768358487?text=Hello%20Mt.%20Ararat%20Shinners%20School%2C%20I%20would%20like%20to%20enquire%20about%20admissions.",
    email: "",
    officeHours: "Monday – Friday: 7:30 AM – 4:30 PM"
  }
};

export const IMAGES = {
  hero: "/images/hero_shinners_students_1791620642209.webp",
  aboutUs: aboutUsImage,
  classroom: classroomImage,
  outdoor: outdoorSchoolLifeImage,
  outdoorGallery: outdoorGalleryImage,
  creative: creativeArtImage,
  library: "/images/library_reading_1791620683626.webp",
  faculty: "/images/faculty_group_team_1791626994993.webp",
  facultyHead: "/images/faculty_headteacher_1791624460512.webp",
  facultyScience: "/images/faculty_sciences_1791624472577.webp",
  facultyEarlyYears: "/images/faculty_earlyyears_1791624484534.webp",
  facultyArts: "/images/faculty_arts_humanities_1791624496919.webp",
  schoolLifeFellowship: "/images/regenerated_image_1791634723672.webp",
  galleryFellowship: "/images/regenerated_image_1791900024221.webp",
  outdoorDiscovery: "/images/outdoor_discovery_1791620664001.webp",
  fellowshipLawn: fellowshipLawnImage,
  culturalDance: culturalDanceImage,
  culturalChoir: culturalChoirImage,
  classroomMath: classroomMathImage,
  schoolBus: schoolBusImage,
  schoolVan: schoolVanImage,
  studentsLawn: "/assets/aistudio/Smiling_Students_on_the_School_Lawn_777b614e.png"
};

export const PILLARS = [
  {
    number: "01",
    title: "Learning",
    tagline: "Cultivating genuine curiosity & academic rigor",
    description: "Every classroom session is designed to spark independent thinking, conceptual mastery, and the joy of continuous discovery."
  },
  {
    number: "02",
    title: "Potential",
    tagline: "Empowering every learner to shine every day",
    description: "Every child possesses distinct talents. We provide the mentorship, encouragement, and stage for their light to burn brightly."
  }
];

export const ACADEMIC_CARDS = [
  {
    title: "Learning and Discovery",
    description: "Structured enquiry that encourages learners to ask probing questions, test ideas, and develop deep foundational understanding across all disciplines.",
    image: IMAGES.classroom,
    tag: "Core Focus"
  },
  {
    title: "Creativity and Critical Thinking",
    description: "Expressive arts, practical problem-solving, and reflective analysis that empower children to innovate with imagination and confidence.",
    image: IMAGES.creative,
    tag: "Creative Arts"
  },
  {
    title: "Character and Responsibility",
    description: "Fostering discipline, community stewardship, and Christian-inspired values that prepare young minds to lead with integrity.",
    image: IMAGES.outdoor,
    tag: "Values & Ethos"
  },
  {
    title: "Collaboration and Communication",
    description: "Team projects, guided discussions, and public expression that train students to articulate their thoughts and support their peers.",
    image: IMAGES.library,
    tag: "Life Skills"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-uniform-lawn",
    title: "School Pride & Official Uniform Identity",
    category: "Discovery",
    image: "/assets/aistudio/Smiling_Students_on_the_School_Lawn_777b614e.png",
    alt: "Mt. Ararat Shinners School students smiling on the school lawn wearing official school uniforms and sports kit",
    caption: "Our learners proudly displaying our smart school uniform identity and sports kit on the serene Kapsoya campus lawn.",
    aspectRatio: "landscape"
  },
  {
    id: "gal-1",
    title: "Morning Fellowship & Radiant Learners",
    category: "Classroom",
    image: IMAGES.galleryFellowship,
    alt: "Mt. Ararat Shinners learners walking together in emerald green sweaters on school grounds",
    caption: "Learners beginning their day with bright smiles and confidence on the school grounds in Kapsoya.",
    aspectRatio: "landscape"
  },
  {
    id: "gal-2",
    title: "Interactive Mathematics & Equations Class",
    category: "Classroom",
    image: IMAGES.classroomMath,
    alt: "Teacher leading interactive mathematics lesson with pupils in green sweaters at Mt. Ararat Shinners School",
    caption: "Engaging classroom instruction emphasizing conceptual understanding, problem-solving, and disciplined academic focus.",
    aspectRatio: "landscape"
  },
  {
    id: "gal-3",
    title: "Hands-on Nature & Environmental Science",
    category: "Discovery",
    image: IMAGES.outdoorGallery,
    alt: "Learners exploring nature samples with magnifying glasses outdoors in Eldoret",
    caption: "Experiential outdoor science session discovering flora and local ecology.",
    aspectRatio: "landscape"
  },
  {
    id: "gal-4",
    title: "Mural Painting & Expressive Arts",
    category: "Arts",
    image: IMAGES.creative,
    alt: "Primary school students painting an expressive collective artwork table mural",
    caption: "Creative arts workshop celebrating community, nature, and color harmony.",
    aspectRatio: "landscape"
  },
  {
    id: "gal-5",
    title: "Annual Cultural Music & Folk Dance Festival",
    category: "Arts",
    image: IMAGES.culturalDance,
    alt: "Mt. Ararat Shinners School pupils in traditional regalia playing African drums at the cultural festival",
    caption: "Learners celebrating national heritage with traditional drums, vocal songs, and folk dances under the banner 'Unity in Diversity'.",
    aspectRatio: "landscape"
  },
  {
    id: "gal-6",
    title: "National Music & Drama Choir Ensemble",
    category: "Arts",
    image: IMAGES.culturalChoir,
    alt: "Mt. Ararat Shinners choir performing in matching traditional stage attire with shakers and drums",
    caption: "School choir and percussion ensemble performing at the music and drama festival.",
    aspectRatio: "landscape"
  }
];

export const GRADE_LEVELS = [
  "Playgroup / Daycare",
  "Pre-Primary 1 (PP1)",
  "Pre-Primary 2 (PP2)",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Junior School Enquiry",
  "General Admission Enquiry"
];

export const ADMISSION_REQUIREMENTS = [
  "Copy of the learner's birth certificate",
  "Previous academic report",
  "Assessment number",
  "KEMIS number",
  "Parent or guardian contact details"
];

export const UNIFORM_GUIDE = {
  supplier: "Saiyat School Uniform Supplies (Kapsovya)",
  levels: [
    {
      id: "primary",
      name: "Primary School",
      tagline: "Checked green everyday wear",
      boys: [
        "Checked green shirt, medium boxes",
        "Dark green shorts or trousers",
        "Dark green sweater with two white stripes",
        "Grey striped socks — dark green and white",
        "Black shoes",
        "Fleece or jumper — dark green with school logo"
      ],
      girls: [
        "Checked green dress with red stripes, medium boxes",
        "Dark green sweater with two white stripes",
        "Grey striped socks — dark green and white",
        "Fleece or jumper — dark green or black",
        "Black shoes"
      ]
    },
    {
      id: "junior",
      name: "Junior School",
      tagline: "Formal dark green and white",
      boys: [
        "Dark green trousers",
        "White shirt with school logo",
        "Dark green sweater and windbreaker with logo",
        "Dark green blazer",
        "Grey socks with two green and white stripes",
        "Black leather shoes",
        "Maroon track suit with white stripes",
        "T-blue cotton T-shirt",
        "White or black sport shoes",
        "Tie — dark green with white stripes"
      ],
      girls: [
        "Dark green pleated skirt with two or three front pleats (black option available)",
        "White shirt with school logo",
        "Dark green sweater and windbreaker with logo",
        "Dark green blazer",
        "Grey socks with two green and white stripes",
        "Black leather shoes"
      ]
    }
  ],
  pe: [
    "Sport shoes or rubber shoes",
    "Red T-shirts for boys",
    "Yellow T-shirts for girls",
    "Navy blue games shorts",
    "Track suit for boys and girls — dark green with white stripes"
  ]
};

export const TRANSPORT_INFO = {
  title: "School Transport: Buses & Vans",
  summary:
    "Our school buses and vans serve learners across Eldoret and the surrounding estates, with supervised pick-up and drop-off built into the school-day routine.",
  points: [
    "Dedicated school buses and vans",
    "Supervised boarding and drop-off",
    "Daily service on school days",
    "Routes and term charges confirmed by the school office"
  ]
};

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: "fac-rachel",
    name: "Madam Rachel C. Kipkemboi",
    role: "Head of School & Director of Academics",
    department: "Executive Administration & CBC Leadership",
    credentials: [
      "B.Ed (Honours) — Moi University",
      "M.Ed in Educational Management — Catholic University of Eastern Africa (CUEA)",
      "Certified Competency-Based Curriculum (CBC) Lead Trainer"
    ],
    experience: "16+ Years in Primary & Early Childhood Leadership",
    image: IMAGES.facultyHead,
    quote: "Every learner carries a unique divine light. At Mt. Ararat Shinners, our calling is to cultivate that potential into unshakeable confidence, intellect, and moral purpose.",
    bio: "Madam Rachel brings over 16 years of distinguished educational leadership in Eldoret and the wider Uasin Gishu region. A pioneer of student-centred learning, she oversees institutional pedagogy, faculty mentorship, and parent partnerships. Her vision ensures that every learner at Mt. Ararat Shinners School receives individualized academic guidance rooted in Christian values and disciplined excellence.",
    specialties: [
      "CBC Instructional Leadership",
      "Teacher Professional Development",
      "Child Mentorship & Pastoral Care",
      "Institutional Quality Assurance"
    ],
    emailPlaceholder: "headofschool@shinners.ac.ke"
  },
  {
    id: "fac-brian",
    name: "Mwalimu Brian K. Tarus",
    role: "Head of Mathematics, Science & ICT",
    department: "Upper Primary & STEM Department",
    credentials: [
      "B.Ed Science (Mathematics & Physics) — Kenyatta University",
      "CEMASTEA Certified Primary Science Innovator",
      "Robotics & Elementary Coding Facilitator"
    ],
    experience: "10+ Years in Mathematics & Practical Science",
    image: IMAGES.facultyScience,
    quote: "Science and mathematics are not about dry formulas; they are tools that train a young mind to observe, question, experiment, and solve real community challenges.",
    bio: "Mwalimu Brian spearheads the STEM curriculum for Upper Primary learners (Grades 4 through 6). Known for his engaging, inquiry-driven teaching methods, he connects mathematical concepts to everyday life in Kenya. Under his guidance, learners build hands-on problem-solving skills, conduct laboratory experiments, and master practical digital literacy.",
    specialties: [
      "Practical Science & Lab Inquiry",
      "Conceptual Mathematics",
      "Environmental Ecology",
      "Digital Literacy & STEM Foundations"
    ],
    emailPlaceholder: "stem@shinners.ac.ke"
  },
  {
    id: "fac-sarah",
    name: "Teacher Sarah Musyoka",
    role: "Lead Early Years Educator & PP2 Coordinator",
    department: "Early Childhood Development (Playgroup, PP1 & PP2)",
    credentials: [
      "Diploma in ECDE — Kenya Institute of Special Education (KISE)",
      "Certificate in Synthetic Jolly Phonics & Sensorial Play Therapy",
      "Montessori Foundational Methods Certified"
    ],
    experience: "8+ Years in Early Childhood & Phonics Foundation",
    image: IMAGES.facultyEarlyYears,
    quote: "When a child feels celebrated, safe, and heard in their formative years, their natural curiosity becomes an unstoppable engine for lifelong achievement.",
    bio: "Teacher Sarah coordinates the Kindergarten and Early Years wing with boundless warmth, empathy, and creativity. Specialising in foundational phonetic literacy, fine motor development, and emotional intelligence, she crafts cheerful play-corners where young children learn to express themselves, collaborate, and discover the wonder of reading.",
    specialties: [
      "Synthetic Phonics & Early Reading",
      "Sensorial Learning & Play Therapy",
      "Social-Emotional Development",
      "Foundational Numeracy"
    ],
    emailPlaceholder: "earlyyears@shinners.ac.ke"
  },
  {
    id: "fac-emmanuel",
    name: "Mwalimu Emmanuel Barasa",
    role: "Lead Languages, Social Studies & Co-Curricular Director",
    department: "Humanities & Student Life",
    credentials: [
      "B.Ed Arts (English & Literature / Kiswahili) — University of Nairobi",
      "KICD Certified Drama & Public Speaking Coach",
      "Kenya Scouts Association Warrant Officer"
    ],
    experience: "11+ Years in Language Arts, Public Speaking & Scouting",
    image: IMAGES.facultyArts,
    quote: "Eloquence and integrity go hand in hand. We empower our learners to speak with clarity, write with imagination, and stand tall with dignified character.",
    bio: "Mwalimu Barasa directs language education and co-curricular pursuits across Mt. Ararat Shinners School. He coordinates the debate forum, journalism society, choral verse choir, and scouting troop. His passion for African literature, Kiswahili Sanifu, and creative expression helps learners gain poise, public speaking capability, and cultural pride.",
    specialties: [
      "English & Kiswahili Sanifu Fluency",
      "Debate & Public Presentation",
      "Choral Music & Creative Arts",
      "Scouting & Leadership Development"
    ],
    emailPlaceholder: "humanities@shinners.ac.ke"
  }
];
