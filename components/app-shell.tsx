"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, ChevronRight } from "lucide-react";
import { modules } from "@/lib/modules";

export function AppShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const groups = ["Core","Create","Grow","Build","Organize","System"];
  const current = modules.find(m => path === `/workspace/${m.slug}`);
  return <div className="app-shell">
    <aside className="sidebar">
      <Link href="/" className="brand" style={{textDecoration:"none",color:"inherit"}}>
        <div className="brand-mark">O</div>
        <div className="brand-copy"><div className="brand-name">OBSIDIAN AI</div><div className="brand-sub">PRIVATE WORKSPACE</div></div>
      </Link>
      <nav>
        {groups.map(group => <div key={group} style={{marginBottom:17}}>
          <div className="nav-label">{group}</div>
          <div className="nav-list">
            {modules.filter(m=>m.group===group).map(m=>{
              const Icon=m.icon; const active=path===`/workspace/${m.slug}`;
              return <Link key={m.slug} href={`/workspace/${m.slug}`} className={`nav-link ${active?"active":""}`} title={m.title}>
                <Icon size={16}/><span className="nav-text">{m.title}</span>
              </Link>;
            })}
          </div>
        </div>)}
      </nav>
      <div className="sidebar-bottom">Owner workspace<br/>Private by design · v0.1 foundation</div>
    </aside>
    <main className="main-area">
      <header className="topbar">
        <div className="breadcrumb">Workspace <ChevronRight size={12} style={{display:"inline",verticalAlign:"middle"}}/> <span style={{color:"#eee5ff"}}>{current?.title ?? "Overview"}</span></div>
        <div className="top-actions"><div className="status-pill"><span className="status-dot"/> Workspace ready</div><div className="avatar">OW</div></div>
      </header>
      {children}
    </main>
  </div>;
}
