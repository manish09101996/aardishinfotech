import Image from "next/image";

const values = [
{
    image: "/innovation.png",
    title: "Innovation",
    description:
      "We embrace new ideas and technologies to build future-ready solutions.",
  },
  {
    image: "/collab.png",
    title: "Collaboration",
    description:
      "We believe in transparency, honesty, and doing what's right for our clients.",
  },
  {
    image: "/integrity.png",
    title: "Integrity",
    description:
      "We work as an extension of your team, invested in your success.",
  },
  {
    image: "/excel.png",
    title: "Excellence",
    description:
      "We are commited to delivering esceptional quality in everything we do.",
  },

];

export default function FourColumn() {
  return (
    <section className="values-section guide">
      <div className="container">
        <div className="section-heading">
          <span className="value">OUR VALUES</span>
          <h2>
           The Principles That <span>Guide Us</span>
          </h2>
          <p>Our principles shape every decision we make, every solution we deliver, and every relationship we build. They inspire us to create meaningful results with integrity, innovation, and excellence.</p>
        </div>

        <div className="row g-4">
          {values.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="value-card">
                <div className="icon">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={48}
                    height={48}
                  />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}