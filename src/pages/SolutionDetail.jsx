import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck, Cpu, Download, FileText, Activity } from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/solutionsData';

export default function SolutionDetail() {
  const { slug } = useParams();
  const product = SOLUTIONS_DATA.find((item) => item.slug === slug);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!product) {
    return <Navigate to="/solutions" replace />;
  }

  const relatedProducts = SOLUTIONS_DATA.filter((item) => item.slug !== slug).slice(0, 3);

  const handleDownloadBrochure = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="solution-detail-page">
      {/* Detail Hero Header */}
      <section className="detail-hero">
        <div className="container">
          <Link to="/solutions" className="breadcrumb">
            <ArrowLeft size={16} /> Back to all platforms
          </Link>

          <div className="hero-grid">
            <div className="hero-text">
              <div className="flex items-center gap-3 mb-3">
                <span className="badge-line">{product.discipline}</span>
                <span className="font-mono text-xs font-semibold text-teal-600 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
                  {product.category}
                </span>
              </div>
              <h1 className="product-title">{product.title}</h1>
              <p className="product-subtitle">{product.subtitle}</p>
              <p className="product-desc">{product.description}</p>

              <div className="hero-actions">
                <Link
                  to={`/contact?product=${product.slug}`}
                  className="btn-pill-navy"
                >
                  Request Demonstration <ArrowUpRight size={18} />
                </Link>

                <button
                  onClick={handleDownloadBrochure}
                  className="btn-pill-white"
                >
                  <Download size={16} />
                  {downloadSuccess ? 'Brochure Downloaded!' : 'Download Spec Sheet'}
                </button>
              </div>

              {/* ISO Certification Badge */}
              <div className="iso-badge-row">
                <ShieldCheck size={18} className="text-[#00b8d4]" />
                <span>Clinical Grade • CE-IVD Certified • ISO 13485 Compliant Architecture</span>
              </div>
            </div>

            <div className="hero-image-box">
              <img
                src={product.image}
                alt={product.title}
                className="hero-image"
              />
              <div className="floating-spec-card">
                <div className="text-xs font-mono text-slate-500 uppercase font-semibold">Live Telemetry Metric</div>
                <div className="text-sm font-bold text-[#0a2540] mt-1">{product.telemetryDemo.metricName}</div>
                <div className="text-xl font-extrabold text-[#00b8d4]">{product.telemetryDemo.sampleValue} <span className="text-xs text-slate-500 font-normal">{product.telemetryDemo.unit}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="capabilities-section">
        <div className="container">
          <div className="mb-3">
            <span className="badge-line">SYSTEM CAPABILITIES</span>
          </div>
          <h2 className="section-heading">Engineered for high-volume laboratory precision.</h2>

          <div className="capabilities-grid">
            {product.capabilities.map((cap, idx) => (
              <div key={idx} className="capability-card">
                <div className="cap-icon-box">
                  <CheckCircle2 size={22} className="cap-icon" />
                </div>
                <div className="cap-text">
                  <h3 className="cap-title">{cap}</h3>
                  <p className="cap-desc">
                    Validated under rigorous continuous clinical operation, maintaining reproducible accuracy across multiple shift technicians.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="specs-section">
        <div className="container">
          <div className="mb-3">
            <span className="badge-line">TECHNICAL SPECIFICATIONS</span>
          </div>
          <h2 className="section-heading">Verified performance metrics & parameters.</h2>

          <div className="specs-table-wrapper">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Engineering Parameter</th>
                  <th>Specification Detail</th>
                </tr>
              </thead>
              <tbody>
                {product.specifications.map((spec, idx) => (
                  <tr key={idx}>
                    <td className="spec-label">{spec.label}</td>
                    <td className="spec-value">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related Platforms */}
      <section className="related-section">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="badge-line">EXPLORE MORE</span>
              <h2 className="text-2xl font-extrabold text-[#0a2540] mt-1">Related Diagnostic Platforms</h2>
            </div>
            <Link to="/solutions" className="text-sm font-bold text-[#00b8d4] hover:text-[#0a2540]">
              View all 6 platforms →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <Link key={rel.slug} to={`/solutions/${rel.slug}`} className="related-card">
                <img src={rel.image} alt={rel.title} className="related-img" />
                <div className="p-4">
                  <div className="text-xs font-mono text-[#00b8d4] font-semibold">{rel.discipline}</div>
                  <h3 className="font-bold text-[#0a2540] text-lg mt-1">{rel.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{rel.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Banner CTA */}
      <section className="product-cta">
        <div className="container text-center">
          <div className="mb-3">
            <span className="badge-line">READY WHEN YOU ARE</span>
          </div>
          <h2 className="cta-heading">Interested in testing {product.title}?</h2>
          <p className="text-slate-600 max-w-md mx-auto mt-2 text-sm">
            Contact our laboratory solutions specialists to schedule a live video demonstration or request an evaluation unit.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              to={`/contact?product=${product.slug}`}
              className="btn-pill-navy btn-lg"
            >
              Request a demo
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .solution-detail-page {
          background-color: var(--color-bg-light);
        }
        .detail-hero {
          padding: 48px 0 80px 0;
          border-bottom: 1px solid var(--color-card-border);
        }
        .breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--color-text-muted);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 32px;
          text-decoration: none;
          transition: var(--transition-fast);
        }
        .breadcrumb:hover {
          color: var(--color-navy);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .product-title {
          font-size: 3.2rem;
          font-weight: 800;
          color: var(--color-navy);
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        .product-subtitle {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--color-teal);
          margin-bottom: 20px;
        }
        .product-desc {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.7;
          margin-bottom: 32px;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }
        .iso-badge-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: var(--color-text-muted);
          font-weight: 500;
        }
        .hero-image-box {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background-color: #edf2f7;
          border: 1px solid var(--color-card-border);
        }
        .hero-image {
          width: 100%;
          height: 440px;
          object-fit: cover;
          display: block;
        }
        .floating-spec-card {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 14px 20px;
          border-radius: 12px;
          border: 1px solid var(--color-card-border);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        /* Capabilities */
        .capabilities-section {
          padding: 90px 0;
          background-color: #ffffff;
          border-bottom: 1px solid var(--color-card-border);
        }
        .section-heading {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--color-navy);
          margin-bottom: 40px;
        }
        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }
        .capability-card {
          background-color: var(--color-bg-light);
          border: 1px solid var(--color-card-border);
          padding: 28px;
          border-radius: 14px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }
        .cap-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background-color: var(--color-teal-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-teal);
          flex-shrink: 0;
        }
        .cap-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-navy);
          margin-bottom: 6px;
        }
        .cap-desc {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        /* Specs Table */
        .specs-section {
          padding: 90px 0;
          background-color: var(--color-bg-light);
        }
        .specs-table-wrapper {
          background: #ffffff;
          border-radius: 14px;
          border: 1px solid var(--color-card-border);
          overflow: hidden;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
          margin-top: 24px;
        }
        .specs-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .specs-table th {
          background-color: var(--color-navy);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.88rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 16px 24px;
        }
        .specs-table td {
          padding: 18px 24px;
          border-bottom: 1px solid var(--color-card-border);
          font-size: 0.95rem;
        }
        .specs-table tr:last-child td {
          border-bottom: none;
        }
        .spec-label {
          font-weight: 700;
          color: var(--color-navy);
          width: 35%;
        }
        .spec-value {
          color: var(--color-text-muted);
          font-family: var(--font-mono);
        }

        /* Related Section */
        .related-section {
          padding: 80px 0;
          background-color: #ffffff;
          border-top: 1px solid var(--color-card-border);
        }
        .related-card {
          background: var(--color-bg-light);
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--color-card-border);
          text-decoration: none;
          transition: var(--transition-fast);
          display: block;
        }
        .related-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06);
        }
        .related-img {
          width: 100%;
          height: 160px;
          object-fit: cover;
        }

        /* Product CTA */
        .product-cta {
          background-color: var(--color-bg-light);
          padding: 90px 0;
          border-top: 1px solid var(--color-card-border);
        }
        .cta-heading {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--color-navy);
          margin-top: 12px;
        }

        @media (max-width: 992px) {
          .hero-grid, .capabilities-grid {
            grid-template-columns: 1fr;
          }
          .product-title { font-size: 2.4rem; }
        }
      `}</style>
    </div>
  );
}