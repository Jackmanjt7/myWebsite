import * as React from "react";
import { Link, withPrefix } from "gatsby";
import Intro from "../components/intro";

import "../styles/site.css";
import "../styles/home.css";

const sections = [
  {
    id: "blog",
    label: "Blog",
    path: "/blog/",
    image: "/images/blog.jpg",
  },
  {
    id: "projects",
    label: "Projects",
    path: "/projects/",
    image: "/images/projects.jpg",
  },
  {
    id: "photography",
    label: "Photography",
    path: "/photography/",
    image: "/images/photography.jpg",
  },
  {
    id: "about",
    label: "About",
    path: "/about/",
    image: "/images/about.jpg",
  },
];

export default function HomePage() {
  const [hoveredSection, setHoveredSection] = React.useState(null);
  const [focusedSection, setFocusedSection] = React.useState(null);

  const activeSection = hoveredSection ?? focusedSection;

  return (
    <Intro>
    <main className="home-page">
      <div className="home-backgrounds" aria-hidden="true">
        {sections.map((section) => (
          <div
            key={section.id}
            className={
              activeSection === section.id
                ? "home-background is-active"
                : "home-background"
            }
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(0, 0, 0, 0.45),
                  rgba(0, 0, 0, 0.45)
                ),
                url("${withPrefix(section.image)}")
              `,
            }}
          />
        ))}
      </div>

      <nav className="home-grid" aria-label="Main navigation">
        {sections.map((section) => (
          <Link
            key={section.id}
            className="home-tile"
            to={section.path}
            onMouseEnter={() => setHoveredSection(section.id)}
            onMouseLeave={() => setHoveredSection(null)}
            onFocus={() => setFocusedSection(section.id)}
            onBlur={() => setFocusedSection(null)}
          >
            <span>{section.label}</span>
          </Link>
        ))}
      </nav>
    </main>
    </Intro>
  );
}

export function Head() {
  return (
    <>
      <html lang="en" />
      <title>Home | James</title>
      <meta
        name="description"
        content="James Jackman's personal website: blog, projects, photography, and about."
      />
    </>
  );
}