import { useEffect, useState } from 'react'
import './App.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const navigation = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Experience', 'experience'],
  ['Contact', 'contact'],
]

const skillGroups = [
  { title: 'Programming', icon: '</>', skills: ['C++', 'Java', 'Python', 'JavaScript'] },
  { title: 'Frontend', icon: '◫', skills: ['HTML', 'CSS', 'JavaScript', 'React.js'] },
  { title: 'Backend', icon: '⌘', skills: ['Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Database', icon: '◉', skills: ['MongoDB', 'SQL'] },
  { title: 'AI / ML', icon: '✳', skills: ['Python', 'Machine Learning', 'TensorFlow', 'OpenCV'] },
  { title: 'Tools', icon: '⌁', skills: ['Git', 'GitHub', 'VS Code', 'Postman'] },
]

const projects = [
  {
    number: '01',
    title: 'AI Interview Preparator',
    category: 'Generative AI · Full stack',
    description: 'An AI-powered preparation platform that turns a job description and candidate profile into focused interview questions, skill-gap insights, and a structured study plan.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Gemini API'],
    visual: 'interview',
    github: '',
    demo: '',
  },
  {
    number: '02',
    title: 'Unified Service Marketplace',
    category: 'Product concept · Full stack',
    description: 'A digital marketplace concept connecting customers with local service providers through a simple, modern booking experience.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB / Firebase'],
    visual: 'marketplace',
    github: '',
    demo: '',
  },
  {
    number: '03',
    title: 'Computer Vision',
    category: 'Artificial intelligence · Vision',
    description: 'An applied computer vision project exploring face detection and recognition with OpenCV and practical image-processing workflows.',
    technologies: ['Python', 'OpenCV', 'AI / ML'],
    visual: 'vision',
    github: '',
    demo: '',
  },
  {
    number: '04',
    title: 'IoT Smart Monitoring',
    category: 'Internet of Things · Embedded',
    description: 'An IoT-based monitoring and security concept that brings sensor data and ESP32 connectivity together for practical environment awareness.',
    technologies: ['ESP32', 'IoT', 'Sensors'],
    visual: 'iot',
    github: '',
    demo: '',
  },
]

const journey = [
  {
    title: 'AI / ML Training & Internship',
    organization: 'CTTC Bhubaneswar',
    date: 'Date to be added',
    description: 'Hands-on learning in artificial intelligence and machine learning concepts, with a focus on applying them to practical problems.',
    tags: ['Artificial Intelligence', 'Machine Learning'],
  },
  {
    title: 'Web Development Internship',
    organization: 'Prodigy InfoTech',
    date: 'Date to be added',
    description: 'Applied web development fundamentals while building responsive interfaces and strengthening practical project skills.',
    tags: ['Frontend', 'Web Development'],
  },
  {
    title: 'IoT Training',
    organization: 'College / Training Program',
    date: 'Date to be added',
    description: 'Explored connected devices, sensors, and embedded systems through an Internet of Things learning program.',
    tags: ['ESP32', 'Sensors', 'IoT'],
  },
  {
    title: 'Hackathon / Smart India Hackathon',
    organization: 'Project / Team Achievement',
    date: 'Update participation details',
    description: 'A collaborative opportunity to shape a solution, work through constraints, and learn from a team-based innovation challenge.',
    tags: ['Problem solving', 'Teamwork'],
  },
]

function ArrowIcon({ diagonal = false }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="icon">
      {diagonal ? (
        <path d="M6 14 14 6M6.5 6H14v7.5" />
      ) : (
        <path d="M3.5 10h12m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

function SocialLinks({ compact = false }) {
  return (
    <div className={`social-links${compact ? ' social-links--compact' : ''}`} aria-label="Social links">
      <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4.3 1.4-4.3-2.4-6-2.8m12 5v-3.2a2.8 2.8 0 0 0-.8-2.2c2.7-.3 5.6-1.3 5.6-6A4.7 4.7 0 0 0 18.5 6.5a4.4 4.4 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6.2 0C6.4 3 5.4 3.3 5.4 3.3a4.4 4.4 0 0 0-.1 3.2 4.7 4.7 0 0 0-1.3 3.3c0 4.7 2.9 5.7 5.6 6a2.8 2.8 0 0 0-.8 2.2V21" /></svg>
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9v10M5 5v.01M10 19v-6a4 4 0 0 1 8 0v6m-8-10v10" /></svg>
      </a>
      <a href="mailto:hello@example.com" aria-label="Email">
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
      </a>
    </div>
  )
}

function ProjectVisual({ type }) {
  return (
    <div className={`project-visual project-visual--${type}`} aria-hidden="true">
      <div className="visual-window">
        <div className="visual-window__top"><span /><span /><span /><i>portfolio / projects</i></div>
        {type === 'interview' && (
          <div className="visual-interview">
            <div className="visual-label">PREPARATION OVERVIEW <span>● READY</span></div>
            <div className="visual-score"><strong>Interview</strong><span>Personalized practice plan</span></div>
            <div className="visual-bars"><i /><i /><i /></div>
            <div className="visual-pills"><b>Technical</b><b>Behavioral</b><b>Skill gaps</b></div>
          </div>
        )}
        {type === 'marketplace' && (
          <div className="visual-market">
            <div className="visual-label">FIND A LOCAL EXPERT <span>↗</span></div>
            <div className="visual-search">⌕ &nbsp; What service do you need?</div>
            <div className="visual-market-grid"><b>⌂<small>Home repair</small></b><b>✳<small>Wellness</small></b><b>⌁<small>Creative</small></b></div>
          </div>
        )}
        {type === 'vision' && (
          <div className="visual-vision">
            <div className="vision-frame"><span /><i /><b>DETECTION · ACTIVE</b></div>
            <div className="vision-caption"><strong>Vision pipeline</strong><small>OpenCV · Image analysis</small></div>
          </div>
        )}
        {type === 'iot' && (
          <div className="visual-iot">
            <div className="visual-label">DEVICE STATUS <span>● CONNECTED</span></div>
            <div className="iot-reading"><strong>24.8°</strong><span>Environment monitor</span></div>
            <svg viewBox="0 0 300 70" preserveAspectRatio="none"><path d="M0 55 C25 49 26 34 49 39S78 51 98 34 130 45 150 30 180 48 203 26 231 38 251 19 275 28 300 9" /></svg>
            <div className="iot-foot"><span>ESP32</span><span>LIVE SENSOR DATA</span></div>
          </div>
        )}
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  })
  const [formMessage, setFormMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add('has-reveal')
    const updateScrollState = () => setScrolled(window.scrollY > 24)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })

    const sections = navigation
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.1, 0.25, 0.5] },
    )
    sections.forEach((section) => observer.observe(section))

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))

    return () => {
      window.removeEventListener('scroll', updateScrollState)
      observer.disconnect()
      revealObserver.disconnect()
      document.documentElement.classList.remove('has-reveal')
    }
  }, [])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setFormMessage('')

  const response = await fetch(
    `${API_URL}/api/contact`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }
  )
    
    const data = await response.json()

      if (!response.ok || !data.success) {
        setFormMessage(data.message || 'Your message could not be sent. Please try again.')
        return
      }

      setFormMessage('Thanks for reaching out. I will be in touch soon.')
      setFormData({ name: '', email: '', mobile: '', subject: '', message: '' })
    } catch (error) {
      console.error('Contact form error:', error)
      setFormMessage('Unable to connect to the server. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
        <div className="nav-shell">
          <a href="#home" className="brand" onClick={closeMenu} aria-label="Ramachandra Moharana, home">
            <span className="brand-mark">RM</span>
            <span>RAMACHANDRA</span>
          </a>
          <button
            className={`menu-toggle${menuOpen ? ' menu-toggle--open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span />
          </button>
          <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label="Main navigation">
            {navigation.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={activeSection === id ? 'is-active' : ''}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
          </nav>
          <a className="button button--small button--primary header-cta" href="#contact">
            Let&apos;s Talk <ArrowIcon diagonal />
          </a>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Computer Science Student &amp; AI/ML Engineer</p>
            <p className="hero-intro">Hello, I&apos;m</p>
            <h1>Ramachandra<br /><span>Moharana.</span></h1>
            <p className="hero-role">AI/ML Engineer <span className="role-divider">|</span> Full-Stack Developer</p>
            <p className="hero-description">
              Computer Science Engineering student passionate about Artificial Intelligence,
              Machine Learning, and full-stack development. I build practical, user-focused
              applications by bringing intelligent systems and modern web technologies together.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#projects">View My Projects <ArrowIcon /></a>
              <a className="button button--secondary" href="/resume.pdf" download>Download CV <ArrowIcon diagonal /></a>
            </div>
            <div className="hero-social">
              <span className="social-caption">CONNECT</span>
              <SocialLinks />
            </div>
          </div>
          <div className="hero-art">
            <div className="portrait-frame">
              <div className="portrait-frame__accent" />
              <img src="/profile%20pht.jpg" alt="Portrait of Ramachandra Moharana" />
              <span className="portrait-index">01 / ENGINEER IN PROGRESS</span>
            </div>
            <div className="floating-note">
              <span className="note-icon">✳</span>
              <span><strong>AI / ML</strong><small>Building intelligent solutions</small></span>
            </div>
            <span className="hero-art-caption">Curious by nature. Driven to build.</span>
          </div>
          <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
        </section>

        <section className="section section--about" id="about">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">A little about me</p>
              <h2>Building with <span>purpose.</span></h2>
            </div>
            <div className="about-layout reveal">
              <div className="about-intro">
                <h3>About Me</h3>
                <p>
                  I&apos;m a Computer Science Engineering student interested in the ways
                  intelligent systems can make everyday tools more useful. I enjoy moving
                  between machine learning experiments and full-stack implementation—turning
                  ideas into considered, real-world projects.
                </p>
                <p>
                  I value clear problem solving, steady learning, and building experiences
                  that work well for the people who use them.
                </p>
                <div className="about-actions">
                  <a className="text-link" href="/resume.pdf" download>View Resume <ArrowIcon diagonal /></a>
                  <a className="text-link" href="#projects">Explore Projects <ArrowIcon /></a>
                </div>
              </div>
              <div className="about-facts" aria-label="Profile highlights">
                <article className="fact-card"><span className="fact-number">CSE</span><span className="fact-label">Computer Science<br />Engineering</span></article>
                <article className="fact-card"><span className="fact-number">AI/ML</span><span className="fact-label">Focus<br />Area</span></article>
                <article className="fact-card"><span className="fact-number">Full Stack</span><span className="fact-label">End-to-end<br />Development</span></article>
                <article className="fact-card"><span className="fact-number">Curious</span><span className="fact-label">Always<br />Learning</span></article>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--skills" id="skills">
          <div className="section-wrap">
            <div className="section-heading section-heading--center">
              <p className="eyebrow">Tools of the trade</p>
              <h2>Technical <span>Skills</span></h2>
              <p className="section-lede">A growing toolkit across software development and applied AI.</p>
            </div>
            <div className="skills-grid reveal">
              {skillGroups.map((group) => (
                <article className="skill-card" key={group.title}>
                  <div className="skill-card__head"><span className="skill-icon">{group.icon}</span><h3>{group.title}</h3></div>
                  <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--projects" id="projects">
          <div className="section-wrap">
            <div className="projects-heading">
              <div className="section-heading">
                <p className="eyebrow">Selected work &amp; explorations</p>
                <h2>Featured <span>Projects</span></h2>
              </div>
              <p className="section-lede">Ideas made tangible through thoughtful engineering and experimentation.</p>
            </div>
            <div className="projects-grid reveal">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <ProjectVisual type={project.visual} />
                  <div className="project-card__body">
                    <div className="project-meta"><span>{project.category}</span><span>{project.number}</span></div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="technology-list">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
                    <div className="project-links">
                      {project.github ? (
                        <a href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon diagonal /></a>
                      ) : (
                        <button type="button" disabled title="Add this project's GitHub URL">GitHub <ArrowIcon diagonal /></button>
                      )}
                      {project.demo ? (
                        <a href={project.demo} target="_blank" rel="noreferrer">Live Demo <ArrowIcon diagonal /></a>
                      ) : (
                        <button type="button" disabled title="Add this project's live demo URL">Live Demo <ArrowIcon diagonal /></button>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="projects-footer"><a href="#contact" className="button button--secondary">View All Projects <ArrowIcon /></a></div>
          </div>
        </section>

        <section className="section section--journey" id="experience">
          <div className="section-wrap">
            <div className="journey-layout reveal">
              <div className="journey-sidebar">
                <p className="eyebrow">Learning by doing</p>
                <h2>Experience &amp;<br /><span>Learning Journey</span></h2>
                <p className="section-lede">A work in progress—shaped by training, projects, and the people I learn alongside.</p>
                <div className="education-card">
                  <span className="education-icon">↗</span>
                  <p className="eyebrow">Education</p>
                  <h3>B.Tech in Computer Science &amp; Engineering</h3>
                  <dl>
                    <div><dt>University</dt><dd>Add university</dd></div>
                    <div><dt>College</dt><dd>Add college</dd></div>
                    <div><dt>CGPA</dt><dd>Add CGPA</dd></div>
                    <div><dt>Graduation</dt><dd>Add year</dd></div>
                  </dl>
                </div>
              </div>
              <div className="timeline">
                {journey.map((item, index) => (
                  <article className="timeline-item" key={item.title}>
                    <span className="timeline-marker">{String(index + 1).padStart(2, '0')}</span>
                    <div className="timeline-content">
                      <span className="timeline-date">{item.date}</span>
                      <h3>{item.title}</h3>
                      <p className="timeline-org">{item.organization}</p>
                      <p className="timeline-description">{item.description}</p>
                      <ul className="technology-list">{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section--contact" id="contact">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">Have something in mind?</p>
              <h2>Let&apos;s build something <span>together.</span></h2>
            </div>
            <div className="contact-layout reveal">
              <div className="contact-copy">
                <p>Have a project idea, internship opportunity, or collaboration in mind? Feel free to get in touch.</p>
                <div className="contact-details">
                  <div><span className="contact-detail-icon">@</span><span><small>Email</small><strong>Add email address</strong></span></div>
                  <div><span className="contact-detail-icon">⌖</span><span><small>Phone</small><strong>Add phone number</strong></span></div>
                  <div><span className="contact-detail-icon">⌂</span><span><small>Location</small><strong>Add location</strong></span></div>
                </div>
                <div className="contact-social"><span className="social-caption">FIND ME ONLINE</span><SocialLinks /></div>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>Full Name<input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} required /></label>
                  <label>Email Address<input type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleInputChange} required /></label>
                </div>
                <div className="form-row">
                  <label>Mobile Number <span className="optional">(optional)</span><input type="tel" name="mobile" placeholder="+91" value={formData.mobile} onChange={handleInputChange} /></label>
                  <label>Subject<input type="text" name="subject" placeholder="How can I help?" value={formData.subject} onChange={handleInputChange} required /></label>
                </div>
                <label>Message<textarea name="message" rows="5" placeholder="Tell me a little about it..." value={formData.message} onChange={handleInputChange} required /></label>
                <div className="form-footer">
                  <button className="button button--primary" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'} <ArrowIcon />
                  </button>
                  <span className="form-note">Your details are only used to respond to your message.</span>
                </div>
                {formMessage && <p className="form-message" role="status">{formMessage}</p>}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <a href="#home" className="brand"><span className="brand-mark">RM</span><span>RAMACHANDRA MOHARANA</span></a>
          <p>AI/ML Engineer <span>|</span> Full-Stack Developer</p>
          <SocialLinks compact />
          <nav aria-label="Footer navigation">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((label) => (
              <a href={`#${label.toLowerCase()}`} key={label}>{label}</a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom section-wrap">
          <p>© 2026 Ramachandra Moharana. All rights reserved.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
