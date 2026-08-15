import { Link } from "react-router-dom";
import { Hexagon, Mail, Phone, MapPin, ShieldCheck, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="relative bg-[#06182a] text-white overflow-hidden">
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Company Bio */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2.5 mb-6 text-white no-underline">
              <img src="/logo.jpeg" alt="BioMindz Logo" className="h-10 w-auto rounded" />
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-tight text-white leading-none mt-1">
                  BIOMINDZ
                </span>
                <span className="text-[10px] font-medium text-[#00b8d4] uppercase tracking-widest mt-1.5">
                  Intelligence. Innovation. Impact
                </span>
              </div>
            </Link>
            <p className="font-display text-2xl font-light tracking-tight leading-snug max-w-md text-slate-200 mb-6">
              AI-Powered Intelligence for Every Discipline.
            </p>
            <div className="flex flex-col gap-3 mb-6">
              <span className="text-sm font-semibold text-slate-400">Recognized by :</span>
              <div className="flex items-center gap-4">
                <img src="/dpiit.jpg" alt="DPIIT" className="h-12 object-contain bg-white rounded px-2 py-1" />
                <img src="/msme.png" alt="MSME" className="h-12 object-contain bg-white rounded px-2 py-1" />
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <p className="font-mono text-xs text-[#00b8d4] uppercase tracking-widest mb-4 font-semibold">Navigate</p>
            <ul className="space-y-3 text-slate-300 text-sm list-none p-0">
              <li><Link to="/" className="hover:text-[#00b8d4] transition-colors no-underline">Home</Link></li>
              <li><Link to="/solutions" className="hover:text-[#00b8d4] transition-colors no-underline">Solutions & Products</Link></li>
              <li><Link to="/about" className="hover:text-[#00b8d4] transition-colors no-underline">About BioMindz</Link></li>
              <li><Link to="/contact" className="hover:text-[#00b8d4] transition-colors no-underline">Request a Demo</Link></li>
              <li><Link to="/admin" className="hover:text-[#00b8d4] transition-colors no-underline">Laboratory Admin Portal</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3">
            <p className="font-mono text-xs text-[#00b8d4] uppercase tracking-widest mb-4 font-semibold">Contact Headquarters</p>
            <ul className="space-y-4 text-slate-300 text-sm list-none p-0">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#00b8d4] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>contact@biomindz.in</span>
                  <span>info@biomindz.in</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00b8d4] shrink-0" />
                <span>+91 9963064019</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00b8d4] mt-1 shrink-0" />
                <div className="flex flex-col">
                  <span className="font-semibold text-white text-xs mb-1">Registered Address</span>
                  <span>1-136-3, Anantapur Rural, Anantapur, Ananthapur, Anantapur, Andhra Pradesh, India, 515001</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00b8d4] mt-1 shrink-0" />
                <div className="flex flex-col">
                  <span className="font-semibold text-white text-xs mb-1">Branch Address</span>
                  <span>Office No. 503, 3rd floor, B block, Ace monte carlo,<br />Kothaguda X-Roads, Kondapur,<br />Hyderabad 500084</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12 w-full h-[240px] rounded-xl overflow-hidden border border-white/10 relative bg-[#06182a]">
          <iframe
            src="https://maps.google.com/maps?q=Ace%20monte%20carlo,%20kothaguda%20X-roads,%20hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <p>© {new Date().getFullYear()} BioMindz Solutions Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/admin" data-testid="footer-admin-link" className="hover:text-white transition-colors text-slate-400 no-underline">
              Control Room Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}