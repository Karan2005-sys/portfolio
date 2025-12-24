import React, { useState, useEffect, useRef } from 'react';
import {
  Github,
  Linkedin,
  Instagram,
  Terminal,
  Send,
  X,
  MessageSquare,
  ExternalLink,
  ChevronRight,
  Sparkles,
  MapPin,
  Mail,
  Award,
  Brain,
  Cat,
  Database,
  Layout,
  Layers,
  Code2,
  Wrench,
  BarChart,
  Globe,
  ArrowRight,
  GraduationCap
} from 'lucide-react';

/* =========================================
   ASSETS & CONFIG
   ========================================= */

// Custom LeetCode Icon
const LeetCodeIcon = ({ size = 22, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-4.279-4.19a3.154 3.154 0 0 1-.673-3.13 3.148 3.148 0 0 1 1.085-1.578l3.698-3.958 4.606-4.925a3.047 3.047 0 0 1 4.229-.025l2.428 2.422a1.376 1.376 0 0 0 1.951.003c.54-.54.54-1.414-.003-1.955l-2.428-2.422A5.793 5.793 0 0 0 13.483 0zM5.294 11.234c-.11.002-.224.015-.333.042a1.413 1.413 0 0 0-.847 1.887l3.053 7.828c.205.524.71.868 1.273.868.563 0 1.068-.344 1.273-.868l3.053-7.828a1.413 1.413 0 0 0-1.025-1.905c-.109-.027-.223-.04-.333-.042a1.374 1.374 0 0 0-1.282.884l-1.686 4.322-1.686-4.322a1.375 1.375 0 0 0-1.46-1.066z" />
  </svg>
);

// Custom Paw Icon for Cursor Trail
const PawIcon = ({ size = 12, className, style }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
  >
    <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM8 5C6.9 5 6 5.9 6 7C6 8.1 6.9 9 8 9C9.1 9 10 8.1 10 7C10 5.9 9.1 5 8 5ZM16 5C14.9 5 14 5.9 14 7C14 8.1 14.9 9 16 9C17.1 9 18 8.1 18 7C18 5.9 17.1 5 16 5ZM7.5 11C6.1 11 5 12.1 5 13.5C5 14.3 5.4 15.1 6 15.6V18C6 19.7 7.3 21 9 21H15C16.7 21 18 19.7 18 18V15.6C18.6 15.1 19 14.3 19 13.5C19 12.1 17.9 11 16.5 11C15.8 11 15.2 11.3 14.8 11.8C14 11.3 13 11 12 11C11 11 10 11.3 9.2 11.8C8.8 11.3 8.2 11 7.5 11Z" />
  </svg>
);

const PORTFOLIO_DATA = {
  name: "Ishita Singh",
  bio: "I build intelligent systems that think — and feel.",
  about: "I am a Dual Degree (B.Tech + M.Tech) student in CS & AI at RGIPT. My work bridges the gap between rigorous ML research and intuitive frontend experiences.",
  projects: {
    sanraksha: "SanRaksha is an award-winning health monitoring dashboard. It uses OpenAI Whisper and ML models to extract vitals from audio and predict health risks. It won the CS BASE HackforHealth.",
    email: "The AI Cold Email Generator uses LangChain, ChromaDB, and Groq LLMs to parse resumes and generate context-aware emails for job applications.",
    climate: "A Global Climate Change Dashboard using Streamlit and ARIMA models to visualize CO2 levels and forecast future trends.",
    gemini: "A functional clone of the Gemini interface built with React and the Gemini API, focusing on natural language interaction."
  },
  skills: "My core stack includes Python, C++, React.js, and PyTorch. I specialize in NLP, Large Language Models (RAG, Agents), Computer Vision, and Generative AI.",
  contact: "You can reach me via LinkedIn or check my code on GitHub. I'm always open to discussing AI systems and frontend engineering."
};

const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/ishita-singh09/",
  github: "https://github.com/Ishita-Si",
  instagram: "https://www.instagram.com/i_shhh09",
  leetcode: "https://leetcode.com/u/Ishita_Si/"
};

/* =========================================
   COMPONENTS
   ========================================= */

const CustomCursor = ({ mood }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);

      const clickables = document.querySelectorAll('a, button, .clickable');
      clickables.forEach(el => {
        el.addEventListener('mouseenter', () => setHovering(true));
        el.addEventListener('mouseleave', () => setHovering(false));
      });
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Add point to trail more frequently for smooth paw path
      const newPoint = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
        rotation: Math.random() * 30 - 15 // Slight random rotation for paws
      };
      setTrail(prev => [...prev.slice(-12), newPoint]); // Keep last 12 points
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  // Cleanup trail points to create fading effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prev => prev.filter(p => Date.now() - p.id < 600));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Paw Trail */}
      <div className="fixed inset-0 pointer-events-none z-[9998] hidden md:block">
        {trail.map((point, i) => {
           const age = Date.now() - point.id;
           const life = 1 - age / 600; // 1 to 0

           return (
             <div
               key={point.id}
               className="absolute transition-opacity duration-100 ease-linear"
               style={{
                 left: point.x,
                 top: point.y,
                 opacity: life * 0.5,
                 transform: `translate(-50%, -50%) rotate(${point.rotation}deg) scale(${life * 0.8})`,
                 color: mood === 'hacker' ? '#7EE7E7' : '#B8A1FF'
               }}
             >
               <PawIcon size={16} />
             </div>
           );
        })}
      </div>

      {/* Main Cursor (The Big Paw) */}
      <div
        className="fixed pointer-events-none z-[9999] hidden md:block transition-transform duration-100 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          // Added rotation for the cute tilt effect
          transform: `translate(-50%, -50%) rotate(-20deg) scale(${clicked ? 0.8 : hovering ? 1.3 : 1})`
        }}
      >
        <div className={`relative ${mood === 'hacker' ? 'text-[#7EE7E7]' : 'text-[#8B5CF6]'} opacity-90 drop-shadow-sm`}>
           <PawIcon size={32} />
        </div>
      </div>
    </>
  );
};

const AIAssistant = ({ mood }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hello! I'm Ishita's digital echo. Ask me about her projects like 'SanRaksha', her skills, or just say 'Take a tour'." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const processQuery = (query) => {
    const q = query.toLowerCase();

    if (q.includes('tour') || q.includes('start')) return "Ishita is a dual-degree student at RGIPT specializing in AI & Frontend. Scroll down to see her award-winning project 'SanRaksha', her AI experiments, and her research work.";
    if (q.includes('sanraksha') || q.includes('health')) return PORTFOLIO_DATA.projects.sanraksha;
    if (q.includes('email') || q.includes('cold')) return PORTFOLIO_DATA.projects.email;
    if (q.includes('climate')) return PORTFOLIO_DATA.projects.climate;
    if (q.includes('gemini')) return PORTFOLIO_DATA.projects.gemini;
    if (q.includes('skill') || q.includes('stack') || q.includes('tech')) return PORTFOLIO_DATA.skills;
    if (q.includes('contact') || q.includes('reach') || q.includes('email')) return PORTFOLIO_DATA.contact;
    if (q.includes('cat') || q.includes('kitten')) return "Ishita loves cats! That's why you see the paw cursor and subtle cat themes here. 🐱";

    return "I can explain Ishita's projects (like SanRaksha), her ML tech stack, or her background. What would you like to know?";
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = processQuery(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', text: response }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className={`
          mb-4 w-80 md:w-96 rounded-2xl shadow-2xl overflow-hidden border transition-colors duration-500
          ${mood === 'hacker' 
            ? 'bg-[#0E0E11]/90 border-[#7EE7E7] text-[#7EE7E7] font-mono' 
            : 'bg-white/80 border-[#B8A1FF]/40 text-gray-800 font-sans backdrop-blur-xl'}
        `}>
          <div className={`p-4 flex justify-between items-center border-b ${mood === 'hacker' ? 'border-[#7EE7E7]/30' : 'border-gray-200/50'}`}>
            <div className="flex items-center gap-2">
              <Sparkles size={16} className={mood === 'hacker' ? 'text-[#7EE7E7]' : 'text-[#8B5CF6]'} />
              <span className="font-semibold text-sm">Portfolio Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-70 clickable"><X size={16} /></button>
          </div>

          <div className="h-64 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`
                  max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow-sm
                  ${msg.role === 'user' 
                    ? (mood === 'hacker' ? 'bg-[#7EE7E7] text-black' : 'bg-[#8B5CF6] text-white') 
                    : (mood === 'hacker' ? 'bg-[#121826] border border-[#7EE7E7]/30' : 'bg-white border border-gray-100')}
                `}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-opacity-20 rounded-full px-3 py-1 flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce delay-75"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce delay-150"></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleSend} className={`p-3 border-t flex gap-2 ${mood === 'hacker' ? 'border-[#7EE7E7]/30' : 'border-gray-200/50'}`}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my projects..."
              className={`flex-1 bg-transparent text-sm outline-none ${mood === 'hacker' ? 'placeholder-[#7EE7E7]/50' : 'placeholder-gray-400'}`}
            />
            <button type="submit" className="p-2 rounded-full hover:bg-gray-200/20 clickable"><Send size={16} /></button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          p-4 rounded-full shadow-lg transition-all duration-300 clickable hover:scale-110
          ${mood === 'hacker' 
            ? 'bg-[#0E0E11] text-[#7EE7E7] border border-[#7EE7E7] shadow-[0_0_15px_rgba(126,231,231,0.3)]' 
            : 'bg-[#8B5CF6] text-white shadow-xl shadow-[#8B5CF6]/30'}
        `}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

const ProjectCard = ({ project, mood }) => (
  <div className={`
    group relative p-6 rounded-3xl transition-all duration-500 clickable flex flex-col h-full
    hover:-translate-y-2 hover:scale-[1.01] 
    ${mood === 'hacker' 
      ? 'bg-[#121826] border border-[#7EE7E7]/20 hover:border-[#7EE7E7] hover:shadow-[0_0_20px_rgba(126,231,231,0.1)]' 
      : 'bg-white border border-gray-100 hover:border-[#B8A1FF]/50 hover:shadow-2xl shadow-sm'}
  `}>
    <div className="flex justify-between items-start mb-4">
      <h3 className={`text-xl font-bold ${mood === 'hacker' ? 'font-mono' : 'font-display text-gray-800'}`}>{project.title}</h3>
      <div className="flex gap-2">
        {project.links.map((link, i) => (
          <a key={i} href={link.url} target="_blank" rel="noreferrer" className={`opacity-70 hover:opacity-100 transition-opacity ${mood === 'hacker' ? 'text-white' : 'text-gray-600'}`}>
            <ExternalLink size={18} />
          </a>
        ))}
      </div>
    </div>

    <p className={`mb-6 text-sm leading-relaxed flex-grow ${mood === 'hacker' ? 'text-gray-400' : 'text-gray-600'}`}>
      {project.description}
    </p>

    <div className="mb-4">
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech, i) => (
          <span key={i} className={`
            text-xs px-2.5 py-1 rounded-full font-medium
            ${mood === 'hacker' ? 'bg-[#7EE7E7]/10 text-[#7EE7E7]' : 'bg-[#F3E8FF] text-[#7C3AED]'}
          `}>
            {tech}
          </span>
        ))}
      </div>
    </div>

    {project.awards && (
      <div className={`
        mt-auto pt-4 border-t text-sm flex items-center gap-2
        ${mood === 'hacker' ? 'border-[#7EE7E7]/20 text-[#7EE7E7]' : 'border-gray-100 text-[#8B5CF6]'}
      `}>
        <Award size={16} />
        <span className="font-semibold">{project.awards}</span>
      </div>
    )}

    <div className={`absolute bottom-3 right-5 opacity-0 group-hover:opacity-40 transition-opacity duration-700 text-xs ${mood === 'hacker' ? 'font-mono' : 'italic text-[#8B5CF6]'}`}>
      ~ stretches ~
    </div>
  </div>
);

const SkillCard = ({ title, icon: Icon, skills, mood }) => (
  <div className={`
    p-6 rounded-2xl h-full transition-all duration-300 flex flex-col
    ${mood === 'hacker' 
      ? 'bg-[#121826] border border-[#7EE7E7]/20' 
      : 'bg-white border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-[#F3E8FF]/50'}
  `}>
    <div className="flex items-center gap-3 mb-6">
      <div className={`
        p-2.5 rounded-xl
        ${mood === 'hacker' ? 'bg-[#7EE7E7]/10 text-[#7EE7E7]' : 'bg-[#F3E8FF] text-[#8B5CF6]'}
      `}>
        <Icon size={20} />
      </div>
      <h3 className={`text-lg font-bold ${mood === 'hacker' ? 'text-gray-200' : 'text-gray-800'}`}>{title}</h3>
    </div>

    <div className="flex flex-wrap gap-2 content-start">
      {skills.map((skill) => (
        <span
          key={skill}
          className={`
            px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default
            ${mood === 'hacker' 
              ? 'bg-[#0E0E11] text-[#7EE7E7]/80 hover:bg-[#7EE7E7]/10' 
              : 'bg-gray-50 text-gray-600 hover:bg-[#8B5CF6] hover:text-white hover:shadow-md'}
          `}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Section = ({ title, children, id, mood }) => (
  <section id={id} className="py-24 relative">
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      {title && (
        <div className="mb-16">
          <div className={`flex items-center gap-4 mb-2 opacity-60 font-mono text-sm ${mood === 'hacker' ? 'text-[#7EE7E7]' : 'text-[#8B5CF6]'}`}>
            <span>0{['hero', 'about', 'projects', 'skills', 'education', 'experience', 'awards'].indexOf(id)}.</span>
            <span className="h-px w-12 bg-current"></span>
          </div>
          <h2 className={`
            text-3xl md:text-5xl font-bold tracking-tight
            ${mood === 'hacker' ? 'text-[#EAEAF0]' : 'text-gray-900'}
          `}>
            {title}
          </h2>
        </div>
      )}
      {children}
    </div>
  </section>
);

const App = () => {
  const [mood, setMood] = useState('soft');

  const toggleMood = () => setMood(prev => prev === 'soft' ? 'hacker' : 'soft');
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className={`
      min-h-screen transition-colors duration-700 ease-in-out selection:bg-[#B8A1FF] selection:text-white relative overflow-x-hidden
      ${mood === 'hacker' 
        ? 'bg-[#050505] text-gray-300 font-mono selection:bg-[#7EE7E7] selection:text-black' 
        : 'bg-[#FDFCFE] text-slate-600 font-sans selection:bg-[#8B5CF6] selection:text-white'}
    `}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=General+Sans:wght@400;500;600&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Sora:wght@400;600;700&display=swap');
        .font-display { font-family: 'Sora', sans-serif; }
        .glass-nav { backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); }
        .animate-glow { animation: glow 4s ease-in-out infinite; }
        @keyframes glow { 0%, 100% { opacity: 0.8; } 50% { opacity: 1; } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0px); } }
      `}</style>

      {/* Cat Background Theme (Watermark) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Giant subtle paw print in bottom left */}
        <div className={`
          absolute -bottom-20 -left-20 opacity-[0.03] transform rotate-12 transition-all duration-700
          ${mood === 'hacker' ? 'text-[#7EE7E7]' : 'text-[#8B5CF6]'}
        `}>
          <PawIcon size={600} />
        </div>
        {/* Another one top right */}
        <div className={`
          absolute -top-20 -right-20 opacity-[0.02] transform -rotate-12 transition-all duration-700
          ${mood === 'hacker' ? 'text-[#7EE7E7]' : 'text-[#EC4899]'}
        `}>
          <PawIcon size={500} />
        </div>
      </div>

      <CustomCursor mood={mood} />
      <AIAssistant mood={mood} />

      {/* Navigation */}
      <nav className={`
        fixed top-0 w-full z-40 border-b transition-all duration-500 glass-nav
        ${mood === 'hacker' ? 'bg-[#050505]/80 border-[#7EE7E7]/20' : 'bg-white/80 border-gray-100'}
      `}>
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <div
            onClick={() => scrollTo('hero')}
            className={`text-xl font-bold tracking-tight cursor-pointer clickable ${mood === 'hacker' ? 'text-[#7EE7E7]' : 'text-gray-900'}`}
          >
            It's<span className={mood === 'hacker' ? 'text-white' : 'text-[#8B5CF6]'}>.ISHITA</span>
          </div>

          <div className="flex items-center gap-6">
            <div className={`hidden md:flex gap-8 text-sm font-medium ${mood === 'hacker' ? 'text-gray-400' : 'text-gray-500'}`}>
              {['About', 'Projects', 'Skills', 'Education', 'Experience'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`hover:scale-105 transition-all clickable ${mood === 'hacker' ? 'hover:text-[#7EE7E7]' : 'hover:text-[#8B5CF6]'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={toggleMood}
              className={`
                p-2.5 rounded-full transition-all duration-300 clickable
                ${mood === 'hacker' 
                  ? 'bg-[#7EE7E7]/10 text-[#7EE7E7] hover:bg-[#7EE7E7]/20' 
                  : 'bg-gray-100 text-[#8B5CF6] hover:bg-[#F3E8FF]'}
              `}
            >
              {mood === 'hacker' ? <Terminal size={18} /> : <Cat size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-36">
        {/* Background Decorative Elements */}
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 animate-pulse ${mood === 'hacker' ? 'bg-[#7EE7E7]' : 'bg-[#B8A1FF]'}`}></div>
        <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 ${mood === 'hacker' ? 'bg-[#0E0E11]' : 'bg-[#7EE7E7]'}`}></div>

        {/* Floating shapes for light mode */}
        {mood === 'soft' && (
           <>
             <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-[#B8A1FF] opacity-40 animate-float" style={{animationDelay: '1s'}}></div>
             <div className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-[#7EE7E7] opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
           </>
        )}

        <div className="container mx-auto px-6 text-center z-10">
          <div className="inline-block mb-8 relative group clickable animate-float">
            <div className={`
              w-32 h-32 md:w-44 md:h-44 rounded-full p-1.5 mx-auto relative transition-all duration-500
              ${mood === 'hacker' 
                ? 'bg-gradient-to-r from-[#7EE7E7] to-transparent shadow-[0_0_30px_rgba(126,231,231,0.2)]' 
                : 'bg-gradient-to-tr from-[#B8A1FF] to-[#7EE7E7] shadow-[0_10px_40px_rgba(184,161,255,0.4)]'}
            `}>
              <img
                src="src/professional .jpeg"
                alt="Ishita Singh"
                className={`w-full h-full object-cover rounded-full border-4 ${mood === 'hacker' ? 'border-[#0E0E11]' : 'border-white'}`}
                onError={(e) => { e.target.onerror = null; e.target.src = "https://ui-avatars.com/api/?name=Ishita+Singh&background=0D8ABC&color=fff"; }}
              />
            </div>
            <span className="absolute -right-8 top-4 text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-12 scale-110">🐱</span>
          </div>

          <h1 className={`
            text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-[1.1]
            ${mood === 'hacker' ? 'font-mono' : 'font-display text-gray-900'}
          `}>
            System With a <br className="md:hidden" />
            <span className={`
              inline-block bg-clip-text text-transparent bg-gradient-to-r 
              ${mood === 'hacker' ? 'from-[#7EE7E7] to-green-400' : 'from-[#8B5CF6] via-[#EC4899] to-[#8B5CF6]'} 
              animate-glow
            `}>
              Soul
            </span>
          </h1>

          <p className={`
            text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed
            ${mood === 'hacker' ? 'text-gray-400' : 'text-gray-500'}
          `}>
            I build intelligent systems that think — and feel. <br className="hidden md:block"/>
            AI Researcher & Frontend Engineer bridging <span className={`font-semibold ${mood === 'hacker' ? 'text-[#7EE7E7]' : 'text-[#8B5CF6]'}`}>Logic</span> and <span className={`font-semibold ${mood === 'hacker' ? 'text-[#7EE7E7]' : 'text-[#EC4899]'}`}>Emotion</span>.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 items-center mb-24">
            <button
              onClick={() => scrollTo('projects')}
              className={`
                px-8 py-3.5 rounded-full font-medium transition-all duration-300 clickable flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1
                ${mood === 'hacker' 
                  ? 'bg-[#7EE7E7] text-black hover:bg-[#5CDCDC]' 
                  : 'bg-[#8B5CF6] text-white hover:bg-[#7C3AED] shadow-[#8B5CF6]/30'}
              `}
            >
              See My Work <ChevronRight size={18} />
            </button>
            <div className="flex gap-5 items-center px-6">
              {Object.entries(SOCIAL_LINKS).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className={`
                    transition-all transform hover:-translate-y-1 clickable
                    ${mood === 'hacker' ? 'text-gray-500 hover:text-[#7EE7E7]' : 'text-gray-400 hover:text-[#8B5CF6]'}
                  `}
                >
                  {key === 'linkedin' && <Linkedin size={22} />}
                  {key === 'github' && <Github size={22} />}
                  {key === 'instagram' && <Instagram size={22} />}
                  {key === 'leetcode' && <LeetCodeIcon size={22} />}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-40 ${mood === 'hacker' ? 'text-[#7EE7E7]' : 'text-[#8B5CF6]'}`}>
           <span className="text-xs tracking-widest uppercase mb-2 block text-center">Scroll</span>
           <div className={`w-0.5 h-12 mx-auto ${mood === 'hacker' ? 'bg-[#7EE7E7]' : 'bg-[#8B5CF6]'}`}></div>
        </div>
      </header>

      {/* About Section */}
      <Section id="about" title="How I Think" mood={mood}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Technology without intuition is just code. I approach problems with a <span className={`${mood === 'hacker' ? 'text-[#7EE7E7]' : 'text-[#8B5CF6]'} font-semibold`}>Research Mindset</span> and a <span className={`${mood === 'hacker' ? 'text-[#7EE7E7]' : 'text-[#EC4899]'} font-semibold`}>Product Heart</span>.
            </p>
            <p className="opacity-80">
              Currently pursuing my Integrated Dual Degree at <strong className={mood === 'hacker' ? 'text-[#7EE7E7]' : 'text-gray-900'}>RGIPT (2024-2029)</strong>, I focus on healthcare AI, automation, and human-centered systems.
            </p>
            <p className="opacity-80">
              I don't just train models; I design the conversations we have with them. Whether it's detecting health risks through audio or creating empathetic UI, my goal is to make machines understand us better.
            </p>

            <div className={`p-6 rounded-2xl border flex items-center gap-4 w-fit ${mood === 'hacker' ? 'border-[#7EE7E7]/30 bg-[#7EE7E7]/5 text-[#7EE7E7]' : 'border-[#8B5CF6]/20 bg-[#F3E8FF] text-[#7C3AED]'}`}>
              <MapPin size={20} />
              <span className="font-medium">India</span>
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
              <Brain size={20} />
              <span className="font-medium">AI/ML & Frontend</span>
            </div>
          </div>

          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${mood === 'hacker' ? 'from-[#7EE7E7]/20 to-transparent' : 'from-[#8B5CF6]/20 to-[#EC4899]/20'} blur-3xl rounded-full opacity-60`}></div>
            <div className={`
              relative p-8 rounded-2xl border backdrop-blur-sm shadow-xl
              ${mood === 'hacker' ? 'border-[#7EE7E7]/30 bg-black/40' : 'border-white bg-white/60'}
            `}>
              <div className="flex gap-2 mb-4">
                 <div className="w-3 h-3 rounded-full bg-red-400"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                 <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <code className="text-sm block space-y-3 font-mono">
                <span className={mood === 'hacker' ? 'text-[#B8A1FF]' : 'text-[#7C3AED]'}>class</span> <span className={mood === 'hacker' ? 'text-[#7EE7E7]' : 'text-[#EC4899]'}>Ishita</span> <span className={mood === 'hacker' ? 'text-[#B8A1FF]' : 'text-[#7C3AED]'}>extends</span> Developer {'{'}
                <div className="pl-6 space-y-1 mt-2">
                  <div className="flex gap-2">
                    <span className="text-gray-400">passion:</span>
                    <span className="text-green-500">"Building meaningful AI"</span>,
                  </div>
                  <div className="flex gap-2">
                    <span className="text-gray-400">focus:</span>
                    <span className="text-yellow-500">["NLP", "Healthcare", "UX"]</span>,
                  </div>
                  <div className="flex gap-2">
                    <span className="text-gray-400">vibe:</span>
                    <span className="text-green-500">"Calm Confidence"</span>
                  </div>
                </div>
                {'}'}
              </code>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Creations" mood={mood}>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ProjectCard
            mood={mood}
            project={{
              title: "SANRAKSHA",
              description: "AI-powered health monitoring dashboard using audio NLP to extract vitals and predict health risks. A fusion of empathy and engineering.",
              stack: ["Python", "OpenAI Whisper", "Streamlit", "ML Models"],
              awards: "Winner - CS BASE HackforHealth",
              links: [{ url: "https://github.com/Ishita-Si/SanRaksha/tree/main", icon: "link" }]
            }}
          />
          <ProjectCard
            mood={mood}
            project={{
              title: "AI Cold Email Generator",
              description: "Context-aware email generation engine. It parses resumes and job descriptions to craft perfectly tailored outreach using Groq LLMs.",
              stack: ["LangChain", "ChromaDB", "Groq", "Streamlit"],
              links: [{ url: "https://github.com/Ishita-Si/AI-Cold_Email-Generator", icon: "link" }]
            }}
          />
          <ProjectCard
            mood={mood}
            project={{
              title: "Global Climate Dashboard",
              description: "Time-series forecasting of CO2 levels. Visualizing the planet's health with ARIMA models and interactive Plotly charts.",
              stack: ["ARIMA", "Plotly", "Python", "Data Viz"],
              links: [{ url: "https://github.com/Ishita-Si/Global-Climate-Change-Dashboard", icon: "link" }]
            }}
          />
          <ProjectCard
            mood={mood}
            project={{
              title: "Gemini Clone",
              description: "A reimagined chat interface for the Gemini API. Built to explore the nuances of natural language interaction design.",
              stack: ["React.js", "Tailwind", "Gemini API"],
              links: [{ url: "https://cancan09-gemini.netlify.app/", icon: "link" }]
            }}
          />
        </div>

        {/* Explore More Link */}
        <div className="flex justify-center">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noreferrer"
            className={`
              inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 group hover:-translate-y-1
              ${mood === 'hacker' 
                ? 'bg-[#121826] text-[#7EE7E7] border border-[#7EE7E7]/30 hover:bg-[#7EE7E7] hover:text-black' 
                : 'bg-white text-[#8B5CF6] border border-[#F3E8FF] shadow-lg hover:shadow-[#B8A1FF]/40 hover:bg-[#8B5CF6] hover:text-white'}
            `}
          >
            <Github size={20} />
            Explore more projects on GitHub
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </Section>

      {/* Skills Section - Fully Expanded */}
      <Section id="skills" title="Tools I Trust" mood={mood}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <SkillCard
             title="Languages"
             icon={Code2}
             mood={mood}
             skills={["Python", "C++", "DSA", "JavaScript", "HTML5", "CSS", "SQL"]}
           />
           <SkillCard
             title="AI & GenAI Core"
             icon={Brain}
             mood={mood}
             skills={[
               "Deep Learning", "NLP", "LLMs", "Generative AI",
               "Computer Vision", "OpenAI Whisper", "Image Recognition",
               "Object Detection", "Image Segmentation", "RAG",
               "Agents", "Prompt Eng.", "Time-Series"
             ]}
           />
           <SkillCard
             title="ML Frameworks"
             icon={Layers}
             mood={mood}
             skills={[
               "PyTorch", "TensorFlow", "Keras", "Scikit-learn",
               "LangChain", "ChromaDB", "OpenCV", "SpaCy"
             ]}
           />
           <SkillCard
             title="Data Science & Viz"
             icon={BarChart}
             mood={mood}
             skills={[
               "Pandas", "NumPy", "Plotly", "Matplotlib",
               "Seaborn", "Folium", "EDA" , "SQL"
             ]}
           />
           <SkillCard
             title="Web Engineering"
             icon={Layout}
             mood={mood}
             skills={[
               "React.js", "Streamlit", "Tailwind CSS", "Bootstrap",
               "Material UI", "Gemini API"
             ]}
           />
           <SkillCard
             title="Tools & Workflow"
             icon={Wrench}
             mood={mood}
             skills={[
               "Git/GitHub", "Linux", "Figma", "Canva",
               "n8n", "MySQL", "Workflow Auto"
             ]}
           />
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education" mood={mood}>
         <div className="space-y-8 max-w-4xl mx-auto">
             {[
               {
                 institute: "Rajiv Gandhi Institute of Petroleum Technology (RGIPT)",
                 degree: "Integrated Dual Degree (B.Tech + M.Tech) in CS & AI",
                 duration: "2024 – 2029",
                 desc: "Specializing in cutting-edge AI research and computer science fundamentals."
               },
               {
                 institute: "M.I.S. International School",
                 degree: "XII CBSE (Mathematics)",
                 duration: "2022 – 2024",
                 desc: "Built strong foundations in Calculus and Physics."
               },
               {
                 institute: "Sunbeam School Ayodhya",
                 degree: "X CBSE",
                 duration: "2015 – 2022",
                 desc: "Secondary education with a focus on science and logic."
               }
             ].map((edu, idx) => (
                <div key={idx} className={`
                   relative pl-8 border-l-2 transition-all duration-300 group
                   ${mood === 'hacker' ? 'border-[#7EE7E7]/20 hover:border-[#7EE7E7]' : 'border-gray-200 hover:border-[#8B5CF6]'}
                `}>
                   {/* Dot on Timeline */}
                   <span className={`
                     absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 transition-all duration-300
                     ${mood === 'hacker' 
                       ? 'border-[#0E0E11] bg-[#7EE7E7] group-hover:scale-125 group-hover:shadow-[0_0_10px_#7EE7E7]' 
                       : 'border-white bg-[#8B5CF6] group-hover:scale-125 group-hover:shadow-lg'}
                   `}></span>

                   <div className={`
                     p-6 rounded-2xl border transition-all duration-300 ml-4
                     ${mood === 'hacker' 
                       ? 'bg-[#121826] border-[#7EE7E7]/10 group-hover:border-[#7EE7E7]/40 group-hover:bg-[#1A2333]' 
                       : 'bg-white border-gray-100 group-hover:border-[#8B5CF6]/30 group-hover:shadow-lg shadow-sm'}
                   `}>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <h3 className={`text-xl font-bold ${mood === 'hacker' ? 'text-white' : 'text-gray-900'}`}>{edu.institute}</h3>
                        <span className={`text-sm font-mono px-3 py-1 rounded-full w-fit ${mood === 'hacker' ? 'bg-[#7EE7E7]/10 text-[#7EE7E7]' : 'bg-[#F3E8FF] text-[#7C3AED]'}`}>
                          {edu.duration}
                        </span>
                      </div>
                      <h4 className={`text-lg font-medium mb-2 ${mood === 'hacker' ? 'text-gray-300' : 'text-[#8B5CF6]'}`}>{edu.degree}</h4>
                      <p className={`text-sm ${mood === 'hacker' ? 'text-gray-400' : 'text-gray-600'}`}>{edu.desc}</p>
                   </div>
                </div>
             ))}
         </div>
      </Section>

      {/* Experience & Recognition */}
      <Section id="experience" title="Where I've Built" mood={mood}>
        <div className="grid md:grid-cols-2 gap-16">
          {/* Experience */}
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <Layers className={mood === 'hacker' ? 'text-[#7EE7E7]' : 'text-[#8B5CF6]'} />
              <h3 className={`text-2xl font-bold ${mood === 'hacker' ? 'text-gray-200' : 'text-gray-900'}`}>Experience</h3>
            </div>

            <div className={`relative pl-8 border-l-2 ${mood === 'hacker' ? 'border-[#7EE7E7]/30' : 'border-[#8B5CF6]/30'}`}>
              <span className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 ${mood === 'hacker' ? 'border-[#050505] bg-[#7EE7E7]' : 'border-[#FDFCFE] bg-[#8B5CF6]'}`}></span>

              <div className="mb-1 text-sm font-semibold tracking-wide uppercase opacity-50">2024 - Present</div>
              <h4 className={`text-xl font-bold mb-2 ${mood === 'hacker' ? 'text-white' : 'text-gray-900'}`}>Yapassio Pvt. Ltd.</h4>
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${mood === 'hacker' ? 'bg-[#7EE7E7]/10 text-[#7EE7E7]' : 'bg-[#F3E8FF] text-[#7C3AED]'}`}>R&D Intern</div>
              <p className="opacity-80 leading-relaxed">
                Spearheading knowledge base creation and domain mapping. Conducting early-stage research to build scalable, intelligent AI systems.
              </p>
            </div>
          </div>

          {/* Awards */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Award className={mood === 'hacker' ? 'text-[#7EE7E7]' : 'text-[#8B5CF6]'} />
              <h3 className={`text-2xl font-bold ${mood === 'hacker' ? 'text-gray-200' : 'text-gray-900'}`}>Recognition</h3>
            </div>

            <div className="space-y-4">
              {[
                "CS BASE HackforHealth Winner (Advanced Tier)",
                "Hack for Humanity Winner",
                "IEEE Data Visualization Challenge",
                "She Builds Hackathon Finalist"
              ].map((award, i) => (
                <div
                  key={i}
                  className={`
                    p-4 rounded-xl transition-all hover:translate-x-2 flex items-center gap-4
                    ${mood === 'hacker' 
                      ? 'bg-[#121826] border border-[#7EE7E7]/10 hover:border-[#7EE7E7]/30' 
                      : 'bg-white border border-gray-100 shadow-sm hover:shadow-md'}
                  `}
                >
                  <div className={`p-2 rounded-full ${mood === 'hacker' ? 'bg-[#7EE7E7]/10 text-[#7EE7E7]' : 'bg-[#F3E8FF] text-[#8B5CF6]'}`}>
                    <Award size={18} />
                  </div>
                  <span className={`font-medium ${mood === 'hacker' ? 'text-gray-300' : 'text-gray-700'}`}>{award}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

       {/* Community */}
       <Section id="community" title="Community" mood={mood}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { role: "Computer Society Head", org: "IEEE Student Branch" },
            { role: "ML Coordinator", org: "S&T Kode Club" },
            { role: "Volunteer", org: "Arpan Social Club" },
            { role: "Campus Ambassador", org: "GirlScript Summer of Code" },
            { role: "Member", org: "Rewriting the Code" },
            { role: "Member", org: "Women Techmakers" },
            { role: "Apprentice", org: "SheFi" },
            { role: "Fellow", org: "DoraDAO" },
          ].map((comm, i) => (
             <div key={i} className={`
                p-6 rounded-2xl border transition-all hover:-translate-y-1
                ${mood === 'hacker' 
                  ? 'bg-[#121826] border-[#7EE7E7]/20 hover:border-[#7EE7E7]/50' 
                  : 'bg-white border-gray-100 shadow-sm hover:shadow-lg hover:border-[#8B5CF6]/30'}
             `}>
                <h4 className={`font-bold mb-1 ${mood === 'hacker' ? 'text-[#7EE7E7]' : 'text-[#7C3AED]'}`}>{comm.role}</h4>
                <p className={`text-sm ${mood === 'hacker' ? 'text-gray-400' : 'text-gray-500'}`}>{comm.org}</p>
             </div>
          ))}
        </div>
      </Section>

      {/* Footer / Contact */}
      <footer className={`py-24 border-t mt-20 text-center relative overflow-hidden ${mood === 'hacker' ? 'bg-[#000] border-[#7EE7E7]/20' : 'bg-gray-50 border-gray-200'}`}>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className={`text-4xl md:text-6xl font-bold mb-10 ${mood === 'hacker' ? 'text-white' : 'text-gray-900'}`}>Let's Build Something.</h2>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
             <a href="mailto:ishitasingh.work@gmail.com" className={`flex items-center justify-center gap-2 px-8 py-4 rounded-full border transition-all hover:scale-105 clickable ${mood === 'hacker' ? 'border-[#7EE7E7] text-[#7EE7E7] hover:bg-[#7EE7E7] hover:text-black' : 'border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white bg-white'}`}>
                <Mail size={20} /> Send an Email
             </a>
             <a href={SOCIAL_LINKS.linkedin} target="_blank" className={`flex items-center justify-center gap-2 px-8 py-4 rounded-full border transition-all hover:scale-105 clickable ${mood === 'hacker' ? 'border-[#7EE7E7] text-[#7EE7E7] hover:bg-[#7EE7E7] hover:text-black' : 'border-gray-300 text-gray-700 hover:bg-black hover:text-white bg-white'}`}>
                <Linkedin size={20} /> LinkedIn
             </a>
          </div>

          <div className="text-sm opacity-50 flex flex-col items-center gap-3">
            <p className={mood === 'hacker' ? 'text-gray-500' : 'text-gray-500'}>© {new Date().getFullYear()} Ishita Singh.</p>
            <p className="flex items-center gap-2">
              Built with curiosity, care, and a little cat energy
              <Cat size={16} className={mood === 'hacker' ? 'text-[#7EE7E7]' : 'text-[#8B5CF6]'} />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;