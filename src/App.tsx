import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  aboutContent,
  contactContent,
  cvContent,
  navItems,
  newsItems,
  profile,
  publications,
  researchContent,
  researchFocusPreview,
  siteMetadata,
} from "./siteData";

function upsertMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="site-section" id={id} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{title}</h2>
      {children}
    </section>
  );
}

function AvailableLinks({ className = "link-row" }: { className?: string }) {
  const links = contactContent.socialLinks.filter(
    (link): link is typeof link & { url: string } => Boolean(link.url),
  );

  return (
    <div className={className}>
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
      {links.map((link) => (
        <ExternalLink key={link.label} href={link.url}>
          {link.label}
        </ExternalLink>
      ))}
      <ExternalLink href={cvContent.researchExperience[0].organizationUrl}>Lab</ExternalLink>
    </div>
  );
}

function PublicationEntry({ publication }: { publication: (typeof publications)[number] }) {
  const [copied, setCopied] = useState(false);

  async function copyBibtex() {
    try {
      await navigator.clipboard.writeText(publication.bibtex);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <article className="publication-entry">
      <p className="publication-venue">
        {publication.venue}, {publication.year}
      </p>
      <h3>{publication.title}</h3>
      <p className="authors">{publication.authors.join(", ")}.</p>
      <p>{publication.description}</p>
      <div className="paper-links" aria-label={`Links for ${publication.title}`}>
        <ExternalLink href={publication.doiUrl}>DOI</ExternalLink>
        {publication.pdfUrl ? <ExternalLink href={publication.pdfUrl}>PDF</ExternalLink> : null}
        {publication.ieeeXploreUrl ? <ExternalLink href={publication.ieeeXploreUrl}>IEEE Xplore</ExternalLink> : null}
        <button type="button" onClick={copyBibtex}>
          {copied ? "BibTeX copied" : "Copy BibTeX"}
        </button>
      </div>
      <p className="publication-license">Licensed under CC BY 4.0.</p>
    </article>
  );
}

function NewsList() {
  return (
    <div className="news-list">
      {newsItems.map((item) => (
        <article className="news-item" key={item.url}>
          <p className="news-meta">
            {item.source} · {item.date}
          </p>
          <h3>
            <ExternalLink href={item.url}>{item.title}</ExternalLink>
          </h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const personSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Person",
      name: profile.name,
      email: `mailto:${profile.email}`,
      jobTitle: profile.headline,
      affiliation: [
        {
          "@type": "CollegeOrUniversity",
          name: "Stony Brook University",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "SUNY Korea",
        },
      ],
      knowsAbout: profile.researchKeywords,
      sameAs: contactContent.socialLinks.flatMap((link) => (link.url ? [link.url] : [])),
    }),
    [],
  );

  useEffect(() => {
    document.title = siteMetadata.title;
    upsertMeta('meta[name="description"]', "name", "description", siteMetadata.description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", siteMetadata.title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", siteMetadata.description);
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="topbar">
        <nav aria-label="Primary navigation">
          <a className="site-name" href="#">
            {profile.name}
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-controls="primary-menu"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
          <ul id="primary-menu" className={isMenuOpen ? "is-open" : ""}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="page" id="main-content" tabIndex={-1}>
        <header className="profile-intro">
          <div className="profile-copy">
            <h1>{profile.name}</h1>
            <p className="role">{profile.homeRoles[1]}</p>
            <p className="affiliation">B.S. Computer Science Student, Stony Brook University / SUNY Korea</p>
          </div>
          {profile.headshotUrl ? (
            <img className="profile-photo" src={profile.headshotUrl} alt={`Portrait of ${profile.name}`} />
          ) : null}
          <AvailableLinks />
        </header>

        <Section id="about" title="About">
          <div className="prose">
            <p>{aboutContent.paragraphs[0]}</p>
            <p>{aboutContent.paragraphs[1]}</p>
          </div>
          <aside className="beyond-lab" aria-labelledby="beyond-lab-title">
            <h3 id="beyond-lab-title">{aboutContent.beyondLabTitle}</h3>
            <p>{aboutContent.outsideResearch}</p>
          </aside>
        </Section>

        <Section id="research" title="Research">
          <div className="prose">
            <p>{researchContent.overview}</p>
            <p>{researchContent.currentDirection}</p>
          </div>
        </Section>

        <Section id="publications" title="Publications">
          <PublicationEntry publication={publications[0]} />
        </Section>

        <Section id="news" title="News">
          <NewsList />
        </Section>

        <Section id="interests" title="Research Interests">
          <ul className="interest-list">
            {researchFocusPreview.map((focus) => (
              <li key={focus.title}>
                <strong>{focus.title}.</strong> {focus.description}
              </li>
            ))}
            {researchContent.themes.slice(2).map((theme) => (
              <li key={theme.title}>
                <strong>{theme.title}.</strong> {theme.description}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="education" title="Education and Research Experience">
          <div className="timeline">
            {cvContent.education.map((item) => (
              <article className="timeline-row" key={item.institution}>
                <div>
                  <h3>{item.institution}</h3>
                  <p className="date inline-date">{item.date}</p>
                  <p>{item.degree}</p>
                </div>
              </article>
            ))}
            {cvContent.researchExperience.map((item) => (
              <article className="timeline-row" key={`${item.role}-${item.organization}`}>
                <div>
                  <h3>
                    {item.role},{" "}
                    <ExternalLink href={item.organizationUrl}>{item.organization}</ExternalLink>
                  </h3>
                  <p className="date inline-date">{item.date}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="contact-block">
            <p>{contactContent.message}</p>
            <a className="email-link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <AvailableLinks className="link-row contact-links" />
          </div>
        </Section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </>
  );
}

export default App;
