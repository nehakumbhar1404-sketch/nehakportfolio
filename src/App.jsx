import { useState } from 'react';
import { ArrowDown, ArrowDownRight, ArrowUpRight, BarChart3, BookOpen, BriefcaseBusiness, Check, Code2, Database, Download, ExternalLink, GraduationCap, Layers3, Mail, Menu, MonitorCheck, Phone, ShieldCheck, Sparkles, X } from 'lucide-react';

const internships = [
  { role: 'Power BI Intern', company: 'One IT Solution', date: 'May – June 2025', text: 'Worked with datasets and created analytical dashboards to support client insights.', icon: BarChart3 },
  { role: 'Data Analytics Virtual Internship', company: 'Accenture', date: 'May 2025', text: 'Worked on data cleaning, modeling, and visualization.', icon: Database },
  { role: 'Cybersecurity Analyst Virtual Internship', company: 'Tata', date: 'May 2025', text: 'Explored IAM strategy assessments and access-management concepts.', icon: ShieldCheck },
  { role: 'Data Visualization Virtual Internship', company: 'Tata', date: 'May 2025', text: 'Built dashboards to make data easier to interpret.', icon: Layers3 },
];

const projects = [
  { number: '01', type: 'WEB DEVELOPMENT', title: 'Student Management System', text: 'A Django web application for managing student information with CRUD operations.', tags: ['Django', 'Python', 'CRUD'], icon: MonitorCheck, color: 'lavender' },
  { number: '02', type: 'DATA ANALYTICS', title: 'Sales Summary Dashboard', text: 'An interactive Power BI dashboard to visualize key sales metrics and business insights.', tags: ['Power BI', 'Data Visualization'], icon: BarChart3, color: 'mint' },
  { number: '03', type: 'AI CONCEPT', title: 'AI Career Coach', text: 'A project concept to help students explore suitable career paths and professional direction.', tags: ['Artificial Intelligence', 'Career Exploration'], icon: Sparkles, color: 'peach' },
];

const skills = [
  { title: 'Programming', items: ['Python', 'Core Java'], icon: Code2, color: 'purple' },
  { title: 'Web technologies', items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'], icon: Layers3, color: 'blue' },
  { title: 'Database', items: ['SQL'], icon: Database, color: 'green' },
  { title: 'Data analytics', items: ['Power BI', 'Excel', 'Machine Learning'], icon: BarChart3, color: 'orange' },
  { title: 'Tools', items: ['GitHub', 'Visual Studio'], icon: BriefcaseBusiness, color: 'pink' },
  { title: 'Testing', items: ['Software Testing Principles', 'SDLC'], icon: MonitorCheck, color: 'cyan' },
];

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeNotice, setResumeNotice] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return <>
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Neha Kumbhar home"><span className="brand-mark">N<span>.</span></span><span className="brand-name">Neha Kumbhar</span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
        {[['About', '#about'], ['Skills', '#skills'], ['Experience', '#experience'], ['Projects', '#projects'], ['Education', '#education']].map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
      </nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot" /> OPEN TO OPPORTUNITIES</div>
          <h1>Aspiring AI &amp;<br /><span>Data Science Graduate</span></h1>
          <p className="hero-subtitle">Hi, I’m <strong>Neha Kumbhar</strong> — an AI &amp; Data Science graduate exploring the space between thoughtful technology and real-world insights.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">View projects <ArrowDownRight size={17} /></a><a className="button button-secondary" href="#contact">Contact me <ArrowUpRight size={17} /></a></div>
          <div className="hero-meta"><span><span className="meta-dot" /> Kolhapur, Maharashtra</span><span className="meta-divider" /><span>AI &amp; Data Science · B.Tech</span></div>
        </div>
        <div className="hero-visual" aria-label="Abstract data visualization illustration">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="visual-card"><div className="visual-card-top"><span>INSIGHT / 01</span><span className="visual-menu">•••</span></div><div className="chart-title">Ideas into impact<span>↗</span></div><div className="chart"><div className="chart-grid"><i /><i /><i /></div><svg viewBox="0 0 320 120" role="img" aria-label="Rising line chart"><defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#8e77ff" stopOpacity=".28"/><stop offset="100%" stopColor="#8e77ff" stopOpacity="0"/></linearGradient></defs><path d="M0 100 C30 91,44 94,66 78 S103 82,126 64 S162 70,182 50 S218 58,236 37 S275 40,320 8 V120 H0Z" fill="url(#fill)"/><path d="M0 100 C30 91,44 94,66 78 S103 82,126 64 S162 70,182 50 S218 58,236 37 S275 40,320 8" fill="none" stroke="#9c87ff" strokeWidth="3" strokeLinecap="round"/></svg></div><div className="chart-labels"><span>START</span><span>LEARN</span><span>BUILD</span><span>GROW</span></div></div>
          <div className="float-chip chip-data"><BarChart3 size={16} /><span>Data<br /><b>with purpose</b></span></div><div className="float-chip chip-code"><Code2 size={17} /><span>Always<br /><b>learning</b></span></div><div className="visual-star">✳</div>
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
      </section>

      <section className="about section-wrap" id="about"><div className="about-label"><span className="eyebrow">A LITTLE ABOUT ME</span><span className="about-index">01 / 06</span></div><div className="about-content"><h2>Making sense of data.<br /><span>Building with intention.</span></h2><p>I’m a B.Tech graduate in Artificial Intelligence and Data Science with hands-on exposure to analytics, Power BI, cybersecurity, and software development. I enjoy turning information into clear insights and creating useful digital experiences.</p><p>I’m interested in Software Testing and Quality Assurance, Data Analytics, AI, and UI/UX design. I bring a curious mindset, a careful eye for detail, and a genuine interest in learning how technology can solve everyday problems.</p><div className="interest-line"><BookOpen size={16} /><span>When I’m away from a screen: poems, new ideas, and good design.</span></div></div></section>

      <section className="skills section-wrap" id="skills"><SectionHeading eyebrow="MY TOOLKIT" title="Skills I’m growing with" text="A foundation across code, data, and quality — with plenty more to learn."/><div className="skills-grid">{skills.map(({ title, items, icon: Icon, color }) => <article className="skill-card" key={title}><div className={`skill-icon ${color}`}><Icon size={19} /></div><h3>{title}</h3><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></section>

      <section className="experience section-wrap" id="experience"><SectionHeading eyebrow="WHERE I’VE LEARNED" title="Experience & internships" text="Virtual and hands-on experiences that helped connect classroom learning with practical work."/><div className="experience-list">{internships.map(({ role, company, date, text, icon: Icon }, i) => <article className="experience-item" key={role}><div className="experience-number">0{i + 1}</div><div className="experience-icon"><Icon size={19} /></div><div className="experience-main"><div className="experience-title"><h3>{role}</h3><span>{date}</span></div><div className="experience-company">{company}</div><p>{text}</p></div><ArrowUpRight className="experience-arrow" size={18} /></article>)}</div></section>

      <section className="projects section-wrap" id="projects"><SectionHeading eyebrow="SELECTED WORK" title="Projects with a purpose" text="A few ways I’ve explored technology, data, and ideas. Details reflect the project scope shared in my resume."/><div className="projects-grid">{projects.map(({ number, type, title, text, tags, icon: Icon, color }) => <article className={`project-card ${color}`} key={number}><div className="project-top"><span>{number} / PROJECT</span><span className="project-icon"><Icon size={19} /></span></div><div className="project-type">{type}</div><h3>{title}</h3><p>{text}</p><div className="project-footer"><div className="project-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div><span className="project-arrow" aria-label="Project details"><ArrowUpRight size={18} /></span></div></article>)}</div></section>

      <section className="education section-wrap" id="education"><div className="education-intro"><SectionHeading eyebrow="THE FOUNDATION" title="Education" text="Learning that shaped the way I think, build, and keep asking questions."/><div className="education-decoration"><GraduationCap size={28} /><span>Curiosity is a<br />lifelong course.</span></div></div><div className="education-list"><article className="education-item primary-education"><div className="education-year">B.TECH</div><div><h3>Artificial Intelligence and Data Science</h3><p>Dr. J. J. Magdum College of Engineering<br />Shivaji University</p></div><span className="education-score">81%</span></article><article className="education-item"><div className="education-year">HSC</div><div><h3>Higher Secondary Certificate</h3><p>R. K. Junior College, Gadhinglaj</p></div><span className="education-score">61%</span></article><article className="education-item"><div className="education-year">SSC</div><div><h3>Secondary School Certificate</h3><p>Jaguti High School, Gadhinglaj</p></div><span className="education-score">76.80%</span></article></div></section>

      <section className="contact section-wrap" id="contact"><div className="contact-copy"><span className="eyebrow">HAVE A ROLE OR IDEA IN MIND?</span><h2>Let’s make<br /><span>something meaningful.</span></h2><p>I’m open to entry-level opportunities in Software Testing / QA, Data Analytics, and technical roles. I’d be glad to connect.</p><a className="button button-light" href="mailto:nehakumbhar1404@gmail.com">Write me an email <ArrowUpRight size={17} /></a></div><div className="contact-links"><a href="mailto:nehakumbhar1404@gmail.com"><span className="contact-icon"><Mail size={18} /></span><span><small>EMAIL</small>nehakumbhar1404@gmail.com</span><ArrowUpRight size={16} /></a><a href="tel:+919322809232"><span className="contact-icon"><Phone size={18} /></span><span><small>PHONE</small>+91 93228 09232</span><ArrowUpRight size={16} /></a><a href="https://linkedin.com/in/neha-kumbhar-45b2b5257" target="_blank" rel="noreferrer"><span className="contact-icon"><ExternalLink size={18} /></span><span><small>LINKEDIN</small>Connect with me</span><ExternalLink size={15} /></a><a href="https://github.com/nehakumbhar1404-sketch" target="_blank" rel="noreferrer"><span className="contact-icon"><Code2 size={18} /></span><span><small>GITHUB</small>Explore my GitHub</span><ExternalLink size={15} /></a><button className="resume-link" onClick={() => setResumeNotice(true)}><span className="contact-icon"><Download size={18} /></span><span><small>RESUME</small>Download resume</span><ArrowDown size={16} /></button></div><div className="resume-note" aria-live="polite">{resumeNotice && <><span><Check size={15} /></span> Add your resume PDF to the <code>public</code> folder to enable this download.</>}</div></section>
    </main>

    <footer className="site-footer"><a className="footer-brand" href="#home">Neha Kumbhar<span>.</span></a><span>Thoughtfully made · Kolhapur, India</span><span>© {new Date().getFullYear()} Neha Kumbhar</span></footer>
  </>;
}

export default App;
