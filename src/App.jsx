import { useState, useEffect } from "react";
import { content } from "./data.js";

function useLang() {
  const [lang, setLang] = useState("ar");
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = content[lang].dir;
  }, [lang]);
  return [lang, setLang];
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function App() {
  const [lang, setLang] = useLang();
  const t = content[lang];

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <span className="nav-brand">ismail.dev</span>
          <ul className="nav-links">
            <li><button onClick={() => scrollTo("about")}>{t.nav.about}</button></li>
            <li><button onClick={() => scrollTo("projects")}>{t.nav.projects}</button></li>
            <li><button onClick={() => scrollTo("skills")}>{t.nav.skills}</button></li>
            <li><button onClick={() => scrollTo("certs")}>{t.nav.certs}</button></li>
            <li><button onClick={() => scrollTo("contact")}>{t.nav.contact}</button></li>
          </ul>
          <button className="lang-toggle" onClick={() => setLang(lang === "ar" ? "en" : "ar")}>
            {t.langSwitch}
          </button>
        </div>
      </nav>

      <header className="hero container">
        <div className="hero-terminal">{t.hero.prompt}<span className="cursor" /></div>
        <h1>{t.hero.name}</h1>
        <p className="role">{t.hero.role}</p>
        <div className="status-panel">
          <span className="status-dot" />
          {t.hero.status}
        </div>
        <div>
          <a className="btn" href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>
            {t.hero.cta}
          </a>
        </div>
      </header>

      <section id="about">
        <div className="container">
          <div className="section-eyebrow">01</div>
          <h2>{t.about.title}</h2>
          <p className="about-text">{t.about.text}</p>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <div className="section-eyebrow">02</div>
          <h2>{t.projects.title}</h2>
          {t.projects.items.map((p) => (
            <div className="project-card" key={p.name}>
              <div className="project-head">
                <h3>{p.name}</h3>
                <span className="project-tag">{p.tag}</span>
              </div>
              <div className="project-stack">{p.stack}</div>
              <p className="project-desc">{p.desc}</p>
              <ul className="project-points">
                {p.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <div className="section-eyebrow">03</div>
          <h2>{t.skills.title}</h2>
          <div className="skills-grid">
            {t.skills.groups.map((g) => (
              <div key={g.label}>
                <div className="skill-group-label">{g.label}</div>
                <div className="skill-chips">
                  {g.items.map((i) => <span className="skill-chip" key={i}>{i}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certs">
        <div className="container">
          <div className="section-eyebrow">04</div>
          <h2>{t.certs.title}</h2>
          <ul className="cert-list">
            {t.certs.items.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="section-eyebrow">05</div>
          <h2>{t.contact.title}</h2>
          <p className="contact-text">{t.contact.text}</p>
          <div className="contact-links">
            <a className="contact-link" href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
            <a className="contact-link" href={`https://${t.contact.github}`} target="_blank" rel="noreferrer">{t.contact.github}</a>
            <a className="contact-link" href={`https://${t.contact.linkedin}`} target="_blank" rel="noreferrer">{t.contact.linkedin}</a>
          </div>
        </div>
      </section>

      <footer>{t.footer}</footer>
    </>
  );
}
