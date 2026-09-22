"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import "../styles/BannerAnimation.scss";

export default function BannerAnimation() {
  const speedRef = useRef<HTMLSpanElement>(null);
  const accuracyRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let animationIds: number[] = [];

    const counter = (
      element: HTMLSpanElement | null,
      start: number,
      end: number,
      duration: number,
    ) => {
      if (!element) return;

      let startTime: number | null = null;

      const animate = (time: number) => {
        if (!startTime) startTime = time;

        const progress = Math.min((time - startTime) / duration, 1);
        const value = Math.floor(start + (end - start) * progress);

        element.textContent = value.toString();

        if (progress < 1) {
          const id = requestAnimationFrame(animate);
          animationIds.push(id);
        }
      };

      const id = requestAnimationFrame(animate);
      animationIds.push(id);
    };

    // Preload hover images
    const preloadImages = [
      "https://wordpress.aardishinfotech.in/wp-content/uploads/2026/06/Bento-Card-Vol-5-2.png",
      "https://wordpress.aardishinfotech.in/wp-content/uploads/2026/06/img3-1.png",
      "https://wordpress.aardishinfotech.in/wp-content/uploads/2026/06/img4-1.png",
    ];

    preloadImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });

    counter(speedRef.current, 1, 3, 1200);
    counter(accuracyRef.current, 0, 98, 1800);

    return () => {
      animationIds.forEach((id) => cancelAnimationFrame(id));
    };
  }, []);

  return (
    <>
      <div className="banner-animation">
        <div className="top-animation">
          <div className="left-ani">
            <div className="box1">
              <h3>
                <span ref={speedRef}>1</span>X
              </h3>
              <p>Faster Turnaround</p>
            </div>

            <div className="box2">
              <h3>
                <span ref={accuracyRef}>0</span>%
              </h3>
              <p>Accuracy Rate</p>
            </div>
          </div>

          <div className="right-ani">
            <div className="box-3">
              <div className="img-wrap">
                <Image
                  src="https://wordpress.aardishinfotech.in/wp-content/uploads/2026/06/Bento-Card-Vol-5-1.png"
                  alt="End-to-End Coverage"
                  width={500}
                  height={350}
                  className="main-img"
                />

                <Image
                  src="https://wordpress.aardishinfotech.in/wp-content/uploads/2026/06/Bento-Card-Vol-5-2.png"
                  alt="End-to-End Coverage Hover"
                  width={500}
                  height={350}
                  className="hover-img"
                />
              </div>

              <div className="content">
                <h3>End-to-End Coverage</h3>
                <p>From idea to launch to ongoing maintenance.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-animation">
          <div className="left-ani">
            <div className="img-wrap">
              <Image
                src="https://wordpress.aardishinfotech.in/wp-content/uploads/2026/06/img3.png"
                alt="Development"
                width={500}
                height={300}
                className="main-img"
              />

              <Image
                src="https://wordpress.aardishinfotech.in/wp-content/uploads/2026/06/img3-1.png"
                alt="Development Hover"
                width={500}
                height={300}
                className="hover-img"
              />
            </div>
          </div>

          <div className="right-ani">
            <div className="img-wrap">
              <Image
                src="https://wordpress.aardishinfotech.in/wp-content/uploads/2026/06/img4.png"
                alt="Solutions"
                width={500}
                height={300}
                className="main-img"
              />

              <Image
                src="https://wordpress.aardishinfotech.in/wp-content/uploads/2026/06/img4-1.png"
                alt="Solutions Hover"
                width={500}
                height={300}
                className="hover-img"
              />
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
