import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What customization options does EngageAI offer?",
      a: "EngageAI offers highly granular customization, allowing you to set tone, target audience, and specific SEO keywords for every piece of content generated.",
    },
    {
      q: "Can EngageAI generate content in multiple languages?",
      a: "Yes! We support over 40+ languages with native-level fluency, ensuring your message resonates globally.",
    },
    {
      q: "Can EngageAI help improve my SEO efforts?",
      a: "Absolutely. Our AI is trained on successful SEO patterns and includes built-in keyword analysis and optimization tools for every output.",
    },
    {
      q: "What if the generated content doesn't meet my expectations?",
      a: "We offer an interactive editor where you can refine, rewrite, or expand any generated content with a single click, or simply re-generate with new parameters.",
    },
  ];

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-header" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
          <p>
            Find answers to common questions about our platform and services.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 50}
              className="glass-card faq-item"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="faq-question"
              >
                <span>{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp size={20} style={{ color: "var(--primary)" }} />
                ) : (
                  <ChevronDown
                    size={20}
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  />
                )}
              </button>

              <div className={`faq-answer ${openIndex === i ? "open" : ""}`}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
