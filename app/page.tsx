import Image from "next/image";

const capabilities = [
  {
    number: "01",
    title: "Observe",
    description:
      "Understand physical workflows from the operator's point of view.",
  },
  {
    number: "02",
    title: "Guide",
    description:
      "Deliver real-time instructions directly within the workflow.",
  },
  {
    number: "03",
    title: "Verify",
    description:
      "Confirm critical steps, quantities, procedures, and outcomes.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Turn frontline activity into measurable operational intelligence.",
  },
];

const applications = [
  {
    number: "01",
    title: "Warehouse Operations",
    description:
      "Receiving, picking, packing, labeling, counts, and inventory verification.",
  },
  {
    number: "02",
    title: "Manufacturing",
    description:
      "Assembly guidance, inspections, quality control, and safety workflows.",
  },
  {
    number: "03",
    title: "Healthcare",
    description:
      "Hygiene, preparation, documentation, and compliance support.",
  },
  {
    number: "04",
    title: "Food Service",
    description:
      "Sanitation, preparation, assembly, and quality verification.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />

        <header className="site-header">
          <a href="#top" className="brand" aria-label="RelayVision home">
            <Image
              src="/relayvision-header-logo.png"
              alt="RelayVision"
              width={300}
              height={76}
              priority
            />
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#platform">Platform</a>
            <a href="#applications">Applications</a>
            <a href="#company">Company</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            className="header-cta"
            href="mailto:hello@relayvision.ai?subject=RelayVision%20Demo%20Request"
          >
            Request a demo
          </a>
        </header>

        <div className="hero-layout">
          <div className="hero-content">
            <p className="technical-label">
              AI infrastructure for frontline operations
            </p>

            <h1>
              Intelligence for
              <br />
              the <span>physical world.</span>
            </h1>

            <p className="hero-description">
              RelayVision helps frontline teams perform complex work with
              real-time guidance, workflow verification, and operational
              intelligence.
            </p>

            <div className="hero-actions">
              <a
                className="primary-button"
                href="mailto:hello@relayvision.ai?subject=RelayVision%20Demo%20Request"
              >
                Request a demo
              </a>

              <a className="secondary-link" href="#platform">
                Explore the platform
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-border">
              <Image
                src="/relayvision-hero.png"
                alt="RelayVision warehouse workflow from the operator perspective"
                width={1536}
                height={1024}
                className="hero-image"
                priority
              />

              <div className="visual-reflection" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="positioning" id="company">
        <p className="technical-label">Built for the physical world</p>

        <h2>
          AI has transformed how people work behind a desk.
          <br />
          <span>
            RelayVision brings that same advantage to the frontline.
          </span>
        </h2>
      </section>

      <section className="platform-section" id="platform">
        <div className="section-heading">
          <p className="technical-label">01 / Platform</p>

          <div>
            <h2>Understand the work as it happens.</h2>

            <p>
              RelayVision combines wearable vision, workflow intelligence, and
              real-time coaching to help frontline teams complete critical work
              accurately, safely, and consistently.
            </p>
          </div>
        </div>

        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article key={capability.number}>
              <span>{capability.number}</span>

              <h3>{capability.title}</h3>

              <p>{capability.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="applications" id="applications">
        <div className="section-heading">
          <p className="technical-label">02 / Applications</p>

          <div>
            <h2>Built around real work.</h2>

            <p>
              RelayVision adapts to physical workflows across industries where
              accuracy, consistency, safety, and speed matter.
            </p>
          </div>
        </div>

        <div className="application-list">
          {applications.map((application) => (
            <article key={application.number}>
              <span>{application.number}</span>

              <h3>{application.title}</h3>

              <p>{application.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta" id="contact">
        <p className="technical-label">RelayVision</p>

        <h2>
          Bring intelligence
          <br />
          to every workflow.
        </h2>

        <a
          className="primary-button light"
          href="mailto:hello@relayvision.ai?subject=RelayVision%20Conversation"
        >
          Start a conversation
        </a>
      </section>

      <footer>
        <span>© 2026 RelayVision, Inc.</span>

        <span>AI operating layer for frontline work.</span>

        <a href="mailto:hello@relayvision.ai">
          hello@relayvision.ai
        </a>
      </footer>
    </main>
  );
}