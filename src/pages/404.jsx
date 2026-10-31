import * as React from "react";
import { Link } from "gatsby";

import "../styles/site.css";

export default function NotFoundPage() {
  return (
    <main
      style={{
        maxWidth: "40rem",
        margin: "0 auto",
        padding: "6rem 1.5rem",
        lineHeight: 1.6,
      }}
    >
      <h1>Page not found</h1>

      <p>
        That page doesn’t exist, or it may have moved.
      </p>

      <Link to="/" style={{ color: "var(--accent)" }}>
        &larr; Return home
      </Link>
    </main>
  );
}

export function Head() {
  return <title>Page Not Found | James</title>;
}