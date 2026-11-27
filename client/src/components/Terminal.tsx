import { Doghouse, Trash } from "lucide-react";
import { useState } from "react";
import Tooltip from "../utils/Tooltip";

function Terminal(/*{ output = ["hdhfhuds0","ggfuh"] }*/) {
    const [output,setOutput]=useState(['shss',"gsduw"])
    const clearOutput=()=>{
        setOutput("")
    }
  return (
    <div className="bg-[#0c0c0c] text-gray-300 
      rounded-lg border border-[#333] overflow-scroll
      font-mono h-full px-1 py-1">    
      
<div className="relative">
  <button className="absolute top-8 right-2 text-gray-400 hover:text-red-500">
    <Tooltip text="Clear">
      <Trash size={20} />
    </Tooltip>
  </button>
</div>
      {/* Terminal Output */}
      <div className="p-2 text-sm space-y-2 overflow-auto">
         {output.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap">
           {line}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Terminal;
