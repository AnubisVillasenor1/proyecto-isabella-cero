'use client'

import { useState } from 'react'
import { Bot, ChevronDown, ChevronRight, Code2, Folder, GitBranch, Globe, MessageSquare, Play, Plus, Search, Send, Settings2, Sparkles, Terminal, X } from 'lucide-react'

const files = ['app/page.tsx', 'app/layout.tsx', 'app/globals.css', 'lib/kernel.ts', 'README.md']
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
      <section className="bottom-panel"><div className="bottom-tabs"><button className={panel === 'preview' ? 'bottom-active' : ''} onClick={() => setPanel('preview')}><Globe /> Preview</button><button className={panel === 'terminal' ? 'bottom-active' : ''} onClick={() => setPanel('terminal')}><Terminal /> Terminal</button><span className="preview-url">http://localhost:3000</span></div>{panel === 'preview' ? <div className="preview-frame"><div className="preview-nav"><strong>ISABELLA CERO</strong><span>TIME TO WAKE UP</span></div><div className="preview-hero"><span>YOUR SOVEREIGN BUILD PARTNER</span><h1>Turn intent<br /><em>into reality.</em></h1><button onClick={runProject}><Play /> Start building</button></div></div> : <div className="terminal-output"><p><span className="terminal-green">isabella-zero</span> <span className="terminal-muted">$</span> pnpm dev</p><p className="terminal-muted">▲ Next.js 16 · Ready on http://localhost:3000</p><p className="terminal-green">✓ Compiled successfully · 0 errors</p></div>}</section>
    </main>
  )
}
