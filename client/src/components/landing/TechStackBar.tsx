import React from 'react';

export const TechStackBar: React.FC = () => {
  const stack = [
    { name: 'Socket.IO', role: 'Real-time duplex sync' },
    { name: 'WebRTC Mesh', role: 'P2P video & voice' },
    { name: 'React 19 & Vite', role: 'Ultra-fast client' },
    { name: 'TypeScript', role: 'End-to-end type safety' },
    { name: 'Tailwind CSS', role: 'Sleek dark dev theme' },
    { name: 'Express Engine', role: 'Scalable room routing' },
  ];

  return (
    <div className="py-12 border-b border-slate-800/60 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-500 mb-6">
          Architected for high-performance developer workflows
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {stack.map((item, idx) => (
            <div 
              key={idx}
              className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/70 hover:border-indigo-500/30 transition-colors"
            >
              <span className="text-sm font-bold text-slate-200">{item.name}</span>
              <span className="text-[11px] text-slate-400 text-center mt-0.5">{item.role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
