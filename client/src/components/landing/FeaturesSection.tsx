import React from 'react';
import { 
  Code2, 
  Video, 
  MessageSquareCode, 
  Zap, 
  ShieldCheck, 
  Share2, 
  Cpu
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Code2,
      color: 'from-indigo-500 to-blue-500',
      badge: 'Real-Time Sync',
      title: 'Live Collaborative Coding',
      description: 'Write, inspect, and debug code together in real-time with multi-cursor awareness, syntax highlighting, and zero-conflict synchronization.'
    },
    {
      icon: Video,
      color: 'from-purple-500 to-pink-500',
      badge: 'HD WebRTC',
      title: 'Integrated Video & Voice',
      description: 'Crystal-clear peer-to-peer video streaming and spatial voice chat tailored for pair programming, code reviews, and remote mock interviews.'
    },
    {
      icon: MessageSquareCode,
      color: 'from-emerald-500 to-teal-500',
      badge: 'Dev Chat',
      title: 'Code-Aware Discussion',
      description: 'Integrated chat engineered for engineers. Share snippets, send immediate feedback, and follow live socket room participant join/leave alerts.'
    },
    {
      icon: Zap,
      color: 'from-amber-500 to-orange-500',
      badge: 'Zero Friction',
      title: 'Instant Ephemeral Rooms',
      description: 'No tedious signups or installations required. Generate a secure 7-character room code, share your URL, and start collaborating in seconds.'
    },
    {
      icon: ShieldCheck,
      color: 'from-cyan-500 to-blue-600',
      badge: 'Peer-to-Peer',
      title: 'Secure Direct Mesh',
      description: 'Communications flow through high-speed encrypted WebSockets and direct WebRTC channels, ensuring maximum privacy and ultra-low ping.'
    },
    {
      icon: Share2,
      color: 'from-fuchsia-500 to-purple-600',
      badge: '1-Click Invite',
      title: 'Universal Room Links',
      description: 'Generate sharable `/room/:roomId` links that auto-connect teammates into the shared session with media preview pre-configured.'
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            Engineered for Modern Developers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Everything You Need for <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Live Collaboration</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Stop switching between Discord, Google Meet, and VS Code Live Share. DevMeet unites code, video, and voice into one unified browser workspace.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="group relative rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5 backdrop-blur-sm"
              >
                {/* Glow pill */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-[1px] shadow-lg`}>
                    <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
