import React from 'react';
import { Sparkles, Share2, Code2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Initialize Session',
      desc: 'Enter your developer handle or grab a generated one, then click "Launch Collaborative Room" to establish a dedicated socket channel.',
      icon: Sparkles,
      color: 'text-indigo-400',
      tag: 'Instant Setup'
    },
    {
      step: '02',
      title: 'Invite Peers',
      desc: 'Copy your unique 7-character Room ID or direct URL `/room/:roomId` and share it with your co-founder, interviewer, or peer developer.',
      icon: Share2,
      color: 'text-purple-400',
      tag: 'Direct Link'
    },
    {
      step: '03',
      title: 'Pair Code & Stream Live',
      desc: 'Enjoy synchronized real-time code updates, peer presence indicators, high-definition video frames, and voice chat without lag.',
      icon: Code2,
      color: 'text-emerald-400',
      tag: 'Zero Latency'
    }
  ];

  return (
    <section id="workflow" className="py-20 relative bg-slate-950/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            Three Steps to Pair
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-3 tracking-tight">
            How DevMeet Powers Your Session
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            No signup barriers, no extension configurations. Just open your browser, invite a partner, and build together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="relative rounded-2xl bg-slate-900/40 border border-slate-800/80 p-7 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-mono text-slate-700/80">
                      {item.step}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {item.tag}
                  </span>

                  <h3 className="text-lg font-bold text-white mt-3">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
