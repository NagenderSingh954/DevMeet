import React, { useState } from 'react';
import {
  Plus,
  ArrowRight,
  Copy,
  Check,
  Sparkles,
  RefreshCw,
  Mic,
  MicOff,
  Video as VideoIcon,
  VideoOff,
  User,
  Hash,
  Radio,
  Zap
} from 'lucide-react';
import roomIdGenerate from '../../utils/roomcreation.ts';

interface RoomActionCardProps {
  onJoin: (roomId: string, name: string) => void;
  onCreate: (roomId: string, name: string) => void;
  initialRoomId?: string;
}

const SAMPLE_NAMES = [
  'alex_codes', 'pixel_dev', 'cyber_sam', 'nova_script', 'rustacean', 'byte_wizard', 'echo_dev'
];

export const RoomActionCard: React.FC<RoomActionCardProps> = ({ onJoin, onCreate, initialRoomId = '' }) => {
  const [mode, setMode] = useState<'create' | 'join'>(initialRoomId ? 'join' : 'create');
  const [name, setName] = useState('');
  const [roomId, setRoomId] = useState(roomIdGenerate());
  const [copied, setCopied] = useState(false);
  const [micActive, setMicActive] = useState(true);
  const [camActive, setCamActive] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const handleGenerateNewId = () => {
    const newId = roomIdGenerate();
    setRoomId(newId);
  };

  const handleRandomName = () => {
    const random = SAMPLE_NAMES[Math.floor(Math.random() * SAMPLE_NAMES.length)];
    setName(random);
    setErrorMsg('');
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(roomId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAction = () => {
    const effectiveName = name.trim() || 'AnonymousDev';
    const cleanRoomId = roomId;

    if (!cleanRoomId) {
      setErrorMsg('Please enter or generate a Room ID');
      return;
    }

    if (mode === 'create') {
      onCreate(effectiveName,cleanRoomId);
    } else {
      onJoin(effectiveName,cleanRoomId);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAction();
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
    
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

      <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-2xl backdrop-blur-xl p-6 sm:p-7">

    
        <div className="grid grid-cols-2 p-1 bg-slate-950/70 rounded-xl border border-slate-800/80 mb-6">
          <button
            type="button"
            onClick={() => { setMode('create'); setErrorMsg(''); }}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${mode === 'create'
                ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-slate-200'
              }`}
          >
            <Plus className="w-4 h-4" />
            <span>Create Room</span>
          </button>
          <button
            type="button"
            onClick={() => { setMode('join'); setErrorMsg(''); }}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${mode === 'join'
                ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-slate-200'
              }`}
          >
            <Radio className="w-4 h-4" />
            <span>Join Room</span>
          </button>
        </div>

        {/* Input Section */}
        <div className="space-y-4">
          {/* User Name Field */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-indigo-400" />
                Developer Name
              </label>
              <button
                type="button"
                onClick={handleRandomName}
                className="text-[11px] text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                title="Pick a random developer handle"
              >
                <Sparkles className="w-3 h-3" />
                <span>Random Handle</span>
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => { setName(e.target.value); setErrorMsg(''); }}
                onKeyDown={handleKeyDown}
                placeholder="e.g. Sarah_Smith or Sarah"
                maxLength={30}
                className="w-full bg-slate-950/80 border border-slate-700/80 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-slate-100 placeholder:text-slate-500 text-sm rounded-xl px-3.5 py-2.5 transition-all outline-none"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Hash className="w-3.5 h-3.5 text-indigo-400" />
                {mode === 'create' ? 'Generated Room ID' : 'Room ID to Join'}
              </label>
              {mode === 'create' && (
                <button
                  type="button"
                  onClick={handleGenerateNewId}
                  className="text-[11px] text-slate-400 hover:text-indigo-400 flex items-center gap-1 transition-colors"
                  title="Generate a fresh random ID"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Regenerate</span>
                </button>
              )}
            </div>

            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={roomId}
                  onChange={(e) => { setRoomId(e.target.value.toUpperCase()); setErrorMsg(''); }}
                  onKeyDown={handleKeyDown}
                  placeholder="e.g. 7X9K2P1"
                  className="w-full font-mono uppercase tracking-wider bg-slate-950/80 border border-slate-700/80 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-slate-100 placeholder:text-slate-500 text-sm rounded-xl px-3.5 py-2.5 transition-all outline-none"
                />
              </div>

              {mode === 'create' && (
                <button
                  type="button"
                  onClick={handleCopyId}
                  className="px-3.5 py-2.5 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 border border-slate-700 rounded-xl text-slate-300 hover:text-white transition-colors flex items-center justify-center"
                  title="Copy Room ID"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              )}
            </div>
            {copied && (
              <p className="text-[11px] text-emerald-400 mt-1 font-medium">Room ID copied to clipboard!</p>
            )}
          </div>

          {/* Media Device Quick Toggles */}
          <div className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/80 flex items-center justify-between">
            <span className="text-xs font-medium text-slate-400">Media preferences:</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setMicActive(!micActive)}
                className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors border ${micActive
                    ? 'bg-slate-800 border-slate-700 text-slate-200'
                    : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                  }`}
                title={micActive ? 'Microphone active on join' : 'Microphone muted'}
              >
                {micActive ? <Mic className="w-3.5 h-3.5 text-emerald-400" /> : <MicOff className="w-3.5 h-3.5" />}
                <span className="text-[11px]">{micActive ? 'Mic On' : 'Muted'}</span>
              </button>

              <button
                type="button"
                onClick={() => setCamActive(!camActive)}
                className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors border ${camActive
                    ? 'bg-slate-800 border-slate-700 text-slate-200'
                    : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                  }`}
                title={camActive ? 'Camera active on join' : 'Camera disabled'}
              >
                {camActive ? <VideoIcon className="w-3.5 h-3.5 text-emerald-400" /> : <VideoOff className="w-3.5 h-3.5" />}
                <span className="text-[11px]">{camActive ? 'Cam On' : 'Off'}</span>
              </button>
            </div>
          </div>

          {errorMsg && (
            <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium">
              {errorMsg}
            </div>
          )}

          <button
            type="button"
            onClick={handleAction}
            className="w-full group mt-2 flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:from-indigo-400 hover:via-purple-500 hover:to-pink-400 text-white font-semibold text-sm shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 active:scale-[0.98]"
          >
            {mode === 'create' ? (
              <>
                <Zap className="w-4 h-4 fill-white text-white" />
                <span>Launch Collaborative Room</span>
              </>
            ) : (
              <>
                <Radio className="w-4 h-4" />
                <span>Connect & Enter Room</span>
              </>
            )}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Helpful hint footer */}
          <p className="text-center text-[11px] text-slate-500">
            {mode === 'create'
              ? 'Creates an instant synchronized workspace with live code & WebRTC'
              : 'Join with room code to instantly pair-program and stream'}
          </p>
        </div>

      </div>
    </div>
  );
};
