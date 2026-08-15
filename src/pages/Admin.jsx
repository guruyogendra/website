import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Activity, ArrowLeft, Shield, CheckCircle, Database, BarChart3, Mail, RefreshCw, Download, Server, Cpu } from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/solutionsData';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('admin@biomindz.com');
  const [password, setPassword] = useState('demo123');
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    // Fetch submitted inquiries from local storage
    const stored = JSON.parse(localStorage.getItem('veridian_inquiries') || '[]');
    setInquiries(stored);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsAuthenticated(true);
    }
  };

  const handleClearInquiries = () => {
    if (window.confirm('Are you sure you want to clear all recorded inquiries?')) {
      localStorage.removeItem('veridian_inquiries');
      setInquiries([]);
    }
  };

  const handleExportCSV = () => {
    if (inquiries.length === 0) {
      alert('No inquiries available to export.');
      return;
    }
    const headers = ['ID', 'Date', 'Full Name', 'Email', 'Organization', 'Phone', 'Product', 'Throughput', 'Message'];
    const csvRows = [
      headers.join(','),
      ...inquiries.map(i => [
        i.id,
        `"${i.timestamp}"`,
        `"${i.fullName}"`,
        `"${i.email}"`,
        `"${i.organization || ''}"`,
        `"${i.phone || ''}"`,
        `"${i.product}"`,
        `"${i.throughput || ''}"`,
        `"${(i.message || '').replace(/"/g, '""')}"`
      ].join(','))
    ];
    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `biomindz_inquiries_${Date.now()}.csv`;
    a.click();
  };

  return (
    <div className="admin-page">
      <div className="admin-container">
        {/* Left Dark Control Panel */}
        <div className="admin-left-panel">
          <div className="panel-inner">
            <Link to="/" className="admin-logo">
              <div className="logo-icon-bg">
                <Activity size={22} />
              </div>
              <div>
                <div className="logo-text">BIOMINDZ <span className="logo-accent">DX</span></div>
                <div className="text-[10px] text-teal-400 font-mono tracking-widest uppercase">Laboratory Control Center</div>
              </div>
            </Link>

            <div className="panel-content">
              <div className="badge badge-dark mb-3">
                <span>ADMIN CONTROL ROOM</span>
              </div>
              <h1 className="panel-heading">
                Diagnostic telemetries & laboratory leads.
              </h1>
              <p className="panel-desc">
                Monitor connected instrument telemetry networks, review active demo requests, and manage clinical quotations in real time.
              </p>

              <div className="status-badges">
                <div className="status-badge">
                  <Database size={14} className="badge-icon" />
                  <span>{SOLUTIONS_DATA.length} Active Diagnostic Platforms</span>
                </div>
                <div className="status-badge">
                  <Mail size={14} className="badge-icon" />
                  <span>{inquiries.length} Recorded Customer Inquiries</span>
                </div>
                <div className="status-badge">
                  <Server size={14} className="badge-icon" />
                  <span>Telemetry Cloud Online (99.98% Uptime)</span>
                </div>
              </div>

              {/* Instrument Status Widget */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-xs font-mono text-teal-400 uppercase font-semibold mb-3">Instrument Fleet Status</div>
                <div className="space-y-2">
                  {SOLUTIONS_DATA.slice(0, 3).map((sol) => (
                    <div key={sol.slug} className="flex justify-between items-center text-xs bg-white/5 p-2 rounded border border-white/10">
                      <span className="text-slate-300 font-medium">{sol.title}</span>
                      <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Online
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="panel-footer">
              <span>System Version 3.1.0 • ISO 13485 & FDA 21 CFR Part 11 Compliant</span>
            </div>
          </div>
        </div>

        {/* Right Light Interactive View */}
        <div className="admin-right-panel">
          <div className="top-nav">
            <Link to="/" className="back-link">
              <ArrowLeft size={16} /> Back to main site
            </Link>
          </div>

          {!isAuthenticated ? (
            <div className="auth-box">
              <div className="auth-header">
                <div className="badge mb-2">
                  <span>SECURE LOGIN</span>
                </div>
                <h2 className="auth-title">Sign in to Control Room</h2>
                <p className="auth-sub">Enter credentials to manage laboratory leads and platform telemetries.</p>
              </div>

              <form onSubmit={handleLogin} className="auth-form">
                <div className="form-group">
                  <label className="form-label">ADMINISTRATOR EMAIL</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@biomindz.com"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">SECURITY PASSWORD</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="form-input"
                  />
                </div>

                <button type="submit" className="btn-pill-navy w-full mt-2">
                  Authenticate & Sign In
                </button>
              </form>

              <div className="auth-hint">
                <p><strong>Demo Quick Access:</strong> Click 'Authenticate & Sign In' to inspect live lead records.</p>
              </div>
            </div>
          ) : (
            <div className="dashboard-box">
              <div className="dashboard-header">
                <div>
                  <h2 className="dash-title">Inquiries & Demonstration Leads</h2>
                  <p className="dash-sub">Demo requests and technical quotation inquiries submitted by laboratories.</p>
                </div>

                <div className="flex gap-3">
                  <button onClick={handleExportCSV} className="btn-pill-white text-xs">
                    <Download size={14} /> Export CSV
                  </button>
                  <button onClick={handleClearInquiries} className="btn-secondary text-xs text-rose-600 hover:text-rose-800">
                    <RefreshCw size={14} /> Clear Log
                  </button>
                </div>
              </div>

              {inquiries.length === 0 ? (
                <div className="empty-state">
                  <Mail size={48} className="empty-icon text-slate-400 mx-auto mb-3" />
                  <h3 className="font-extrabold text-[#0a2540] text-lg">No Inquiries Submitted Yet</h3>
                  <p className="text-sm text-slate-500 max-w-sm mx-auto mt-1">
                    Demo requests submitted via the Contact form will automatically populate here in real time.
                  </p>
                  <Link to="/contact" className="btn-pill-navy text-xs inline-block mt-4">
                    Open Contact Page & Test Submission
                  </Link>
                </div>
              ) : (
                <div className="inquiries-table-wrapper">
                  <table className="inquiries-table">
                    <thead>
                      <tr>
                        <th>Received</th>
                        <th>Laboratory Contact</th>
                        <th>Organization</th>
                        <th>Platform</th>
                        <th>Throughput</th>
                        <th>Message</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inquiries.map((inq) => (
                        <tr key={inq.id}>
                          <td className="inq-time">{inq.timestamp}</td>
                          <td>
                            <div className="inq-name">{inq.fullName}</div>
                            <div className="inq-email">{inq.email}</div>
                            {inq.phone && <div className="inq-phone">{inq.phone}</div>}
                          </td>
                          <td className="inq-org">{inq.organization || '—'}</td>
                          <td>
                            <span className="badge-pill">{inq.product}</span>
                          </td>
                          <td className="text-xs font-mono text-slate-600">{inq.throughput || '—'}</td>
                          <td className="inq-msg">{inq.message}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <style>{`
        .admin-page {
          min-height: 100vh;
          background-color: var(--color-bg-light);
        }
        .admin-container {
          display: grid;
          grid-template-columns: 420px 1fr;
          min-height: 100vh;
        }
        .admin-left-panel {
          background-color: var(--color-navy-dark);
          color: #ffffff;
          padding: 40px;
          display: flex;
          flex-direction: column;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
        }
        .panel-inner {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .admin-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          margin-bottom: 48px;
        }
        .logo-icon-bg {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(0, 184, 212, 0.15);
          color: #00b8d4;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-text {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.25rem;
          color: #ffffff;
          letter-spacing: 0.04em;
        }
        .logo-accent { color: #00b8d4; }
        .panel-content {
          flex-grow: 1;
        }
        .panel-heading {
          font-size: 2rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 16px;
        }
        .panel-desc {
          color: var(--color-text-light-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 32px;
        }
        .status-badges {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .status-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 0.85rem;
          color: #e2e8f0;
        }
        .badge-icon { color: #00b8d4; }
        .panel-footer {
          font-size: 0.75rem;
          color: var(--color-text-light-muted);
          margin-top: 32px;
        }

        /* Right Panel */
        .admin-right-panel {
          padding: 48px 56px;
          display: flex;
          flex-direction: column;
          background-color: #ffffff;
        }
        .top-nav {
          margin-bottom: 36px;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text-muted);
          text-decoration: none;
          transition: var(--transition-fast);
        }
        .back-link:hover {
          color: var(--color-navy);
        }

        .auth-box {
          max-width: 420px;
          margin: auto;
          width: 100%;
        }
        .auth-title {
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-navy);
          margin-bottom: 8px;
        }
        .auth-sub {
          color: var(--color-text-muted);
          font-size: 0.92rem;
          margin-bottom: 28px;
        }
        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 24px;
        }
        .auth-hint {
          background: #f8fafc;
          padding: 14px;
          border-radius: 8px;
          border: 1px solid var(--color-card-border);
          font-size: 0.82rem;
          color: var(--color-text-muted);
        }

        /* Dashboard */
        .dashboard-box {
          width: 100%;
        }
        .dashboard-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
        }
        .dash-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--color-navy);
        }
        .dash-sub {
          color: var(--color-text-muted);
          font-size: 0.92rem;
        }
        .empty-state {
          text-align: center;
          padding: 64px 20px;
          background-color: var(--color-bg-light);
          border-radius: 16px;
          border: 1px dashed var(--color-card-border);
        }
        .inquiries-table-wrapper {
          border: 1px solid var(--color-card-border);
          border-radius: 12px;
          overflow: hidden;
        }
        .inquiries-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .inquiries-table th {
          background-color: var(--color-bg-light);
          color: var(--color-navy);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 14px 18px;
          border-bottom: 1px solid var(--color-card-border);
        }
        .inquiries-table td {
          padding: 16px 18px;
          border-bottom: 1px solid var(--color-card-border);
          font-size: 0.88rem;
          vertical-align: top;
        }
        .inq-time {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--color-text-muted);
          white-space: nowrap;
        }
        .inq-name { font-weight: 700; color: var(--color-navy); }
        .inq-email { font-size: 0.82rem; color: var(--color-teal); font-weight: 500; }
        .inq-phone { font-size: 0.78rem; color: var(--color-text-muted); }
        .badge-pill {
          background-color: var(--color-teal-bg);
          color: var(--color-navy);
          font-weight: 700;
          font-size: 0.75rem;
          padding: 4px 10px;
          border-radius: 12px;
          border: 1px solid rgba(0, 184, 212, 0.3);
        }
        .inq-msg { color: var(--color-text-muted); max-width: 280px; font-size: 0.85rem; }

        @media (max-width: 992px) {
          .admin-container {
            grid-template-columns: 1fr;
          }
          .admin-right-panel {
            padding: 32px;
          }
        }
      `}</style>
    </div>
  );
}
