import type { Metadata } from "next";
import Image from "next/image";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "About LYDesign — Auckland-based residential architecture studio",
};

const TEAM = [
  {
    name: "Principal Architect",
    role: "Design Lead",
    imageSrc:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  { name: "Senior Designer", role: "Architecture" },
  { name: "Interior Lead", role: "Interior Design" },
  { name: "Project Architect", role: "Architecture" },
  { name: "Designer", role: "Architecture" },
  { name: "Studio Manager", role: "Operations" },
];

const STUDIO_FACTS = [
  { label: "Location", value: "Auckland, New Zealand" },
  { label: "Practice", value: "Residential Architecture & Exterior Design" },
  { label: "Membership", value: "New Zealand Institute of Architects" },
  { label: "Project Types", value: "New Builds · Alterations & Additions · Multi-Unit Residential" },
  { label: "Approach", value: "Site-Led, Craft-Driven, Detail-Focused" },
  { label: "Collaborators", value: "Builders, Structural Engineers, Landscape Architects" },
];

export default function AboutPage() {
  return (
    <section className={`${styles.page} pageReveal`}>

      {/* Hero */}
      <div className={styles.hero}>
        <Image
          src="/about-hero.jpg"
          alt="LYDesign studio team"
          fill
          sizes="100vw"
          className={styles.heroImage}
          priority
        />
      </div>

      {/* Studio intro */}
      <div className={styles.introRow}>
        <div className={styles.introLeft}>
          <p className={styles.kicker}>Studio</p>
          <h1>Designing Quietly Distinctive Residential Exteriors.</h1>
          <p className={styles.introText}>
            LYDesign is an Auckland-based studio focused on residential
            architecture and exterior composition. We work closely with clients,
            builders, and consultants to deliver homes that are resolved in
            proportion, material expression, and everyday livability.
          </p>
        </div>
        <div className={styles.introRight}>
          <p className={styles.introStatement}>
            Our process begins with site and context analysis — then moves into
            massing, facade rhythm, and detail hierarchy before documentation.
            We balance restraint and warmth, using disciplined forms and
            carefully chosen material palettes to create lasting visual calm.
          </p>
        </div>
      </div>

      {/* Practice facts */}
      <div className={styles.factsSection}>
        <p className={styles.sectionLabel}>Practice</p>
        <table className={styles.factsTable}>
          <tbody>
            {STUDIO_FACTS.map((fact) => (
              <tr key={fact.label} className={styles.factRow}>
                <td className={styles.factLabel}>{fact.label}</td>
                <td className={styles.factValue}>{fact.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Team */}
      <div className={styles.teamSection}>
        <p className={styles.sectionLabel}>Team</p>
        <div className={styles.teamGrid}>
          {TEAM.map((member, i) => (
            <div key={i} className={styles.memberCard}>
              <div className={styles.memberPhoto}>
                {"imageSrc" in member && member.imageSrc ? (
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    sizes="(max-width: 600px) 50vw, 33vw"
                    className={styles.memberImage}
                  />
                ) : (
                  <div className={styles.memberPlaceholder} />
                )}
              </div>
              <div className={styles.memberInfo}>
                <p className={styles.memberName}>{member.name}</p>
                <p className={styles.memberRole}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
