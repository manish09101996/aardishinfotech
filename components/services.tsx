"use client";

import "@/styles/services.scss";
import { useState, useMemo } from "react";

export default function Services({ data }: any) {
  const [active, setActive] = useState(0);

  const services = useMemo(() => buildServices(data, 6), [data]);

  const handleClick = (index: number) => {
    setActive(index);
  };

  return (
    <section className="services">
      <div className="container">
        <div className="row">

          {/* Heading */}
          <div className="col-sm-12 main-heading">
            <h3>{data.service_sub_title}</h3>

            <h4
              className="title-txt"
              dangerouslySetInnerHTML={{
                __html: data.service_title,
              }}
            />

            <p className="description">
              {data.service_description_text}
            </p>
          </div>

          {/* Content */}
          <div className="col-sm-12">
            <div className="service-slider">
              <div className="plateform-slider row">

                {/* Left Accordion */}
                <div className="col-lg-6 slide-accordian">
                  {services.map((item, index) => (
                    <div
                      key={index}
                      className={`accordian-item ${
                        active === index ? "active open-default" : ""
                      }`}
                      onClick={() => handleClick(index)}
                    >
                      <div className="accordian-toggle-btn">
                        <div className="accordian-title">
                          {item.title}
                        </div>
                      </div>

                      {active === index && (
                        <div
                          className="accordian-txt"
                          dangerouslySetInnerHTML={{
                            __html: item.description,
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Right Image Slider */}
                <div className="col-lg-6 accordian-slider-img">
                  <div className="slider-wrapper">
                    <div
                      className="slider-track"
                      style={{
                        transform: `translateX(-${active * 100}%)`,
                      }}
                    >
                      {services.map((item, index) => (
                        <div key={index} className="slide">
                          <div className={`animation-img-wrap ${
    active === index ? "animate" : ""
  }`}>

                            {item.image?.url && (
                              <img
                                src={item.image.url}
                                alt={item.image.alt || item.title}
                                className="animation-main-img"
                                loading="lazy"
                              />
                            )}

                            {item.animationImage?.url && (
                              <img
                                src={item.animationImage.url}
                                alt={item.animationImage.alt || item.title}
                                className="animation-hover-img"
                                loading="lazy"
                              />
                            )}

                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function buildServices(acf: any, count: number) {
  const items: any[] = [];

  for (let i = 1; i <= count; i++) {
    const title = acf?.[`service_title_${i}`];
    const description = acf?.[`service_description_${i}`];
    const image = acf?.[`service_image_${i}`];
    const animationImage = acf?.[`service_image_${i}_animation`];

    if (title || description || image) {
      items.push({
        title,
        description,
        image,
        animationImage,
      });
    }
  }

  return items;
}