import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Terminal, Search, Database, BarChart4, BookOpen, Cpu, Brain, Github, Linkedin, Twitter, Mail, ExternalLink, Award, Calendar, MapPin, FileText, Code, FileCode, Server, Cloud, Zap, Layers, Package, Grid } from 'lucide-react';

export default function Resume() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    publications: useRef(null),
    contact: useRef(null)
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
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample skills data for a Data Scientist specializing in NLP and LLM
  const skills = [
    // Generative AI / LLM Ecosystem
    { name: "LangChain", icon: <Brain />, level: 95, category: "llm-ecosystem" },
    { name: "LlamaIndex", icon: <Brain />, level: 90, category: "llm-ecosystem" },
    { name: "Hugging Face Transformers", icon: <BookOpen />, level: 92, category: "llm-ecosystem" },
    { name: "Hugging Face PEFT", icon: <BookOpen />, level: 90, category: "llm-ecosystem" },
    { name: "vLLM", icon: <Zap />, level: 85, category: "llm-ecosystem" },
    
    // Fine-Tuning
    { name: "LoRA / QLoRA", icon: <Brain />, level: 92, category: "fine-tuning" },
    { name: "PEFT Adapters", icon: <Brain />, level: 88, category: "fine-tuning" },
    { name: "RLHF / DPO", icon: <Brain />, level: 85, category: "fine-tuning" },
    { name: "SFT (Supervised Fine-Tuning)", icon: <Brain />, level: 90, category: "fine-tuning" },
    
    // Core LLM Concepts
    { name: "Prompt Engineering", icon: <FileCode />, level: 95, category: "llm-concepts" },
    { name: "Chain-of-Thought", icon: <FileCode />, level: 90, category: "llm-concepts" },
    { name: "Function Calling", icon: <Code />, level: 92, category: "llm-concepts" },
    { name: "RAG (Retrieval-Augmented Generation)", icon: <Search />, level: 94, category: "llm-concepts" },
    { name: "Semantic Search", icon: <Search />, level: 90, category: "llm-concepts" },
    { name: "Embeddings", icon: <Layers />, level: 93, category: "llm-concepts" },
    
    // Vector Databases & Semantic Search
    { name: "Pinecone / Weaviate", icon: <Database />, level: 88, category: "vector-db" },
    { name: "Qdrant / Chroma", icon: <Database />, level: 87, category: "vector-db" },
    { name: "FAISS", icon: <Database />, level: 85, category: "vector-db" },
    
    // Machine Learning
    { name: "Classical ML Models", icon: <Brain />, level: 90, category: "ml-dl" },
    { name: "Neural Networks", icon: <Grid />, level: 88, category: "ml-dl" },
    { name: "MLOps Best Practices", icon: <Server />, level: 85, category: "ml-dl" },
    
    // Python Programming
    { name: "Python (Advanced)", icon: <Terminal />, level: 96, category: "python" },
    { name: "Asyncio / Concurrency", icon: <Zap />, level: 90, category: "python" },
    { name: "Typing & Pydantic", icon: <Code />, level: 92, category: "python" },
    { name: "Code Quality Tools", icon: <FileCode />, level: 88, category: "python" },
    
    // Backend Engineering
    { name: "FastAPI / Flask 3", icon: <Server />, level: 94, category: "backend" },
    { name: "ASGI / WSGI Servers", icon: <Server />, level: 88, category: "backend" },
    { name: "Microservice Architecture", icon: <Layers />, level: 89, category: "backend" },
    { name: "RESTful API Design", icon: <Code />, level: 92, category: "backend" },
    
    // Data Stores & Messaging
    { name: "SQL / NoSQL Databases", icon: <Database />, level: 88, category: "data-stores" },
    { name: "Redis", icon: <Database />, level: 86, category: "data-stores" },
    { name: "Celery / RabbitMQ", icon: <Package />, level: 85, category: "data-stores" },
    { name: "Apache Kafka", icon: <Package />, level: 80, category: "data-stores" },
    
    // Cloud & Deployment
    { name: "AWS Bedrock", icon: <Cloud />, level: 85, category: "cloud" },
    { name: "Azure OpenAI Service", icon: <Cloud />, level: 84, category: "cloud" },
    { name: "Google Vertex AI", icon: <Cloud />, level: 82, category: "cloud" },
    { name: "Docker", icon: <Cpu />, level: 90, category: "cloud" },
    
    // Data & Analytics
    { name: "PyTorch / TensorFlow", icon: <Brain />, level: 90, category: "data-analytics" },
    { name: "scikit-learn", icon: <Brain />, level: 92, category: "data-analytics" },
    { name: "pandas / NumPy", icon: <Database />, level: 95, category: "data-analytics" },
    { name: "CUDA-accelerated Inference", icon: <Zap />, level: 85, category: "data-analytics" },
    
    // Visualization & Apps
    { name: "Matplotlib / Seaborn", icon: <BarChart4 />, level: 88, category: "visualization" },
    { name: "Plotly", icon: <BarChart4 />, level: 86, category: "visualization" },
    { name: "Streamlit", icon: <BarChart4 />, level: 90, category: "visualization" },
  ];
  
  const skillCategories = [
    { id: 'all', name: 'All Skills' },
    { id: 'llm-ecosystem', name: 'LLM Ecosystem' },
    { id: 'fine-tuning', name: 'LLM Fine-Tuning' },
    { id: 'llm-concepts', name: 'LLM Core Concepts' },
    { id: 'vector-db', name: 'Vector Databases' },
    { id: 'ml-dl', name: 'Machine Learning' },
    { id: 'python', name: 'Python Programming' },
    { id: 'backend', name: 'Backend Engineering' },
    { id: 'data-stores', name: 'Data Stores' },
    { id: 'cloud', name: 'Cloud & Deployment' },
    { id: 'data-analytics', name: 'Data & Analytics' },
    { id: 'visualization', name: 'Visualization' },
  ];

  // Filter skills by category
  const [activeSkillCategory, setActiveSkillCategory] = useState('all');
  // Add state for filtered skills
  const [filteredSkills, setFilteredSkills] = useState(skills);

  // Animation observation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach(item => {
       // reset pre-animation state
      item.classList.remove('animate-in');
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(item => {
        observer.unobserve(item);
      });
    };
  }, [filteredSkills]);    // ← run again on filter change

  // Effect to filter skills when category changes
  useEffect(() => {
    if (activeSkillCategory === 'all') {
      setFilteredSkills(skills);
    } else {
      const filtered = skills.filter(skill => skill.category === activeSkillCategory);
      setFilteredSkills(filtered);
    }
  }, [activeSkillCategory]);



  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen font-sans">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'py-2 bg-white bg-opacity-95 backdrop-blur-sm shadow-md' : 'py-4 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-blue-600">
            Alex Morgan
          </a>
          
          <div className="hidden md:flex space-x-8">
            {Object.keys(sectionRefs).map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  activeSection === section ? 'text-blue-600' : 'text-gray-700'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
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
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
                  className={`py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === section ? 'text-blue-600' : 'text-gray-700'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
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
                  Data Scientist / NLP Engineer
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                  Hi, I'm Alex Morgan
                </h1>
                <p className="text-lg text-gray-700 mb-8 max-w-lg">
                  Specialized in Natural Language Processing and Large Language Models with 7+ years of experience building innovative AI solutions for complex problems.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="#contact" 
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      sectionRefs.contact.current.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <a 
                    href="#projects" 
                    className="px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      sectionRefs.projects.current.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    View projects
                  </a>
                </div>
                <div className="flex space-x-5 mt-8">
                  <a href="https://github.com" className="text-gray-700 hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="https://linkedin.com" className="text-gray-700 hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="https://twitter.com" className="text-gray-700 hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="mailto:alex@example.com" className="text-gray-700 hover:text-blue-600 transition-colors">
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
                      src="/api/placeholder/500/500" 
                      alt="Alex Morgan" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        ref={sectionRefs.about}
        id="about" 
        className="py-20 bg-white"
      >
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
                  I'm a passionate Data Scientist and NLP Engineer with expertise in building and deploying large language models that solve real-world problems. With a PhD in Computational Linguistics from Stanford University, I combine strong theoretical foundations with practical implementation skills.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  My research focuses on developing efficient and accurate natural language understanding systems, with particular emphasis on low-resource languages and domain adaptation techniques. Throughout my career, I've collaborated with cross-functional teams to deliver AI solutions that drive business value while maintaining ethical considerations.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not training models or analyzing data, you'll find me contributing to open source NLP libraries, speaking at AI conferences, or mentoring aspiring data scientists.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700 delay-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <Calendar className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Experience</h3>
                    <p className="text-gray-700">7+ years of professional experience in AI and machine learning</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <Award className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <p className="text-gray-700">PhD in Computational Linguistics from Stanford University</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Location</h3>
                    <p className="text-gray-700">San Francisco, CA (Open to Remote Work)</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <FileText className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Publications</h3>
                    <p className="text-gray-700">15+ papers in top-tier NLP and ML conferences</p>
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
            As an NLP and LLM specialist, I've mastered a range of technologies and methodologies essential for building advanced AI systems:
          </p>
        </div>

        <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700 delay-100">
          <div className="flex flex-wrap gap-3 mb-10">
            {skillCategories.map(category => (
              <button
                key={category.id}
                className={`py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                  activeSkillCategory === category.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
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
            <p className="text-lg text-gray-600">No skills found in this category.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700"
              style={{ transitionDelay: `${200 + index * 50}ms` }}
            >
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
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
                  <h3 className="text-xl font-bold text-gray-900">Lead NLP Research Scientist</h3>
                  <span className="inline-block mt-2 sm:mt-0 py-1 px-3 text-sm bg-blue-100 text-blue-600 rounded-full">
                    2022 - Present
                  </span>
                </div>
                <h4 className="text-lg font-medium text-blue-600 mb-4">AI Research Lab, San Francisco</h4>
                <ul className="list-disc list-outside ml-5 text-gray-700 space-y-2">
                  <li>Lead a team of 7 researchers developing state-of-the-art LLMs for specialized domains</li>
                  <li>Pioneered efficient fine-tuning methods reducing computational costs by 65% while maintaining performance</li>
                  <li>Published 5 research papers in top NLP conferences (ACL, EMNLP)</li>
                  <li>Developed novel evaluation frameworks for assessing language model capabilities in low-resource settings</li>
                </ul>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700 delay-200">
              <div className="absolute -left-4 mt-2 w-6 h-6 rounded-full bg-blue-400 border-4 border-white"></div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Senior Data Scientist</h3>
                  <span className="inline-block mt-2 sm:mt-0 py-1 px-3 text-sm bg-blue-100 text-blue-600 rounded-full">
                    2019 - 2022
                  </span>
                </div>
                <h4 className="text-lg font-medium text-blue-600 mb-4">TechCorp AI, New York</h4>
                <ul className="list-disc list-outside ml-5 text-gray-700 space-y-2">
                  <li>Built and deployed production NLP systems handling millions of daily queries</li>
                  <li>Implemented BERT-based classification systems improving accuracy by 27% over previous solutions</li>
                  <li>Developed custom named entity recognition models for healthcare data achieving 92% F1 score</li>
                  <li>Mentored junior data scientists and established best practices for ML model deployment</li>
                </ul>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700 delay-300">
              <div className="absolute -left-4 mt-2 w-6 h-6 rounded-full bg-blue-300 border-4 border-white"></div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Machine Learning Engineer</h3>
                  <span className="inline-block mt-2 sm:mt-0 py-1 px-3 text-sm bg-blue-100 text-blue-600 rounded-full">
                    2017 - 2019
                  </span>
                </div>
                <h4 className="text-lg font-medium text-blue-600 mb-4">NLP Innovations, Boston</h4>
                <ul className="list-disc list-outside ml-5 text-gray-700 space-y-2">
                  <li>Designed and implemented text summarization algorithms for news content</li>
                  <li>Created a multilingual sentiment analysis system supporting 12 languages</li>
                  <li>Optimized NLP pipelines reducing inference time by 40%</li>
                  <li>Collaborated with product teams to integrate AI capabilities into customer-facing applications</li>
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
              Recent Work & Research
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700 delay-100">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                  <Brain className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-medium">NLP Research</span>
                  <h3 className="text-xl font-bold mt-1 mb-3">MultiLingual Efficient LLM</h3>
                  <p className="text-gray-700 mb-4">
                    Developed a compact multilingual model (1.3B parameters) that performs on par with models 3x larger on cross-lingual understanding tasks.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">PyTorch</span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">Transformers</span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">PEFT</span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">Low-Rank Adaptation</span>
                  </div>
                  <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                    View project <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700 delay-200">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-medium">Application</span>
                  <h3 className="text-xl font-bold mt-1 mb-3">BioMedNLP Knowledge Engine</h3>
                  <p className="text-gray-700 mb-4">
                    Created a specialized NLP system for biomedical literature that extracts, structures, and retrieves information from research papers.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">Python</span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">spaCy</span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">Neo4j</span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">FastAPI</span>
                  </div>
                  <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                    View project <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700 delay-300">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Search className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-medium">Open Source</span>
                  <h3 className="text-xl font-bold mt-1 mb-3">SyntaxRAG</h3>
                  <p className="text-gray-700 mb-4">
                    An open-source library for enhancing retrieval-augmented generation with syntactic understanding, improving context
                    </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">Python</span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">spaCy</span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">Neo4j</span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">FastAPI</span>
                  </div>
                  <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                    View project <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  
    {/* Publications Section */}
    <section 
        ref={sectionRefs.publications}
        id="publications" 
        className="py-20 bg-white"
    >
        <div className="container mx-auto px-6">
        <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700">
            <span className="inline-block py-1 px-3 mb-4 text-sm text-blue-600 bg-blue-100 rounded-full font-medium">
            Publications
            </span>
            <h2 className="text-3xl font-bold mb-10 text-gray-900">
            Research & Publications
            </h2>
        </div>

        <div className="space-y-8">
            {/* Publication 1 */}
            <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700 delay-100">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 mb-2 md:mb-0">Efficient Fine-tuning Methods for Large Language Models</h3>
                <span className="inline-block py-1 px-3 text-sm bg-blue-100 text-blue-600 rounded-full">
                    ACL 2024
                </span>
                </div>
                <p className="text-gray-700 mb-4">
                This paper presents novel approaches to reduce computational costs of LLM fine-tuning while maintaining comparable performance to full fine-tuning methods.
                </p>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                <span className="mr-4">Alex Morgan, J. Zhang, S. Rodriguez, et al.</span>
                <span>Citations: 78</span>
                </div>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                Read paper <ExternalLink className="ml-1 h-4 w-4" />
                </a>
            </div>
            </div>

            {/* Publication 2 */}
            <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700 delay-200">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 mb-2 md:mb-0">Cross-Lingual Transfer Learning for Low-Resource Languages</h3>
                <span className="inline-block py-1 px-3 text-sm bg-blue-100 text-blue-600 rounded-full">
                    EMNLP 2023
                </span>
                </div>
                <p className="text-gray-700 mb-4">
                We propose a novel architecture for transferring knowledge from high-resource languages to low-resource languages with minimal parallel data.
                </p>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                <span className="mr-4">Alex Morgan, L. Chen, P. Gupta</span>
                <span>Citations: 124</span>
                </div>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                Read paper <ExternalLink className="ml-1 h-4 w-4" />
                </a>
            </div>
            </div>

            {/* Publication 3 */}
            <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700 delay-300">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 mb-2 md:mb-0">Domain-Specific Knowledge Injection for LLMs</h3>
                <span className="inline-block py-1 px-3 text-sm bg-blue-100 text-blue-600 rounded-full">
                    NeurIPS 2022
                </span>
                </div>
                <p className="text-gray-700 mb-4">
                This work explores techniques for injecting specialized domain knowledge into large language models without requiring full retraining.
                </p>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                <span className="mr-4">K. Liu, Alex Morgan, T. Wilson</span>
                <span>Citations: 189</span>
                </div>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                Read paper <ExternalLink className="ml-1 h-4 w-4" />
                </a>
            </div>
            </div>
        </div>

        <div className="mt-10 text-center">
            <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-800 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
            View all publications <ArrowRight className="ml-2 h-4 w-4" />
            </a>
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
            Have a project in mind or interested in collaborating? I'm always open to discussing new opportunities and challenges in NLP and AI.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
            <div className="animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700 delay-100">
                <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="John Doe"
                    />
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
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
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="How can I help you?"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
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
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
                <div className="space-y-6">
                    <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                        <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900">Location</h4>
                        <p className="text-gray-700 mt-1">San Francisco, California<br />United States</p>
                    </div>
                    </div>
                    <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                        <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900">Email</h4>
                        <a href="mailto:alex@example.com" className="text-blue-600 hover:text-blue-700 mt-1">alex@example.com</a>
                    </div>
                    </div>
                    <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                        <Calendar className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900">Availability</h4>
                        <p className="text-gray-700 mt-1">Open to consulting opportunities<br />Available for speaking engagements</p>
                    </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Connect with me</h4>
                    <div className="flex space-x-5">
                    <a href="https://github.com" className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                    </a>
                    <a href="https://linkedin.com" className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="https://twitter.com" className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-5 w-5" />
                    </a>
                    <a href="mailto:alex@example.com" className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors">
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
                Alex Morgan
            </a>
            <p className="mt-2 text-gray-400">
                NLP Engineer & Data Scientist
            </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center">
            <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">Skills</a>
            <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
            <a href="#publications" className="text-gray-300 hover:text-blue-400 transition-colors">Publications</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
            </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Alex Morgan. All rights reserved.</p>
        </div>
        </div>
    </footer>
</div>
  )}