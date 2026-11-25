
export enum ROOM_EVENTS {
    CREATE_ROOM = "create-room",
    JOIN_ROOM = "join-room",
    LEAVE_ROOM = "leave-room",

    ROOM_CREATED = "room-created",
    ROOM_JOINED = "room-joined",
    ROOM_LEFT = "room-left",
    ROOM_ERROR = "room-error",
}


export enum USER_EVENTS {
    USER_JOINED = "user-joined",
    USER_LEFT = "user-left",
    USER_CONNECTED = "user-connected",
    USER_DISCONNECTED = "user-disconnected",
    USERS_LIST = "users-list",
}

export enum CHAT_EVENTS {
    SEND_MESSAGE = "send-message",
    RECEIVE_MESSAGE = "receive-message",
    DELETE_MESSAGE = "delete-message",
    EDIT_MESSAGE = "edit-message",
}


export enum CODE_EVENTS {
    CODE_CHANGE = "code-change",
    CODE_UPDATE = "code-update",
    LANGUAGE_CHANGE = "language-change",
    CURSOR_CHANGE = "cursor-change",
    SAVE_CODE = "save-code",
}


export enum TYPING_EVENTS {
    START_TYPING = "start-typing",
    STOP_TYPING = "stop-typing",
}


export enum CONNECTION_EVENTS {
    CONNECT = "connect",
    DISCONNECT = "disconnect",
    CONNECT_ERROR = "connect_error",
}


export enum WEBRTC_EVENTS {
    OFFER = "offer",
    ANSWER = "answer",
    ICE_CANDIDATE = "ice-candidate",
    CALL_USER = "call-user",
    END_CALL = "end-call",
}