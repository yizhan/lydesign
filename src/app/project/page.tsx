import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./project.module.css";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Project",
  description: "Residential and architectural projects by LYDesign",
};

export default function ProjectListPage() {
  return (
    <section className={`${styles.page} pageReveal`}>
      <div className={styles.grid}>
        {projects.map((project) => (
          <Link
            href={`/project/${project.slug}`}
            key={project.slug}
            className={styles.card}
          >
            <div className={styles.imageWrap}>
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                sizes="100vw"
                className={styles.image}
              />
            </div>
            <div className={styles.body}>
              <div className="container">
                <div className={styles.meta}>
                  <span>{project.category}</span>
                  <span>{project.year ?? "Scaffold"}</span>
                </div>
                <h2 className={styles.title}>{project.title}</h2>
                {project.status === "scaffold" ? (
                  <p className={styles.badge}>Scaffold Content</p>
                ) : null}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
