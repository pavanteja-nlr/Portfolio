/** Update links and labels before deploying */
export const SITE = {
  name: "Swarna Pavan Teja Reddy",
  title: "Aspiring Data Analyst",
  tagline:
    "I analyze data, build ML models, and turn raw numbers into insights people can act on.",
  email: "mailto:pavantejareddy2005@gmail.com",
  emailLabel: "pavantejareddy2005@gmail.com",
  linkedin: "https://www.linkedin.com/in/pavan-teja-reddy-06102005n",
  linkedinLabel: "LinkedIn profile",
  github: "https://github.com/pavanteja-nlr",
  githubLabel: "github.com/pavanteja-nlr",
  /** Served from public/ — use a leading slash */
  resumePath: "/resume.pdf",
  /** Filename when downloaded */
  resumeFileName: "Swarna_Pavan_Teja_Reddy_Resume.pdf",
  /** File in public/ folder — must match the real filename */
  profilePhoto: "/pavan.png",
  openToInternships: true,
};

export const ABOUT = {
  paragraphs: [
    "I'm an AI & ML student in my third year (B.Tech), with a CGPA of 8.07. I care about turning messy data into clear stories and useful models—not just ticking boxes on a syllabus.",
    "I'm passionate about data analysis and machine learning. I've built a real-time ML project end to end: from preprocessing and exploration to training and live prediction.",
  ],
};

/** icon keys map to logos in Skills.jsx */
export const SKILLS = [
  { name: "Python", icon: "python" },
  { name: "Pandas", icon: "pandas" },
  { name: "NumPy", icon: "numpy" },
  { name: "Matplotlib", icon: "matplotlib" },
  { name: "Power BI", icon: "powerbi" },
  { name: "Machine Learning", icon: "scikitlearn" },
  { name: "Data cleaning", icon: "cleaning" },
  { name: "Statistics", icon: "statistics" },
];

export const PROJECTS = [
  {
    id: "sign-language",
    title: "Real-Time Sign Language Recognition",
    problem:
      "Communicate in sign language in real time by recognizing hand gestures from a webcam feed—bridging accessibility gaps with practical ML.",
    stack: ["Python", "MediaPipe", "ML"],
    contributions: [
      "Data preprocessing: hand landmarks with MediaPipe Hands",
      "EDA on keypoint features to understand class separability",
      "Model training and evaluation for gesture classification",
      "Real-time prediction pipeline for live inference",
    ],
    github: "https://github.com/pavanteja-nlr/Real-Time-Sign-Language-Recognition-and-Speech-Conversion-Using-Deep-Learning-and-Computer-Vision",
    image: "/sign.png",
    featured: true,
  },
];
