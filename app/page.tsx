import Link from "next/link";
import { ArrowUpRight, Sparkles, Layers3, Workflow, ShieldCheck } from "lucide-react";
import { modules } from "@/lib/modules";

export default function Home() {
  return <div className="content">
    <div className="eyebrow">Your private command center</div>
    <h1>One workspace.<br/><span style={{color:"#c7adff"}}>Many ways to create.</span></h1>
    <p className="lead">Bring AI, design, video, social publishing, marketing, development and research into one focused workspace. Choose a studio to get started.</p>
    <div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:22}}>
      <Link href="/workspace/assistant" className="action-button"><Sparkles size={15}/> Open AI assistant</Link>
      <Link href="/workspace/projects" className="ghost-button"><Layers3 size={15}/> View projects</Link>
    </div>
    <div className="grid grid-4" style={{marginTop:30}}>
      {[{n:"12",l:"Workspace modules",i:Layers3},{n:"1",l:"Unified workspace",i:Workflow},{n:"Private",l:"Owner-first access",i:ShieldCheck},{n:"Modular",l:"Expandable architecture",i:Sparkles}].map(x=>{const I=x.i;return <div className="card" key={x.l}><div className="muted" style={{display:"flex",alignItems:"center",gap:7}}><I size={14}/>{x.l}</div><div className="metric">{x.n}</div></div>})}
    </div>
    <div className="section-head"><h2>Explore your studios</h2><span className="muted">Select a category to open its workspace</span></div>
    <div className="grid grid-3">
      {modules.map(m=>{const Icon=m.icon;return <Link href={`/workspace/${m.slug}`} key={m.slug} className="card module-card">
        <span className="module-arrow"><ArrowUpRight size={16}/></span><div className="module-icon"><Icon size={19}/></div><h3>{m.title}</h3><p>{m.description}</p>
      </Link>})}
    </div>
    <div className="card" style={{marginTop:18,display:"flex",alignItems:"center",gap:13}}>
      <div className="module-icon" style={{margin:0,flexShrink:0}}><ShieldCheck size={18}/></div>
      <div><div className="card-title">Integration-ready foundation</div><div className="muted">Connect model providers, storage and social platforms through secure server-side integrations as each module is implemented.</div></div>
    </div>
  </div>;
}
