import Image from "next/image";

export default function ImageText() {
  return (
    <>
      <section className="image-text">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h4>Our Story</h4>
                <h3>
                  Helping Businesses Thrive Since <span>Day One</span>
                </h3>
                <p>
                  At aardish Infotech, we're more than a digital agency we're
                  your technology partner. We combine innovation, expertise, and
                  passion to help businesses grow in a digital-first world.
                </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="left-img">
                <Image
                  src="/about-us.png"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                /> 
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="right-sec">
                
                <div className="our-mission">
                  <div className="mission">
                    <div className="img">
                      <Image
                        src="/mission.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="text">
                      <h3>Our Mission</h3>
                      <p>
                        To deliver innvovative, reliable and scalable digital
                        solutions that empower businesses to grow and make an
                        impact.
                      </p>
                    </div>
                  </div>
                  <div className="mission">
                    <div className="img">
                      <Image
                        src="/vision.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="text">
                      <h3>Our Vision</h3>
                      <p>
                        To be a global leader in digital innovation, known for excellence, integrity and creating meaningful change.
                      </p>
                    </div>
                  </div>
                  <div className="mission">
                    <div className="img">
                      <Image
                        src="/value.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="text">
                      <h3>Our Promise</h3>
                      <p>
                        We are committed to quality, transparency and partnership at every step of your digital journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 