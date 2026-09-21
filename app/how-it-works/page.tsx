

import DemoSection from "@/components/demo";

import StatsCounter from "@/components/StatsCounter";
import FourColumn from "@/components/FourColumn";
import WorksBanner from "@/components/works-banner";


export default async function WorksPage() {
  

  return (
    <>
      <section className="about-section">
        <WorksBanner />
      </section>
      <section className="process-detail">
        <div className="process-detail-container">
          <div className="process-heading">
            <span className="section-tag">OUR PROCESS</span>

            <h2>
              From First Conversation
              <span>To Final Delivery</span>
            </h2>

            <p>
              A simple, transparent process designed to turn your ideas into
              scalable digital solutions without unnecessary complexity.
            </p>
          </div>

          <div className="process-timeline">
            <div className="process-item process-left">
              <div className="process-card">
                <span className="process-card-label">DISCOVER</span>

                <h3>We Understand Your Business</h3>

                <p>
                  Every successful project starts with understanding your
                  business, your audience, your goals, and the challenges you
                  want to solve.
                </p>

                <ul>
                  <li>Business & project requirements</li>
                  <li>Target audience analysis</li>
                  <li>Goals and success metrics</li>
                </ul>
              </div>

              <div className="process-node">
                <div className="process-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="11"
                      cy="11"
                      r="6.5"
                      stroke="currentColor"
                      stroke-width="2"
                    />

                    <path
                      d="M16 16l5 5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div></div>
            </div>

            <div className="process-item process-right">
              <div></div>

              <div className="process-node">
                <div className="process-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect
                      x="5"
                      y="3"
                      width="14"
                      height="18"
                      rx="2"
                      stroke="currentColor"
                      stroke-width="1.8"
                    />

                    <path
                      d="M8 7h8"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                    />

                    <path
                      d="m8 12 1.5 1.5L12 11"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <path
                      d="M8 16h6"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="process-card">
                <span className="process-card-label">PLAN</span>

                <h3>We Create The Right Strategy</h3>

                <p>
                  Once we understand your requirements, we define the right
                  strategy, technology, scope, and roadmap for your project.
                </p>

                <ul>
                  <li>Project roadmap</li>
                  <li>Technology recommendations</li>
                  <li>Timeline & milestones</li>
                </ul>
              </div>
            </div>

            <div className="process-item process-left">
              <div className="process-card">
                <span className="process-card-label">BUILD</span>

                <h3>We Design & Develop</h3>

                <p>
                  Our team transforms the strategy into a high-quality digital
                  experience using modern technologies and development
                  practices.
                </p>

                <ul>
                  <li>UI/UX design</li>
                  <li>Development & integration</li>
                  <li>Testing & optimization</li>
                </ul>
              </div>
              <div className="process-node">
                <div className="process-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="m8 8-4 4 4 4"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <path
                      d="m16 8 4 4-4 4"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <path
                      d="m14 5-4 14"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>

              <div></div>
            </div>

            <div className="process-item process-right">
              <div></div>

              <div className="process-node">
                <div className="process-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 13.5 13.5 4c1.8-.5 4.5.2 6.5 2.2s2.7 4.7 2.2 6.5L12.7 22l-2.2-5.5L5 14.3 4 13.5Z"
                      stroke="currentColor"
                      stroke-width="1.7"
                      stroke-linejoin="round"
                    />

                    <path
                      d="m5 14 4-4"
                      stroke="currentColor"
                      stroke-width="1.7"
                      stroke-linecap="round"
                    />

                    <circle
                      cx="16.5"
                      cy="7.5"
                      r="1.5"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
              </div>
              <div className="process-card">
                <span className="process-card-label">DELIVER</span>

                <h3>We Launch & Support</h3>

                <p>
                  After everything is tested and refined, we launch your
                  solution and continue supporting you as your business grows.
                </p>

                <ul>
                  <li>Final testing & deployment</li>
                  <li>Performance optimization</li>
                  <li>Ongoing support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
<section className="expect-section">
  <div className="expect-container">

    <div className="expect-header">
      <span className="dark-section-tag">WHAT YOU CAN EXPECT</span>

      <h2>
        A Better Way To
        <span>Build Digital Products</span>
      </h2>

      <p>
        We keep the process simple, transparent, and focused on
        delivering measurable results.
      </p>
    </div>


    <div className="expect-grid">

      <div className="expect-card">
        <div className="expect-icon">01</div>
        <h3>Clear Communication</h3>
        <p>
          Stay informed with regular updates, clear milestones,
          and straightforward communication.
        </p>
      </div>

      <div className="expect-card">
        <div className="expect-icon">02</div>
        <h3>Transparent Process</h3>
        <p>
          Know exactly what we're working on, what's next,
          and where your project stands.
        </p>
      </div>

      <div className="expect-card">
        <div className="expect-icon">03</div>
        <h3>Quality First</h3>
        <p>
          Every solution goes through testing, refinement,
          and performance optimization.
        </p>
      </div>

      <div className="expect-card">
        <div className="expect-icon">04</div>
        <h3>Long-Term Partnership</h3>
        <p>
          Our relationship doesn't end at launch. We help you
          evolve and scale your digital product.
        </p>
      </div>

    </div>

  </div>
</section>

<section className="collaboration-section">
  <div className="collaboration-container">

    <div className="collaboration-content">

      <span className="section-tag">
        WORKING TOGETHER
      </span>

      <h2>
        You're Involved
        <span>Every Step Of The Way</span>
      </h2>

      <p>
        We believe great digital products are built through
        collaboration. You'll always know what we're working on,
        why we're doing it, and what comes next.
      </p>

      <div className="collaboration-points">

        <div className="collaboration-point">
          <span>✓</span>
          <div>
            <strong>Regular Updates</strong>
            <small>
              Stay informed throughout the project.
            </small>
          </div>
        </div>

        <div className="collaboration-point">
          <span>✓</span>
          <div>
            <strong>Feedback Loops</strong>
            <small>
              Your feedback shapes every important decision.
            </small>
          </div>
        </div>

        <div className="collaboration-point">
          <span>✓</span>
          <div>
            <strong>Shared Visibility</strong>
            <small>
              Clear milestones and project progress.
            </small>
          </div>
        </div>

      </div>

    </div>


    <div className="collaboration-visual">

      <div className="collaboration-orbit orbit-one"></div>
      <div className="collaboration-orbit orbit-two"></div>

      <div className="collaboration-center">
        <span>YOU</span>
        <strong>+</strong>
        <span>US</span>
      </div>

      <div className="collab-node node-one">
        Strategy
      </div>

      <div className="collab-node node-two">
        Design
      </div>

      <div className="collab-node node-three">
        Development
      </div>

      <div className="collab-node node-four">
        Feedback
      </div>

    </div>

  </div>
</section>
      <StatsCounter />
      <FourColumn />

      <DemoSection />
    </>
  );
}
