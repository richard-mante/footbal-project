import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen"
      style={{
        background: "linear-gradient(to bottom right, #f8fafc, #f1f5f9)",
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Join the Excitement of{" "}
                <span style={{ color: "#004A99" }}>Flag Football!</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Empowering kids through teamwork, safety, and confidence. A fun,
                safe, and inclusive introduction to American Flag Football —
                right here in Accra!
              </p>
              <div
                className="flex items-center gap-2 font-medium"
                style={{ color: "#004A99" }}
              >
                <span
                  style={{ backgroundColor: "#004A99", color: "white" }}
                  className="px-3 py-1 rounded-full text-sm"
                >
                  Ages 7-12
                </span>
                <span
                  style={{ backgroundColor: "#004A99", color: "white" }}
                  className="px-3 py-1 rounded-full text-sm"
                >
                  Boys & Girls
                </span>
                <span
                  style={{ backgroundColor: "#004A99", color: "white" }}
                  className="px-3 py-1 rounded-full text-sm"
                >
                  Non-Contact
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                size="lg"
                style={{ backgroundColor: "#004A99" }}
                className="hover:opacity-90 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105"
                asChild
              >
                <a
                  href="https://forms.gle/78Nk66tnwFMMXVFr5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sign Up Today!
                </a>
              </Button>
              <p className="text-sm text-slate-500">
                Your membership sponsors another child and strengthens our
                community
              </p>
            </div>
          </div>

          {/* Right side - Video */}
          <div className="relative">
            <div
              className="aspect-video rounded-3xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: "#e2e8f0" }}
            >
              <video
                className="w-full h-full object-cover"
                controls
                loop
                poster="/images/video-thumbnail.png"
              >
                <source src="hero-vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-center">
                <div
                  className="text-3xl font-bold"
                  style={{ color: "#004A99" }}
                >
                  NKONSONKONSON
                </div>
                <div className="text-sm text-slate-600">
                  In unity lies strength!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
