'use client'

import { useMemo, useState } from 'react'
import {
  Activity,
  Archive,
  ArrowUpRight,
  BrainCircuit,
  ChevronRight,
  CircleCheck,
  CircleDashed,
  Cpu,
  Database,
  FileCheck2,
  Fingerprint,
  Gauge,
  GitBranch,
  Globe2,
  Layers3,
  LockKeyhole,
  Menu,
  Network,
  Play,
  Plus,
  Radio,
  Search,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Workflow,
  X,
  Zap,
} from 'lucide-react'

const navItems = [
  { label: 'Command center', icon: Activity },
  { label: 'Cognition', icon: BrainCircuit },
  { label: 'Evidence fabric', icon: FileCheck2 },
  { label: 'Governance', icon: ShieldCheck },
  { label: 'Memory nova', icon: Database },
  { label: 'Agent mesh', icon: Network },
]

const agents = [
  { name: 'Scientia', role: 'Research & evidence', status: 'Active', color: 'cyan', metric: '94.2%' },
  { name: 'Forge', role: 'Code & infrastructure', status: 'Active', color: 'violet', metric: '88.7%' },
  { name: 'Sentinel', role: 'Security & policy', status: 'Watching', color: 'amber', metric: '100%' },
  { name: 'Notarius', role: 'Records & provenance', status: 'Ready', color: 'slate', metric: '76.4%' },
]

const events = [
  { time: '09:42:18', title: 'CROWN policy gate passed', detail: 'Identity · Authority · Evidence · Safety', type: 'allow' },
  { time: '09:41:56', title: 'Evidence seal committed', detail: 'BookPI / SHA3-512 / 7f9c…e2a1', type: 'seal' },
  { time: '09:40:12', title: 'Memory retrieval optimized', detail: 'Semantic cache hit · similarity 0.97', type: 'cache' },
  { time: '09:38:44', title: 'Agent mesh synchronized', detail: '4 workers · 18 tasks · no drift detected', type: 'sync' },
]

function StatusDot({ tone = 'cyan' }: { tone?: string }) {
  return <span className={`status-dot status-${tone}`} aria-hidden="true" />
}

function MetricCard({ label, value, note, icon: Icon, accent }: { label: string; value: string; note: string; icon: typeof Activity; accent: string }) {
  return (
    <div className="metric-card">
      <div className="metric-topline">
        <span className="eyebrow">{label}</span>
        <span className={`metric-icon ${accent}`}><Icon aria-hidden="true" /></span>
      </div>
      <div className="metric-value">{value}</div>
      <div className="metric-note"><span className="trend-up">↗</span> {note}</div>
    </div>
  )
}

export default function Page() {
  const [activeNav, setActiveNav] = useState('Command center')
  const [mobileNav, setMobileNav] = useState(false)
  const [query, setQuery] = useState('')
  const [submittedQuery, setSubmittedQuery] = useState('')
  const [runState, setRunState] = useState<'idle' | 'running' | 'complete'>('idle')

  const activeDescription = useMemo(() => {
    const descriptions: Record<string, string> = {
      'Command center': 'A governed operating surface for intelligence, memory, evidence and action.',
      Cognition: 'Coordinate reasoning, planning and reflection across the Isabella Prime kernel.',
      'Evidence fabric': 'Trace every meaningful answer to a consented, signed and reviewable source.',
      Governance: 'CROWN keeps every capability inside identity, authority, policy, evidence and safety.',
      'Memory nova': 'Ten interoperable memories preserve context without surrendering ownership.',
      'Agent mesh': 'Route work across specialized agents with explicit autonomy and human checkpoints.',
    }
    return descriptions[activeNav]
  }, [activeNav])

  function submitQuery() {
    if (!query.trim() || runState === 'running') return
    setSubmittedQuery(query.trim())
    setRunState('running')
    window.setTimeout(() => setRunState('complete'), 900)
  }

  return (
    <main className="app-shell">
      <aside className={`sidebar ${mobileNav ? 'sidebar-open' : ''}`}>
        <div className="brand-lockup">
          <div className="brand-mark"><Sparkles aria-hidden="true" /></div>
          <div>
            <div className="brand-name">ISABELLA <span>CERO</span></div>
            <div className="brand-subtitle">SOVEREIGN COGNITIVE OS</div>
          </div>
          <button className="icon-button mobile-close" onClick={() => setMobileNav(false)} aria-label="Close navigation"><X /></button>
        </div>
        <div className="node-card">
          <div className="node-orbit"><div className="node-core" /></div>
          <div><div className="node-label">NODE ZERO</div><div className="node-location">Mineral del Monte · MX</div></div>
          <span className="node-live"><StatusDot /> LIVE</span>
        </div>
        <div className="nav-label">OPERATING SYSTEM</div>
        <nav className="primary-nav" aria-label="Primary navigation">
          {navItems.map(({ label, icon: Icon }) => (
            <button key={label} className={`nav-item ${activeNav === label ? 'active' : ''}`} onClick={() => { setActiveNav(label); setMobileNav(false) }}>
              <Icon aria-hidden="true" /><span>{label}</span>{activeNav === label && <ChevronRight className="nav-chevron" aria-hidden="true" />}
            </button>
          ))}
        </nav>
        <div className="nav-label nav-label-spaced">WORKSPACE</div>
        <nav className="primary-nav" aria-label="Workspace navigation">
          <button className="nav-item"><TerminalSquare aria-hidden="true" /><span>Build workspace</span></button>
          <button className="nav-item"><Archive aria-hidden="true" /><span>Research vault</span></button>
          <button className="nav-item"><Settings2 aria-hidden="true" /><span>System settings</span></button>
        </nav>
        <div className="sidebar-footer"><div className="avatar">AV</div><div><div className="user-name">Anubis Villaseñor</div><div className="user-role">Sovereign operator</div></div><span className="footer-kebab">•••</span></div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <button className="icon-button mobile-menu" onClick={() => setMobileNav(true)} aria-label="Open navigation"><Menu /></button>
          <div className="breadcrumb"><span>ISABELLA CERO</span><ChevronRight aria-hidden="true" /><strong>{activeNav.toUpperCase()}</strong></div>
          <div className="topbar-actions"><div className="secure-chip"><LockKeyhole aria-hidden="true" /> CROWN SECURE</div><button className="icon-button" aria-label="Search"><Search /></button><div className="operator-avatar">AV</div></div>
        </header>

        <div className="content">
          <section className="hero-row">
            <div><div className="section-kicker"><span className="kicker-line" /> HYPER CORE TURBO Ω-X3 <span className="live-label"><StatusDot /> OPERATIONAL</span></div><h1>{activeNav === 'Command center' ? <>Wake up to<br /><em>verified intelligence.</em></> : activeNav}</h1><p className="hero-description">{activeDescription}</p></div>
            <div className="hero-meta"><div className="meta-label">SYSTEM TIME</div><div className="system-time">09:42<span>:18</span></div><div className="meta-location"><Globe2 aria-hidden="true" /> UTC−06 · HIDALGO, MEXICO</div></div>
          </section>

          {submittedQuery && <div className={`query-result ${runState}`}><div className="result-icon">{runState === 'complete' ? <CircleCheck aria-hidden="true" /> : <Zap aria-hidden="true" />}</div><div><div className="result-label">{runState === 'complete' ? 'VERIFIED RESPONSE READY' : 'HYPER CORE PROCESSING'}</div><div className="result-query">“{submittedQuery}”</div></div><div className="result-csi">CSI <strong>{runState === 'complete' ? '0.96' : '—'}</strong></div></div>}

          <section className="metrics-grid" aria-label="System metrics">
            <MetricCard label="Cognitive throughput" value="2.84x" note="vs. baseline this session" icon={Gauge} accent="cyan" />
            <MetricCard label="Evidence coverage" value="96.8%" note="+4.2% from last cycle" icon={FileCheck2} accent="amber" />
            <MetricCard label="CROWN compliance" value="100%" note="0 policy violations" icon={ShieldCheck} accent="violet" />
            <MetricCard label="Active memory" value="1.2 TB" note="10 federated domains" icon={Layers3} accent="green" />
          </section>

          <section className="command-grid">
            <div className="panel pulse-panel"><div className="panel-header"><div><div className="panel-kicker"><Activity aria-hidden="true" /> LIVE TELEMETRY</div><h2>System pulse</h2></div><button className="panel-action">View traces <ArrowUpRight aria-hidden="true" /></button></div><div className="pulse-chart"><div className="chart-y"><span>100</span><span>75</span><span>50</span><span>25</span><span>0</span></div><div className="chart-area"><div className="chart-gridlines"><i /><i /><i /><i /><i /></div><svg viewBox="0 0 700 220" preserveAspectRatio="none" role="img" aria-label="Cognitive throughput chart"><defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#5eeaff" stopOpacity=".3" /><stop offset="100%" stopColor="#5eeaff" stopOpacity="0" /></linearGradient></defs><path d="M0 170 C35 165 43 130 75 143 S115 152 145 120 S182 136 215 112 S250 90 285 104 S325 115 355 80 S395 92 425 62 S465 90 495 71 S535 75 565 44 S605 69 635 30 S673 45 700 18 V220 H0Z" fill="url(#area)" /><path d="M0 170 C35 165 43 130 75 143 S115 152 145 120 S182 136 215 112 S250 90 285 104 S325 115 355 80 S395 92 425 62 S465 90 495 71 S535 75 565 44 S605 69 635 30 S673 45 700 18" fill="none" stroke="#5eeaff" strokeWidth="3" /></svg><div className="chart-x"><span>−60m</span><span>−45m</span><span>−30m</span><span>−15m</span><span>now</span></div></div></div><div className="chart-legend"><span><i className="legend-cyan" /> Cognitive throughput</span><span><i className="legend-amber" /> Policy evaluations</span><span className="chart-window">LAST 60 MIN <ChevronRight aria-hidden="true" /></span></div></div>

            <div className="panel quick-panel"><div className="panel-kicker"><Zap aria-hidden="true" /> QUICK ACTION</div><h2>What are we<br /><em>building today?</em></h2><p>Route a governed task through Isabella Prime. Every action gets a plan, a policy check and an evidence seal.</p><div className="composer"><textarea value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing && e.keyCode !== 229) { e.preventDefault(); submitQuery() } }} placeholder="Ask Isabella to investigate, build or simulate…" aria-label="Task prompt" /><div className="composer-footer"><span><CircleDashed aria-hidden="true" /> Governed mode</span><button className="send-button" onClick={submitQuery} disabled={!query.trim() || runState === 'running'} aria-label="Run governed task"><Send aria-hidden="true" /></button></div></div><div className="suggestion-row"><button onClick={() => setQuery('Map the evidence behind our current research')}><Search aria-hidden="true" /> Research</button><button onClick={() => setQuery('Audit the latest agent workflow for policy drift')}><ShieldCheck aria-hidden="true" /> Audit</button><button onClick={() => setQuery('Create a reproducible build plan')}><Workflow aria-hidden="true" /> Plan</button></div></div>
          </section>

          <section className="lower-grid"><div className="panel agents-panel"><div className="panel-header"><div><div className="panel-kicker"><Network aria-hidden="true" /> AGENT MESH</div><h2>Specialized workers</h2></div><button className="panel-action">Open mesh <ArrowUpRight aria-hidden="true" /></button></div><div className="agent-list">{agents.map((agent) => <div className="agent-row" key={agent.name}><div className={`agent-orb ${agent.color}`}><Cpu aria-hidden="true" /></div><div className="agent-info"><strong>{agent.name}</strong><span>{agent.role}</span></div><div className="agent-status"><StatusDot tone={agent.status === 'Ready' ? 'slate' : agent.color} /> {agent.status}</div><div className="agent-metric">{agent.metric}</div><ArrowUpRight className="row-arrow" aria-hidden="true" /></div>)}</div></div><div className="panel events-panel"><div className="panel-header"><div><div className="panel-kicker"><Radio aria-hidden="true" /> EVIDENCE STREAM</div><h2>Recent activity</h2></div><button className="icon-button" aria-label="Open evidence archive"><ArrowUpRight /></button></div><div className="event-list">{events.map((event) => <div className="event-row" key={event.time}><div className={`event-icon ${event.type}`}>{event.type === 'allow' ? <ShieldCheck /> : event.type === 'seal' ? <Fingerprint /> : event.type === 'cache' ? <Zap /> : <GitBranch />}</div><div><strong>{event.title}</strong><span>{event.detail}</span></div><time>{event.time}</time></div>)}</div></div></section>

          <footer className="site-footer"><span>ISABELLA CERO · TIME TO WAKE UP</span><span>CANON-EOC-ISABELLA-CERO-HCT-X3-LLM-2026-V1.0</span><span><StatusDot /> ALL SYSTEMS NOMINAL</span></footer>
        </div>
      </section>
    </main>
  )
}
