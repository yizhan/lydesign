import type { Metadata } from "next";
import Link from "next/link";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services",
  description: "LYDesign services — residential architecture and exterior design",
};

const SERVICES = [
  {
    title: "Concept & Massing",
    description:
      "We begin every project with a thorough reading of the site — its orientation, context, and neighbourhood character. From there we develop massing studies and facade composition options that establish a clear architectural direction before any documentation begins.",
    deliverables: ["Site Analysis", "Massing Studies", "Facade Options", "Concept Presentation"],
  },
  {
    title: "Material & Palette",
    description:
      "Exterior material selection shapes how a home ages, reads in its setting, and feels at close range. We guide clients through cladding, joinery, roofing, and colour strategy — assembling palettes that are coherent, durable, and specific to the project.",
    deliverables: ["Cladding Specification", "Colour Strategy", "Joinery Profiles", "Sample Boards"],
  },
  {
    title: "Consent Documentation",
    description:
      "Thorough, coordinated drawing sets that communicate design intent clearly to councils, engineers, and builders. We manage the documentation process end to end, resolving details early to reduce variations during build.",
    deliverables: ["Resource Consent Drawings", "Building Consent Set", "Detail Drawings", "Specifications"],
  },
  {
    title: "Construction Support",
    description:
      "Design integrity is most at risk during construction. We provide review checkpoints at key stages, respond to RFIs, and make practical detailing adjustments that protect visual quality without compromising buildability or programme.",
    deliverables: ["Site Reviews", "RFI Responses", "Detail Revisions", "Completion Inspection"],
  },
];

const PROCESS_STEPS = [
  {
    title: "Briefing",
    desc: "We listen carefully to understand the client's vision, lifestyle, and constraints before any design work begins.",
  },
  {
    title: "Concept",
    desc: "Site analysis and initial massing studies establish the project's architectural direction.",
  },
  {
    title: "Development",
    desc: "The preferred direction is refined in material, proportion, and detail across coordinated drawings.",
  },
  {
    title: "Delivery",
    desc: "We stay engaged through consent and construction to ensure the built outcome matches the design.",
  },
];

export default function ServicesPage() {
  return (
    <section className={`${styles.page} pageReveal`}>

      {/* Hero */}
      <div className={styles.hero}>
        <p className={styles.kicker}>Services</p>
        <h1>End-to-End Exterior Design for Residential Projects.</h1>
        <p className={styles.heroIntro}>
          Our services are structured to support projects from early concept
          through to completed built form — with consistent attention to
          proportion, material, and buildability at every stage.
        </p>
      </div>

      {/* Services list */}
      <div className={styles.servicesList}>
        {SERVICES.map((service, i) => (
          <div key={service.title} className={styles.serviceItem}>
            <div className={styles.serviceLeft}>
              <span className={styles.serviceNumber}>0{i + 1}</span>
              <h2 className={styles.serviceTitle}>{service.title}</h2>
            </div>
            <div className={styles.serviceRight}>
              <p className={styles.serviceDesc}>{service.description}</p>
              <ul className={styles.serviceDeliverables}>
                {service.deliverables.map((d) => (
                  <li key={d} className={styles.deliverable}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Process strip */}
      <div className={styles.processSection}>
        <p className={styles.sectionLabel}>Our Process</p>
        <div className={styles.processSteps}>
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.title} className={styles.processStep}>
              <span className={styles.stepNum}>Step {i + 1}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <div className={styles.ctaText}>
          <h2>Ready to start a project?</h2>
          <p>Get in touch and we will be happy to discuss your brief.</p>
        </div>
        <Link href="/contact" className={styles.ctaLink}>
          Contact Us →
        </Link>
      </div>

    </section>
  );
}
