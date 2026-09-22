
import Image from "next/image";
import "../styles/BannerAnimation.scss";

export default function ServiceAnimation() {

  return (
    <>
    
    <div className="banner-animation service-banner">
        <div className="hero-animation">
          <div className="mobile-img">
             <Image src="/Background.png" className="service" alt="Laptop"  width={500}
                  height={500} />

          </div>

    <div className="scene">

        <Image src="/laptop.png" className="laptop" alt="Laptop"  width={500}
                  height={350} />

        <Image src="/code.webp" className="icon code" alt="code"  width={500}
                  height={350} />

        <Image src="/settings.webp" className="icon gear" alt="gear"  width={500}
                  height={350} />
        <Image src="/cloud.webp" className="icon cloud"  alt="cloud"  width={500}
                  height={350} />
        <Image src="/cart.webp" className="icon cart" alt="cart"  width={500}
                  height={350} />
        <Image src="/mobile.webp" className="icon mobile" alt="mobile"  width={500}
                  height={350} />
        <Image src="/secure.webp" className="icon lock" alt="lock"  width={500}
                  height={350} />
        <Image src="/chart.webp" className="icon chart" alt="chart"  width={500}
                  height={350} />
        <Image src="/security.webp" className="shield" alt="shield"  width={500}
                  height={350} />

    </div>

</div>
    </div>
    </>
  );
}