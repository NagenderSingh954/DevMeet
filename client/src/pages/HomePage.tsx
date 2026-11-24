import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/landing/Navbar.tsx';
import { RoomActionCard } from '../components/landing/RoomActionCard.tsx';
import { WorkspaceMockup } from '../components/landing/WorkspaceMockup.tsx';
import { FeaturesSection } from '../components/landing/FeaturesSection.tsx';
import { HowItWorks } from '../components/landing/HowItWorks.tsx';
import { TechStackBar } from '../components/landing/TechStackBar.tsx';
import { Footer } from '../components/landing/Footer.tsx';
import {
  Video,
  Sparkles,
  ShieldCheck,
  Terminal,
  Zap
} from 'lucide-react';
import roomIdGenerate from '../utils/roomcreation.ts';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const actionCardRef = useRef<HTMLDivElement>(null);

  const handleCreateRoom = (roomId: string, name: string) => {
    // Store user name for session persistence
    sessionStorage.setItem('devmeet_username', name);
    sessionStorage.setItem('devmeet_role', 'host');
    navigate(`/room/${roomId}`, { state: { name, isHost: true } });
  };

  const handleJoinRoom = (roomId: string, name: string) => {
    sessionStorage.setItem('devmeet_username', name);
    sessionStorage.setItem('devmeet_role', 'peer');
    navigate(`/room/${roomId}`, { state: { name, isHost: false } });
  };

  const handleQuickDemo = () => {
    const demoId = roomIdGenerate();
    const demoName = 'DemoCoder_' + Math.floor(100 + Math.random() * 900);
    handleCreateRoom(demoId, demoName);
  };

  const scrollToHeroCard = () => {
    actionCardRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19] text-slate-100 selection:bg-indigo-500 selection:text-white">

      <Navbar onQuickStart={scrollToHeroCard} />

      <main className="flex-1">
        <section className="relative overflow-hidden pt-10 pb-20 sm:pt-16 sm:pb-28">


          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-pink-600/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


            <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">


              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 shadow-inner mb-6 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                <span className="text-xs font-mono font-medium text-slate-300">
                  Next-Gen Developer Workspace
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-indigo-400 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Live Coding & Voice
                </span>
              </div>


              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
                Collaborative <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Live Coding</span> with Video & Voice Chat
              </h1>


              <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Empower your dev team with synchronized pair programming, crystal-clear WebRTC video & voice, and interactive chat. No signups required.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>0ms Latency Sockets</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800">
                  <Video className="w-3.5 h-3.5 text-indigo-400" />
                  <span>HD P2P Video Mesh</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ephemeral & Encrypted</span>
                </div>
              </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">


              <div ref={actionCardRef} className="lg:col-span-5 flex flex-col justify-center">
                <div className="mb-3 flex items-center justify-between px-1">
                  <h2 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-indigo-400" />
                    Session Launcher
                  </h2>
                  <button
                    onClick={handleQuickDemo}
                    className="text-xs text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1 transition-colors"
                  >
                    <Zap className="w-3.5 h-3.5 fill-indigo-400" />
                    <span>Quick Demo Room</span>
                  </button>
                </div>

                <RoomActionCard
                  onCreate={handleCreateRoom}
                  onJoin={handleJoinRoom}
                />
              </div>

              <div id="workspace" className="lg:col-span-7">
                <div className="relative group">
                  <WorkspaceMockup />
                </div>
              </div>

            </div>

          </div>
        </section>


        <TechStackBar />


        <FeaturesSection />


        <HowItWorks />


        <section className="py-20 relative bg-gradient-to-b from-transparent via-indigo-950/20 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-slate-900/80 border border-indigo-500/30 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ready to Pair Program with Your Team?
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
                No downloads, extensions, or account setups. Launch a secure room in 5 seconds and write code together seamlessly.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={scrollToHeroCard}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Create Free Room</span>
                </button>
                <button
                  onClick={handleQuickDemo}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 font-semibold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Instant Demo Session</span>
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>


      <Footer />
    </div>
  );
};
