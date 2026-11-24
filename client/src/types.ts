export interface RoomInfoData {
  roomId: string;
  name: string;
  message?: string;
  timestamp?: string;
}

export interface ChatMessage {
  id: string;
  sender: string;
  message: string;
  timestamp: string;
  isSelf?: boolean;
}

export interface RoomParticipant {
  id: string;
  name: string;
  role: 'host' | 'peer';
  isAudioMuted: boolean;
  isVideoOff: boolean;
  avatarColor: string;
}
