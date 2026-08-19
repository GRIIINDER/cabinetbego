import { ContentSection } from "@/content/types";

export default function InfoSections({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="space-y-14">
      {sections.map((section, i) => (
        <div key={i} className="border-t border-white/10 pt-10 first:border-none first:pt-0">
          {section.heading && (
            <h2 className="font-serif text-2xl font-semibold text-white">
              {section.heading}
            </h2>
          )}
          {section.paragraphs?.map((p, j) => (
            <p key={j} className="mt-4 max-w-3xl text-base leading-relaxed text-white/70">
              {p}
            </p>
          ))}
          {section.itemsTitle && (
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-white/90">
              {section.itemsTitle}
            </p>
          )}
          {section.items && (
            <ul className={`grid gap-3 sm:grid-cols-2 ${section.itemsTitle ? "mt-4" : "mt-6"}`}>
              {section.items.map((item, k) => (
                <li
                  key={k}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#161616] p-4 text-sm leading-relaxed text-white/80"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
