import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp, FaMoon, FaSun,
  FaDownload, FaExternalLinkAlt, FaTrophy, FaBriefcase, FaGraduationCap,
  FaMapMarkerAlt, FaCode, FaBars, FaTimes, FaHtml5, FaCss3Alt, FaMobileAlt,
  FaPlug, FaVial, FaRobot, FaShieldAlt, FaLaptopCode, FaLock, FaPenNib,
} from "react-icons/fa";
import {
  SiReact, SiJavascript, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb,
  SiMongoose, SiJest, SiMocha, SiChai, SiDocker, SiPostman, SiGit, SiGithub,
  SiFlask, SiSocketdotio, SiJsonwebtokens, SiReactrouter, SiAxios, SiVite,
  SiTestinglibrary, SiGooglegemini,
} from "react-icons/si";

/* ============ EDIT THESE ============ */
const PROFILE_IMG = "/myPic.jpeg"; // e.g. "/profile.jpg" (put image in /public)
const CV_FILE = "/Muhammad_Faizan.pdf"; // put your CV in /public
const LINKEDIN = "https://www.linkedin.com/in/muhammad-faizan-447152336/"; // <- apni link lagao
const EMAIL = "muhammadfaizan4154@gmail.com";
const PHONE = "+92 345 7663842";
const WHATSAPP = "923457663842";
const GITHUB = "https://github.com/FaizanSb";
/* ==================================== */

const NAV = ["About", "Skills", "Experience", "Projects", "Achievements", "Contact"];

/* Tool name -> icon */
const ICONS = {
  "React.js": SiReact, React: SiReact, "React (Vite)": SiReact,
  "JavaScript (ES6+)": SiJavascript, "Vanilla JS": SiJavascript,
  "Tailwind CSS": SiTailwindcss, HTML5: FaHtml5, HTML: FaHtml5, CSS3: FaCss3Alt, CSS: FaCss3Alt,
  "Responsive Design": FaMobileAlt, "React Testing Library": SiTestinglibrary,
  "Node.js": SiNodedotjs, "Express.js": SiExpress, "REST APIs": FaPlug,
  "JWT Auth": SiJsonwebtokens, JWT: SiJsonwebtokens, Jest: SiJest, Mocha: SiMocha,
  SuperTest: FaVial, Chai: SiChai, MongoDB: SiMongodb, "Mongoose ODM": SiMongoose,
  "AI Model APIs": FaRobot, Flask: SiFlask, Git: SiGit, GitHub: SiGithub, Docker: SiDocker,
  SonarQube: FaShieldAlt, Postman: SiPostman, "VS Code": FaLaptopCode,
  "Gemini API": SiGooglegemini, "Gemini Vision API": SiGooglegemini,
  "Socket.io": SiSocketdotio, "Auth.js": FaLock, Tiptap: FaPenNib,
  "React Router": SiReactrouter, Axios: SiAxios, Vite: SiVite,
};

const SKILLS = {
  Frontend: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "Vite", "React Router", "Axios", "Responsive Design", "React Testing Library"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Jest", "Mocha", "SuperTest", "Chai"],
  Database: ["MongoDB", "Mongoose ODM", "MySQL"],
  "AI & Tools": ["Gemini API", "AI Model APIs", "Flask", "Git", "GitHub", "Docker", "SonarQube", "Postman", "VS Code", "Socket.io", "Auth.js", "Tiptap"],
};

const EXPERIENCE = [
  {
    role: "MERN Stack Developer Intern", org: "10Pearls Pakistan (Remote)", date: "Jul 2026 – Sep 2026",
    points: [
      "Strengthened full-stack skills with MERN, React.js, Tailwind CSS and REST APIs.",
      "Worked with Git/GitHub workflows: branching, pull requests, collaborative development.",
      "Used Docker, SonarQube and testing tools: React Testing Library, Chai, Jest, Mocha, SuperTest.",
    ],
  },
  {
    role: "Front-End Web Developer Intern", org: "Code Alpha (Remote)", date: "Aug 2025 – Sep 2025",
    points: [
      "Developed responsive web interfaces and reusable UI components.",
      "Delivered assigned tasks independently in a professional remote environment.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Notes App with AI Summarization", tag: "10Pearls Capstone",
    desc: "Full-stack note-taking app where users sign up, log in and manage rich-text notes with AI-powered summarization, search, sorting, pinning and a distraction-free Focus Mode. Secured with JWT httpOnly cookies, fully tested and quality-checked with SonarQube.",
    stack: ["React (Vite)", "Tailwind CSS", "Tiptap", "React Router", "Axios", "Node.js", "Express.js", "MongoDB", "JWT", "Gemini API", "Mocha", "Jest", "SonarQube"],
    link: "https://github.com/FaizanSb/cohort-9-mern-13815-muhammad",
  },
  {
    title: "AI-Based Subjective Answer Evaluation", tag: "Final Year Project",
    desc: "AI platform that evaluates subjective student answers and generates structured feedback. Gemini Vision analyzes handwritten and typed responses, cutting manual review effort.",
    stack: ["Flask", "React.js", "MongoDB", "Gemini Vision API"], link: "https://github.com/FaizanSb/PaperLensAI",
  },
  {
    title: "Real-Time Chat Application", tag: "Full-Stack",
    desc: "Instant messaging with live typing indicators, online/offline status and delivered/seen receipts. Custom MongoDB schema for users and messages.",
    stack: ["Socket.io", "React", "Express.js", "MongoDB", "Tailwind CSS"], link: "https://github.com/FaizanSb/chat-app",
  },
  {
    title: "Get Me A Chai", tag: "Funding Platform",
    desc: "Creator-funding platform with secure authentication, user profiles and transaction management, built with clean architecture and input validation.",
    stack: ["Node.js", "Express.js", "MongoDB", "Auth.js"], link: "https://github.com/FaizanSb/chai",
  },
  {
    title: "Interactive Quiz App", tag: "Frontend",
    desc: "Randomized questions, countdown timer, auto-submit on timeout and real-time score tracking with a result summary.",
    stack: ["HTML", "CSS", "Vanilla JS"], link: "https://github.com/FaizanSb/Quiz-App",
  },
];

const ACHIEVEMENTS = [
  { big: "150+", text: "DSA questions solved on NeetCode" },
  { big: "7th", text: "Position in CodeWithAffaq Coding Hackathon" },
  { big: "2026", text: "AI Foundations – OpenAI Academy" },
  { big: "2025", text: "AI Course Completion – Technology Channel" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" } }),
};

const card =
  "rounded-2xl border border-sky-100 bg-white/80 p-6 shadow-sm backdrop-blur transition-shadow hover:shadow-xl hover:shadow-sky-200/50 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:shadow-cyan-500/10";
const chip =
  "inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700 transition hover:-translate-y-0.5 dark:bg-cyan-500/10 dark:text-cyan-300";

const Tag = ({ name }) => {
  const Icon = ICONS[name];
  return (
    <span className={chip}>
      {Icon && <Icon className="text-sm" />}
      {name}
    </span>
  );
};

const Section = ({ id, title, sub, children }) => (
  <section id={id} className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20 sm:py-24">
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="mb-12 text-center">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
        {title}
        <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 dark:from-cyan-400 dark:to-indigo-500" />
      </h2>
      {sub && <p className="mt-4 text-slate-500 dark:text-slate-400">{sub}</p>}
    </motion.div>
    {children}
  </section>
);

export default function App() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem("theme") === "dark"; } catch { return false; }
  });
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(null);
  const [active, setActive] = useState("home");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    root.style.colorScheme = dark ? "dark" : "light";
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
  }, [dark]);

  /* highlight the nav link of the section currently in view */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["home", ...NAV.map((n) => n.toLowerCase())].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const send = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const input =
    "w-full rounded-xl border border-sky-100 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-cyan-400 dark:focus:ring-cyan-500/20";

  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-white via-sky-50 to-white font-sans text-slate-700 transition-colors dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-300">
      <motion.div style={{ scaleX: progress }} className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-sky-400 to-blue-600 dark:from-cyan-400 dark:to-indigo-500" />

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-sky-100 bg-white/70 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/70">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#home" className="text-xl font-extrabold text-sky-600 dark:text-cyan-400">
            Faizan<span className="text-slate-900 dark:text-white">.dev</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex" onMouseLeave={() => setHover(null)}>
            {NAV.map((n) => {
              const id = n.toLowerCase();
              return (
                <li key={n} onMouseEnter={() => setHover(id)} className="relative">
                  {hover === id && (
                    <motion.span layoutId="nav-hover" transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-sky-100 dark:bg-slate-800" />
                  )}
                  <a href={`#${id}`}
                    className={`relative z-10 block px-4 py-2 text-sm font-medium transition-colors ${
                      active === id ? "text-sky-600 dark:text-cyan-400" : "text-slate-600 dark:text-slate-300"
                    }`}>
                    {n}
                    {active === id && (
                      <motion.span layoutId="nav-active" transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-sky-500 dark:bg-cyan-400" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-sky-300/50 transition hover:-translate-y-0.5 hover:shadow-lg dark:from-cyan-500 dark:to-indigo-500 dark:shadow-cyan-500/20 sm:block">
              Hire Me
            </a>
            <button type="button" onClick={() => setDark((d) => !d)} aria-label="Toggle theme"
              className="rounded-full bg-sky-100 p-2.5 text-sky-700 transition hover:scale-110 dark:bg-slate-800 dark:text-yellow-300">
              {dark ? <FaSun /> : <FaMoon />}
            </button>
            <button type="button" className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </nav>
        {open && (
          <motion.ul initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="space-y-1 border-t border-sky-100 px-5 pb-4 dark:border-slate-800 md:hidden">
            {NAV.map((n) => (
              <li key={n}>
                <a onClick={() => setOpen(false)} href={`#${n.toLowerCase()}`}
                  className={`block rounded-lg px-3 py-2 font-medium ${active === n.toLowerCase() ? "bg-sky-100 text-sky-600 dark:bg-slate-800 dark:text-cyan-400" : ""}`}>
                  {n}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-16 sm:pt-24 md:grid-cols-2">
        <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl dark:bg-cyan-500/10" />
        <motion.div initial="hidden" animate="show" className="relative order-2 md:order-1">
          <motion.p variants={fadeUp} custom={0} className="mb-3 inline-block rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold text-sky-700 dark:bg-cyan-500/10 dark:text-cyan-300">
            👋 Hello, I'm
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-6xl">
            Muhammad <span className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent dark:from-cyan-400 dark:to-indigo-400">Faizan</span>
          </motion.h1>
          <motion.h2 variants={fadeUp} custom={2} className="mt-3 text-xl font-semibold text-slate-600 dark:text-slate-400 sm:text-2xl">
            MERN Stack Developer | Full-Stack Engineer
          </motion.h2>
          <motion.p variants={fadeUp} custom={3} className="mt-5 max-w-xl leading-relaxed">
            I build scalable full-stack apps, AI-integrated systems and responsive interfaces, with a focus on clean architecture, performance and great user experience.
          </motion.p>
          <motion.div variants={fadeUp} custom={4} className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-300/50 transition hover:-translate-y-0.5 dark:from-cyan-500 dark:to-indigo-500 dark:shadow-cyan-500/20">
              Let's Connect
            </a>
            <a href={CV_FILE} download className="flex items-center gap-2 rounded-xl border-2 border-sky-400 px-6 py-3 font-semibold text-sky-700 transition hover:bg-sky-50 dark:border-cyan-400 dark:text-cyan-300 dark:hover:bg-cyan-500/10">
              <FaDownload /> Download CV
            </a>
          </motion.div>
          <motion.div variants={fadeUp} custom={5} className="mt-8 flex items-center gap-5 text-2xl">
            <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:scale-125 hover:text-sky-600 dark:hover:text-cyan-400"><FaGithub /></a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:scale-125 hover:text-sky-600 dark:hover:text-cyan-400"><FaLinkedin /></a>
            <a href={`mailto:${EMAIL}`} aria-label="Email" className="transition hover:scale-125 hover:text-sky-600 dark:hover:text-cyan-400"><FaEnvelope /></a>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}
          className="order-1 flex justify-center md:order-2">
          <motion.div animate={{ y: [0, -14, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 p-1.5 shadow-2xl shadow-sky-300/60 dark:from-cyan-400 dark:to-indigo-600 dark:shadow-cyan-500/20">
            <div className="flex h-64 w-64 items-center justify-center overflow-hidden rounded-full bg-white dark:bg-slate-900 sm:h-80 sm:w-80">
              {PROFILE_IMG ? (
                <img src={PROFILE_IMG} alt="Muhammad Faizan" className="h-full w-full object-cover" />
              ) : (
                <span className="text-7xl font-black text-sky-500 dark:text-cyan-400">MF</span>
              )}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About Me">
        <div className="grid items-center gap-8 md:grid-cols-5">
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="leading-relaxed md:col-span-3">
            Results-driven MERN Stack Developer with strong expertise in React.js, Node.js, MongoDB and RESTful APIs. I enjoy turning ideas into scalable products, from real-time apps to AI-powered platforms, backed by a solid foundation in Data Structures, OOP and problem-solving.
            <span className="mt-4 flex items-center gap-2 font-medium text-sky-700 dark:text-cyan-300"><FaMapMarkerAlt /> Lahore, Punjab, Pakistan</span>
          </motion.p>
          <div className="grid grid-cols-2 gap-4 md:col-span-2">
            {[["5+", "Projects Built"], ["2", "Internships"], ["3.76", "CGPA (BSCS)"], ["150+", "DSA Solved"]].map(([n, l], i) => (
              <motion.div key={l} variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} whileHover={{ y: -6 }} className={`${card} text-center`}>
                <div className="text-3xl font-extrabold text-sky-600 dark:text-cyan-400">{n}</div>
                <div className="mt-1 text-sm">{l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills & Tools" sub="Technologies I work with">
        <div className="grid gap-6 sm:grid-cols-2">
          {Object.entries(SKILLS).map(([group, items], i) => (
            <motion.div key={group} variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} whileHover={{ y: -6 }} className={card}>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white"><FaCode className="text-sky-500 dark:text-cyan-400" /> {group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => <Tag key={s} name={s} />)}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Work Experience">
        <div className="relative mx-auto max-w-3xl border-l-2 border-sky-200 pl-8 dark:border-slate-700">
          {EXPERIENCE.map((e, i) => (
            <motion.div key={e.role} variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[45px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-white ring-4 ring-sky-100 dark:bg-cyan-500 dark:ring-slate-900"><FaBriefcase size={13} /></span>
              <div className={card}>
                <span className={chip}>{e.date}</span>
                <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">{e.role}</h3>
                <p className="mb-3 font-medium text-sky-600 dark:text-cyan-400">{e.org}</p>
                <ul className="list-disc space-y-1.5 pl-5 text-sm">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Featured Projects" sub="Things I've built">
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.article key={p.title} variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} whileHover={{ y: -8 }}
              className={`${card} flex flex-col ${i === 0 ? "md:col-span-2" : ""}`}>
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{p.title}</h3>
                <span className="shrink-0 rounded-md bg-gradient-to-r from-sky-500 to-blue-600 px-2.5 py-1 text-xs font-semibold text-white dark:from-cyan-500 dark:to-indigo-500">{p.tag}</span>
              </div>
              <p className="flex-1 text-sm leading-relaxed">{p.desc}</p>
              <div className="my-4 flex flex-wrap gap-2">{p.stack.map((s) => <Tag key={s} name={s} />)}</div>
              <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:underline dark:text-cyan-400">
                <FaGithub /> View Code <FaExternalLinkAlt size={11} />
              </a>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* ACHIEVEMENTS + EDUCATION */}
      <Section id="achievements" title="Achievements & Education">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div key={a.text} variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} whileHover={{ scale: 1.04 }} className={`${card} text-center`}>
              <FaTrophy className="mx-auto mb-2 text-amber-400" size={22} />
              <div className="text-3xl font-extrabold text-sky-600 dark:text-cyan-400">{a.big}</div>
              <p className="mt-1 text-sm">{a.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            ["BS Computer Science", "Government College University, Faisalabad", "CGPA 3.76 • Graduated June 2026"],
            ["Intermediate (ICS)", "Aspire College Pindi Bhattian", "85% • 2020 – 2022"],
          ].map(([t, s, d], i) => (
            <motion.div key={t} variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} className={`${card} flex gap-4`}>
              <FaGraduationCap size={30} className="mt-1 shrink-0 text-sky-500 dark:text-cyan-400" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">{t}</h3>
                <p className="text-sm">{s}</p>
                <p className="mt-1 text-sm font-medium text-sky-600 dark:text-cyan-400">{d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Let's Connect" sub="Have a project in mind? Let's build it together.">
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
            {[
              [FaEnvelope, "Email", EMAIL, `mailto:${EMAIL}`],
              [FaPhone, "Phone", PHONE, `tel:+${WHATSAPP}`],
              [FaWhatsapp, "WhatsApp", "Chat with me", `https://wa.me/${WHATSAPP}?text=Hi%20Faizan%2C%20I%20want%20to%20discuss%20a%20project`],
              [FaLinkedin, "LinkedIn", "Connect professionally", LINKEDIN],
              [FaGithub, "GitHub", "github.com/FaizanSb", GITHUB],
            ].map(([Icon, label, val, href]) => (
              <motion.a key={label} href={href} target="_blank" rel="noreferrer" whileHover={{ x: 8 }} className={`${card} flex items-center gap-4 !p-4`}>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-600 dark:bg-cyan-500/10 dark:text-cyan-300"><Icon size={20} /></span>
                <span><span className="block text-xs uppercase tracking-wide opacity-60">{label}</span><span className="font-medium text-slate-900 dark:text-white">{val}</span></span>
              </motion.a>
            ))}
          </motion.div>

          <motion.form onSubmit={send} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className={`${card} space-y-4`}>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Tell me about your project</h3>
            <input required className={input} placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input required type="email" className={input} placeholder="Your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <textarea required rows={5} className={input} placeholder="Project details, budget, timeline..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 py-3 font-semibold text-white shadow-lg shadow-sky-300/50 dark:from-cyan-500 dark:to-indigo-500 dark:shadow-cyan-500/20">
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </Section>

      <footer className="border-t border-sky-100 py-8 text-center text-sm dark:border-slate-800">
        © {new Date().getFullYear()} Muhammad Faizan. Built with React, Tailwind & Framer Motion.
      </footer>
    </div>
  );
}