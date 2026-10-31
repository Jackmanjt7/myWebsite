import * as React from "react";
import { Link } from "gatsby";

import "../styles/site.css";
import "../styles/about.css";

export default function AboutPage(){
    return (
        <div className = "about-page">
            <header className="side">
            <div>
        <Link className="back" to="/">
            &larr; Home
        </Link>
        <h1>James Jackman</h1>
        <p className="tagline">Engineer. Logistics officer. Leader.</p>
        <nav>
          <a href="#intro">Intro</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#beyond">Beyond Work</a>
        </nav>
      </div>
      <ul className="social">
        <li><a href="mailto:jackmanjt7@gmail.com" aria-label= "Email James" title="Email"><i className="bi bi-envelope" aria-hidden="true"></i></a></li>
        <li><a href="https://github.com/Jackmanjt7" aria-label="GitHub" title="GitHub"><i className="bi bi-github" aria-hidden="true"></i></a></li>
        <li><a href="https://www.linkedin.com/in/james-jackman-2b1442125/" aria-label="LinkedIn" title="LinkedIn"><i className="bi bi-linkedin" aria-hidden="true"></i></a></li>
      </ul>
    </header>
    <main className="content">
      <section id="intro">
        <h2>Intro</h2>
        <p>I am James T. Jackman, a Logistics officer with a bachelors in Computer Science from the Statler College of Engineering, WVU. 
          I am a leader of Soldiers and a philosopher on systems and processes.</p>
        <p>After graduating from WVU, I was branched into the Ordnance Corps where I spent 4 years 
          providing continent level logistics support throughout the European theater. 
          I now Command a Company of 127 Soldiers providing world class logistics support to an MLRS Battalion 
          that provides long range precision fires.</p>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <article className="job">
          <p className="dates">[2025 - Present]</p>
          <div>
            <h3>75th Field Artillery Brigade</h3>
            <p>I have held two key leadership positions during my time at the 75th FAB</p>
              <ul>
                <li>SPO Operations Officer - Responsible for coordinating external support operations requested for the 75th Field Artillery Battalion </li>
                <li>Company Command - Responsible for the training, resourcing, and care of 127 Soldiers who provide world class sustainment to our headquarters element.. </li>
              </ul>
            <ul className="tags"><li>Operations Management</li><li>Supply Chain Management</li><li>Personnel Development</li></ul>
          </div>
        </article>
        <article className="job">
          <p className="dates">[2021 - 2025]</p>
          <div>
            <h3>18th Combat Sustainment Support Battalion</h3>
            <p>During my time at the 18th CSSB I held three key leadership positions </p>
              <ul>
                <li>Platoon Leader - Led a platoon of 46 Soldiers providing ammunition support to the European theater.</li>
                <li>Battalion AS4 - Responsible for the financial and physical resource management for a Battalion of 1200 Soldiers. </li>
                <li>Company Executive Officer - Served as the second in command of a 112 Soldier Company providing Field Feeding Teams across 8 NATO ally nations.</li>
              </ul>
            <ul className="tags"><li>Team Management</li><li>Regulatory Compliance</li><li>Communication</li></ul>
          </div>
        </article>
        <article className="job">
          <p className="dates">[2020 - 2020]</p>
          <div>
            <h3>Python Developer Intern&middot; <a href="https://scopos.tech/">Scopos</a></h3>
            <p>I developed the front-end GUI for the Athena Electronic Target System (ETS) utilizing Python and TKinter.
              This application took AWS webcalls and displayed the data in a user-friendly GUI for the end user. I also developed the Python script to automate the process of generating and uploading 
              target data to AWS S3 buckets.
            </p>
            <ul className="tags"><li>Python</li><li>Software Infrastructure</li><li>AWS</li></ul>
          </div>
        </article>
        </section>
        <section id="education">
        <h2>Education</h2>
        <article className="education">
          <p className="dates">SEPT 2025</p>
          <div>
            <h3>Captains Career Course &middot; Fort Lee, VA</h3>
          </div>
        </article>
        <article className="education">
          <p className="dates">July 2021</p>
          <div>
            <h3>Ordnance Basic Officer Leaders Course &middot; Fort Lee, VA</h3>
          </div>
        </article>
        <article className="education">
          <p className="dates">DEC 2020</p>
          <div>
            <h3>B.S. Computer Science &middot; <a href="https://www.wvu.edu/">West Virginia University</a></h3>
          </div>
        </article>
      </section>


      <section id="beyond">
        <h2>Beyond Work</h2>
        <p>In my off time I'm a proud parent of a wonderful child. I enjoy fixing cars and tinkering with electronics.</p>
      </section>


    </main>
        </div>
    );
}

export function Head() {
  return (
    <>
      <title>About | James</title>

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.2/font/bootstrap-icons.min.css"
      />
    </>
  );
}