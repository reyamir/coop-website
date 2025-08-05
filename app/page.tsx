import { Button } from "@/components/ui/button";
import { Link } from "next/link";
import { Github } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-neutral-50 text-black overflow-hidden relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-8">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/logo.svg')`,
            backgroundSize: "60px 60px",
            backgroundRepeat: "repeat",
            transform: "rotate(15deg) scale(1.2)",
            transformOrigin: "center",
          }}
        />
      </div>

      {/* Overlay to soften the pattern */}
      <div className="fixed inset-0 bg-neutral-50/80"></div>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-2xl md:text-4xl font-black mb-12 leading-tight text-black">
            Chat Freely,{" "}
            <span className="text-[#FFE629] bg-black px-2 py-1 rounded">
              Stay Private
            </span>{" "}
            on Nostr
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 items-center justify-center mb-6">
            <Button
              size="lg"
              className="bg-[#FFE629] hover:bg-[#e6cf24] text-black hover:text-black font-bold text-xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200 border-2 border-black"
              asChild
            >
              <Link href="https://github.com/lumehq/coop/releases/latest">
                Download Now
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-black hover:bg-neutral-800 text-white hover:text-white font-bold text-xl px-8 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200 border-2 border-black"
            >
              <Link href="https://github.com/lumehq/coop/">
                <Github className="mr-2 h-6 w-6" />
                GitHub
              </Link>
            </Button>
          </div>

          {/* Platform availability text */}
          <p className="text-neutral-600 text-xs mt-4">
            Available on Windows, macOS and Linux
          </p>
        </div>
      </main>

      {/* Screenshots Section */}
      <section className="relative z-10 -mt-32 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-8 text-black">
            See Coop in Action
          </h2>

          {/* Screenshots Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-black/10">
                <img
                  src="/screenshots/screenshot-1.png"
                  alt="Coop chat interface with direct messages dialog"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-black/10">
                <img
                  src="/screenshots/screenshot-2.png"
                  alt="Coop dark mode interface with multiple conversations"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-black/10">
                <img
                  src="/screenshots/screenshot-3.png"
                  alt="Coop light theme with conversation list"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-black/10">
                <img
                  src="/screenshots/screenshot-6.png"
                  alt="Contact information and validation features"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-black/10">
                <img
                  src="/screenshots/screenshot-7.png"
                  alt="Coop branding and dark theme"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-black/10">
                <img
                  src="/screenshots/screenshot-9.png"
                  alt="Conversation subject change dialog"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
