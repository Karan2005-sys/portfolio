import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Cpu,
  Database,
  Globe,
  Award,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Terminal
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'timeline' },
    { name: 'Achievements', id: 'achievements' }
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-300 font-sans selection:bg-emerald-500/30 relative">

      {/* Circuit Board Background Pattern */}
      <div
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0B1120]/80 backdrop-blur-md border-b border-emerald-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2 flex-shrink-0 font-bold text-xl tracking-tighter text-emerald-400">
              <Cpu className="w-6 h-6" />
              <span>KPS<span className="text-amber-500">.</span>SYS</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">

        {/* Hero Section */}
        <section id="home" className="py-20 flex flex-col-reverse md:flex-row items-center justify-between min-h-[80vh] gap-12">

          {/* Text Content */}
          <div className="flex-1 flex flex-col items-start">
            <div className="flex items-center space-x-2 text-emerald-400 font-mono mb-4 bg-emerald-950/50 px-3 py-1 rounded-md border border-emerald-800/50">
              <Terminal className="w-4 h-4" />
              <span>System Initialized...</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
              Karan Pratap Singh.
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6 tracking-tight">
              I build <span className="text-emerald-500">hardware</span> & IoT solutions.
            </h2>
            <p className="max-w-xl text-lg text-slate-400 mb-10 leading-relaxed">
              I'm an Electronics Engineering student at Rajiv Gandhi Institute of Petroleum Technology.
              I specialize in embedded systems, PCB design, and bridging the gap between physical hardware and digital networks.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="mailto:karanpratap298@gmail.com" className="flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold rounded-md transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]">
                <Mail className="w-4 h-4 mr-2" />
                Initialize Contact
              </a>
              <a href="https://github.com/Karan2005-sys" target="_blank" rel="noreferrer" className="flex items-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-emerald-400 font-medium rounded-md transition-colors border border-emerald-900/50">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/karan-pratap-singh-065508288/" target="_blank" rel="noreferrer" className="flex items-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-emerald-400 font-medium rounded-md transition-colors border border-emerald-900/50">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm font-mono text-slate-500">
              <div className="flex items-center"><Phone className="w-4 h-4 mr-2 text-amber-500"/> +91-9682005764</div>
              <div className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-amber-500"/> Jais, UP</div>
            </div>
          </div>

          {/* High-Tech Profile Photo Border */}
          <div className="relative group w-64 h-64 md:w-80 md:h-80 flex-shrink-0 mt-8 md:mt-0">
            {/* Outer dashed spinning traces */}
            <div className="absolute -inset-6 border-2 border-emerald-500/30 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
            <div className="absolute -inset-10 border border-amber-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

            {/* Core Glow Component */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 via-[#0B1120] to-amber-500 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Inner Image Frame */}
            <div className="absolute inset-1 bg-[#0B1120] rounded-full z-10 p-2 border-2 border-slate-800 shadow-inner">
              {/* Replace the src below with your actual photo URL */}
              <img
                src="/k.jpeg"
                alt="Karan Pratap Singh"
                className="w-full h-full object-cover rounded-full hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* IC Chip Nodes / Solder Pads */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-500 rounded-sm z-20 shadow-[0_0_10px_#10b981] flex items-center justify-center"><div className="w-1.5 h-1.5 bg-white rounded-full"></div></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-emerald-500 rounded-sm z-20 shadow-[0_0_10px_#10b981] flex items-center justify-center"><div className="w-1.5 h-1.5 bg-white rounded-full"></div></div>
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-amber-500 rounded-sm z-20 shadow-[0_0_10px_#f59e0b] flex items-center justify-center"><div className="w-1.5 h-1.5 bg-[#0B1120] rounded-full"></div></div>
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-amber-500 rounded-sm z-20 shadow-[0_0_10px_#f59e0b] flex items-center justify-center"><div className="w-1.5 h-1.5 bg-[#0B1120] rounded-full"></div></div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-t border-slate-800/50 relative">
          <div className="flex items-center mb-12">
            <h2 className="text-3xl font-bold text-slate-100 mr-4 font-mono">{'<'}Technical_Arsenal/{'>'}</h2>
            <div className="flex-grow h-px bg-gradient-to-r from-emerald-900 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              icon={<Cpu className="w-6 h-6 text-emerald-400" />}
              title="IoT & Embedded"
              skills={['Arduino/ESP32', 'Sensor Interfacing', 'Relay Control', 'RFID Systems', 'UART/I2C']}
            />
            <SkillCard
              icon={<Code className="w-6 h-6 text-amber-400" />}
              title="Programming"
              skills={['C++', 'Python', 'Embedded C', 'JavaScript']}
            />
            <SkillCard
              icon={<Briefcase className="w-6 h-6 text-emerald-400" />}
              title="Tools & OS"
              skills={['KiCad', 'Arduino IDE', 'VS Code', 'Linux', 'Windows', 'Docker']}
            />
            <SkillCard
              icon={<Globe className="w-6 h-6 text-amber-400" />}
              title="Web & Frameworks"
              skills={['ReactJS', 'TailwindCSS', 'HTML/CSS/JS', 'OpenCV', 'NumPy']}
            />
            <SkillCard
              icon={<Database className="w-6 h-6 text-emerald-400" />}
              title="Data & Dashboarding"
              skills={['Firebase', 'ThingSpeak', 'REST APIs', 'Real-time Dashboards']}
            />
            <SkillCard
              icon={<GraduationCap className="w-6 h-6 text-amber-400" />}
              title="Core Concepts"
              skills={['Digital Electronics', 'Analog Circuits', 'Signals & Systems', 'Microcontrollers', 'Computer Architecture']}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-slate-800/50">
          <div className="flex items-center mb-12">
            <h2 className="text-3xl font-bold text-slate-100 mr-4 font-mono">{'<'}Hardware_Projects/{'>'}</h2>
            <div className="flex-grow h-px bg-gradient-to-r from-emerald-900 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Electrochromic Display"
              date="Feb 2026 – Present"
              description="Study and prototype development of low-power electrochromic display systems. Designing initial prototype for voltage-controlled color switching."
              tags={['Electrochromism', 'Ion Transport', 'Optical Modulation']}
            />
             <ProjectCard
              title="USB HID Macro Keypad"
              date="Jan 2026 – Mar 2026"
              description="RP2040-based keypad with OLED and macro layers. Designed custom PCB and implemented macros with an OLED display for dynamic feedback."
              tags={['KiCad', 'CircuitPython', 'USB HID', 'RP2040']}
            />
            <ProjectCard
              title="Wireless Weather Station"
              date="Jan 2026 – Mar 2026"
              description="ESP32-based system with a custom 2-layer PCB for real-time weather display. Fetches and displays live weather data on a TFT screen using REST APIs."
              tags={['KiCad', 'Arduino/C++', 'ESP32', 'BME280', 'SPI TFT']}
            />
            <ProjectCard
              title="Polystyrene Waste to Hydrocarbon"
              date="Jan 2024 – Jul 2024"
              description="Thermal and catalytic degradation of plastic waste. Successfully converted polystyrene into styrene, benzene, toluene, and xylene by optimizing reaction parameters."
              tags={['Thermal cracking', 'Catalytic pyrolysis', 'Optimization']}
            />
          </div>
        </section>

        {/* Education & Leadership Section */}
        <section id="timeline" className="py-20 border-t border-slate-800/50">
          <div className="flex items-center mb-12">
            <h2 className="text-3xl font-bold text-slate-100 mr-4 font-mono">{'<'}System_Logs/{'>'}</h2>
            <div className="flex-grow h-px bg-gradient-to-r from-emerald-900 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="bg-slate-900/50 p-6 md:p-8 rounded-xl border border-slate-800">
              <h3 className="text-xl font-mono text-emerald-400 mb-8 flex items-center border-b border-emerald-900/50 pb-4">
                <GraduationCap className="w-5 h-5 mr-2"/> [Academics.exe]
              </h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-800">
                <TimelineItem
                  title="B.Tech. in Electronics Engineering"
                  subtitle="Rajiv Gandhi Institute of Petroleum Technology"
                  date="2023 - 2027"
                  details="CGPA: 6.39/10"
                />
                <TimelineItem
                  title="Senior Secondary (Class XII)"
                  subtitle="CBSE Board"
                  date="2022"
                  details="Percentage: 80.33%"
                />
                <TimelineItem
                  title="Secondary (Class X)"
                  subtitle="CBSE Board"
                  date="2020"
                  details="Percentage: 70.00%"
                />
              </div>
            </div>

            {/* PORs */}
            <div className="bg-slate-900/50 p-6 md:p-8 rounded-xl border border-slate-800">
              <h3 className="text-xl font-mono text-amber-400 mb-8 flex items-center border-b border-amber-900/50 pb-4">
                <Briefcase className="w-5 h-5 mr-2"/> [Leadership_Modules]
              </h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-800">
                <TimelineItem
                  title="Treasurer"
                  subtitle="IEEE Student Branch, RGIPT"
                  date="Oct 2025 – Present"
                  variant="amber"
                />
                <TimelineItem
                  title="Audit and Reporting Head"
                  subtitle="IEEE Student Branch, RGIPT"
                  date="Oct 2024 – Oct 2025"
                  variant="amber"
                />
                <TimelineItem
                  title="Audit and Reporting Executive"
                  subtitle="IEEE Student Branch, RGIPT"
                  date="Oct 2023 – Oct 2024"
                  variant="amber"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20 border-t border-slate-800/50">
          <div className="flex items-center mb-12">
            <h2 className="text-3xl font-bold text-slate-100 mr-4 font-mono">{'<'}Milestones/{'>'}</h2>
            <div className="flex-grow h-px bg-gradient-to-r from-emerald-900 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AchievementCard
              title="Smart India Hackathon 2024"
              award="National Finalist"
              description="Recognized as a national finalist for developing an innovative hardware solution."
            />
            <AchievementCard
              title="Kode-Kurrent Hackathon 2025"
              award="Top 3 Teams"
              description="Ranked among the top 3 teams for building a sophisticated crypto trading bot."
            />
            <AchievementCard
              title="Hydraulic Arm Challenge 2024"
              award="1st Position"
              description="Secured 1st position at Urjotsav, RGIPT's annual technical fest."
            />
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#0B1120] py-8 text-center text-slate-500 text-sm font-mono relative z-10">
        <p>Built with React & Tailwind CSS.</p>
        <p className="mt-2">© {new Date().getFullYear()} Karan Pratap Singh. System Offline.</p>
      </footer>
    </div>
  );
}

// Components

function SkillCard({ icon, title, skills }) {
  return (
    <div className="bg-slate-900 border-t-2 border-emerald-500/50 border-x border-b border-x-slate-800 border-b-slate-800 p-6 rounded-b-xl hover:border-emerald-500 transition-colors shadow-lg">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-slate-950 rounded-md border border-slate-800 mr-3">
          {icon}
        </div>
        <h3 className="text-lg font-mono font-semibold text-slate-200">{title}</h3>
      </div>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <li key={index} className="px-3 py-1 bg-[#0B1120] text-slate-300 text-xs font-mono border border-slate-800 rounded">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, date, description, tags }) {
  return (
    <div className="group relative bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-emerald-500/50 transition-all hover:-translate-y-1 overflow-hidden">
      {/* Decorative traces corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-emerald-900/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-emerald-500/30 rounded-tr-xl pointer-events-none" />

      <div className="flex justify-between items-start mb-4 relative z-10">
        <h3 className="text-xl font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">{title}</h3>
        <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-2 py-1 rounded border border-amber-400/20">{date}</span>
      </div>
      <p className="text-slate-400 mb-6 text-sm leading-relaxed relative z-10">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto relative z-10">
        {tags.map((tag, index) => (
          <span key={index} className="text-xs font-mono text-slate-400 flex items-center bg-slate-950 px-2 py-1 rounded border border-slate-800">
            <ChevronRight className="w-3 h-3 text-emerald-500 mr-1"/> {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ title, subtitle, date, details, variant = 'emerald' }) {
  const dotColor = variant === 'emerald' ? 'border-emerald-500 bg-emerald-950 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'border-amber-500 bg-amber-950 shadow-[0_0_10px_rgba(245,158,11,0.5)]';
  const dateColor = variant === 'emerald' ? 'text-emerald-400' : 'text-amber-400';

  return (
    <div className="relative pl-8 md:pl-0">
      <div className="md:flex items-center justify-between md:mb-2">
        {/* Timeline Node */}
        <div className={`absolute left-0 top-1.5 md:left-1/2 md:-ml-2 w-4 h-4 rounded-full border-2 z-10 ${dotColor}`}></div>

        <div className="md:w-[45%] md:text-right md:pr-8 mb-2 md:mb-0">
          <h4 className="text-lg font-bold text-slate-200">{title}</h4>
          <span className={`text-sm font-mono ${dateColor}`}>{date}</span>
        </div>

        <div className="md:w-[45%] md:pl-8">
          <p className="text-slate-300 font-medium">{subtitle}</p>
          {details && <p className="text-slate-500 text-sm mt-1">{details}</p>}
        </div>
      </div>
    </div>
  );
}

function AchievementCard({ title, award, description }) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative overflow-hidden group hover:border-amber-500/50 transition-colors">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <Award className="absolute -right-4 -top-4 w-24 h-24 text-slate-800/50 -rotate-12 group-hover:text-amber-900/30 transition-colors" />
      <div className="relative z-10">
        <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-bold rounded mb-3 tracking-wider">
          {award}
        </span>
        <h3 className="text-lg font-bold text-slate-200 mb-2">{title}</h3>
        <p className="text-slate-400 text-sm">{description}</p>
      </div>
    </div>
  );
}