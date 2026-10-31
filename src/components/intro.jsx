import * as React from "react";
import "../styles/intro.css";

const STORAGE_KEY = "myWebsite:introSeen";

export default function Intro({ children }) {
    const [status, setStatus] = React.useState("Checking");
    const initialDecision = React.useRef(null);

    React.useEffect(() => {
        if (initialDecision.current ===  null) {
            let alreadySeen = false;
        
            try {
                alreadySeen = sessionStorage.getItem(STORAGE_KEY) === "true";
            } catch {
                // continue without persistence if storage is unavailable
            }

            const prefersReducedMotion = window.matchMedia(
                "prefers-reduced-motion: reduce"
            ).matches;

            initialDecision.current = alreadySeen || prefersReducedMotion ? "finished" : "playing";

            try{
                sessionStorage.setItem(STORAGE_KEY, "true");
            } catch {
                // The intro can still run without stoage
            }
        }

        setStatus(initialDecision.current);
     }, []);

     React.useEffect(() => {
        if (status === "playing") {
            return;
        }

        //Fallback in case the animation-end event doesn't arrive.
        const timer = window.setTimeout(() => {
            setStatus("finished");
        }, 9500);

        return () => window.clearTimeout(timer);
    }, [status]);

    const isBlocking = status !== "finished";

    function finishIntro(){
        setStatus("finished");
    }

    function handleAnimationEnd(event){
        if (event.target === event.currentTarget && event.animationName === "james-intro-exit") {
            finishIntro();
        }
    }

    return (
    <>
      <div
        className="intro-site-content"
        inert={status === "playing" ? true : undefined}
    >
        {children}
      </div>

      {isBlocking && (
        <div
          className={`site-intro site-intro--${status}`}
          onAnimationEnd={handleAnimationEnd}
        >
          {status === "playing" && (
            <div className="site-intro__messages" aria-hidden="true">
              <p className="site-intro__line site-intro__line--first">
                Hi, I'm James
              </p>

              <p className="site-intro__line site-intro__line--second">
                Welcome to my website
              </p>
            </div>
          )}

          <button
            className="site-intro__skip"
            type="button"
            onClick={finishIntro}
          >
            Skip intro
          </button>
        </div>
      )}

      <noscript>
        <style>
          {`
            .site-intro {
              display: none !important;
            }
          `}
        </style>
        <p>
          JavaScript is disabled. Use the navigation links below to explore
          the website.
        </p>
      </noscript>
    </>
  );
}
