import {
  Bot, Image, Palette, CalendarDays, Code2, Megaphone, Images,
  FolderKanban, FileText, Search, Video, Settings, WandSparkles
} from "lucide-react";

export const modules = [
  { slug:"assistant", title:"AI Assistant", description:"Chat, research, reasoning and task-focused AI agents.", icon:Bot, group:"Core" },
  { slug:"ai-studio", title:"AI Studio", description:"Image generation, video concepts, enhancement and creative tools.", icon:WandSparkles, group:"Create" },
  { slug:"video-studio", title:"Video Studio", description:"Media bin, editing workspace, timeline and export workflows.", icon:Video, group:"Create" },
  { slug:"design-studio", title:"Design Studio", description:"Canvas, templates, layers, reusable components and prototypes.", icon:Palette, group:"Create" },
  { slug:"social-studio", title:"Social Studio", description:"Visual planner, captions, content calendar and publishing workflow.", icon:CalendarDays, group:"Grow" },
  { slug:"marketing-studio", title:"Marketing Studio", description:"Campaign concepts, ad creatives, copy and brand workspace.", icon:Megaphone, group:"Grow" },
  { slug:"developer-studio", title:"Developer Studio", description:"Code projects, repository workflows, previews and deployment tools.", icon:Code2, group:"Build" },
  { slug:"inspiration-hub", title:"Inspiration Hub", description:"Visual discovery, saved references, collections and idea boards.", icon:Images, group:"Organize" },
  { slug:"projects", title:"Projects & Files", description:"Project spaces, documents, uploads and shared working context.", icon:FolderKanban, group:"Organize" },
  { slug:"documents", title:"Documents", description:"Drafts, notes, briefs, spreadsheets and presentation planning.", icon:FileText, group:"Organize" },
  { slug:"research", title:"Research", description:"Source collection, web research and structured findings.", icon:Search, group:"Core" },
  { slug:"settings", title:"Workspace Settings", description:"Owner access, integrations, preferences and system configuration.", icon:Settings, group:"System" }
] as const;
export type ModuleSlug = typeof modules[number]["slug"];
