// Website related settings
const settings = {
  isSplash: true, // Açılış ekranını göstermek için true bırakıyoruz
};

//SEO Related settings
const seo = {
  title: "M.Ali Bayram's Portfolio",
  description:
    "A passionate Software Developer specializing in Frontend Development with expertise in React.js, JavaScript, and modern web technologies. Experienced in creating responsive and user-friendly web applications.",
  og: {
    title: "M.Ali Bayram - Frontend Developer Portfolio",
    type: "website",
    url: "https://malibayram-20.web.app",
  },
};

//Home Page
const greeting = {
  title: "M.Ali Bayram",
  logo_name: "M.AliBayram",
  nickname: "M.AliBayram",
  subTitle:
    "Computer Engineering PhD Student at Yıldız Technical University and passionate software developer specializing in Flutter, Firebase, Angular, and TensorFlow. Creating innovative solutions with modern technologies.",
  resumeLink: "", // CV linki eklenecek (varsa)
  portfolio_repository: "https://github.com/malibayram",
  githubProfile: "https://github.com/malibayram",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/malibayram",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mehmetalibayram/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:malibayram20@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@MehmetAliBayram",
    fontAwesomeIcon: "fa-youtube",
    backgroundColor: "#FF0000",
  },
];
const skills = {
  data: [
    {
      title: "Mobile Development",
      fileName: "MobileImg",
      skills: [
        "⚡ Building cross-platform mobile applications using Flutter and Firebase",
        "⚡ Experience in developing complex UI components and custom animations",
        "⚡ Implementing state management solutions and clean architecture patterns",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#0175C2",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "iOS",
          fontAwesomeClassname: "simple-icons:ios",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creating responsive and dynamic web applications using Angular",
        "⚡ Building robust frontend architectures with modern JavaScript frameworks",
        "⚡ Implementing RESTful APIs and backend integrations",
      ],
      softwareSkills: [
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0031",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: {
            color: "#1572B6",
          },
        },
      ],
    },
    {
      title: "Machine Learning & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience with TensorFlow for machine learning applications",
        "⚡ Developing AI-powered solutions for real-world problems",
        "⚡ Integration of ML models with mobile and web applications",
      ],
      softwareSkills: [
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience with Firebase for backend and hosting solutions",
        "⚡ Managing and deploying applications using cloud platforms",
        "⚡ Setting up CI/CD pipelines for automated deployments",
      ],
      softwareSkills: [
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
      ],
    },
  ],
};
// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Google Scholar",
      iconifyClassname: "simple-icons:googlescholar",
      style: {
        color: "#4285F4",
      },
      profileLink: "", // Google Scholar profilinizin linki
    },
    {
      siteName: "ResearchGate",
      iconifyClassname: "simple-icons:researchgate",
      style: {
        color: "#00CCBB",
      },
      profileLink: "", // ResearchGate profilinizin linki
    },
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "https://github.com/malibayram",
    },
    {
      siteName: "Stack Overflow",
      iconifyClassname: "simple-icons:stackoverflow",
      style: {
        color: "#F58025",
      },
      profileLink: "", // Stack Overflow profilinizin linki
    },
    {
      siteName: "Medium",
      iconifyClassname: "simple-icons:medium",
      style: {
        color: "#000000",
      },
      profileLink: "", // Medium profilinizin linki varsa
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Yıldız Technical University",
      subtitle: "PhD in Computer Engineering",
      logo_path: "Yıldız_Technical_University.svg",
      alt_name: "YTU",
      duration: "2020 - Present",
      descriptions: [
        "⚡ Conducting research in Machine Learning and Mobile Development",
        "⚡ Working on TensorFlow and Flutter based applications",
        "⚡ Publishing academic papers in international conferences and journals",
      ],
      website_link: "https://www.yildiz.edu.tr/",
    },
    {
      title: "Yıldız Technical University",
      subtitle: "MSc in Computer Engineering",
      logo_path: "Yıldız_Technical_University.svg",
      alt_name: "YTU",
      duration: "2017 - 2020",
      descriptions: [
        "⚡ Specialized in Mobile Development and Cloud Computing",
        "⚡ Completed thesis on mobile application development",
        "⚡ Participated in various academic and industrial projects",
      ],
      website_link: "https://www.yildiz.edu.tr/",
    },
    {
      title: "Yıldız Technical University",
      subtitle: "BSc in Computer Engineering",
      logo_path: "Yıldız_Technical_University.svg",
      alt_name: "YTU",
      duration: "2013 - 2017",
      descriptions: [
        "⚡ Studied core computer science subjects including Data Structures, Algorithms, Database Systems",
        "⚡ Developed strong foundation in software development and programming",
        "⚡ Participated in various software development projects",
      ],
      website_link: "https://www.yildiz.edu.tr/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Flutter Development",
      subtitle: "- Google Developer Expert",
      logo_path: "flutter.svg",
      certificate_link: "", // Flutter/Google sertifika linkiniz
      alt_name: "Flutter",
      color_code: "#02569B",
    },
    {
      title: "Firebase Development",
      subtitle: "- Google Cloud Platform",
      logo_path: "firebase.svg",
      certificate_link: "", // Firebase sertifika linkiniz
      alt_name: "Firebase",
      color_code: "#FFA000",
    },
    {
      title: "TensorFlow Developer",
      subtitle: "- Google AI",
      logo_path: "tensorflow.svg",
      certificate_link: "", // TensorFlow sertifika linkiniz
      alt_name: "TensorFlow",
      color_code: "#FF6F00",
    },
    {
      title: "Angular Development",
      subtitle: "- Google",
      logo_path: "angular.svg",
      certificate_link: "", // Angular sertifika linkiniz
      alt_name: "Angular",
      color_code: "#DD0031",
    },
  ],
};
/////////////////////////////
const experience = {
  title: "Experience",
  subtitle: "Work, Teaching and Content Creation",
  description:
    "I am a Flutter Google Developer Expert (GDE) and experienced software developer specializing in mobile and web development.",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Assistant Professor",
          subtitle: "Yıldız Technical University",
          company: "Yıldız Technical University",
          company_url: "https://www.yildiz.edu.tr/",
          logo_path: "Yıldız_Technical_University.svg",
          duration: "2020 - Present",
          location: "Istanbul, Turkey",
          description:
            "Teaching mobile development, cloud computing, and software engineering courses.",
          color: "#000000",
        },
        {
          title: "Google Developer Expert",
          subtitle: "Google",
          company: "Google",
          company_url: "https://developers.google.com/community/experts",
          logo_path: "google.svg",
          duration: "2021 - Present",
          location: "Remote",
          description:
            "Working as a Flutter Google Developer Expert, creating educational content.",
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Education & Content Creation",
      experiences: [
        {
          title: "Instructor",
          subtitle: "BTK Akademi",
          company: "BTK Akademi",
          company_url: "https://www.btkakademi.gov.tr/",
          logo_path: "btk.svg",
          duration: "2021 - Present",
          location: "Online",
          description:
            "Creating comprehensive Flutter and mobile development courses.",
          color: "#0071C5",
        },
        {
          title: "Course Instructor",
          subtitle: "Udemy",
          company: "Udemy",
          company_url: "https://www.udemy.com/",
          logo_path: "udemy.svg",
          duration: "2020 - Present",
          location: "Online",
          description:
            "Developing and maintaining popular Flutter development courses.",
          color: "#A435F0",
        },
        {
          title: "Content Creator",
          subtitle: "YouTube",
          company: "YouTube",
          company_url: "https://www.youtube.com/@MehmetAliBayram",
          logo_path: "youtube.svg",
          duration: "2020 - Present",
          location: "Online",
          description:
            "Creating educational content focused on Flutter and mobile development.",
          color: "#FF0000",
        },
      ],
    },
  ],
};

// Projects Page
const publicationsHeader = {
  title: "Publications & Content",
  description:
    "My academic research, technical content, and educational materials across various platforms including academic journals, YouTube, GitHub, and online learning platforms.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // Akademik Yayınlar
    {
      id: "sentiment-analysis-research",
      name:
        "Türkçe Metinler için Duygu Analizi Yaklaşımı ile İletişimde Bağlamdan Bağımsız Modellerin Geliştirilmesi",
      createdAt: "2021",
      description:
        "Research on developing context-independent models for Turkish text sentiment analysis, published in Yeni Medya Elektronik Dergisi",
      url: "https://dergipark.org.tr/tr/pub/ejnm/issue/63550/902660",
      type: "academic",
      metrics: "800+ downloads",
    },

    // Online Kurslar
    {
      id: "flutter-firebase-udemy",
      name: "Flutter & Firebase ile Mobil Uygulama Geliştirme",
      createdAt: "2023",
      description:
        "Comprehensive course covering Flutter architecture, Firebase integration, state management, and real-world application development",
      url: "https://www.udemy.com/course/flutter-firebase-dersleri/",
      type: "course",
      platform: "Udemy",
    },
    {
      id: "btk-flutter-course",
      name: "Flutter ile Mobil Uygulama Geliştirme",
      createdAt: "2023",
      description:
        "Free Flutter development course covering fundamentals to advanced topics",
      url:
        "https://www.btkakademi.gov.tr/portal/course/flutter-ile-mobil-uygulama-gelistirme-23237",
      type: "course",
      platform: "BTK Akademi",
    },

    // YouTube İçerikleri
    {
      id: "youtube-flutter-series",
      name: "Flutter & Firebase Tutorial Series",
      createdAt: "2023",
      description:
        "Comprehensive video series covering Flutter development, Firebase integration, and real-world applications",
      url: "https://www.youtube.com/@HiCoders",
      type: "video_series",
      platform: "YouTube",
    },
    {
      id: "youtube-live-coding",
      name: "Live Coding Sessions",
      createdAt: "2023",
      description:
        "Interactive live coding sessions focusing on Flutter development and problem-solving",
      url: "https://www.youtube.com/@HiCoders",
      type: "live_content",
      platform: "YouTube",
    },
  ],
};

const projects = {
  data: [
    // GitHub Projeleri
    {
      id: "flutter-architecture-template",
      name: "Flutter Architecture Template",
      description:
        "Production-ready Flutter architecture template with MVVM pattern, dependency injection, and best practices",
      url: "https://github.com/VB10/flutter-architecture-template",
      languages: ["Flutter", "Dart"],
      stars: "500+",
      type: "open_source",
    },
    {
      id: "flutter-ready",
      name: "Flutter Ready",
      description:
        "Ready-to-use Flutter components and utilities for rapid development",
      url: "https://github.com/VB10/flutter-ready",
      languages: ["Flutter", "Dart"],
      type: "open_source",
    },
    {
      id: "flutter-full-learn",
      name: "Flutter Full Learn",
      description: "Comprehensive Flutter learning resources and examples",
      url: "https://github.com/VB10/flutter-full-learn",
      languages: ["Flutter", "Dart"],
      type: "educational",
    },
    {
      id: "foody",
      name: "Foody",
      description:
        "A complete food delivery application built with Flutter and Firebase",
      url: "https://github.com/VB10/Foody",
      languages: ["Flutter", "Firebase", "Dart"],
      type: "application",
    },
    {
      id: "flutter-firebase-twitter-clone",
      name: "Flutter Firebase Twitter Clone",
      description: "Twitter clone application built using Flutter and Firebase",
      url: "https://github.com/VB10/flutter-firebase-twitter-clone",
      languages: ["Flutter", "Firebase", "Dart"],
      type: "application",
    },
  ],
};

const projectsHeader = {
  title: "Projects & Open Source",
  description:
    "My projects demonstrate expertise in Flutter, Firebase, and full-stack development. They range from architecture templates and educational resources to complete applications, all focused on helping developers build better mobile applications.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "İletişim",
    profile_image_path: "mehmet_ali_profile.png",
    description:
      "Benimle sosyal medya platformları üzerinden iletişime geçebilirsiniz. Flutter, Firebase, mobil uygulama geliştirme ve yazılım mimarisi konularında yardımcı olabilirim. Akademik işbirlikleri ve eğitim içerikleri için de iletişime geçebilirsiniz.",
  },
  blogSection: {
    title: "Eğitim İçerikleri",
    subtitle:
      "YouTube kanalımda ve diğer platformlarda düzenli olarak Flutter ve mobil uygulama geliştirme üzerine içerikler paylaşıyorum.",
    link: "https://www.youtube.com/@HiCoders",
    avatar_image_path: "education.svg",
  },
  addressSection: {
    title: "Adres",
    subtitle: "Yeditepe Üniversitesi, İnönü Mah.",
    locality: "Ataşehir",
    country: "Türkiye",
    region: "İstanbul",
    postalCode: "34755",
    streetAddress: "İnönü Mahallesi, Kayışdağı Cad.",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/dRwGNcCFtYKGPry66", // Yeditepe Üniversitesi'nin gerçek Google Maps linki
  },
  phoneSection: {
    title: "",
    subtitle: "", // Gizlilik için boş bırakıldı
  },
};
export {
  certifications,
  competitiveSites,
  contactPageData,
  degrees,
  experience,
  greeting,
  projects,
  projectsHeader,
  publications,
  publicationsHeader,
  seo,
  settings,
  skills,
  socialMediaLinks,
};
