"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stats = [
  {
    image: "/user.png",
    value: 76,
    label: "Happy Clients",
  },
  {
    image: "/deliver.png",
    value: 120,
    label: "Project Delivered",
  },
  {
    image: "/experience.png",
    value: 10,
    label: "Years of Experience",
  },
  {
    image: "/industry.png",
    value: 10,
    label: "Industries Served",
  },
];

export default function StatsCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);

      setCounts(
        stats.map((item) => Math.floor(progress * item.value))
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start]);

  return (
    <section className="our-counts" ref={sectionRef}>
      <div className="container">
        <div className="row">
          {stats.map((item, index) => (
            <div className="col-sm-3" key={index}>
              <div className="count-img">
                <Image
                  src={item.image}
                  width={80}
                  height={80}
                  alt={item.label}
                />
              </div>

              <div className="count-text">
                <h3>{counts[index]}+</h3>
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}