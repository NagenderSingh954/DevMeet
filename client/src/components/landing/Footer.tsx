import React from 'react';
import { Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#080c14] text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <span className="text-white font-bold text-sm tracking-tight">DevMeet</span>
            <span className="text-xs text-slate-500 block">Live Collaborative Coding, Video & Voice</span>
          </div>
        </div>

        {/* Center Tagline */}
        <div className="text-xs text-slate-500 flex items-center gap-1.5 font-mono">
          <span>Engineered for pair programmers & remote dev squads</span>
        </div>

        {/* Right Info */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>All Systems Operational</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
