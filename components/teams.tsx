import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const values = [
{
    image: "/akshay.png",
    title: "Akshay Sharma",
    description:
      "Founder & CEO",
  },
  {
    image: "/shipra.png",
    title: "Shipra Goyal",
    description:
      "Co Founder & CTO.",
  },
  {
    image: "/manish.png",
    title: "Manish",
    description:
      "CMO",
  },
  {
    image: "/khushi.png",
    title: "Khushi",
    description:
      "UI/UX Lead",
  },

];

export default function Teams() {
  return (
    <section className="values-section">
      <div className="container">
        <div className="section-heading">
          <span className="value">OUR TEAM</span>
          <h2>
           The Mind Behind <span>Aardish</span>
          </h2>
          <p>Our talented team of designers, developers, and strategists works together to turn ideas into powerful digital solutions. We are committed to delivering quality, innovation, and exceptional results for every client.</p>
        </div>

        <div className="row g-4">
          {values.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="value-card">
                <div className="icon">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={200}
                  />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
                <ul>
                    <li><Link href="/">  <FaLinkedinIn /></Link></li>
                     <li><Link href="/"> <FaXTwitter /></Link></li>
                      <li><Link href="/"> <MdEmail /></Link></li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}