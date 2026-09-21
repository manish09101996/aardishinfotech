"use client";

import { useState, useEffect } from "react";
import "@/styles/blogs.scss";
import "@/styles/testimonial.scss";

export default function TestimonialSec({ data }: any) {
  const testimonials = buildTestimonials(data, 3);

  const [active, setActive] = useState(0);

  // ✅ autoplay (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="blog-section testimonial-section">
      <div className="container">
        <div className="row">

          {/* HEADING */}
          <div className="col-sm-12 blog-content">
            <span className="subheading">{data.testimonials}</span>
            <h3>
              {data.testimonial_heading}{" "}
              <span>{data.testimonial_heading_purple}</span>
              {data.testimonial_heading_white}
            </h3>
            <p>{data.testimonial_description}</p>
          </div>

          {/* SLIDER */}
          <div className="col-sm-12">
            <div className="testimonial-slider">

              {/* Slides */}
              <div className="testimonial-wrapper">
                {testimonials.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`testimonial-slide ${
                      active === index ? "active" : ""
                    }`}
                  >
                    <div className="testimonial-card">
                      <p className="testimonial-text">
                        {item.quote}
                      </p>

                      <div className="testimonial-user">
                        {item.image?.url && (
                          <img
                            src={item.image.url}
                            alt={item.image.alt || item.name}
                          />
                        )}

                        <h4>{item.name}</h4>
                        <span>{item.designation}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* DOTS */}
              <div className="testimonial-dots">
                {testimonials.map((_: any, index: number) => (
                  <button
                    key={index}
                    className={active === index ? "active" : ""}
                    onClick={() => setActive(index)}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* Helper */
function buildTestimonials(acf: any, count = 3) {
  const items: any[] = [];

  for (let i = 1; i <= count; i++) {
    const quote = acf[`testimonial_quote_${i}`];
    const image = acf[`testimonial_image_${i}`];
    const name = acf[`client_name_${i}`];
    const designation = acf[`client_designation_${i}`];

    if (quote || image || name || designation) {
      items.push({
        quote,
        image,
        name,
        designation,
      });
    }
  }

  return items;
}