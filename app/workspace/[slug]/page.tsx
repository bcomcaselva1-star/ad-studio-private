import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";
import { modules } from "@/lib/modules";

export function generateStaticParams(){ return modules.map(m=>({slug:m.slug})); }

const details: Record<string,{intro:string;features:string[];next:string}> = {
  assistant:{intro:"A single place to work with connected AI models, files, tools and project context.",features:["Multi-model chat interface","Research and source collection","Coding and agent task workspace","File and project context"],next:"Connect an AI provider on the server before enabling live model responses."},
  "ai-studio":{intro:"A creative control room for image generation and AI-assisted visual workflows.",features:["Prompt workspace and generation history","Image variations and enhancement","Character and style reference library","Provider and model selection"],next:"Requires an image-generation provider API and secure job handling."},
  "video-studio":{intro:"A video workspace inspired by beginner-friendly timeline editors.",features:["Media library and project bins","Timeline and preview layout","Captions, titles and effects planning","Export queue and render status"],next:"Real editing and rendering require a media pipeline; browser 4K editing is resource-intensive."},
  "design-studio":{intro:"A visual canvas for layouts, reusable components, brand kits and prototypes.",features:["Canvas and layer panel","Templates and brand assets","Reusable components","Prototype and export workflow"],next:"The editable canvas engine is a dedicated implementation phase."},
  "social-studio":{intro:"Plan social content visually, prepare captions and manage publishing workflows.",features:["Visual content calendar","Media library","Caption and hashtag drafts","Publishing queue and analytics"],next:"Auto-publishing requires approved OAuth/API access for each social network."},
  "marketing-studio":{intro:"Create campaign concepts, ad copy and creative variations in one place.",features:["Campaign and brand brief","Ad copy variations","Creative concept library","Review and export checklist"],next:"Performance scoring needs real campaign data; AI-only scores must be labelled as estimates."},
  "developer-studio":{intro:"A home for code projects, repository workflows, previews and release operations.",features:["Project and repository list","Code workspace integration point","Change history and review","Preview and deployment checklist"],next:"GitHub operations require OAuth and repository permissions."},
  "inspiration-hub":{intro:"Collect visual references and organize them into searchable boards.",features:["Masonry-style visual library","Boards and saved references","Tags and search","Reference notes"],next:"Image storage, thumbnails and CDN delivery will be connected in the storage phase."},
  projects:{intro:"Keep every project, its files and decisions organized in one workspace.",features:["Project folders and status","File and asset organization","Project briefs and notes","Activity and decision log"],next:"Persistent project storage requires the configured database and object storage."},
  documents:{intro:"Draft and organize the documents that support your creative and business work.",features:["Notes and briefs","Document templates","Presentation and spreadsheet planning","Export workflow"],next:"Document editing and export formats will be added as dedicated modules."},
  research:{intro:"Gather sources, compare findings and turn research into useful project knowledge.",features:["Research question workspace","Source library","Comparison notes","Structured findings"],next:"Live web research requires a search provider integration and source citations."},
  settings:{intro:"Manage workspace preferences and connect external services safely.",features:["Owner access configuration","AI provider credentials status","Storage and integration settings","Workspace appearance"],next:"Never place API keys in browser code or commit secrets to your repository."}
};

export default async function ModulePage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  const module=modules.find(m=>m.slug===slug);
  if(!module) notFound();
  const d=details[slug]; const Icon=module.icon;
  return <div className="content">
    <Link href="/" className="ghost-button"><ArrowLeft size={14}/> Overview</Link>
    <div style={{marginTop:28}} className="eyebrow">{module.group} / Workspace module</div>
    <div style={{display:"flex",alignItems:"center",gap:14,marginTop:10}}>
      <div className="module-icon" style={{width:48,height:48,margin:0}}><Icon size={23}/></div>
      <div><h1 style={{margin:0}}>{module.title}</h1><div className="muted">Obsidian AI workspace</div></div>
    </div>
    <p className="lead" style={{marginTop:15}}>{d.intro}</p>
    <div className="section-head"><h2>Module capabilities</h2><span className="tag">Foundation</span></div>
    <div className="grid grid-2" style={{gridTemplateColumns:"repeat(2,minmax(0,1fr))"}}>
      {d.features.map((f,i)=><div className="card" key={f} style={{display:"flex",gap:12,alignItems:"center"}}><div className="module-icon" style={{width:30,height:30,margin:0,fontSize:11}}>{String(i+1).padStart(2,"0")}</div><div className="card-title">{f}</div></div>)}
    </div>
    <div className="section-head"><h2>Workspace</h2><span className="muted">Implementation area</span></div>
    {slug==="assistant" ? <div className="card">
      <div className="card-title" style={{display:"flex",alignItems:"center",gap:8}}><Sparkles size={15} color="#c7adff"/> Start a task</div>
      <form action="/api/workspace-message" method="post" style={{marginTop:15,display:"grid",gap:10}}>
        <textarea className="input" name="message" placeholder="Describe what you want to research, plan or create..." required/>
        <button className="action-button" type="submit" style={{justifyContent:"center"}}>Submit task <ArrowUpRight size={14}/></button>
      </form>
      <p className="muted" style={{marginTop:10}}>The message endpoint is a secure integration placeholder. Connect a model provider to enable live AI responses.</p>
    </div> : <div className="empty-state">
      <div style={{fontSize:14,color:"#e9ddff",fontWeight:700,marginBottom:7}}>Your {module.title} workspace starts here</div>
      {d.next}<br/><br/>
      <span className="tag">Ready for the next implementation phase</span>
    </div>}
    <div className="section-head"><h2>Build notes</h2></div>
    <div className="card"><div className="muted">{d.next}</div></div>
  </div>;
}
