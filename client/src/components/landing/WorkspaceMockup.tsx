import React, { useState } from 'react';
import { 
  Code2, 
  Video, 
  Mic, 
  Terminal, 
  Users, 
  Maximize2, 
  Play,
  Volume2
} from 'lucide-react';

export const WorkspaceMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'editor' | 'server'>('editor');

  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden border border-slate-800 bg-[#0d121f] shadow-2xl shadow-indigo-950/40">
      
      {/* Glow highlight */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

      {/* Editor Window Top Title Bar */}
      <div className="px-4 py-3 bg-[#090d16] border-b border-slate-800/90 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/50"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/50"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/50"></div>
          <span className="ml-2 text-xs font-mono text-slate-400 font-medium">DevMeet Collaborative IDE</span>
        </div>

        {/* Room badge in header */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[11px] font-mono">
            <Users className="w-3 h-3" />
            <span>2 Devs Connected</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Live 0ms</span>
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="flex items-center justify-between px-3 bg-[#0b0f19] border-b border-slate-800/80 text-xs font-mono">
        <div className="flex items-center">
          <button
            onClick={() => setActiveTab('editor')}
            className={`px-3 py-2 flex items-center gap-1.5 border-r border-slate-800/80 transition-colors ${
              activeTab === 'editor'
                ? 'bg-[#0d121f] text-indigo-300 border-t-2 border-t-indigo-500 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>App.tsx</span>
          </button>
          <button
            onClick={() => setActiveTab('server')}
            className={`px-3 py-2 flex items-center gap-1.5 border-r border-slate-800/80 transition-colors ${
              activeTab === 'server'
                ? 'bg-[#0d121f] text-indigo-300 border-t-2 border-t-indigo-500 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span>socketHandler.ts</span>
          </button>
        </div>

        <div className="flex items-center gap-2 py-1 pr-1">
          <button className="flex items-center gap-1 px-2 py-1 rounded bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20 transition-colors">
            <Play className="w-2.5 h-2.5 fill-emerald-400" />
            <span>Run Code</span>
          </button>
          <Maximize2 className="w-3.5 h-3.5 text-slate-500 hover:text-slate-300 cursor-pointer" />
        </div>
      </div>

      {/* Main Workspace Layout (Editor + Floating Video Overlays) */}
      <div className="relative p-4 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto min-h-[310px] bg-[#0d121f]">
        
        {/* Floating Mini Video Tiles in top-right corner */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-20 pointer-events-none">
          {/* Peer 1 (Speaking) */}
          <div className="w-36 sm:w-44 h-24 rounded-xl bg-slate-900/90 border-2 border-indigo-500/80 overflow-hidden shadow-xl relative backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-indigo-950/30 flex items-center justify-center">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs ring-4 ring-indigo-500/30">
                SC
              </div>
            </div>
            {/* Speaking audio wave indicator */}
            <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-indigo-500/80 text-[9px] text-white flex items-center gap-1">
              <Volume2 className="w-2.5 h-2.5 animate-pulse" />
              <span>Voice</span>
            </div>
            <div className="absolute bottom-1.5 inset-x-1.5 flex items-center justify-between text-[10px] text-slate-200">
              <span className="font-semibold truncate">Sarah (Host)</span>
              <Mic className="w-3 h-3 text-emerald-400" />
            </div>
          </div>

          {/* Peer 2 (You) */}
          <div className="w-36 sm:w-44 h-20 rounded-xl bg-slate-900/90 border border-slate-700/80 overflow-hidden shadow-lg relative backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-800/40 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs">
                YOU
              </div>
            </div>
            <div className="absolute bottom-1.5 inset-x-1.5 flex items-center justify-between text-[10px] text-slate-200">
              <span className="font-medium text-slate-300">You (Alex)</span>
              <Video className="w-3 h-3 text-indigo-400" />
            </div>
          </div>
        </div>

        {/* Code Content */}
        <div className="space-y-1 text-slate-300 pr-40 sm:pr-48 select-none">
          <div className="flex gap-4">
            <span className="text-slate-600 select-none w-6 text-right">1</span>
            <span className="text-purple-400">import</span> <span className="text-slate-100">{'{ createDevMeetRoom }'}</span> <span className="text-purple-400">from</span> <span className="text-emerald-400">'@devmeet/engine'</span>;
          </div>
          <div className="flex gap-4">
            <span className="text-slate-600 select-none w-6 text-right">2</span>
            <span className="text-purple-400">import</span> <span className="text-slate-100">{'{ useWebRTCPeers }'}</span> <span className="text-purple-400">from</span> <span className="text-emerald-400">'@devmeet/video-voice'</span>;
          </div>
          <div className="flex gap-4 text-slate-600">
            <span className="w-6 text-right">3</span>
            <span></span>
          </div>
          <div className="flex gap-4">
            <span className="text-slate-600 select-none w-6 text-right">4</span>
            <span className="text-blue-400">export function</span> <span className="text-amber-300">PairProgrammingSession</span>() {'{'}
          </div>
          <div className="flex gap-4">
            <span className="text-slate-600 select-none w-6 text-right">5</span>
            <span className="pl-4 text-blue-400">const</span> {'{ peers, stream }'} = <span className="text-amber-300">useWebRTCPeers</span>();
          </div>
          <div className="flex gap-4">
            <span className="text-slate-600 select-none w-6 text-right">6</span>
            <span className="pl-4 text-blue-400">const</span> [code, syncCode] = <span className="text-amber-300">useState</span>(<span className="text-emerald-400">"// Live coding"</span>);
          </div>
          <div className="flex gap-4 text-slate-600">
            <span className="w-6 text-right">7</span>
            <span></span>
          </div>
          <div className="flex gap-4">
            <span className="text-slate-600 select-none w-6 text-right">8</span>
            <span className="pl-4 text-slate-400">// Real-time collaborative broadcast</span>
          </div>
          <div className="flex gap-4">
            <span className="text-slate-600 select-none w-6 text-right">9</span>
            <span className="pl-4 text-purple-400">const</span> <span className="text-indigo-300">onCodeChange</span> = (diff) =&gt; {'{'}
          </div>
          <div className="flex gap-4">
            <span className="text-slate-600 select-none w-6 text-right">10</span>
            <span className="pl-8 text-indigo-300">socket</span>.<span className="text-amber-300">emit</span>(<span className="text-emerald-400">"code-update"</span>, {'{ diff }'});
          </div>
          <div className="flex gap-4">
            <span className="text-slate-600 select-none w-6 text-right">11</span>
            <span className="pl-4">{'}'};</span>
          </div>

          {/* Active Collaborator Cursor Tag */}
          <div className="flex gap-4 items-center">
            <span className="text-slate-600 select-none w-6 text-right">12</span>
            <div className="pl-4 flex items-center flex-wrap gap-1">
              <span className="text-purple-400">return</span> <span className="text-slate-100">&lt;<span className="text-rose-400">DevMeetRoom</span> stream={'{stream}'}</span>
              {/* Animated Collaborator Cursor */}
              <div className="relative inline-flex items-center">
                <span className="w-[2px] h-4 bg-indigo-400 inline-block animate-cursor-blink"></span>
                <span className="ml-1 px-1.5 py-0.5 rounded text-[9px] bg-indigo-600 text-white font-sans font-medium shadow-md shadow-indigo-600/40">
                  Sarah (typing...)
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-slate-600 select-none w-6 text-right">13</span>
            <span className="pl-4">{'}'}</span>
          </div>
        </div>
      </div>

      {/* Terminal / Live Socket Activity Bar */}
      <div className="px-4 py-2.5 bg-[#090d16] border-t border-slate-800/90 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 text-slate-400 overflow-hidden text-ellipsis whitespace-nowrap">
          <Terminal className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
          <span className="text-emerald-400">[Socket.io]</span>
          <span className="text-slate-400 truncate">Peer joined room #7X9K2P1 • WebRTC ICE negotiation completed</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[10px] text-slate-500">
          <span>UTF-8</span>
          <span>TypeScript</span>
        </div>
      </div>
    </div>
  );
};
