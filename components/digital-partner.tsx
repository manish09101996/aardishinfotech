"use client";

import { useEffect, useRef } from "react";
import "@/styles/digital-partner.scss";

export default function DigitalPartner() {
  const countRef = useRef<HTMLSpanElement>(null);
  const countRef1 = useRef<HTMLSpanElement>(null);
  const toggleRef = useRef<HTMLInputElement>(null);

  /* COUNTER ANIMATION */
  useEffect(() => {
  const duration = 1800;

  function animateCounter(
    ref: React.RefObject<HTMLSpanElement | null>,
    start: number,
    end: number
  ) {
    let startTime: number | null = null;

    function update(currentTime: number) {
      if (!startTime) startTime = currentTime;

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const value = Math.floor(
        start + (end - start) * progress
      );

      if (ref.current) {
        ref.current.textContent = value.toString();
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // Happy Users: 1 → 76
  animateCounter(countRef, 1, 76);

  // Development Hours: 0 → 984
  animateCounter(countRef1, 0, 984);

}, []);

  /* IMAGE STACK ANIMATION */
  useEffect(() => {
    const stack = document.querySelector(".image-stack");
    if (!stack) return;

    const interval = setInterval(() => {
      stack.classList.toggle("open");
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  /* AUTO TOGGLE SWITCH */
  useEffect(() => {
    const interval = setInterval(() => {
      if (toggleRef.current) {
        toggleRef.current.checked = !toggleRef.current.checked;
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section className="partner-sec">
        <div className="container">
          <div className="row">
            <div className="partner-outer">
              <div className="row">
                <div className="col-lg-3">
                  <div className="left-col-1">
                    <img src="/a-logo.png" />
                    <h2 className="text-rotate">
                      Effortless Digital
                      <span className="word-wrapper">
                        <span className="words">
                          <span>Solutions</span>
                          <span>Experience</span>
                          <span>Products</span>
                        </span>
                      </span>
                    </h2>
                    <p>14 days support</p>
                  </div>
                  <div className="left-col-2">
                    <div className="counter">
                    <span ref={countRef}>1</span>
                    <span className="plus">+</span>
                  </div>

                    <p>happy users</p>
                    <div className="image-stack">
                      <img src="/circle1.png" className="img img-1" alt="users" />
                      <img src="/circle2.png" className="img img-2" alt="users" />
                      <img src="/circle3.png" className="img img-3" alt="users" />
                    </div>

                  </div>
                  <div className="left-col-3">
                    <img src="/toggle.png" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="col-center-1">
                    <h3>Your Complete <br /> Digital Partner</h3>
                  </div>
                  <div className="middle">
                    <img src="/code.png" className="code" />
                    <img src="/circle.png" className="circle" />
                  </div>
                  <div className="col-center-2">
                    <div className="center1">
                      <div className="content">
                        <img src="/txt-2.png" />
                        <h3> End-to-End Services</h3>
                        <p> We build solutions that grow with your business.</p>
                      </div>

                    </div>

                    <div className="center2">
                      <div className="content">
                        <img src="/txt-3.png" />
                        <h3> Scalable & Future-Proof</h3>
                        <p> We build solutions that grow with your business.</p>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-lg-3">
                  <div className="col-right-1">
                    <label className="auto-toggle">
                      <input ref={toggleRef} type="checkbox" />
                      <span className="slider"></span>
                    </label>


                  </div>
                  <div className="col-right-2">
                    <div className="counter">
                      <span ref={countRef1}>0</span>
                      <span className="plus">+</span>
                    </div>

                    <img src="/Prompt.png" />
                  </div>
                  <div className="col-right-3">
                    <p>Industries Served </p>
                    <span>Startups • Enterprises • Nonprofits • Agencies • eCommerce</span>
                    <img src="/Frame.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

