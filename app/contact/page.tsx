


import DemoSection from "@/components/demo";
import Image from "next/image";
import HubSpotContactForm from "@/components/HubSpotContactForm";



export default async function ContactPage() {


  return (
    <>
     
      <section className="contact-hero">
  <div className="contact-container">

    <div className="contact-content">

      <div className="section-label">
        CONTACT US
      </div>

      <h1>
        Let’s Build Something
        <span>Extraordinary Together</span>
      </h1>

      <p className="contact-description">
        Have a project in mind or a question for our team? We’re here to help.
        Get in touch and let’s create digital solutions that drive real impact.
      </p>

      <div className="contact-options">

        <div className="contact-option">
          <div className="option-icon">
            <svg viewBox="0 0 24 24">
              <path d="M20 11.5a8 8 0 0 1-8 8c-1.4 0-2.7-.36-3.85-1L4 20l1.5-3.3A7.94 7.94 0 0 1 4 11.5a8 8 0 1 1 16 0Z"/>
              <circle cx="8" cy="11.5" r=".8"/>
              <circle cx="12" cy="11.5" r=".8"/>
              <circle cx="16" cy="11.5" r=".8"/>
            </svg>
          </div>

          <div>
            <strong>Ask</strong>
            <span>Questions</span>
          </div>
        </div>


        <div className="contact-option">
          <div className="option-icon">
            <svg viewBox="0 0 24 24">
              <circle cx="9" cy="8" r="3"/>
              <circle cx="17" cy="8" r="2.5"/>
              <path d="M3 19c0-3.2 2.6-5.5 6-5.5s6 2.3 6 5.5"/>
              <path d="M14 14c3.1-.3 6 1.6 6 4.5"/>
            </svg>
          </div>

          <div>
            <strong>Discuss</strong>
            <span>Your Project</span>
          </div>
        </div>


        <div className="contact-option">
          <div className="option-icon">
            <svg viewBox="0 0 24 24">
              <path d="M9.5 15.5h5"/>
              <path d="M10 18h4"/>
              <path d="M9 12.5c-1.2-.9-2-2.4-2-4.1a5 5 0 0 1 10 0c0 1.7-.8 3.2-2 4.1-.7.5-1 1.1-1 2H10c0-.9-.3-1.5-1-2Z"/>
              <path d="M12 2v1"/>
              <path d="m4.9 4.9.7.7"/>
              <path d="M3 8.5h1"/>
              <path d="m19.1 4.9-.7.7"/>
              <path d="M21 8.5h-1"/>
            </svg>
          </div>

          <div>
            <strong>Explore</strong>
            <span>Opportunities</span>
          </div>
        </div>


        <div className="contact-option">
          <div className="option-icon">
            <svg viewBox="0 0 24 24">
              <path d="m21 3-18 8 7 2 2 7 9-17Z"/>
              <path d="M10 13 21 3"/>
            </svg>
          </div>

          <div>
            <strong>Get</strong>
            <span>Expert Advice</span>
          </div>
        </div>

      </div>
    </div>


    <div className="contact-visual">

  
      <div className="orbit orbit-1"></div>
      <div className="orbit orbit-2"></div>
      <div className="orbit orbit-3"></div>


      <div className="glow-orb">
       <div className="center-orb">
           <Image
             src="/Component 36.png"
             alt=""
             width={350}
             height={350}
           />
         </div>
      </div>


   
      <div className="connect-card">
        <div>Let’s</div>
        <div>Connect</div>
        <span></span>
      </div>

      <div className="floating-icon email-icon">
        <svg viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="14" rx="2"/>
          <path d="m4 7 8 6 8-6"/>
        </svg>
      </div>


      <div className="floating-icon phone-icon">
        <svg viewBox="0 0 24 24">
          <path d="M6.5 3.5 9 3l2 5-2.5 1.8a14 14 0 0 0 5.2 5.2l1.8-2.5 5 2 .5 2.5c.2 1-.6 2-1.6 2C12.5 19 5 11.5 5 4.6c0-1 .5-1.9 1.5-1.1Z"/>
        </svg>
      </div>

      <div className="floating-icon location-icon">
        <svg viewBox="0 0 24 24">
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/>
          <circle cx="12" cy="10" r="2.5"/>
        </svg>
      </div>

    </div>

  </div>
</section>
    
<section className="contact-options">
  <div className="contact-options-container">

    <div className="contact-section-heading">
      <span className="contact-tag">LET'S TALK</span>

      <h2>
        Have A Project In Mind?
        <span>Let's Make It Happen.</span>
      </h2>

      <p>
        Whether you have a complete project plan or just an idea,
        we'd love to hear from you and explore how we can help.
      </p>
    </div>


    <div className="contact-options-grid">
      <div className="contact-option-card">

        <div className="contact-option-icon">
          <svg viewBox="0 0 24 24" fill="none">
            <rect
              x="3"
              y="5"
              width="18"
              height="14"
              rx="2"
              stroke="currentColor"
              stroke-width="1.8"
            />
            <path
              d="m4 7 8 6 8-6"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div>
          <span>Email Us</span>

          <h3>info.aardishinfotech.com</h3>

          <p>
            Send us your project details anytime.
          </p>
        </div>

        <a href="mailto:info.aardishinfotech.com">
          →
        </a>

      </div>
      <div className="contact-option-card">

        <div className="contact-option-icon">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M6.6 3h3.1l1.5 5-2 1.7a14.4 14.4 0 0 0 5.1 5.1l1.7-2 5 1.5v3.1c0 1.1-.9 2-2 2C11.3 19.4 4.6 12.7 4.6 5c0-1.1.9-2 2-2Z"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div>
          <span>Call Us</span>

          <h3>8054071080</h3>

          <p>
            Let's discuss your requirements.
          </p>
        </div>

        <a href="tel:8054071080">
          →
        </a>

      </div>
      <div className="contact-option-card">

        <div className="contact-option-icon">
          <svg viewBox="0 0 24 24" fill="none">
            <rect
              x="3"
              y="4"
              width="18"
              height="17"
              rx="2"
              stroke="currentColor"
              stroke-width="1.8"
            />
            <path
              d="M7 2v4M17 2v4M3 9h18"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
            />
            <path
              d="M8 13h3M8 17h6"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
            />
          </svg>
        </div>

        <div>
          <span>Book A Call</span>

          <h3>Free Consultation</h3>

          <p>
            Tell us about your idea and goals.
          </p>
        </div>

        <a href="#">
          →
        </a>

      </div>

    </div>

  </div>
</section>

<section className="contact-form-section">

  <div className="contact-form-container">

    <div className="contact-form-intro">

      <span className="contact-tag">
        GET IN TOUCH
      </span>

      <h2>
        Let's Start A
        <span>Conversation.</span>
      </h2>

      <p>
        Tell us a little about your project, your goals, and
        what you're looking to achieve. Our team will get back
        to you shortly.
      </p>


      <div className="contact-benefits">

        <div>
          <span>✓</span>
          <p>Free initial consultation</p>
        </div>

        <div>
          <span>✓</span>
          <p>Clear project recommendations</p>
        </div>

        <div>
          <span>✓</span>
          <p>No-obligation discussion</p>
        </div>

      </div>

    </div>

    <div className="contact-form-box">
   <HubSpotContactForm />
   
      

    </div>

  </div>

</section>
<section className="next-section">

  <div className="next-container">

    <div className="next-heading">

      <span className="contact-tag">
        WHAT HAPPENS NEXT
      </span>

      <h2>
        Simple From
        <span>Start To Finish</span>
      </h2>

      <p>
        Once you reach out, we'll guide you through the next steps.
      </p>

    </div>


    <div className="next-steps">

      <div className="next-step">

        <div className="next-icon">
          <span>01</span>
        </div>

        <h3>We Listen</h3>

        <p>
          We learn about your business, goals, challenges,
          and project requirements.
        </p>

      </div>


      <div className="next-line"></div>


      <div className="next-step">

        <div className="next-icon">
          <span>02</span>
        </div>

        <h3>We Discuss</h3>

        <p>
          We discuss possible approaches, technologies,
          timelines, and opportunities.
        </p>

      </div>


      <div className="next-line"></div>


      <div className="next-step">

        <div className="next-icon">
          <span>03</span>
        </div>

        <h3>We Plan</h3>

        <p>
          We create a clear roadmap based on your business
          objectives and requirements.
        </p>

      </div>


      <div className="next-line"></div>


      <div className="next-step">

        <div className="next-icon">
          <span>04</span>
        </div>

        <h3>We Build</h3>

        <p>
          Once aligned, our team turns the plan into
          a powerful digital solution.
        </p>

      </div>

    </div>

  </div>

</section>

<section className="contact-faq">

  <div className="faq-container">

    <div className="faq-heading">

      <span className="contact-tag">
        FAQ
      </span>

      <h2>
        Questions?
        <span>We've Got Answers.</span>
      </h2>

    </div>


    <div className="faq-list">

      <details>
        <summary>
          What happens after I submit the form?
          <span>+</span>
        </summary>

        <p>
          We'll review your requirements and get in touch to
          discuss your project, goals, and the best way forward.
        </p>
      </details>


      <details>
        <summary>
          Do you provide a free consultation?
          <span>+</span>
        </summary>

        <p>
          Yes. We can have an initial conversation to understand
          your requirements and explore possible solutions.
        </p>
      </details>


      <details>
        <summary>
          What type of projects do you work on?
          <span>+</span>
        </summary>

        <p>
          We work on UI/UX design, websites, eCommerce platforms,
          mobile applications, and custom digital solutions.
        </p>
      </details>


      <details>
        <summary>
          Can you work with an existing product?
          <span>+</span>
        </summary>

        <p>
          Yes. We can improve, redesign, optimize, or extend
          existing websites and digital products.
        </p>
      </details>

    </div>

  </div>

</section>
      <DemoSection />
    </>
  );
}
