import { FadeUp, RevealLines } from "@/components/Reveal";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Multi-Domain Products",
    description:
      "We develop intelligent products across healthcare, agriculture, life sciences, industrial engineering, and scientific applications.",
    image:
      "https://demandplaybook.com/wp-content/uploads/DALL%C2%B7E-2024-04-06-13.07.24-Design-a-horizontal-featured-image-reflecting-the-theme-Unlocking-Business-Growth_-How-AI-Solutions-Elevate-Efficiency-and-Customer-Engagement.-The-.webp",
  },

  {
    number: "02",
    title: "Design Services",
    description:
      "From concept to prototype, we create practical product and engineering designs focused on usability, precision, and scalability.",
    image:
      "https://shalindesigns.com/wp-content/uploads/2025/01/CAD-Design-Hacks_-From-Beginner-to-Pro.webp",
  },

  {
    number: "03",
    title: "Manufacturing",
    description:
      "We support prototype and technology-driven manufacturing with an emphasis on quality, precision, reliability, and efficient production.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/038/962/564/small_2x/ai-generated-advanced-high-precision-robot-arms-on-fully-automated-pcb-assembly-line-inside-modern-electronics-factory-photo.jpg",
  },

  {
    number: "04",
    title: "Microfluidics Cartridge-Based Services",
    description:
      "We develop microfluidics and cartridge-based solutions for sample handling, fluid control, rapid testing, and compact diagnostic workflows.",
    image:
      "https://engineerine.com/wp-content/uploads/2025/03/LATEST-2025-03-20T220308885_enhanced-1536x806.png",
  },

  {
    number: "05",
    title: "Software Services",
    description:
      "We build modern software platforms, web applications, cloud solutions, APIs, and data systems that connect products and people.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },

  {
    number: "06",
    title: "Computer Vision & Image Analytics Services",
    description:
      "We use computer vision and AI to detect, classify, measure, inspect, and analyze images and video, turning visual information into actionable insights.",
    image:
      "https://thedatascientist.com/wp-content/uploads/2024/09/Computer-visio.png",
  },

  {
    number: "07",
    title: "AI Agent-Based Services",
    description:
      "We develop intelligent AI agents that can understand tasks, reason over information, use tools, automate workflows, and support decision-making.",
    image:
      "https://nlplogix.com/wp-content/uploads/2025/05/1.png",
  },
];

export default function Services() {
  return (
    <div className="pt-[72px]">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-24 pb-20">

        <p className="overline text-[#00b8d4] mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-[#00b8d4]" />
          Our Services
        </p>

        <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-light tracking-tighter leading-[0.98] text-[#0a2540] max-w-5xl">

          <RevealLines
            lines={[
              "From ideas",
              "to intelligent",
              "solutions.",
            ]}
            delay={0.15}
          />

        </h1>

        <p className="mt-10 max-w-3xl text-slate-500 text-lg leading-relaxed">
          We combine engineering, software, artificial intelligence,
          computer vision, and domain expertise to build products and
          services that solve complex real-world problems.
        </p>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-32">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {services.map((service, index) => (

            <FadeUp
              key={service.number}
              delay={index * 0.05}
            >

              <article className="group bg-white border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-500">

                {/* IMAGE */}

                <div className="relative overflow-hidden bg-slate-100">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  />


                  {/* SERVICE NUMBER */}

                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-2">

                    <span className="font-mono text-xs tracking-widest text-[#00b8d4]">
                      {service.number}
                    </span>

                  </div>


                  {/* GET IN TOUCH */}

                  <Link
                    to={`/contact?service=${encodeURIComponent(
                      service.title
                    )}`}
                    className="absolute bottom-5 right-5 px-5 py-3 rounded-full bg-white text-[#0a2540] text-sm font-medium shadow-md hover:bg-[#00b8d4] hover:text-white transition-all duration-300"
                  >
                    Get in touch
                  </Link>

                </div>


                {/* CONTENT */}

                <div className="p-7 lg:p-8">

                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#00b8d4] mb-3">
                    BioMindz Services
                  </p>

                  <h2 className="font-display text-2xl lg:text-3xl font-light text-[#0a2540]">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-slate-500 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 h-px w-8 bg-[#00b8d4] group-hover:w-16 transition-all duration-500" />

                </div>

              </article>

            </FadeUp>

          ))}

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY SECTION
      ===================================================== */}

      <section className="bg-[#0a2540] text-white">

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28">

          <FadeUp>

            <p className="overline text-[#00e5ff] mb-6">
              Technology & Innovation
            </p>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight max-w-4xl">
              Engineering intelligence for the next generation of products.
            </h2>

            <p className="mt-8 text-slate-300 max-w-2xl leading-relaxed">
              From intelligent products and advanced manufacturing to
              computer vision, image analytics, software platforms,
              microfluidics, and AI agents, we bring multiple technologies
              together to create practical and scalable solutions.
            </p>

          </FadeUp>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28 text-center">

        <FadeUp>

          <p className="overline text-[#00b8d4] mb-5">
            Start a conversation
          </p>

          <h2 className="font-display text-4xl sm:text-5xl font-light tracking-tighter text-[#0a2540] max-w-3xl mx-auto">
            Have an idea, challenge, or product to build?
          </h2>

          <p className="mt-6 text-slate-500 max-w-xl mx-auto leading-relaxed">
            Tell us what you are building. Our team can help turn your
            requirement into a practical technology solution.
          </p>

          <Link
            to="/contact"
            className="btn-primary mt-9 inline-flex px-8 py-4 rounded-full text-sm font-medium"
          >
            Get in touch
          </Link>

        </FadeUp>

      </section>

    </div>
  );
}