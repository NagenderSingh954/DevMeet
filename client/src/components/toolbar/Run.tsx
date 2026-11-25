import React, { useState } from 'react'
import { OctagonX, Play,ChevronDown, X  } from "lucide-react";

import clsx from 'clsx';


export default function Run() {
  const [isRunning,setIsRunning]=useState<boolean>(false);
  const [dialog,setDialog]=useState<boolean>(false);

  // const runfunction =()=>{}
  // const dialogOpenFunctin here 

  return (
    <div>
    <button className={clsx(
							"hover:opacity-90! disabled:opacity-50! h-7 rounded-r-none bg-(--toolbar-accent) px-2 py-0 text-sm font-bold transition-opacity hover:bg-[#235d97] rounded-md ",
							isRunning && "bg-red-600 hover:bg-red-700",
              "bg-[#2678ca] "
						)}>
      <Play aria-hidden="true"
									className="mr-0 size-4 fill-white sm:mr-1 inline"></Play>
      <p className='inline'>Run Code</p>
    </button>
     <button 
     aria-label="Program arguments and input"
							className={clsx(
								"hover:!opacity-80 disabled:!opacity-50 relative size-7 rounded-l-none border-l border-l-[color:var(--panel-text-accent)]  transition-opacity hover:bg-[#235d97] hover:text-[color:var(--panel-text-accent)] bg-[#2678ca] rounded-md font-bold ",
						
							)}>
             <ChevronDown aria-hidden="true"
									className="mr-0 size-4  sm:mr-1 inline "></ChevronDown>
      
    </button>

</div>
  )
}
