"use client";

import { useState } from "react";
import "@/styles/portfolio.scss";

export const WORK_TABS = [
  {
    id: "Featured",
    label: "Featured",
    items: [
      {
        image: "/portfolio1.png",
        heading: "100%",
        title: "Accessibility Compliance",
        description:
          "We rebuilt Highspot with blazing-fast performance and Google-backed best practices. Fully ADA-compliant and SEO-optimized—accessible, responsive, and ready to scale."
      },
      {
        image: "/portfolio2.png",
        heading: "3x",
        title: "Performance Boost",
        description:
          "Optimized UX and engineering improvements led to measurable speed and engagement gains."
      },
      {
        image: "/portfolio1.png",
        heading: "2x",
        title: "Conversion Growth",
        description:
          "Conversion-focused design patterns improved user flow and business outcomes."
      }
    ]
  },
  {
    id: "Design",
    label: "Design",
    items: [
      {
        image: "/portfolio2.png",
        heading: "95%",
        title: "Design Consistency",
        description:
          "Unified design systems improved brand recognition and usability."
      },
      {
        image: "/portfolio1.png",
        heading: "4x",
        title: "Engagement Lift",
        description:
          "Interactive UI elements increased time-on-site and user interaction."
      },
      {
        image: "/portfolio2.png",
        heading: "2x",
        title: "Visual Impact",
        description:
          "High-impact visuals and micro-interactions enhanced user experience."
      }
    ]
  },
  {
    id: "Development",
    label: "Development",
    items: [
      {
        image: "/portfolio1.png",
        heading: "99.9%",
        title: "Uptime Reliability",
        description:
          "Robust architecture and optimized builds ensure stable performance."
      },
      {
        image: "/portfolio2.png",
        heading: "50%",
        title: "Load Time Reduction",
        description:
          "Modern tooling and code-splitting drastically reduced load times."
      },
      {
        image: "/portfolio1.png",
        heading: "Scalable",
        title: "Future Ready",
        description:
          "Built with scalability and maintainability at the core."
      }
    ]
  }
];

export default function Portfolio({ data }: any) {
  const [activeTab, setActiveTab] = useState(WORK_TABS[0].id);
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  const activeContent = WORK_TABS.find(tab => tab.id === activeTab);

  return (
    <section className="portfolio-sec">
      <div className="container">

        {/* Heading */}
        <div className="row">
          <div className="col-sm-12">
            <div className="tools-content">
              <span className="subheading">{data.work_subtitle}</span>
              <h3>
                {data.work_heading}{" "}
                <span>{data.work_purple_heading}</span>{" "}
                {data.work_white_heading}
              </h3>
              <p>{data.work_description}</p>
            </div>
          </div>
        </div>

        {/* Tabs Header */}
        <div className="row">
          <div className="col-sm-12">
            <div className="tabs-header">
              {WORK_TABS.map(tab => (
                <button
                  key={tab.id}
                  className={`tab-btn ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setHoveredIndex(0);
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs Content */}
        <div className="row">
          <div className="col-sm-12">
            {activeContent && (
              <div className="hover-expand-sec">
                <div className="expand-wrapper">

                  {activeContent.items.map((item, index) => (
                    <div
                      key={index}
                      className={`expand-item ${
                        hoveredIndex === index ? "active" : ""
                      }`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(0)}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="expand-img"
                      />

                      {hoveredIndex === index && (
                        <div className="work-column-text">
                          <h3 className="work-column-text-heading">
                            {item.heading}
                          </h3>
                          <p className="work-column-text-desc">
                            {item.title}
                          </p>
                          <p className="work-column-text-para">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}

                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
