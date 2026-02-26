"use client";

import "@/styles/services.scss";
import dynamic from "next/dynamic";
import { useRef, useState, useMemo } from "react";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Services({ data }: any) {
  const sliderRef = useRef<any>(null);
  const [active, setActive] = useState(0);

  // 🔑 Convert ACF Free fields → array
  const services = useMemo(() => buildServices(data, 6), [data]);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
  };

  const handleClick = (index: number) => {
    setActive(index);
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <section className="services">
      <div className="container">
        <div className="row">

          {/* HEADING */}
          <div className="col-sm-12 main-heading">
            <h3>{data.service_sub_title}</h3>
            <h4
              className="title-txt"
              dangerouslySetInnerHTML={{ __html: data.service_title }}
            />
            <p className="description">{data.service_description_text}</p>
          </div>

          {/* CONTENT */}
          <div className="col-sm-12">
            <div className="service-slider">
              <div className="plateform-slider row">

                {/* LEFT ACCORDION */}
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

                {/* RIGHT SLIDER */}
                <div className="col-lg-6 accordian-slider-img">
                  <Slider {...settings}>
                    {services.map((item, index) => (
                      <div key={index} className="img-slide">
                        {item.image?.url && (
                          <img
                            src={item.image.url}
                            alt={item.image.alt || item.title}
                            loading="lazy"
                          />
                        )}
                      </div>
                    ))}
                  </Slider>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* 🔧 Helper */
function buildServices(acf: any, count: number) {
  const items = [];

  for (let i = 1; i <= count; i++) {
    const title = acf?.[`service_title_${i}`];
    const description = acf?.[`service_description_${i}`];
    const image = acf?.[`service_image_${i}`];

    if (title || description || image) {
      items.push({ title, description, image });
    }
  }

  return items;
}




