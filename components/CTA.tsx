import { content } from "@/content";

export default function CTA() {
  return (
    <section className="px-6 py-24 text-center">
      <div className="mx-auto max-w-content">
        <h2 className="text-[28px] font-semibold tracking-tight">
          Curious how {content.projectName} works under the hood?
        </h2>
        <p className="mx-auto mt-3 max-w-[480px] text-[14px] text-mute">
          Full source, architecture docs, and setup instructions are on GitHub.
        </p>
        <a
          href={content.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-md bg-ink px-6 py-3 text-[13px] font-medium text-white transition-transform duration-300 ease-out hover:scale-[1.04]"
        >
          View source on GitHub
        </a>
      </div>
    </section>
  );
}
