import React from 'react';
import { Code2, Sparkles, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onQuickStart?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuickStart }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#0b0f19]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
 
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
            <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#0b0f19] flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                Dev<span className="text-indigo-400">Meet</span>
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-md">
                v1.0
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">Code • Video • Voice • Live</p>
          </div>
        </Link>

        {/* Center Live Status */}
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-300 font-medium">
          <a href="#features" className="hover:text-indigo-400 transition-colors">Features</a>
          <a href="#workspace" className="hover:text-indigo-400 transition-colors">Workspace</a>
          <a href="#workflow" className="hover:text-indigo-400 transition-colors">How It Works</a>
          
        </div>

  
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Nagendersingh954"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300 text-xs font-medium transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-slate-400" />
            <span>Open Source</span>
          </a>

          <button
            onClick={onQuickStart}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-300 active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            <span>Start Session</span>
          </button>
        </div>
      </div>
    </header>
  );
};
