import "@/styles/banner.scss";
import BannerAnimation from "@/components/BannerAnimation";
import AboutAnimation from "@/components/AboutBannerAnimation";
import ServiceAnimation from "./ServiceBanner";
import WorksAnimation from "./works-banner";

interface BannerProps {
  data: any;
  type?: "home" | "about" | "services" | "works";
}

export default function Banner({
  data,
  type = "home",
}: BannerProps) {
  const renderAnimation = () => {
  switch (type) {
    case "about":
      return <AboutAnimation />;

    case "services":
      return <ServiceAnimation />;

    case "works":
      return <WorksAnimation />;  

    case "home":
    default:
      return <BannerAnimation />;
  }
};
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 banner-content">
            <span className="title-btn">{data.banner_subtitle}</span>

            <h1>
              {data.banner_title}
              <span>{data.banner_highlight_text}</span>
            </h1>

          
           <div className="banner-text">
  <div
    dangerouslySetInnerHTML={{
      __html: data.banner_text
    }}
  />
</div>

            <div className="buttons">
              <a href={data.demo_link} className="primary-button">
               {data.demo_link_text}
              </a>

              <a href={data.demo_link} className="secondary-button">
                {data.get_started_text}
              </a>
            </div>
          </div>

          <div className="col-lg-5 banner-image">
             {renderAnimation()}
          </div>

          <div className="col-sm-12 trust-logos">
            <h3>{data.trust_logos}</h3>
            <p> {data.banner_logo_text} </p>
            <img src={data.logo_images?.url} alt="trust-logos" />
          </div>
        </div>
      </div>
    </section>
  );
}