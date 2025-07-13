import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Terminal,
  Search,
  Database,
  BarChart4,
  BookOpen,
  Briefcase,
  Cpu,
  Brain,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Award,
  Calendar,
  MapPin,
  FileText,
  Code,
  FileCode,
  Server,
  Cloud,
  Zap,
  Layers,
  Package,
  Grid,
} from "lucide-react";

export default function Resume() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Update navbar style on scroll
      setIsScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      Object.entries(sectionRefs).forEach(([section, ref]) => {
        const element = ref.current;
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sample skills data for a Data Scientist specializing in NLP and LLM
  const skills = [
    // Languages
    { name: "Python", icon: <Terminal />, category: "languages" },
    { name: "Java", icon: <Terminal />, category: "languages" },
    { name: "SQL", icon: <Database />, category: "languages" },

    // Advanced Python Concepts
    { name: "OOP", icon: <Code />, category: "advanced-python" },
    { name: "Type Hinting", icon: <Code />, category: "advanced-python" },
    { name: "Async Programming", icon: <Zap />, category: "advanced-python" },
    { name: "Pydantic", icon: <FileCode />, category: "advanced-python" },

    // Data Science & ML
    { name: "pandas", icon: <Database />, category: "ml-ds" },
    { name: "NumPy", icon: <Database />, category: "ml-ds" },
    { name: "MLFlow", icon: <BarChart4 />, category: "ml-ds" },
    { name: "scikit-learn", icon: <Brain />, category: "ml-ds" },
    { name: "Classical ML Models", icon: <Brain />, category: "ml-ds" },
    { name: "Neural Networks", icon: <Grid />, category: "ml-ds" },
    { name: "NLP", icon: <BookOpen />, category: "ml-ds" },
    { name: "Computer Vision", icon: <Cpu />, category: "ml-ds" },

    // Deep Learning Libraries
    { name: "PyTorch", icon: <Brain />, category: "dl-frameworks" },
    { name: "TensorFlow", icon: <Brain />, category: "dl-frameworks" },
    { name: "OpenCV", icon: <Cpu />, category: "dl-frameworks" },
    { name: "NLTK", icon: <BookOpen />, category: "dl-frameworks" },
    { name: "spaCy", icon: <BookOpen />, category: "dl-frameworks" },

    // Visualization
    { name: "Matplotlib", icon: <BarChart4 />, category: "visualization" },
    { name: "Seaborn", icon: <BarChart4 />, category: "visualization" },
    { name: "Plotly", icon: <BarChart4 />, category: "visualization" },
    { name: "Streamlit", icon: <BarChart4 />, category: "visualization" },

    // LLM Ecosystem
    { name: "Hugging Face Transformers", icon: <BookOpen />, category: "llm-ecosystem" },
    { name: "LlamaIndex", icon: <Brain />, category: "llm-ecosystem" },
    { name: "LangChain", icon: <Brain />, category: "llm-ecosystem" },

    // Fine-tuning
    { name: "Supervised Fine-Tuning (SFT)", icon: <Brain />, category: "fine-tuning" },
    { name: "PEFT", icon: <Brain />, category: "fine-tuning" },
    { name: "LoRA", icon: <Brain />, category: "fine-tuning" },
    { name: "RLHF", icon: <Brain />, category: "fine-tuning" },
    { name: "DPO", icon: <Brain />, category: "fine-tuning" },

    // Generative AI
    { name: "Prompt Engineering", icon: <FileCode />, category: "generative-ai" },
    { name: "Chain-of-Thought", icon: <FileCode />, category: "generative-ai" },
    { name: "Function Calling", icon: <Code />, category: "generative-ai" },
    { name: "Model Quantization", icon: <Zap />, category: "generative-ai" },
    { name: "Open-Source LLM Models", icon: <BookOpen />, category: "generative-ai" },

    // RAG & Agentic AI
    { name: "RAG", icon: <Search />, category: "rag-agentic" },
    { name: "Semantic Search", icon: <Search />, category: "rag-agentic" },
    { name: "Embeddings", icon: <Layers />, category: "rag-agentic" },
    { name: "MCP", icon: <Layers />, category: "rag-agentic" },
    { name: "Langfuse", icon: <FileCode />, category: "rag-agentic" },
    { name: "Evaluation Frameworks", icon: <FileText />, category: "rag-agentic" },
    { name: "LLM Guardrails", icon: <Code />, category: "rag-agentic" },

    // Vector DB
    { name: "Pinecone", icon: <Database />, category: "vector-db" },
    { name: "ChromaDB", icon: <Database />, category: "vector-db" },
    { name: "FAISS", icon: <Database />, category: "vector-db" },

    // Backend
    { name: "FastAPI", icon: <Server />, category: "backend" },
    { name: "Flask", icon: <Server />, category: "backend" },
    { name: "Gunicorn (WSGI)", icon: <Server />, category: "backend" },
    { name: "Uvicorn (ASGI)", icon: <Server />, category: "backend" },
    { name: "Microservice Architecture", icon: <Layers />, category: "backend" },
    { name: "RESTful APIs", icon: <Code />, category: "backend" },

    // Data Stores & Queues
    { name: "PostgreSQL", icon: <Database />, category: "data-stores" },
    { name: "MySQL", icon: <Database />, category: "data-stores" },
    { name: "MongoDB", icon: <Database />, category: "data-stores" },
    { name: "Redis", icon: <Database />, category: "data-stores" },
    { name: "RabbitMQ", icon: <Package />, category: "data-stores" },
    { name: "Apache Kafka", icon: <Package />, category: "data-stores" },

    // Cloud & Deployment
    { name: "AWS", icon: <Cloud />, category: "cloud" },
    { name: "GCP", icon: <Cloud />, category: "cloud" },
    { name: "AzureML", icon: <Cloud />, category: "cloud" },
    { name: "Docker", icon: <Cpu />, category: "cloud" },
  ];

  const skillCategories = [
    { id: "all", name: "All Skills" },
    { id: "languages", name: "Languages" },
    { id: "advanced-python", name: "Advanced Python" },
    { id: "ml-ds", name: "Data Science & ML" },
    { id: "dl-frameworks", name: "DL Libraries & Frameworks" },
    { id: "visualization", name: "Visualization & Reporting" },
    { id: "llm-ecosystem", name: "LLM Ecosystem" },
    { id: "fine-tuning", name: "LLM Fine-Tuning" },
    { id: "generative-ai", name: "Generative AI Skills" },
    { id: "rag-agentic", name: "Retrieval & Agentic AI" },
    { id: "vector-db", name: "Vector Databases" },
    { id: "backend", name: "Backend Engineering" },
    { id: "data-stores", name: "Data Stores & Queues" },
    { id: "cloud", name: "Cloud & Deployment" }
  ];

  // Filter skills by category
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");
  // Add state for filtered skills
  const [filteredSkills, setFilteredSkills] = useState(skills);

  // Animation observation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((item) => {
      // reset pre-animation state
      item.classList.remove("animate-in");
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, [filteredSkills]); // ← run again on filter change

  // Effect to filter skills when category changes
  useEffect(() => {
    if (activeSkillCategory === "all") {
      setFilteredSkills(skills);
    } else {
      const filtered = skills.filter(
        (skill) => skill.category === activeSkillCategory
      );
      setFilteredSkills(filtered);
    }
  }, [activeSkillCategory]);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen font-sans">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "py-2 bg-white bg-opacity-95 backdrop-blur-sm shadow-md"
          : "py-4 bg-transparent"
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-blue-600">
            Brijendra Kumar
          </a>

          <div className="hidden md:flex space-x-8">
            {Object.keys(sectionRefs).map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeSection === section ? "text-blue-600" : "text-gray-700"
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  sectionRefs[section].current.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg pt-2 pb-4">
            <div className="container mx-auto px-6 flex flex-col space-y-3">
              {Object.keys(sectionRefs).map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`py-2 text-sm font-medium transition-colors hover:text-blue-600 ${activeSection === section
                    ? "text-blue-600"
                    : "text-gray-700"
                    }`}
                  onClick={(e) => {
                    e.preventDefault();
                    sectionRefs[section].current.scrollIntoView({
                      behavior: "smooth",
                    });
                    setIsMenuOpen(false);
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        ref={sectionRefs.home}
        id="home"
        className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-16"
      >
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700">
                <span className="inline-block py-1 px-3 mb-4 text-sm text-blue-600 bg-blue-100 rounded-full font-medium">
                  Data Scientist
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                  Hi, I'm Brijendra Kumar
                </h1>
                <p className="text-lg text-gray-700 mb-8 max-w-lg">
                  A data scientist by role, I work at the intersection of machine learning, backend development, and domain-driven problem solving. I’ve applied NLP and large language models to build impactful AI solutions across sustainability, healthcare, and insurance domains.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#contact"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      sectionRefs.contact.current.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  {/* <a
                    href="#projects"
                    className="px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      sectionRefs.projects.current.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    View projects
                  </a> */}
                </div>
                <div className="flex space-x-5 mt-8">
                  <a
                    href="https://github.com/kbrijendra2201"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/brijendra-kumar-524862207/"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://x.com/brijendra0122"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a
                    href="mailto:kbrijendra2201@gmail.com"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-2/5">
              <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700 delay-300">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-full h-full bg-blue-200 rounded-xl transform rotate-3"></div>
                  <div className="absolute -bottom-6 -right-6 w-full h-full bg-indigo-200 rounded-xl transform -rotate-3"></div>
                  <div className="relative overflow-hidden rounded-xl aspect-square">
                    <img
                      src={`${import.meta.env.BASE_URL}image.jpg`}
                      alt="Brijendra Kumar"
                      className="w-full h-full object-cover border-4 border-sky-200 rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={sectionRefs.about} id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700">
            <span className="inline-block py-1 px-3 mb-4 text-sm text-blue-600 bg-blue-100 rounded-full font-medium">
              About Me
            </span>
            <h2 className="text-3xl font-bold mb-10 text-gray-900">
              My Background & Expertise
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
              <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700 delay-100">
                <p className="text-lg mb-6 leading-relaxed">
                  I'm a curious and driven data scientist with two years of experience building real-world machine learning solutions. While my work often involves applying NLP and LLMs, I also enjoy backend development and solving complex problems with a strong foundation in mathematics and computer science.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  My approach combines technical execution with a deep interest in understanding the domains I work in. From driving insights in sustainability to improving healthcare outcomes and optimizing insurance workflows, I aim to create solutions that are both practical and meaningful.
                </p>
                <p className="text-lg leading-relaxed">
                  Outside of work, I enjoy exploring abstract mathematics, theoretical computer science concepts, and feeding my general curiosity across disciplines.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700 delay-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <Calendar className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Experience</h3>
                    <p className="text-gray-700">
                      2 years of professional experience in AI and machine
                      learning
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <Award className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <p className="text-gray-700">
                      B.Tech. in Electrical Engineering from Indian Institute of Technology(IIT) Dharwad
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Location</h3>
                    <p className="text-gray-700">
                      Bengaluru, Karnataka, India
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <Briefcase className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Domains Worked in</h3>
                    <p className="text-gray-700">
                      Sustainability, Healthcare & Insurance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={sectionRefs.skills}
        id="skills"
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700">
            <span className="inline-block py-1 px-3 mb-4 text-sm text-blue-600 bg-blue-100 rounded-full font-medium">
              Skills & Technologies
            </span>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              My Technical Expertise
            </h2>
            <p className="text-lg mb-10 max-w-2xl text-gray-700">
              As a Data Scientist, I've mastered a range of
              technologies and methodologies essential for building advanced AI
              systems:
            </p>
          </div>

          <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700 delay-100">
            <div className="flex flex-wrap gap-3 mb-10">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  className={`py-2 px-4 rounded-full text-sm font-medium transition-colors ${activeSkillCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  onClick={() => setActiveSkillCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Display message when no skills in category */}
          {filteredSkills.length === 0 && (
            <div className="text-center py-10">
              <p className="text-lg text-gray-600">
                No skills found in this category.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700"
                style={{ transitionDelay: `${200 + index * 50}ms` }}
              >
                <div className="bg-white px-6 py-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                      {skill.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        ref={sectionRefs.experience}
        id="experience"
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700">
            <span className="inline-block py-1 px-3 mb-4 text-sm text-blue-600 bg-blue-100 rounded-full font-medium">
              Experience
            </span>
            <h2 className="text-3xl font-bold mb-10 text-gray-900">
              Professional Journey
            </h2>
          </div>

          <div className="relative border-l-2 border-blue-200 pl-8 ml-4 space-y-12">
            {/* Experience Item 1 */}
            <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700 delay-100">
              <div className="absolute -left-4 mt-2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white"></div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Data Scientist
                  </h3>
                  <span className="inline-block mt-2 sm:mt-0 py-1 px-3 text-sm bg-blue-100 text-blue-600 rounded-full">
                    June 2024 - Present
                  </span>
                </div>
                <h4 className="text-lg font-medium text-blue-600 mb-4">
                  Ushur Technologies Private Limited, Bengaluru, Karnataka, India
                </h4>
                <ul className="list-disc list-outside ml-5 text-gray-700 space-y-2">
                  <li>
                    <b>End-to-End Quote Generation Pipeline Architecture</b> - Architected and executed engagement-level LLM
                    extraction pipeline tailored to insurance quoting workflows. Introduced a priority-based hierarchy information splits,
                    vector retrieval, and advanced schema orchestration to eliminate context ambiguity and enable complete, accurate quote
                    creation across multi-document inputs.
                  </li>
                  <li>
                    <b>High-Performance Asynchronous LLM Execution</b> - Engineered a scalable async LLM execution system with
                    custom server, throttling, and rate limiting-reducing multi-file engagement processing time from 10–15 minutes to under
                    2 minutes, significantly improving SLA adherence in time-sensitive insurance quoting
                  </li>
                  <li>
                    <b>Insurance Domain & Prompt Engineering</b> - Onboarded rapidly into the Insurance RFP Quote Intake domain and
                    delivered production-grade prompts for Vision, Dental, Disability, Life, and Critical Illness products-driving
                    domain-aligned LLM performance and improving first-pass accuracy to 90%.
                  </li>
                  <li>
                    <b>Automated Data Collection for LLM Fine-Tuning</b> - Orchestrated a structured interaction logging pipeline to
                    capture and store 1M+ LLM prompt & response pairs monthly, enabling scalable downstream fine-tuning and
                    longitudinal performance analysis through a unified data ecosystem.
                  </li>
                  <li>
                    <b>End-to-End Events Analytics Framework</b> - Spearheaded development of an Events Framework to trace critical
                    engagement stages; piping 50K+ events into Yellowbrick (Data Warehouse), and enabling SQL-driven dashboards (via
                    Superset)-to deliver real-time engagement analytics to stakeholders.
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700 delay-200">
              <div className="absolute -left-4 mt-2 w-6 h-6 rounded-full bg-blue-400 border-4 border-white"></div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Member of Technical Staff
                  </h3>
                  <span className="inline-block mt-2 sm:mt-0 py-1 px-3 text-sm bg-blue-100 text-blue-600 rounded-full">
                    Oct 2023 - June 2024
                  </span>
                </div>
                <h4 className="text-lg font-medium text-blue-600 mb-4">
                  Sprih Innovations Pvt Ltd
                </h4>
                <ul className="list-disc list-outside ml-5 text-gray-700 space-y-2">
                  <li>
                    <b>Sole AI Engineer in Early-Stage Sustainability Startup</b> - Led the end-to-end development of AI capabilities in a
                    30-person startup, independently architecting and deploying production-grade machine learning pipelines.
                  </li>
                  <li>
                    <b>Retrieval-Augmented Generation (RAG) for Sustainability Intelligence</b> - Created a RAG pipeline to extract
                    structured insights from 20K+ publicly available sustainability reports and documents across diverse companies each
                    year, enabling data-backed sustainability benchmarking and compliance tracking
                  </li>
                  <li>
                    <b>Classical Machine Learning for Impact Analysis</b> - Applied classical ML models to analyze extracted sustainability
                    data and surface key trends, patterns, and anomalies to support strategic decision-making.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={sectionRefs.projects}
        id="projects"
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700">
            <span className="inline-block py-1 px-3 mb-4 text-sm text-blue-600 bg-blue-100 rounded-full font-medium">
              Featured Projects
            </span>
            <h2 className="text-3xl font-bold mb-10 text-gray-900">
              Recent Work & Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700 delay-100">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                  <Search className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-medium">
                    RAG System
                  </span>
                  <h3 className="text-xl font-bold mt-1 mb-3">
                    LoanLens
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Built a modular RAG system to answer queries across 90+ markdown documents from Indian banks and NBFCs. Implemented a custom markdown chunker, hybrid retrieval, and config-driven architecture using Gemini-005 and FAISS.

                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                      Python
                    </span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                      RAG
                    </span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                      Prompt Engineering
                    </span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                      FAISS
                    </span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                      Pydantic
                    </span>
                  </div>
                  {/* <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View project <ExternalLink className="ml-1 h-4 w-4" />
                  </a> */}
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700 delay-200">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                  <BarChart4 className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-medium">
                    Computer Vision
                  </span>
                  <h3 className="text-xl font-bold mt-1 mb-3">
                    Handwritten Character Classification
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Designed a CNN-based classification pipeline on the EMNIST dataset using PyTorch. Implemented modular Trainer/Evaluator with data augmentation, CLI integration, and confusion matrix evaluation.

                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                      Python
                    </span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                      PyTorch
                    </span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                      scikit-learn
                    </span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                      Matplotlib
                    </span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                      EMNIST
                    </span>
                  </div>
                  {/* <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View project <ExternalLink className="ml-1 h-4 w-4" />
                  </a> */}
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700 delay-300">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Code className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-medium">
                    Recommender Systems
                  </span>
                  <h3 className="text-xl font-bold mt-1 mb-3">Movie Recommendation System</h3>
                  <p className="text-gray-700 mb-4">
                    Built a recommender using MovieLens dataset with collaborative filtering. Enhanced it with sentiment analysis on IMDb reviews to improve personalization.

                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                      Python
                    </span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                      Collaborative Filtering
                    </span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                      scikit-learn
                    </span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                      NLP
                    </span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                      Sentiment Analysis
                    </span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                      IMDb
                    </span>
                  </div>
                  {/* <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View project <ExternalLink className="ml-1 h-4 w-4" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section
        ref={sectionRefs.contact}
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700">
            <span className="inline-block py-1 px-3 mb-4 text-sm text-blue-600 bg-blue-100 rounded-full font-medium">
              Contact
            </span>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Get In Touch
            </h2>
            <p className="text-lg mb-10 max-w-2xl text-gray-700">
              Have a project in mind or interested in collaborating? I'm always
              open to discussing new opportunities and challenges in NLP and AI.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700 delay-100">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="How can I help you?"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      Send Message <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700 delay-200">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900">
                          Location
                        </h4>
                        <p className="text-gray-700 mt-1">
                          Bengaluru, Karnataka
                          <br />
                          India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900">
                          Email
                        </h4>
                        <a
                          href="mailto:kbrijendra2201@gmail.com"
                          className="text-blue-600 hover:text-blue-700 mt-1"
                        >
                          kbrijendra2201@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Calendar className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900">
                          Availability
                        </h4>
                        <p className="text-gray-700 mt-1">
                          Open to full-time and freelance opportunities
                          <br />
                          Available for collaborations, podcasts, and mentoring
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">
                      Connect with me
                    </h4>
                    <div className="flex space-x-5">
                      <a
                        href="https://github.com/kbrijendra2201"
                        className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/brijendra-kumar-524862207/"
                        className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="https://x.com/brijendra0122"
                        className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a
                        href="mailto:kbrijendra2201@gmail.com"
                        className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#home" className="text-xl font-bold text-blue-400">
                Brijendra Kumar
              </a>
              <p className="mt-2 text-gray-400">
                Data Scientist
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center">
              <a
                href="#home"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Brijendra Kumar. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
