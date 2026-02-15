import React, { useState, useEffect } from "react";
import { Play } from "lucide-react";
import profilePic from "../../img/Profile-pic-1.jpg";
import profilePic2 from "../../img/Profile-pic-2.jpg";
import profilePic3 from "../../img/Profile-pic-3.jpg";
import squarePic from "../../img/square-pic.jpg";

const WORDS = ["Brand", "Reach", "Revenue", "Audience"];
const TYPING_SPEED = 150;
const DELETING_SPEED = 75;
const DELAY_BETWEEN_WORDS = 2000;

const Hero = () => {
  // Typewriter State
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = WORDS[textIndex % WORDS.length];

    const tick = () => {
      setDisplayedText((prev) => {
        if (isDeleting) {
          return currentWord.substring(0, prev.length - 1);
        } else {
          return currentWord.substring(0, prev.length + 1);
        }
      });

      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), DELAY_BETWEEN_WORDS);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => prev + 1);
      }
    };

    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const timer = setTimeout(
      tick,
      isDeleting && displayedText === currentWord ? DELAY_BETWEEN_WORDS : speed,
    );

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex]);

  return (
    <section className="hero">
      {/* Background Ambience */}
      <div
        className="bg-glow"
        style={{ top: "20%", left: "50%", transform: "translateX(-50%)" }}
      ></div>
      <div
        className="bg-glow"
        style={{
          bottom: 0,
          right: "-5rem",
          opacity: 0.15,
          background: "var(--accent)",
        }}
      />

      <div className="container hero-container-centered">
        {/* Centered Content */}
        <div className="hero-content-centered">
          <div className="ai-badge">
            <div className="ai-badge-dot"></div>
            <span>AI-Powered Content Engine</span>
          </div>

          <h1>
            Supercharge your content,
            <br />
            Scale your{" "}
            <span className="text-highlight">
              {displayedText}
              <span className="cursor-blink">|</span>
            </span>
          </h1>

          <p className="hero-desc">
            Generate optimized drafts for social, blogs, scripts, and ads—scored
            for engagement, readability, and hook strength. Iterate fast. Ship
            confident.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary hero-btn-primary">
              Get started
            </button>
            <button className="hero-btn-demo">
              <span className="play-icon">
                <Play size={16} fill="white" />
              </span>
              View demo
            </button>
          </div>
          <p className="hero-note">No credit card required</p>

          {/* Social Proof Avatars */}
          <div className="hero-social-proof">
            <div className="hero-avatars">
              <img src={profilePic} alt="User" />
              <img src={profilePic2} alt="User" />
              <img src={profilePic3} alt="User" />
              <img src={squarePic} alt="User" style={{ borderRadius: "50%" }} />
            </div>
            <p>
              Trusted by <span>10,000+</span> creators worldwide
            </p>
          </div>
        </div>

        {/* CENTERED PANEL: Live Preview Panel */}
        <div
          className="hero-preview-wrapper-centered"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="preview-card">
            <div className="preview-header">
              <div className="preview-title">
                <h3>Preview</h3>
                <p>A draft + instant analysis</p>
              </div>
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="preview-content">
              {/* Fake Social Post */}
              <div className="post-preview">
                <div className="post-header">
                  <img src={profilePic} alt="User" className="post-avatar" />
                  <div className="post-meta">
                    <span className="post-name">Alex Creator</span>
                    <span className="post-handle">@alexcreates</span>
                  </div>
                </div>
                <div className="post-body">
                  <p className="post-text">
                    <span className="post-hook">
                      Stop guessing what works. start knowing. 🚀
                    </span>
                    <br />
                    <br />
                    Use AI to predict engagement before you even hit publish.
                    It's like having a crystal ball for your content strategy.
                    <br />
                    <br />
                    <span className="post-hashtags">
                      #creator #marketing #contentstrategy
                    </span>
                  </p>
                </div>
              </div>

              {/* Metrics Section */}
              <div className="preview-metrics">
                <div className="metric-item">
                  <div className="metric-info">
                    <span>Engagement</span>
                    <span className="score-high">82/100</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "82%" }}
                    ></div>
                  </div>
                </div>

                <div className="metric-item">
                  <div className="metric-info">
                    <span>Readability</span>
                    <span className="score-mid">74/100</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill warning"
                      style={{ width: "74%" }}
                    ></div>
                  </div>
                </div>

                <div className="metric-item">
                  <div className="metric-info">
                    <span>Hook Strength</span>
                    <span className="score-high">88/100</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "88%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Glow */}
          <div className="preview-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
