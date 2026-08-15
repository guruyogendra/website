import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { RevealLines, FadeUp } from "@/components/Reveal";
import { api } from "@/lib/api";

export default function Solutions() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((r) => setProducts(r.data)).catch(() => {});
  }, []);

  return (
    <div data-testid="solutions-page" className="pt-[72px]">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-24 pb-16">
        <p className="overline text-[#00b8d4] mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-[#00b8d4]" /> Our Solutions
        </p>
        <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-light tracking-tighter leading-[0.98] text-[#0a2540] max-w-4xl">
          <RevealLines lines={["Intelligence for Every Discipline."]} delay={0.15} />
        </h1>
        <p className="mt-8 text-lg text-slate-500 max-w-2xl leading-relaxed">
          Explore our full portfolio of precision instruments — each engineered to deliver clinical-grade accuracy in its field.
        </p>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {products.map((p, i) => {
            const span = ["md:col-span-8", "md:col-span-4", "md:col-span-4", "md:col-span-8", "md:col-span-6", "md:col-span-6"][i % 6];
            return (
              <FadeUp key={p.slug} delay={(i % 2) * 0.1} className={span}>
                <Link
                  to={`/solutions/${p.slug}`}
                  data-testid={`solution-card-${p.slug}`}
                  className="group block bg-white border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden bg-slate-100 p-3">
                    <div className="relative h-full w-full overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                  </div>
                  <div className="p-7 flex items-start justify-between gap-4">
                    <div>
                      <span className="overline text-[#00b8d4]">0{i + 1} — {p.category}</span>
                      <h3 className="mt-3 font-display text-2xl font-light tracking-tight text-[#0a2540]">{p.title}</h3>
                      <p className="mt-2 text-sm text-slate-500 max-w-md leading-relaxed">{p.tagline}</p>
                    </div>
                    <span className="shrink-0 w-11 h-11 rounded-full border border-slate-300 flex items-center justify-center group-hover:bg-[#0a2540] group-hover:border-[#0a2540] transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-[#0a2540] group-hover:text-white transition-colors" />
                    </span>
                  </div>
                </Link>
              </FadeUp>
            );
          })}
        </div>
      </section>
    </div>
  );
}
