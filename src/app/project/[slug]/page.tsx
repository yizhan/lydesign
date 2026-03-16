import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./project-detail.module.css";
import { getProjectBySlug, projects } from "@/lib/projects";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.excerpt,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject =
    projectIndex > 0 ? projects[projectIndex - 1] : projects[projects.length - 1];
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : projects[0];

  const galleryBlocks =
    project.galleryBlocks ??
    project.gallery.map((imageSrc) => ({ layout: "single" as const, images: [imageSrc] }));

  const projectFacts = [
    { label: "Size", value: project.size },
    { label: "Completion Date", value: project.completionDate ?? project.year },
    { label: "Credits", value: project.credits },
  ].filter((fact) => fact.value);

  return (
    <section className={`${styles.page} pageReveal`}>
      <div className={styles.topStrip}>
        <Image
          src={project.topStripImage ?? project.coverImage}
          alt={`${project.title} cover`}
          fill
          sizes="100vw"
          className={styles.topStripImage}
          priority
        />
      </div>

      <div>
        <header className={styles.projectIntro}>
          <div className={styles.projectMeta}>
            <h1>{project.title}</h1>
            <p className={styles.summary}>{project.excerpt}</p>
            <ul className={styles.factList}>
              {projectFacts.map((fact) => (
                <li key={fact.label} className={styles.factItem}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </li>
              ))}
            </ul>
            {project.tags && project.tags.length > 0 ? (
              <p className={styles.tags}>{project.tags.join(" / ")}</p>
            ) : null}
          </div>

          {project.planImages && project.planImages.length > 0 ? (
            <div className={styles.planGrid}>
              {project.planImages.slice(0, 2).map((planSrc, index) => (
                <div key={planSrc} className={styles.planItem}>
                  <Image
                    src={planSrc}
                    alt={`${project.title} plan ${index + 1}`}
                    fill
                    sizes="(max-width: 700px) 100vw, 24vw"
                    className={styles.planImage}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.planGrid} aria-hidden="true">
              <div className={styles.planPlaceholder} />
              <div className={styles.planPlaceholder} />
            </div>
          )}
        </header>

        <div className={styles.galleryFlow}>
          {galleryBlocks.map((block, blockIndex) =>
            block.layout === "triple" ? (
              <div
                key={`${project.slug}-block-${blockIndex}`}
                className={`${styles.galleryBlock} ${styles.tripleBlock}`}
                style={{ animationDelay: `${blockIndex * 90}ms` }}
              >
                {block.images.slice(0, 3).map((imageSrc, imageIndex) => (
                  <div key={imageSrc} className={styles.tripleItem}>
                    <Image
                      src={imageSrc}
                      alt={`${project.title} detail ${blockIndex + 1}.${imageIndex + 1}`}
                      fill
                      sizes="(max-width: 900px) 100vw, 30vw"
                      className={styles.galleryImage}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div
                key={`${project.slug}-block-${blockIndex}`}
                className={styles.galleryBlock}
                style={{ animationDelay: `${blockIndex * 90}ms` }}
              >
                <div className={styles.singleImageWrap}>
                  <Image
                    src={block.images[0]}
                    alt={`${project.title} image ${blockIndex + 1}`}
                    fill
                    sizes="100vw"
                    className={styles.galleryImage}
                  />
                </div>
              </div>
            ),
          )}
        </div>

        <nav className={styles.projectNav} aria-label="Project navigation">
          <Link href={`/project/${previousProject.slug}`} className={styles.navLink}>
            <span>Previous Project</span>
            <strong>{previousProject.title}</strong>
          </Link>
          <Link href={`/project/${nextProject.slug}`} className={styles.navLink}>
            <span>Next Project</span>
            <strong>{nextProject.title}</strong>
          </Link>
        </nav>
      </div>
    </section>
  );
}
