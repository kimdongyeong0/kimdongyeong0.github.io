export type SectionId = "about" | "research" | "publications" | "news" | "interests" | "education" | "contact";

export type NavItem = {
  id: SectionId;
  label: string;
};

export type SocialLink = {
  label: string;
  url: string | null;
};

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "news", label: "News" },
  { id: "interests", label: "Interests" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const siteMetadata = {
  title: "Dongyeong Kim",
  description:
    "Dongyeong Kim is a Computer Science student at Stony Brook University and an undergraduate researcher interested in neuromorphic computing, spiking neural networks, and energy-efficient AI.",
};

export const profile = {
  name: "Dongyeong Kim",
  email: "kilo.dong0@gmail.com",
  headline: "B.S. Computer Science Student at Stony Brook University and Undergraduate AI Researcher",
  homeRoles: [
    "B.S. Computer Science Student at Stony Brook University",
    "Undergraduate AI Researcher in Neuromorphic Computing and Efficient AI",
  ],
  shortSummary:
    "Dongyeong Kim is a B.S. Computer Science student at Stony Brook University through SUNY Korea and an undergraduate AI researcher. His research interests include neuromorphic computing, spiking neural networks, energy-efficient deep learning, computer vision, and object detection. He is particularly interested in developing efficient learning systems that connect advances in modern deep learning with biologically inspired and neuromorphic hardware.",
  homeIntro:
    "I am an undergraduate researcher interested in building efficient and intelligent learning systems. My current work explores spiking neural networks, neuromorphic computing, and energy-efficient object detection, with an emphasis on connecting algorithmic innovation to practical hardware-aware deployment.",
  researchKeywords: [
    "Neuromorphic Computing",
    "Spiking Neural Networks",
    "Energy-Efficient AI",
    "Computer Vision",
    "Object Detection",
    "Deep Learning",
    "Machine Learning",
    "Loihi 2",
    "Sigma-Delta Neural Networks",
    "Brain-Inspired Computing",
  ],
  cvPdfUrl: null as string | null,
  headshotUrl: "images/profile.jpeg",
};

export const researchFocusPreview = [
  {
    title: "Spiking Neural Networks",
    description: "Learning algorithms and architectures for temporally sparse, event-driven computation.",
  },
  {
    title: "Neuromorphic AI",
    description: "Efficient inference and deployment on brain-inspired computing hardware, including Loihi 2.",
  },
  {
    title: "Efficient Computer Vision",
    description: "Object detection models that balance accuracy, latency, and energy consumption.",
  },
];

export const aboutContent = {
  paragraphs: [
    "I am a Computer Science student at Stony Brook University through SUNY Korea, with a strong interest in artificial intelligence and machine learning. I am especially drawn to neuromorphic computing and spiking neural networks because they offer a path toward learning systems that are both computationally efficient and biologically inspired.",
    "My current research experience centers on energy-efficient object detection using Sigma-Delta spiking neural networks. I am interested in the full research process: formulating questions, implementing models, designing experiments, interpreting results, and communicating findings clearly through technical writing.",
    "In the long term, I hope to pursue graduate study and contribute to research at the intersection of machine learning, computer vision, neuromorphic hardware, and intelligent systems.",
  ],
  beyondLabTitle: "Outside Research",
  outsideResearch:
    "Outside research, I spend time climbing, especially bouldering, and watching Formula 1 and American football. My KATUSA service with the U.S. Army has also shaped how I think about teamwork, communication, and staying useful under pressure.",
};

export const researchContent = {
  overview:
    "My research interests lie at the intersection of machine learning, computer vision, and neuromorphic computing. I am particularly interested in how spiking neural networks and hardware-aware learning methods can reduce the energy and latency costs of modern AI systems without sacrificing practical performance.",
  themes: [
    {
      title: "Spiking Neural Networks and Temporal Learning",
      description:
        "Explore training methods, surrogate gradients, temporal representations, and event-driven computation for SNNs.",
    },
    {
      title: "Energy-Efficient Object Detection",
      description:
        "Investigate object detection architectures and training strategies that improve accuracy-efficiency trade-offs in spiking models.",
    },
    {
      title: "Neuromorphic Hardware Deployment",
      description:
        "Study deployment and evaluation on neuromorphic systems, especially Intel Loihi 2, including latency, energy, and hardware constraints.",
    },
    {
      title: "Future Directions",
      description:
        "Interest in spike-driven vision transformers, self-supervised learning for event streams, online learning, and efficient AI systems for real-world embodied applications.",
    },
  ],
  currentDirection:
    "I am continuing to explore efficient vision models for neuromorphic hardware, with particular interest in training stability, temporal computation, energy-aware optimization, and the next generation of spiking vision architectures.",
};

export const publications = [
  {
    id: "kim2026advanced",
    title:
      "Advanced Training Algorithms in Sigma-Delta Spiking YOLO for Energy-Efficient Object Detection on Neuromorphic Hardware",
    authors: ["Dongyeong Kim", "Gilho Kim", "Myeong Jun Kim", "Si Yong Lee", "Yoon Seok Yang"],
    venue: "IEEE Access",
    year: "2026",
    doi: "10.1109/ACCESS.2026.3655178",
    doiUrl: "https://doi.org/10.1109/ACCESS.2026.3655178",
    pdfUrl: "papers/advanced-training-algorithms-sigma-delta-spiking-yolo.pdf",
    ieeeXploreUrl: "https://ieeexplore.ieee.org/document/11357912",
    description:
      "This work investigates training algorithms for Sigma-Delta spiking neural networks applied to object detection. It evaluates accuracy, latency, and energy-related trade-offs across multiple datasets and hardware settings, with attention to deployment on neuromorphic hardware including Loihi 2.",
    bibtex: `@article{kim2026advanced,
  title={Advanced Training Algorithms in Sigma-Delta Spiking YOLO for Energy-Efficient Object Detection on Neuromorphic Hardware},
  author={Kim, Dongyeong and Kim, Gilho and Kim, Myeong Jun and Lee, Si Yong and Yang, Yoon Seok},
  journal={IEEE Access},
  year={2026},
  doi={10.1109/ACCESS.2026.3655178}
}`,
  },
];

export const newsItems = [
  {
    title: "CS Undergraduate Students Author Paper in Top-ranked Journal",
    source: "SUNY Korea Computer Science News Highlights",
    date: "Jan. 2026",
    url: "https://cs.sunykorea.ac.kr/cs/html/sub05/0501.html?mode=V&no=5ac286f00797813aa7bdf62249d08e28&GotoPage=1",
    description:
      "Department news covering the IEEE Access publication by undergraduate researchers and collaborators.",
  },
  {
    title: "Brain-inspired Computing Lab selected for Preliminary Startup Program",
    source: "SUNY Korea Computer Science News Highlights",
    date: "Oct. 2025",
    url: "https://cs.sunykorea.ac.kr/cs/html/sub05/0501.html?mode=V&no=85d0047861bcc923c1be9d39dfca46d2&GotoPage=1",
    description:
      "Department news about BCL's selection for the 2025 Preliminary Startup Package program.",
  },
];

export const cvContent = {
  note:
    "This online version is a concise overview. The downloadable PDF should be treated as the complete record once the current file is supplied.",
  education: [
    {
      institution: "Stony Brook University (SUNY Korea)",
      degree: "B.S. in Computer Science",
      date: "Feb. 2024 - Present",
    },
  ],
  researchExperience: [
    {
      role: "Undergraduate Research Assistant",
      organization: "Brain-Inspired Computing Lab (BCL)",
      organizationUrl: "https://sites.google.com/view/suny-bcl/home",
      date: "Mar. 2024 - Present",
      description:
        "Conduct research on spiking neural networks, energy-efficient object detection, and neuromorphic computing. Responsibilities include model implementation, dataset preparation, training and evaluation, analysis of accuracy-energy-latency trade-offs, and experimentation with neuromorphic hardware workflows.",
    },
  ],
  skills: [
    { group: "Programming", items: ["Python", "Java", "C / C++", "SQL", "Git"] },
    {
      group: "Machine Learning",
      items: ["PyTorch", "deep learning", "computer vision", "object detection"],
    },
    {
      group: "Research Areas",
      items: ["spiking neural networks", "neuromorphic computing", "efficient AI"],
    },
    { group: "Tools / Platforms", items: ["Linux", "Jupyter", "GitHub"] },
  ],
  honorsActivities: [
    "[Honors, scholarships, presentations, or posters - to be added]",
    "Climbing, especially bouldering",
    "Formula 1 and American football",
  ],
};

export const contactContent: { message: string; socialLinks: SocialLink[] } = {
  message:
    "I welcome conversations about research collaboration, graduate study, neuromorphic computing, spiking neural networks, and efficient machine learning.",
  socialLinks: [
    { label: "GitHub", url: "https://github.com/kimdongyeong0" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/dongyeongkim-lukas" },
    { label: "ResearchGate", url: "https://www.researchgate.net/profile/Dongyeong-Kim-4" },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=SdGtdJIAAAAJ&hl=en" },
    { label: "ORCID", url: null },
  ],
};

export const missingContentItems = [
  "Professional headshot, if one will be used",
  "Current CV / resume PDF",
  "Expected graduation date",
  "ORCID profile URL",
  "Preferred custom domain",
];
