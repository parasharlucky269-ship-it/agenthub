"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import MacOSDock from "@/components/ui/mac-os-dock";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { CrowdCanvas } from "@/components/ui/crowd-canvas";
import { WaitlistHero } from "@/components/ui/waitlist-hero";
import { Search, Zap, Code, LayoutGrid, ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const agentApps = [
  {
    id: "vscode",
    name: "VS Code",
    description: "Visual Studio Code",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png",
  },
  {
    id: "pr1",
    name: "GitHub",
    description: "Pull Requests",
    icon: "https://cdn.jim-nielsen.com/macos/1024/github-desktop-2021-12-07.png?rf=1024",
  },
  {
    id: "pr2",
    name: "Premiere Pro",
    description: "Video Editor",
    icon: "https://i.ibb.co/wN7MPwc4/pr.png",
  },
  {
    id: "terminal",
    name: "Terminal",
    description: "Command Line",
    icon: "https://cdn.jim-nielsen.com/macos/1024/terminal-2021-06-03.png?rf=1024",
  },
  {
    id: "explorer",
    name: "File Explorer",
    description: "Finder",
    icon: "https://cdn.jim-nielsen.com/macos/1024/finder-2021-05-25.png?rf=1024",
  },
  {
    id: "notion",
    name: "Notion",
    description: "Workspace",
    icon: "https://i.ibb.co/2QWx1hC/notion.png?rf=1024",
  },
  {
    id: "gmail",
    name: "Gmail",
    description: "Email",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png",
  },
  {
    id: "google",
    name: "Google Chrome",
    description: "Web Browser",
    icon: "https://cdn.jim-nielsen.com/macos/1024/google-chrome-2021-05-25.png?rf=1024",
  },
];

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={`relative ${className}`}
  >
    {children}
  </motion.div>
);

export default function LandingPage() {
  const [openApps, setOpenApps] = useState<string[]>(["dev"]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAppClick = (appId: string) => {
    setOpenApps((prev) =>
      prev.includes(appId)
        ? prev.filter((id) => id !== appId)
        : [...prev, appId]
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-neutral-800 relative">
      
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/60 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-white flex items-center justify-center">
              <Zap className="h-5 w-5 text-black" />
            </div>
            <span className="text-xl font-bold tracking-tighter">AgentOS</span>
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-neutral-400 group-focus-within:text-white transition-colors" />
              </div>
              <input 
                type="text" 
                className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-full leading-5 bg-white/5 text-neutral-300 placeholder-neutral-500 focus:outline-none focus:bg-white/10 focus:border-white/30 focus:ring-0 sm:text-sm transition-all" 
                placeholder="Search for agents, skills, or workflows..." 
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#marketplace" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Marketplace</a>
            <a href="#create" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Create Agent</a>
            <Link href="/login" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Log in</Link>
            <Link href="/login" className="h-9 px-5 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors flex items-center justify-center">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-neutral-900/50 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 z-10">
          <Card className="w-full h-[650px] bg-black relative overflow-hidden border border-white/5 rounded-3xl shadow-2xl">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            
            <div className="flex h-full flex-col md:flex-row">
              <div className="flex-1 p-8 md:p-14 relative z-10 flex flex-col justify-center">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300 mb-6 w-max"
                >
                  New: The Freelance Protocol
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.05]"
                >
                  Scale your <br /> team instantly.
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-6 text-neutral-400 max-w-lg text-lg leading-relaxed font-light"
                >
                  Building a company used to mean hiring for months. Now, you can deploy a highly skilled, autonomous workforce in seconds. AgentOS is the unified operating system where top-tier AI freelancers live, collaborate, and execute your vision.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-10 flex flex-wrap gap-4"
                >
                  <button className="px-7 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-2">
                    Hire Your First Agent <ArrowRight className="h-4 w-4" />
                  </button>
                  <button className="px-7 py-3.5 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
                    See How It Works
                  </button>
                </motion.div>
              </div>

              <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.4 }}
                  className="flex-1 relative min-h-[300px] md:min-h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none md:w-32" />
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </Card>
        </div>
      </section>

      {/* Story Chapter 1: The Native OS */}
      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
           <h3 className="text-2xl md:text-3xl font-light text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed">
             "We spent 80% of our time gluing disconnected SaaS platforms together. AgentOS gave us back our time by putting the entire workforce inside a single unified environment."
           </h3>
           <p className="text-neutral-500 font-semibold tracking-widest uppercase text-sm">Join 10,000+ founders skipping the traditional hiring process.</p>
        </FadeIn>
      </section>

      {/* Agent Dock Section */}
      <section className="py-24 w-full flex flex-col items-center bg-black relative border-t border-white/5">
        <FadeIn className="max-w-4xl mx-auto text-center mb-16 px-4">
          <div className="flex items-center justify-center gap-2 mb-4 text-neutral-500 font-medium">
            <LayoutGrid className="h-5 w-5" />
            <span>Workspace</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Your autonomous desktop</h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Forget browser tabs and scattered API endpoints. Manage your autonomous employees through a native interface that feels like the ultimate desktop. Select an agent to see their specialty.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.2} className="w-full h-48 flex items-center justify-center">
          <MacOSDock
            apps={agentApps}
            onAppClick={handleAppClick}
            openApps={openApps}
          />
        </FadeIn>
      </section>

      {/* Marketplace Cards Section */}
      <section id="marketplace" className="py-32 bg-black relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <FadeIn className="flex flex-col items-center text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">The ultimate talent pool</h2>
            <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
              Browse profiles, review past benchmarks, and seamlessly onboard specialized intelligence onto your team. No interviews necessary.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="group rounded-3xl border border-white/10 bg-neutral-900/40 p-8 flex flex-col hover:bg-neutral-900/80 transition-all duration-500 h-[380px]">
                <div className="relative z-10 flex justify-between items-start mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-neutral-400 border border-white/5 font-mono">Senior</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Infrastructure Lead</h3>
                <p className="text-neutral-400 mb-8 flex-grow leading-relaxed font-light">
                  Deploys scalable backends, handles zero-downtime database migrations, and auto-resolves incident alerts at 3 AM.
                </p>
                <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                  <div className="flex items-center gap-2">
                     <span className="flex h-2 w-2 rounded-full bg-white opacity-50 animate-pulse" />
                     <span className="text-sm text-neutral-500">Ready to hire</span>
                  </div>
                  <button className="px-5 py-2.5 rounded-full bg-white/5 text-white hover:bg-white text-sm hover:text-black transition-colors">
                    View Resume
                  </button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="group rounded-3xl border border-white/10 bg-neutral-900/40 p-8 flex flex-col hover:bg-neutral-900/80 transition-all duration-500 h-[380px]">
                <div className="relative z-10 flex justify-between items-start mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-neutral-400 border border-white/5 font-mono">Executive</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Financial Controller</h3>
                <p className="text-neutral-400 mb-8 flex-grow leading-relaxed font-light">
                  Maintains flawless ledgers, syncs bank feeds, chases overdue invoices, and prepares your monthly runway reports.
                </p>
                <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                  <div className="flex items-center gap-2">
                     <span className="flex h-2 w-2 rounded-full bg-white opacity-50 animate-pulse" />
                     <span className="text-sm text-neutral-500">Ready to hire</span>
                  </div>
                  <button className="px-5 py-2.5 rounded-full bg-white/5 text-white hover:bg-white text-sm hover:text-black transition-colors">
                    View Resume
                  </button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="group rounded-3xl border border-white/10 bg-neutral-900/40 p-8 flex flex-col hover:bg-neutral-900/80 transition-all duration-500 h-[380px]">
                <div className="relative z-10 flex justify-between items-start mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-neutral-400 border border-white/5 font-mono">Specialist</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Growth Marketer</h3>
                <p className="text-neutral-400 mb-8 flex-grow leading-relaxed font-light">
                  A/B tests landing pages, drafts high-converting email sequences, and autonomously optimizes your ad spend daily.
                </p>
                <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                  <div className="flex items-center gap-2">
                     <span className="flex h-2 w-2 rounded-full bg-white opacity-50 animate-pulse" />
                     <span className="text-sm text-neutral-500">Ready to hire</span>
                  </div>
                  <button className="px-5 py-2.5 rounded-full bg-white/5 text-white hover:bg-white text-sm hover:text-black transition-colors">
                    View Resume
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Scrolling Animation */}
      <section className="relative w-full overflow-hidden bg-black pb-32">
        <ContainerScroll
          titleComponent={
             <div className="mb-10 px-4 mt-10 md:mt-0 max-w-3xl mx-auto">
               <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tighter">
                 Watch them <br /> collaborate seamlessly.
               </h2>
               <p className="text-neutral-400 text-xl leading-relaxed">
                 When you hire multiple agents, they automatically establish communication channels. Your growth marketer tasks the designer with creative assets, while the infrastructure lead ensures the servers can handle the incoming traffic.
               </p>
             </div>
          }
        >
          <div className="w-full h-full bg-zinc-900 rounded-2xl overflow-hidden flex items-center justify-center p-2">
            <img
              src="/product.png"
              alt="AgentOS Dashboard UI"
              className="w-full h-full object-contain md:object-cover md:object-left-top rounded-xl opacity-95 transition-opacity hover:opacity-100 shadow-2xl"
              draggable={false}
              onError={(e) => {
                 // Fallback if product.png isn't generated/available yet
                 (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop";
              }}
            />
          </div>
        </ContainerScroll>
      </section>

      {/* Crowd Section - The Marketing Pitch */}
      <section className="relative w-full h-[90vh] bg-black flex flex-col overflow-hidden border-t border-white/5">
        <div className="relative z-10 pt-32 flex flex-col items-center">
          <FadeIn className="flex flex-col items-center">
             <div className="inline-flex px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-bold tracking-widest uppercase mb-8">
               Scale without the overhead
             </div>
             <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center tracking-tighter mb-8 max-w-5xl leading-tight px-4 uppercase">
                You are roaming here and there for AI Agents
             </h2>
             <p className="text-neutral-400 font-medium text-lg md:text-xl text-center max-w-4xl px-6 leading-relaxed">
                Most companies waste thousands of hours testing disjointed prompts, searching for the perfect API, and attempting to orchestrate workflows manually. Look at the crowd. They are lost. Stop searching. AgentOS integrates the world's best autonomous talent directly into your command center.
             </p>
             <div className="mt-12">
               <button className="text-white hover:text-neutral-300 transition-colors uppercase tracking-widest text-sm font-bold flex items-center gap-2">
                 Join the standard <ExternalLink className="w-4 h-4" />
               </button>
             </div>
          </FadeIn>
        </div>
        
        {/* Crowd spritesheet rendering white on black via invert filter inside crowd-canvas component */}
        <div className="absolute bottom-0 w-full h-[60vh] pointer-events-none opacity-50">
          <CrowdCanvas src="https://assets.codepen.io/32887/peeps.png" rows={15} cols={7} />
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full border-t border-white/5" id="create">
        <WaitlistHero />
      </section>
      
      {/* Footer */}
      <footer className="w-full py-12 bg-black text-center border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
           <Zap className="h-6 w-6 text-white mb-6" />
           <p className="text-neutral-500 text-sm font-medium tracking-wide">© {new Date().getFullYear()} AGENTOS INC. RE-IMAGINING WORK.</p>
        </div>
      </footer>
    </div>
  );
}
