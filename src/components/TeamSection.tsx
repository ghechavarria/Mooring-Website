import { motion } from "framer-motion";
import { useState } from "react";

const members = [
  { name: "Yegiao Guo", slug: "yegiao-guo", title: "Chief Executive Officer" },
  { name: "James Jones", slug: "james-jones", title: "Chief Operating Officer" },
  { name: "Zhen Wu", slug: "zhen-wu", title: "Chief Financial Officer" },
  { name: "Erik Ruiz", slug: "erik-ruiz", title: "Chief Information Security Officer" },
  { name: "Grace Hechavarria", slug: "grace-hechavarria", title: "Chief Information Officer" },
  { name: "Joanne Rossi", slug: "joanne-rossi", title: "Chief Quality and Compliance Officer" },
] as const;

function initialsFrom(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function TeamMemberCard({
  name,
  slug,
  title,
  index,
}: {
  name: string;
  slug: string;
  title: string;
  index: number;
}) {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="text-center"
    >
      <div className="relative mx-auto aspect-[4/5] max-w-[220px] overflow-hidden rounded-2xl border border-organ-200/90 bg-organ-100 shadow-card">
        {!photoFailed ? (
          <img
            src={`/images/team/${slug}.png`}
            alt=""
            width={440}
            height={550}
            className="h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
            onError={() => setPhotoFailed(true)}
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-800 to-slate-800 font-display text-4xl font-bold text-accent-light"
            aria-hidden
          >
            {initialsFrom(name)}
          </div>
        )}
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink-950">{name}</h3>
      <p className="mx-auto mt-3.5 max-w-[min(100%,15rem)] border-t border-organ-200/90 pt-3 text-center text-[0.8125rem] font-medium leading-snug text-organ-700 text-balance sm:max-w-[17rem] sm:text-sm sm:leading-relaxed">
        {title}
      </p>
    </motion.article>
  );
}

export function TeamSection() {
  return (
    <section
      id="team"
      className="relative scroll-mt-8 border-t border-organ-200/90 bg-white py-16 sm:py-20"
      aria-labelledby="team-heading"
    >
      <div className="layout-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="team-heading"
            className="font-serif text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl"
          >
            Our team
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 md:grid-cols-3 lg:gap-x-10">
          {members.map((m, i) => (
            <TeamMemberCard key={m.slug} name={m.name} slug={m.slug} title={m.title} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
