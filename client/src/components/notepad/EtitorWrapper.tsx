import React from 'react'
import "./edit.css";

function EtitorWrapper({children}:{children:React.ReactNode}) {
  return (
    <div className="editor-container flex h-screen w-full flex-col">
        {children}
        </div>
  )
}

export default EtitorWrapper