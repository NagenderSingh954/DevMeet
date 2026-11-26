import { File,FoldHorizontal,Folder,Download} from "lucide-react";
function EditorLogo() {
  return (
    <div className="flex items-center gap-2 px-1">
    
        <Folder size={19} className="fill-white"/>
        
      </div>
  );
}

function DownloadLogo() {
  return (
    <div className="flex items-center gap-2 px-1">
    
        <Download size={19} className="fill-white"/>
        
      </div>
  )
}

export default DownloadLogo

export {EditorLogo}