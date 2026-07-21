export const content = {
  projectName: "Sakshi AI Companion",
  icon: "🎙️",
  tagline: "A voice-first AI companion with real memory and sub-second replies.",
  description:
    "Sakshi is a voice AI companion with long-term memory, web search, and document RAG — built for real-time, low-latency conversation, not chatbot round-trips.",
  badges: ["React", "FastAPI", "Groq", "Deepgram", "mem0"],
  stats: [
    { value: "<900ms", label: "End-to-end voice latency" },
    { value: "5", label: "Built-in tools" },
    { value: "Long-term", label: "Memory via mem0" },
  ],
  features: [
    {
      title: "Real-time voice chat",
      description:
        "Bidirectional streaming voice conversation powered by Deepgram STT/TTS and a Groq-hosted Llama 3.1 brain.",
    },
    {
      title: "Actually remembers you",
      description:
        "mem0-backed long-term memory means conversations build on each other instead of resetting every session.",
    },
    {
      title: "Tool calling",
      description:
        "Web search, calculator, weather, and document RAG are wired in as callable tools the agent reaches for automatically.",
    },
    {
      title: "State-driven UI",
      description:
        "A React + Tailwind interface with Lottie animations reflects idle, listening, thinking, and speaking states live.",
    },
  ],
  architecture: ["React frontend", "FastAPI agent service", "Groq + agno brain", "Deepgram voice"],
  githubUrl: "https://github.com/Puneetshivhare/Companion_Agent",
  status: "Active development",
};
