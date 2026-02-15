import React from "react";

const CTA = () => {
  return (
    <section className="cta">
      <div className="bg-glow" />
      <div className="container">
        <div className="cta-inner" data-aos="zoom-in">
          <h2>
            The new way to market <br />
            <span className="text-gradient">your business!</span>
          </h2>
          <p>
            Join thousands of smart business owners creating AI-powered content
            in minutes—saving time, automating workflows, and focusing on real
            business growth.
          </p>
          <button className="btn-primary hero-btn-primary">
            ✨ Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
