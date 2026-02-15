import React from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "0",
      desc: "Perfect for solo creators",
      features: [
        "2,000 words/mo",
        "50+ Templates",
        "SEO Optimization",
        "Basic Support",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "0",
      desc: "Best for growing teams",
      features: [
        "50,000 words/mo",
        "Unlimited Templates",
        "Priority Support",
        "Team Collaboration",
        "Custom AI Models",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "0",
      desc: "For large scale production",
      features: [
        "Unlimited everything",
        "API Access",
        "Dedicated Manager",
        "SSO & Security",
        "Custom Integrations",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="pricing pricing-disabled-mode" id="pricing">
      <div className="container">
        <div className="pricing-header" data-aos="fade-up">
          <h2>Simple, Transparent Pricing</h2>
          <p>
            Choose the plan that's right for your business. Upgrade or downgrade
            at any time.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className={`glass-card pricing-card ${plan.highlight ? "highlight" : ""}`}
            >
              {plan.highlight && (
                <div className="pricing-badge">Most Popular</div>
              )}

              <div>
                <h3>{plan.name}</h3>
                <p className="pricing-desc">{plan.desc}</p>
              </div>

              <div className="pricing-price">
                <span>${plan.price}</span>
                <span>/month</span>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feat, j) => (
                  <li key={j}>
                    <Check size={16} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`pricing-btn ${plan.highlight ? "highlight" : ""}`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
