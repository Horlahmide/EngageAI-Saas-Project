import React, { useState } from "react";
import { Layout, MessageSquare, Megaphone, Search, Zap } from "lucide-react";
import Dashboard from "./Dashboard";

const Features = () => {
  const [activeTab, setActiveTab] = useState("creation");

  const tabs = [
    { id: "creation", label: "Content Creation", icon: <Layout size={18} /> },
    { id: "seo", label: "SEO Optimization", icon: <Search size={18} /> },
    { id: "marketing", label: "AI Marketing", icon: <Megaphone size={18} /> },
    { id: "chat", label: "Smart Assistant", icon: <MessageSquare size={18} /> },
  ];

  const colorMap = {
    creation: "#4f46e5",
    seo: "#10b981",
    marketing: "#f59e0b",
    chat: "#8b5cf6",
  };

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header" data-aos="fade-up">
          <h2>
            Everything you need to{" "}
            <span className="text-gradient">scale your brand</span>
          </h2>
          <p>
            Our AI engine processes millions of data points to give you the
            highest quality content that actually converts.
          </p>
        </div>

        <div className="features-tabs" data-aos="fade-up">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`features-tab ${activeTab === tab.id ? "active" : ""}`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <div className="features-content" data-aos="zoom-in">
          <div className="features-text">
            <h3>Scale your {activeTab} Workflow</h3>
            <ul className="features-list">
              {[
                "Automated high-quality generation",
                "Advanced SEO keyword analysis",
                "Smart competitor insights",
                "Multi-channel distribution",
              ].map((text, i) => (
                <li key={i}>
                  <span className="features-list-icon">
                    <Zap size={14} fill="currentColor" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
            <button className="btn-primary">Learn More</button>
          </div>

          <div className="glass-card features-dashboard">
            <Dashboard
              title={`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Analytics`}
              accentColor={colorMap[activeTab]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
