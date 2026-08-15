import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MapPin,
  Loader2,
  ArrowUpRight,
} from "lucide-react";

import { RevealLines } from "@/components/Reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { api, formatApiErrorDetail } from "@/lib/api";
import { useSearchParams } from "react-router-dom";

// =====================================================
// ALL 7 SERVICES
// =====================================================

const services = [
  "Multi-Domain Products",
  "Design Services",
  "Manufacturing",
  "Microfluidics Cartridge-Based Services",
  "Software Services",
  "Computer Vision & Image Analytics Services",
  "AI Agent-Based Services",
];

// =====================================================
// PROFESSIONAL MESSAGE FOR EACH SERVICE
// =====================================================

const serviceMessages = {
  "Multi-Domain Products":
    `Hello BioMindz Team,

I am interested in your Multi-Domain Products services and would appreciate the opportunity to learn more about your capabilities, solutions, and potential areas of collaboration. I look forward to discussing how BioMindz can support our requirements.`,

  "Design Services":
    `Hello BioMindz Team,

I am interested in your Design Services and would appreciate the opportunity to learn more about your capabilities, solutions, and potential areas of collaboration. I look forward to discussing how BioMindz can support our requirements.`,

  "Manufacturing":
    `Hello BioMindz Team,

I am interested in your Manufacturing services and would appreciate the opportunity to learn more about your capabilities, solutions, and potential areas of collaboration. I look forward to discussing how BioMindz can support our requirements.`,

  "Microfluidics Cartridge-Based Services":
    `Hello BioMindz Team,

I am interested in your Microfluidics Cartridge-Based Services and would appreciate the opportunity to learn more about your capabilities, solutions, and potential areas of collaboration. I look forward to discussing how BioMindz can support our requirements.`,

  "Software Services":
    `Hello BioMindz Team,

I am interested in your Software Services and would appreciate the opportunity to learn more about your capabilities, solutions, and potential areas of collaboration. I look forward to discussing how BioMindz can support our requirements.`,

  "Computer Vision & Image Analytics Services":
    `Hello BioMindz Team,

I am interested in your Computer Vision & Image Analytics Services and would appreciate the opportunity to learn more about your capabilities, solutions, and potential areas of collaboration. I look forward to discussing how BioMindz can support our requirements.`,

  "AI Agent-Based Services":
    `Hello BioMindz Team,

I am interested in your AI Agent-Based Services and would appreciate the opportunity to learn more about your capabilities, solutions, and potential areas of collaboration. I look forward to discussing how BioMindz can support our requirements.`,
};
export default function Contact() {
  const [searchParams] = useSearchParams();

  const [products, setProducts] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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
  // AUTO-FILL SERVICE + MESSAGE
  // =====================================================

  useEffect(() => {
    const serviceFromUrl = searchParams.get("service");

    if (!serviceFromUrl) {
      return;
    }

    if (!services.includes(serviceFromUrl)) {
      return;
    }

    const automaticMessage =
      serviceMessages[serviceFromUrl] || "";

    setForm((currentForm) => ({
      ...currentForm,
      service: serviceFromUrl,
      message: automaticMessage,
    }));
  }, [searchParams]);

  // =====================================================
  // INPUT HANDLER
  // =====================================================

  const set = (key) => (valueOrEvent) => {
    const value = valueOrEvent?.target
      ? valueOrEvent.target.value
      : valueOrEvent;

    setForm((currentForm) => ({
      ...currentForm,
      [key]: value,
    }));
  };

  // =====================================================
  // SUBMIT
  // =====================================================

  const submit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error(
        "Please fill in your name, email and message."
      );
      return;
    }

    setLoading(true);

    try {
      await api.post("/inquiries", form);

      toast.success(
        "Thank you — our team will be in touch shortly."
      );

      setForm({
        name: "",
        email: "",
        company: "",
        phone: "",
        interest: "",
        service: "",
        message: "",
      });
    } catch (err) {
      toast.error(
        formatApiErrorDetail(
          err.response?.data?.detail
        ) || "Submission failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      data-testid="contact-page"
      className="pt-[72px]"
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-24 pb-16">

        <p className="overline text-[#00b8d4] mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-[#00b8d4]" />
          Contact
        </p>

        <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-light tracking-tighter leading-[0.98] text-[#0a2540] max-w-3xl">

          <RevealLines
            lines={[
              "Let's talk",
              "Collaboration.",
            ]}
            delay={0.15}
          />

        </h1>

      </section>


      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-32">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">


          {/* =================================================
              FORM
          ================================================= */}

          <div className="lg:col-span-7">

            <form
              onSubmit={submit}
              data-testid="contact-form"
              className="border border-slate-200 p-8 lg:p-10"
            >

              {/* NAME / EMAIL / COMPANY / PHONE */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* FULL NAME */}

                <div>

                  <Label className="text-xs uppercase tracking-wide text-slate-500">
                    Full name *
                  </Label>

                  <Input
                    data-testid="contact-name"
                    value={form.name}
                    onChange={set("name")}
                    className="mt-2 rounded-none border-slate-300 focus-visible:ring-1 focus-visible:ring-[#0a2540]"
                    placeholder="Jane Doe"
                  />

                </div>


                {/* EMAIL */}

                <div>

                  <Label className="text-xs uppercase tracking-wide text-slate-500">
                    Email *
                  </Label>

                  <Input
                    data-testid="contact-email"
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    className="mt-2 rounded-none border-slate-300 focus-visible:ring-1 focus-visible:ring-[#0a2540]"
                    placeholder="jane@lab.com"
                  />

                </div>


                {/* ORGANIZATION */}

                <div>

                  <Label className="text-xs uppercase tracking-wide text-slate-500">
                    Organization
                  </Label>

                  <Input
                    data-testid="contact-company"
                    value={form.company}
                    onChange={set("company")}
                    className="mt-2 rounded-none border-slate-300 focus-visible:ring-1 focus-visible:ring-[#0a2540]"
                    placeholder="Central Lab"
                  />

                </div>


                {/* PHONE */}

                <div>

                  <Label className="text-xs uppercase tracking-wide text-slate-500">
                    Phone
                  </Label>

                  <Input
                    data-testid="contact-phone"
                    value={form.phone}
                    onChange={set("phone")}
                    className="mt-2 rounded-none border-slate-300 focus-visible:ring-1 focus-visible:ring-[#0a2540]"
                    placeholder="+91 ..."
                  />

                </div>

              </div>


              {/* =================================================
                  PRODUCT OF INTEREST
              ================================================= */}

              <div className="mt-6">

                <Label className="text-xs uppercase tracking-wide text-slate-500">
                  Product of interest
                </Label>

                <Select
                  value={form.interest}
                  onValueChange={set("interest")}
                >

                  <SelectTrigger
                    data-testid="contact-interest"
                    className="mt-2 rounded-none border-slate-300 focus:ring-1 focus:ring-[#0a2540]"
                  >

                    <SelectValue placeholder="Select a solution" />

                  </SelectTrigger>

                  <SelectContent>

                    {products.map((p) => (

                      <SelectItem
                        key={p.slug}
                        value={p.title}
                      >

                        {p.title} — {p.category}

                      </SelectItem>

                    ))}

                    <SelectItem value="General enquiry">
                      General enquiry
                    </SelectItem>

                  </SelectContent>

                </Select>

              </div>


              {/* =================================================
                  SERVICE OF INTEREST
              ================================================= */}

              <div className="mt-6">

                <Label className="text-xs uppercase tracking-wide text-slate-500">
                  Service of interest
                </Label>

                <Select
                  value={form.service}
                  onValueChange={(selectedService) => {

                    const newMessage =
                      serviceMessages[selectedService] || "";

                    setForm((currentForm) => ({
                      ...currentForm,
                      service: selectedService,
                      message: newMessage,
                    }));

                  }}
                >

                  <SelectTrigger
                    data-testid="contact-service"
                    className="mt-2 rounded-none border-slate-300 focus:ring-1 focus:ring-[#0a2540]"
                  >

                    <SelectValue placeholder="Select a service" />

                  </SelectTrigger>

                  <SelectContent>

                    {services.map((service) => (

                      <SelectItem
                        key={service}
                        value={service}
                      >

                        {service}

                      </SelectItem>

                    ))}

                  </SelectContent>

                </Select>

              </div>


              {/* =================================================
                  MESSAGE
                  ONLY THIS PART IS CHANGED FOR APPEARANCE
              ================================================= */}

              <div className="mt-6">

                <Label className="text-xs uppercase tracking-wide text-slate-500">
                  Message *
                </Label>

                <Textarea
                  data-testid="contact-message"
                  value={form.message}
                  onChange={set("message")}
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="mt-2 w-full rounded-none bg-white text-[#0a2540] text-base leading-relaxed resize-y"
                  style={{
                    border: "2px solid #0a2540",
                    borderRadius: "0px",
                    padding: "12px 16px",
                    backgroundColor: "#ffffff",
                    color: "#0a2540",
                    boxShadow: "none",
                    outline: "none",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                />

              </div>


              {/* =================================================
                  SEND BUTTON
              ================================================= */}

              <button
                data-testid="contact-submit"
                type="submit"
                disabled={loading}
                className="btn-primary mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium disabled:opacity-60"
              >

                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending
                  </>
                ) : (
                  <>
                    Send inquiry
                    <ArrowUpRight className="w-4 h-4" />
                  </>
                )}

              </button>

            </form>

          </div>


          {/* =================================================
              CONTACT INFORMATION
          ================================================= */}

          <div className="lg:col-span-5 flex flex-col gap-6">

            <div className="bg-[#0a2540] text-white p-8 lg:p-10 noise relative">

              <div className="relative z-10">

                <p className="overline text-[#00e5ff] mb-6">
                  Reach us directly
                </p>

                <div className="space-y-7">


                  {/* EMAIL */}

                  <div className="flex items-start gap-4">

                    <Mail className="w-5 h-5 text-[#00e5ff] mt-1 shrink-0" />

                    <div>

                      <p className="text-sm text-slate-400">
                        Email
                      </p>

                      <p className="text-lg font-light">
                        contact@biomindz.in
                      </p>

                      <p className="text-lg font-light">
                        info@biomindz.in
                      </p>

                    </div>

                  </div>


                  {/* PHONE */}

                  <div className="flex items-start gap-4">

                    <Phone className="w-5 h-5 text-[#00e5ff] mt-1 shrink-0" />

                    <div>

                      <p className="text-sm text-slate-400">
                        Phone
                      </p>

                      <p className="text-lg font-light">
                        +91 9963064019
                      </p>

                    </div>

                  </div>


                  {/* CORPORATE ADDRESS */}

                  <div className="flex items-start gap-4">

                    <MapPin className="w-5 h-5 text-[#00e5ff] mt-1 shrink-0" />

                    <div>

                      <p className="text-sm text-slate-400 mb-1">
                        Corporate Office Address
                      </p>

                      <p className="text-base font-light text-slate-200">

                        Office No. 503, 3rd floor, B block,
                        Ace monte carlo,

                        <br />

                        kothaguda X-roads, hitech city road,

                        <br />

                        hyderabad

                      </p>

                    </div>

                  </div>


                  {/* REGISTERED ADDRESS */}

                  <div className="flex items-start gap-4">

                    <MapPin className="w-5 h-5 text-[#00e5ff] mt-1 shrink-0" />

                    <div>

                      <p className="text-sm text-slate-400 mb-1">
                        Registered Address
                      </p>

                      <p className="text-base font-light text-slate-200">
                        Anantpur, Andrapradesh
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}