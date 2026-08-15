import { Link } from "react-router-dom";
import { RevealLines, FadeUp } from "@/components/Reveal";

const ABOUT_IMG =
  "https://wallpaperaccess.com/full/758555.png";

const chapters = [
  {
    n: "01",
    title: "Precision as a principle",
    body: "Every instrument we ship is validated against the strictest clinical benchmarks. We do not treat accuracy as a feature — it is the baseline from which everything else is designed.",
  },
  {
    n: "02",
    title: "One language, six sciences",
    body: "Agriculture, urine, sperm, microbiology, oncology and haematology each demand different chemistry. We unify them under a single data model, so results speak the same language across your entire lab.",
  },
  {
    n: "03",
    title: "Built with the people who use it",
    body: "Our platforms are shaped by technicians, pathologists and agronomists in the field. Their workflows drive our engineering, not the other way around.",
  },
  {
    n: "04",
    title: "Support that never sleeps",
    body: "Connected instruments mean proactive care. We monitor performance remotely and intervene before a problem reaches your bench.",
  },
];

const team = [
  {
    name: "Dr. Jaypal Reddy",
    role: "PhD Scholar | Research & Innovation",
    experience: "Research & Academic Expertise",
    image: "/jayapal.png",
    description:
      "Dr. Jaypal Reddy is a PhD scholar with a strong focus on research, analytical thinking, and innovation. His academic journey reflects a commitment to exploring complex problems and developing knowledge-driven solutions. He brings a research-oriented perspective to technology development, combining structured analysis with a curiosity for emerging ideas and practical applications.",
  },
  {
    name: "Rajiv Kumar",
    role: "M.Tech. in Bioscience and Bioengineering, IIT Bombay",
    experience: "Biomedical Data & AI Specialist",
    image: "/rajiv.png",
    description:
      "Specialist in biomedical data analysis, algorithm development, AI-driven medical imaging, computer vision, and AI/ML, deep learning (CNN, DICOM). Focuses on intelligent diagnostic algorithms and data-driven healthcare solutions. Has hands-on experience in developing AI-based 5-part CBC machine technology.",
  },
  {
    name: "Dr. Santosh Singh",
    role: "KMC Healthcare Multispeciality Hospital",
    experience: "Medical Advisor & Clinical Validation Partner",
    image: "/santosh.png",
    description:
      "Over 18 years of clinical and research experience specializing in renal pathology, urinalysis interpretation. Medical Advisor, Clinical validation partner. Advises on diagnostic thresholds, sediment classification criteria, and ICMR guideline compliance.",
  },
];

export default function About() {
  return (
    <div data-testid="about-page" className="pt-[72px]">

      {/* Our Story */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-24 pb-16">
        <p className="overline text-[#00b8d4] mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-[#00b8d4]" />
          Our Story
        </p>

        <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-light tracking-tighter leading-[0.98] text-[#0a2540] max-w-4xl">
          <RevealLines
            lines={["We turn samples", "into decisions", "worth trusting."]}
            delay={0.15}
          />
        </h1>
      </section>

      {/* About Image */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-24">
        <div className="relative bg-slate-100 p-4 lg:p-6">
          <img
            src={ABOUT_IMG}
            alt="Laboratory"
            className="w-full h-[420px] lg:h-[560px] object-cover"
          />
        </div>
      </section>

      {/* Manifesto */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">

              <p className="overline text-[#00b8d4] mb-5">
                Manifesto
              </p>

              <h2 className="font-display text-3xl sm:text-4xl font-light tracking-tight text-[#0a2540] leading-tight">
                Four commitments that define how we build.
              </h2>

            </div>
          </div>

          <div className="lg:col-span-8">

            {chapters.map((c, i) => (
              <FadeUp key={c.n} delay={i * 0.05}>

                <div className="relative py-12 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">

                  <span className="sm:col-span-3 font-display text-7xl font-extralight text-slate-200 leading-none">
                    {c.n}
                  </span>

                  <div className="sm:col-span-9">

                    <h3 className="font-display text-2xl font-light text-[#0a2540]">
                      {c.title}
                    </h3>

                    <p className="mt-4 text-slate-500 leading-relaxed max-w-xl">
                      {c.body}
                    </p>

                  </div>

                </div>

              </FadeUp>
            ))}

          </div>

        </div>
      </section>

      {/* Leadership & Expertise */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-32">

        <div className="mb-14">

          <p className="overline text-[#00b8d4] mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-[#00b8d4]" />
            Leadership & Expertise
          </p>

          <h2 className="font-display text-4xl sm:text-5xl font-light tracking-tight text-[#0a2540] max-w-3xl">
            The expertise behind our vision.
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {team.map((person, index) => (
            <FadeUp key={person.name} delay={index * 0.08}>

              <div className="group">

                {/* Profile Image / Placeholder */}
                <div className="bg-slate-100 w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-6 flex items-center justify-center transition-all duration-300 group-hover:bg-slate-200 border border-slate-200/60 shadow-sm">

                  {person.image ? (
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <span className="font-display text-7xl font-light text-slate-300">
                      {person.name.replace(/^Dr\.\s*/i, "").charAt(0)}
                    </span>
                  )}

                </div>

                {/* Name */}
                <h3 className="font-display text-2xl font-light text-[#0a2540]">
                  {person.name}
                </h3>

                {/* Role */}
                <p className="mt-2 text-sm font-medium text-[#00b8d4]">
                  {person.role}
                </p>

                {/* Experience */}
                <p className="mt-2 text-sm font-medium text-slate-600">
                  {person.experience}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                  {person.description}
                </p>

              </div>

            </FadeUp>
          ))}

        </div>
      </section>

      {/* Statistics */}
      <section className="bg-[#0a2540] text-white noise relative">

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-28 grid grid-cols-2 md:grid-cols-4 gap-10">

          {[
            ["2026", "Founded"],
            ["12+", "Disciplines"],
            ["10+", "Labs served"],
            ["24/7", "Support"],
          ].map(([n, l]) => (
            <FadeUp key={l}>

              <p className="font-display text-5xl font-extralight text-[#00e5ff]">
                {n}
              </p>

              <p className="mt-3 text-sm text-slate-300">
                {l}
              </p>

            </FadeUp>
          ))}

        </div>
      </section>

      {/* Contact */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28 text-center">

        <FadeUp>

          <h2 className="font-display text-4xl sm:text-5xl font-light tracking-tighter text-[#0a2540] max-w-2xl mx-auto">
            Let's build the next standard of diagnostics together.
          </h2>

          <Link
            to="/contact"
            data-testid="about-cta-btn"
            className="btn-primary mt-9 inline-flex px-8 py-4 rounded-full text-sm font-medium"
          >
            Get in touch
          </Link>

        </FadeUp>

      </section>

    </div>
  );
}