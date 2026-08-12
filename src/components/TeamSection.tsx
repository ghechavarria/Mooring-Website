import { motion } from "framer-motion";
import { useState } from "react";

const members = [
  { name: "Yeqiao Guo", slug: "yeqiao-guo", title: "Chief Executive Officer" },
  { name: "James Jones", slug: "james-jones", title: "Chief Operating Officer" },
  { name: "Zhen Wu", slug: "zhen-wu", title: "Chief Financial Officer" },
  { name: "Erik Ruiz", slug: "erik-ruiz", title: "Chief Information Security Officer" },
  { name: "Grace Hechavarria", slug: "grace-hechavarria", title: "Chief Information Officer" },
  { name: "Joanne Rossi", slug: "joanne-rossi", title: "Chief Quality and Compliance Officer" },
  { name: "Andrew Li", slug: "andrew-li", title: "SVP Product Development" },
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
      className="w-[calc(50%-0.75rem)] text-center sm:w-52 md:w-56"
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
      <div className="mt-4 flex min-h-[5.75rem] flex-col sm:min-h-[6.25rem]">
        <h3 className="text-[15px] font-semibold tracking-tight text-ink-950 sm:text-base">{name}</h3>
        <p className="mx-auto mt-2.5 max-w-[15rem] border-t border-organ-200/90 pt-2.5 text-[0.75rem] font-medium leading-snug text-organ-700 text-balance sm:text-[0.8125rem] sm:leading-relaxed">
          {title}
        </p>
      </div>
    </motion.article>
  );
}

export function TeamSection() {
  return (
    <section
      id="team"
      className="section-marketing border-t border-organ-200/90 bg-organ-50 pb-16 sm:pb-24"
      aria-labelledby="team-heading"
    >
      <div className="layout-shell">
        <div className="mx-auto w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-erp">
              The people
            </p>
            <h2 id="team-heading" className="section-heading">
              Our team
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-organ-800">
              Mortgage technology veterans building the platform independent loan officers actually
              need.
            </p>
          </motion.div>

          <div className="mt-14 flex flex-wrap justify-center gap-x-5 gap-y-10 sm:mt-16 sm:gap-x-6 lg:gap-x-7">
            {members.map((m, i) => (
              <TeamMemberCard key={m.slug} name={m.name} slug={m.slug} title={m.title} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
