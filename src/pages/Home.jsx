import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { RevealLines, FadeUp } from "@/components/Reveal";
import { api } from "@/lib/api";

// =====================================================
// HERO IMAGES
// Changes automatically every 5 seconds
// =====================================================

const HERO_IMAGES = [
  {
    src: "https://img.magnific.com/premium-photo/scientist-lab-with-plants-background_1170196-1771.jpg",
    alt: "AI-powered agriculture and plant research",
    label: "Agriculture",
    text: "Intelligent analytics for agriculture, plant research, and precision farming.",
  },
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=85",
    alt: "Biomedical diagnostics and healthcare laboratory",
    label: "Healthcare",
    text: "Advanced intelligence for biomedical diagnostics and healthcare applications.",
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=85",
    alt: "Advanced manufacturing and engineering",
    label: "Manufacturing",
    text: "Smart engineering and automation for modern manufacturing environments.",
  },
  {
    src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1600&q=85",
    alt: "Life sciences laboratory research",
    label: "Life Sciences",
    text: "Technology-driven solutions for laboratories, research, and life sciences.",
  },
  {
    src: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1600&q=85",
    alt: "Artificial intelligence and computer vision",
    label: "AI & Computer Vision",
    text: "AI-powered computer vision and image analytics for intelligent decision-making.",
  },
];

const ABOUT_IMG = "https://wallpaperaccess.com/full/758555.png";

export default function Home() {
  const [products, setProducts] = useState([]);

  // =====================================================
  // HERO IMAGE STATE
  // =====================================================

  const [heroImage, setHeroImage] = useState(0);

  const heroRef = useRef(null);

  const {
    scrollYProgress,
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "22%"]
  );

  const imgScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.12]
  );

  // =====================================================
  // LOAD PRODUCTS
  // =====================================================

  useEffect(() => {
    api
      .get("/products")
      .then((r) => setProducts(r.data))
      .catch(() => {});
  }, []);

  // =====================================================
  // CHANGE HERO IMAGE EVERY 5 SECONDS
  // =====================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImage((current) => {
        return (current + 1) % HERO_IMAGES.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Current hero information
  const currentHero = HERO_IMAGES[heroImage];

  return (
    <div data-testid="home-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        ref={heroRef}
        className="relative min-h-screen pt-[72px] overflow-hidden"
      >

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[calc(100vh-72px)]">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="lg:col-span-6 pt-14 lg:pt-0">

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="overline text-[#00b8d4] mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-[#00b8d4]" />

              Biomedical Diagnostics
            </motion.p>


            <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-light tracking-tighter leading-[0.98] text-[#0a2540]">

              <RevealLines
                lines={[
                  "AI-Powered Intelligence for Every Discipline.",
                ]}
                delay={0.2}
              />

            </h1>


            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
                duration: 0.7,
              }}
              className="mt-8 text-lg text-slate-500 max-w-lg leading-relaxed"
            >
              From agriculture to oncology, we build precision
              instruments that turn samples into decisions —
              trusted by laboratories worldwide.
            </motion.p>


            {/* =================================================
                BUTTONS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.7,
              }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >

              <Link
                to="/solutions"
                data-testid="hero-explore-btn"
                className="btn-primary group px-7 py-3.5 rounded-full text-sm font-medium flex items-center gap-2"
              >

                Explore solutions

                <ArrowUpRight
                  className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />

              </Link>


              <Link
                to="/contact"
                data-testid="hero-contact-btn"
                className="px-7 py-3.5 rounded-full text-sm font-medium border border-slate-300 text-[#0a2540] hover:border-[#0a2540] transition-colors"
              >
                Talk to an expert
              </Link>

            </motion.div>


            {/* =================================================
                STATISTICS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.5,
              }}
              className="mt-16 grid grid-cols-3 gap-6 max-w-md border-t border-slate-200 pt-8"
            >

              {[
                ["12+", "Disciplines"],
                ["10+", "Labs served"],
                ["99.2%", "Accuracy"],
              ].map(([number, label]) => (

                <div key={label}>

                  <p className="font-display text-3xl font-light text-[#0a2540]">
                    {number}
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    {label}
                  </p>

                </div>

              ))}

            </motion.div>

          </div>


          {/* =================================================
              HERO IMAGE
          ================================================= */}

          <div className="lg:col-span-6 relative">

            <div className="relative h-[420px] lg:h-[560px] overflow-hidden bg-slate-100 clip-frame">

              {/* =================================================
                  IMAGE SLIDES
              ================================================= */}

              {HERO_IMAGES.map((image, index) => (

                <motion.img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}

                  style={{
                    y: imgY,
                    scale: imgScale,
                  }}

                  initial={{
                    opacity: 0,
                  }}

                  animate={{
                    opacity: index === heroImage ? 1 : 0,
                  }}

                  transition={{
                    opacity: {
                      duration: 1.2,
                      ease: "easeInOut",
                    },
                  }}

                  className="absolute inset-0 w-full h-full object-cover"
                />

              ))}


              {/* =================================================
                  IMAGE GRADIENT
              ================================================= */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/30 to-transparent pointer-events-none" />

            </div>


            {/* =================================================
                LIVE INFORMATION CARD
            ================================================= */}

            <motion.div
              key={currentHero.label}

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.8,
              }}

              className="absolute -bottom-6 -left-2 lg:-left-8 bg-white border border-slate-200 shadow-xl p-5 max-w-[240px]"
            >

              <p className="overline text-[#00b8d4]">
                {currentHero.label}
              </p>

              <p className="mt-2 text-sm text-slate-600 leading-snug">
                {currentHero.text}
              </p>

            </motion.div>


            {/* =================================================
                SLIDE INDICATORS
            ================================================= */}

            <div className="absolute bottom-5 right-5 flex items-center gap-2 z-20">

              {HERO_IMAGES.map((image, index) => (

                <button
                  key={image.label}
                  type="button"
                  aria-label={`Show ${image.label}`}
                  onClick={() => setHeroImage(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === heroImage
                      ? "w-8 bg-[#00b8d4]"
                      : "w-2 bg-white/70"
                  }`}
                />

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <section className="py-8 bg-[#f1f5f9] border-y border-slate-200">

        <Marquee
          speed={38}
          gradient={false}
        >

          {[
            "Agriculture",
            "Urine Analysis",
            "AI Models Training",
            "Sperm Analysis",
            "Microbiology",
            "Computer Vision Intelligence",
            "Oncology",
            "Haematology",
            "Precision",
            "Automation",
            "Designing",
            "Manufacturing",
            "Smart AI Solutions",
            "Innovation",
          ].map((text, index) => (

            <span
              key={index}
              className="mx-10 font-display text-2xl sm:text-3xl font-light tracking-tight text-[#0a2540] flex items-center gap-10"
            >

              {text}

              <span className="text-[#00b8d4]">
                ✦
              </span>

            </span>

          ))}

        </Marquee>

      </section>


      {/* =====================================================
          MANIFESTO PREVIEW
      ===================================================== */}

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28 lg:py-36">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 relative">

            <div className="relative bg-slate-100 p-4">

              <img
                src={ABOUT_IMG}
                alt="Scientist"
                className="w-full h-[440px] object-cover"
              />

            </div>

          </div>


          <div className="lg:col-span-5 lg:col-start-8">

            <p className="overline text-[#00b8d4] mb-6">
              Who we are
            </p>

            <h2 className="font-display text-4xl sm:text-5xl font-light tracking-tight text-[#0a2540] leading-tight">
              A single standard of accuracy across six sciences.
            </h2>

            <p className="mt-7 text-slate-500 leading-relaxed">
              BioMindz Solutions Private Limited designs,
              manufactures and supports diagnostic platforms
              that share one philosophy: clinical-grade
              reliability, wherever the sample comes from —
              a field, a clinic, or a genomics core.
            </p>

            <Link
              to="/about"
              data-testid="home-about-link"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#0a2540] group"
            >

              Read our story

              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          SOLUTIONS GRID
      ===================================================== */}

      <section className="bg-[#0a2540] text-white noise relative">

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-28 lg:py-36">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">

            <div>

              <p className="overline text-[#00e5ff] mb-5">
                Solutions
              </p>

              <h2 className="font-display text-4xl sm:text-5xl font-light tracking-tight max-w-xl leading-tight">
                Six platforms. One diagnostic language.
              </h2>

            </div>


            <Link
              to="/solutions"
              data-testid="home-solutions-link"
              className="text-sm text-slate-300 hover:text-[#00e5ff] transition-colors inline-flex items-center gap-2 whitespace-nowrap"
            >

              View all

              <ArrowUpRight className="w-4 h-4" />

            </Link>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

            {products.map((product, index) => {

              const span = [
                "md:col-span-7",
                "md:col-span-5",
                "md:col-span-5",
                "md:col-span-7",
                "md:col-span-6",
                "md:col-span-6",
              ][index % 6];

              return (

                <FadeUp
                  key={product.slug}
                  delay={(index % 3) * 0.08}
                  className={span}
                >

                  <Link
                    to={`/solutions/${product.slug}`}
                    data-testid={`home-solution-${product.slug}`}
                    className="group block relative h-72 overflow-hidden border border-white/10 bg-white/5"
                  >

                    <img
                      src={product.image}
                      alt={product.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] via-[#0a2540]/40 to-transparent" />

                    <div className="relative z-10 h-full p-7 flex flex-col justify-between">

                      <span className="overline text-[#00e5ff]">
                        0{index + 1} — {product.category}
                      </span>

                      <div>

                        <h3 className="font-display text-2xl font-light tracking-tight">
                          {product.title}
                        </h3>

                        <p className="mt-2 text-sm text-slate-300 max-w-sm">
                          {product.tagline}
                        </p>

                        <span className="mt-4 inline-flex items-center gap-2 text-sm text-[#00e5ff] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">

                          Discover

                          <ArrowRight className="w-4 h-4" />

                        </span>

                      </div>

                    </div>

                  </Link>

                </FadeUp>

              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28 lg:py-36 text-center">

        <FadeUp>

          <p className="overline text-[#00b8d4] mb-6">
            Ready when you are
          </p>

          <h2 className="font-display text-4xl sm:text-6xl font-light tracking-tighter text-[#0a2540] max-w-3xl mx-auto leading-[1.02]">
            Bring precision diagnostics to your laboratory.
          </h2>

          <Link
            to="/contact"
            data-testid="home-cta-btn"
            className="btn-primary mt-10 inline-flex px-9 py-4 rounded-full text-sm font-medium"
          >
            Request a demo
          </Link>

        </FadeUp>

      </section>

    </div>
  );
}