import { content } from "@/content";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-6">
        <span className="text-[15px] font-semibold tracking-tight">
          {content.projectName}
        </span>
        <a
          href={content.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-ink px-4 py-2 text-[13px] font-medium text-white transition-transform duration-300 ease-out hover:scale-[1.04]"
        >
          View on GitHub
        </a>
      </div>
    </header>
  );
}
