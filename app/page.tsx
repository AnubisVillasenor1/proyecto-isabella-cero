'use client'

import { useState } from 'react'
import { TamvScene } from '@/components/tamv-scene'
import { Bot, ChevronDown, ChevronRight, Code2, Folder, GitBranch, Globe, MessageSquare, Play, Plus, Search, Send, Settings2, Sparkles, Terminal, X, ShieldCheck, Boxes, Database, Network, LockKeyhole, ScanSearch } from 'lucide-react'

const files = ['app/page.tsx', 'app/layout.tsx', 'app/globals.css', 'lib/kernel.ts', 'README.md']
const capabilityGroups = [
  { name: 'Qoder IDE', tone: 'gold', items: ['Context-aware codebase indexing', 'Agentic task decomposition', 'Multi-file edits with diff review', 'Repository graph navigation', 'Inline diagnostics', 'Command execution', 'Test-aware iteration', 'Git branch awareness', 'Code explanations', 'Autonomous bug repair'] },
  { name: 'Claude Code', tone: 'copper', items: ['Terminal-first workflows', 'Plan before mutation', 'Permission boundaries', 'Patch-based editing', 'Long-context reasoning', 'Tool-use transparency', 'Shell composition', 'Error recovery loops', 'Repository instructions', 'Human approval gates'] },
  { name: 'Open Source AI', tone: 'silver', items: ['Model portability', 'Local inference option', 'Provider abstraction', 'Open tool protocols', 'Self-hosted execution', 'Transparent configuration', 'Custom system prompts', 'Community extensions', 'Offline-ready workflows', 'Audit-friendly stack'] },
  { name: 'Google AI Studio', tone: 'gold', items: ['Multimodal prompting', 'Structured output', 'Prompt prototyping', 'Model comparison', 'Safety controls', 'Streaming responses', 'File grounding', 'Schema generation', 'API handoff', 'Evaluation loops'] },
  { name: 'Vercel v0', tone: 'copper', items: ['Visual generation loop', 'React-first output', 'Live preview', 'Component composition', 'Responsive defaults', 'Fast iteration', 'Deploy-ready scaffolds', 'Design token control', 'Route awareness', 'Production handoff'] },
  { name: 'Cursor', tone: 'silver', items: ['Semantic code search', 'Inline agent edits', 'Composer workflow', 'Multi-root context', 'Rules files', 'Diff accept/reject', 'Autocomplete acceleration', 'Terminal integration', 'Review checkpoints', 'Model routing'] },
  { name: 'Replit Agent', tone: 'gold', items: ['Instant environments', 'Full-stack scaffolding', 'Runtime preview', 'Dependency installation', 'Database wiring', 'Deployment path', 'Iterative prompting', 'Error-to-fix loop', 'Project templates', 'Shareable workspaces'] },
  { name: 'GitHub Copilot', tone: 'copper', items: ['Inline completion', 'PR assistance', 'Code review', 'Issue-to-code flow', 'Repository context', 'Test generation', 'Security suggestions', 'IDE integration', 'Documentation drafting', 'Team policy controls'] },
  { name: 'Windsurf', tone: 'silver', items: ['Flow state editing', 'Cascade agent', 'Context retrieval', 'Terminal actions', 'Checkpointed changes', 'Natural language refactors', 'Visual awareness', 'Error explanation', 'Workspace memory', 'Rapid prototyping'] },
  { name: 'Bolt.new', tone: 'gold', items: ['Browser-native coding', 'Prompt-to-app generation', 'Instant preview', 'Package awareness', 'File tree editing', 'Visual feedback loop', 'Full-stack templates', 'Environment variables', 'Exportable source', 'Deploy integration'] },
]

const starterCode = `export default function IsabellaProject() {
  return (
    <main className="min-h-screen bg-black text-white">
      <h1>Time to Wake Up</h1>
    </main>
  )
}`

export default function Page() {
  const [activeFile, setActiveFile] = useState(files[0])
  const [code, setCode] = useState(starterCode)
  const [prompt, setPrompt] = useState('')
  const [messages, setMessages] = useState([{ role: 'agent', text: 'I am Isabella. Describe what you want to build and I will inspect, plan, edit and verify the workspace.' }])
  const [panel, setPanel] = useState<'preview' | 'terminal'>('preview')
  const [running, setRunning] = useState(false)
  const [activeSurface, setActiveSurface] = useState('Workspace Graph')

  const sovereignModules = [
    { name: 'Workspace Graph', meta: 'Three.js / live topology', icon: Network, status: 'LIVE', detail: 'Repository constellation · 18 nodes' },
    { name: 'Agent Mesh', meta: 'Planner · Coder · Tester', icon: Boxes, status: 'READY', detail: '3 agents available for dispatch' },
    { name: 'CROWN Policy', meta: 'Identity · permissions', icon: LockKeyhole, status: 'GUARDED', detail: 'Human approval required for deploy' },
    { name: 'BookPI Evidence', meta: 'SHA3-512 provenance', icon: ShieldCheck, status: 'SEALED', detail: 'Last seal · 4 minutes ago' },
    { name: 'Binary Inspector', meta: 'Hex · symbols · hashes', icon: ScanSearch, status: 'READY', detail: 'Drop an artifact to inspect' },
    { name: 'Memory Fabric', meta: 'Postgres · pgvector', icon: Database, status: 'SYNCED', detail: 'Sovereign context available' },
  ]

  function sendPrompt() {
    if (!prompt.trim()) return
    const next = prompt.trim()
    setMessages((items) => [...items, { role: 'user', text: next }, { role: 'agent', text: `Plan ready: I will analyze ${activeFile}, propose the smallest safe change, then run verification before applying it.` }])
    setPrompt('')
  }

  function runProject() {
    setRunning(true)
    window.setTimeout(() => setRunning(false), 1200)
  }

  return (
    <main className="ide-shell">
      <header className="ide-topbar">
        <div className="ide-brand"><div className="brand-glyph"><Sparkles /></div><strong>ISABELLA <span>CERO</span></strong><span className="beta">HYPER CORE Ω-X3</span></div>
        <div className="project-select"><Folder /> isabella-zero <ChevronDown /></div>
        <div className="top-actions"><span className="branch"><GitBranch /> main</span><button className="ghost-btn"><Settings2 /> Settings</button><button className="run-btn" onClick={runProject}><Play /> {running ? 'Running…' : 'Run'}</button></div>
      </header>
      <div className="ide-body">
        <aside className="activity-bar"><button className="activity-active"><Code2 /></button><button><Search /></button><button><GitBranch /></button><button><Bot /></button><div className="activity-spacer" /><button><Settings2 /></button></aside>
        <aside className="explorer"><div className="pane-title">EXPLORER <Plus /></div><div className="workspace-name"><ChevronDown /> ISABELLA-ZERO</div>{files.map((file) => <button key={file} className={`file-row ${activeFile === file ? 'selected' : ''}`} onClick={() => setActiveFile(file)}><Code2 /> {file}</button>)}<div className="explorer-note"><Sparkles /><span>Agent has workspace access<br /><small>Read · write · run · verify</small></span></div></aside>
        <section className="editor-area"><div className="tabs"><div className="tab active"><Code2 /> {activeFile}<X /></div><div className="editor-actions"><span>UTF-8</span><span>TypeScript JSX</span></div></div><div className="editor"><div className="line-numbers">{code.split('\n').map((_, i) => <span key={i}>{String(i + 1).padStart(2, '0')}</span>)}</div><textarea value={code} onChange={(e) => setCode(e.target.value)} spellCheck={false} aria-label="Code editor" /></div><div className="statusbar"><span><GitBranch /> main*</span><span>Ln 1, Col 1</span><span className="status-ok">✓ No errors</span><span>ISABELLA CERO · TIME TO WAKE UP</span></div></section>
        <aside className="agent-panel"><div className="agent-head"><div><div className="agent-title"><span className="online-dot" /> Isabella Agent</div><div className="agent-subtitle">BUILD WITH INTENT</div></div><button className="icon-btn"><Settings2 /></button></div><div className="mode-tabs"><button className="mode-active">Chat</button><button>Plan</button><button>Review</button></div><div className="messages">{messages.map((message, index) => <div className={`message ${message.role}`} key={index}><div className="message-avatar">{message.role === 'agent' ? <Sparkles /> : 'YOU'}</div><div><div className="message-label">{message.role === 'agent' ? 'ISABELLA' : 'YOU'}</div><p>{message.text}</p></div></div>)}</div><div className="agent-composer"><textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing && e.keyCode !== 229) { e.preventDefault(); sendPrompt() } }} placeholder="Ask Isabella to build…" aria-label="Ask Isabella" /><div><span>⌘ Enter</span><button onClick={sendPrompt} disabled={!prompt.trim()}><Send /></button></div></div></aside>
      </div>
      <section className="sovereign-workspace" aria-label="Sovereign workspace modules">
        <div className="workspace-heading"><div><span className="eyebrow">METAVERSO TAMV / PLANO OPERATIVO</span><h2>{activeSurface}</h2></div><div className="workspace-signal"><span className="signal-dot" /> CROWN protected · BookPI on</div></div>
        <div className="module-rail">{sovereignModules.map((module) => { const Icon = module.icon; return <button key={module.name} className={`module-card ${activeSurface === module.name ? 'module-active' : ''}`} onClick={() => setActiveSurface(module.name)}><div className="module-icon"><Icon /></div><div className="module-copy"><strong>{module.name}</strong><span>{module.meta}</span><small>{module.detail}</small></div><b>{module.status}</b></button> })}</div>
        <div className="graph-stage"><TamvScene /><div className="graph-caption"><span>LIVE WEBGL WORKSPACE GRAPH</span><p>Three.js scene · orbitable nodes · CROWN, BookPI, Memory Fabric and Agent Mesh</p></div></div>
      </section>
      <section className="bottom-panel"><div className="bottom-tabs"><button className={panel === 'preview' ? 'bottom-active' : ''} onClick={() => setPanel('preview')}><Globe /> Preview</button><button className={panel === 'terminal' ? 'bottom-active' : ''} onClick={() => setPanel('terminal')}><Terminal /> Terminal</button><span className="preview-url">http://localhost:3000</span></div>{panel === 'preview' ? <div className="preview-frame"><div className="preview-nav"><strong>ISABELLA CERO</strong><span>TIME TO WAKE UP</span></div><div className="preview-hero"><span>YOUR SOVEREIGN BUILD PARTNER</span><h1>Turn intent<br /><em>into reality.</em></h1><button onClick={runProject}><Play /> Start building</button></div></div> : <div className="terminal-output"><p><span className="terminal-green">isabella-zero</span> <span className="terminal-muted">$</span> pnpm dev</p><p className="terminal-muted">▲ Next.js 16 · Ready on http://localhost:3000</p><p className="terminal-green">✓ Compiled successfully · 0 errors</p></div>}      </section>
      <section className="capability-deck" aria-labelledby="capability-title">
        <div className="deck-heading"><div><span className="eyebrow">ISABELLA CERO / CAPABILITY DECK</span><h2 id="capability-title">100 capabilities, made operational.</h2><p>Diez interfaces de referencia. Diez capacidades verificables por cada una. La matriz se convierte en backlog ejecutable, no en promesa visual.</p></div><div className="deck-count"><strong>100</strong><span>mapped capabilities</span></div></div>
        <div className="capability-grid">{capabilityGroups.map((group, groupIndex) => <article className={`capability-card ${group.tone}`} key={group.name}><div className="capability-card-head"><span className="capability-index">0{groupIndex + 1}</span><h3>{group.name}</h3><span className="capability-status">mapped</span></div><ol>{group.items.map((item, itemIndex) => <li key={item}><span>{String(itemIndex + 1).padStart(2, '0')}</span>{item}</li>)}</ol></article>)}</div>
      </section>
    </main>
  )
}
