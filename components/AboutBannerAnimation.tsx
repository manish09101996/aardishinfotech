
import Image from "next/image";
import "../styles/BannerAnimation.scss";
import "@/styles/banner.scss";

export default function AboutAnimation() {

  return (
    <>
     <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 banner-content">
            <span className="title-btn">About us</span>

            <h1>
             We Build Digital Solutions That Drive
              <span>Real Impact</span>
            </h1>

            <p>At aardish Infotech, we're more than a digital agency we're your technology partner. We combine innovation, expertise, and passion to help businesses grow in a digital-first world.  </p>

            <div className="buttons">
              <a href="/" className="primary-button">
              Get Connect
              </a>

              <a href="/" className="secondary-button">
                Get Started
              </a>
            </div>
          </div>

          <div className="col-lg-5 banner-image">
             <div className="banner-animation">

  <div className="orbit orbit-1"></div>
  <div className="orbit orbit-2"></div>
  <div className="orbit orbit-3"></div>

  <div className="center-orb">
    <Image
      src="/Component 36.png"
      alt=""
      width={350}
      height={350}
    />
  </div>

  <div className="icon innovation">
      <Image src="/innovation.png" width={70} height={70} alt="" />
      <span>Innovation</span>
  </div>

  <div className="icon growth">
      <Image src="/excel.png" width={70} height={70} alt="" />
      <span>Growth</span>
  </div>

  <div className="icon security">
      <Image src="/integrity.png" width={70} height={70} alt="" />
      <span>Security</span>
  </div>

  <div className="icon collaboration">
      <Image src="/collab.png" width={70} height={70} alt="" />
      <span>Collaboration</span>
  </div>

</div>
          </div>

          <div className="col-sm-12 trust-logos">
            <h3></h3>
            <img src="/logos.webp" alt="trust-logos" />
          </div>
        </div>
      </div>
    </section>
   
    </>
  );
}