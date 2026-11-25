import React,{useState} from 'react';
import { Code2, Sparkles, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createMenuConfig } from '../toolbar/menu-config.tsx';
import Run from '../toolbar/Run.tsx';


interface NavbarProps {
  onQuickStart?: () => void;
}


export const Navbar: React.FC<NavbarProps> = ({ onQuickStart }) => {
const [settings, setSettings] = useState({
  modKey: "",
  notepad: true,
  terminal: true,
  webcam: true,
  livePreview: true,
});

const menuButton = createMenuConfig(
  settings.modKey,
  settings.notepad,
  settings.terminal,
  settings.webcam,
  settings.livePreview
);



  return (
    <nav className='h-10 flex items-center px-3  bg-[#3c3c3c] justify-between'>
      <div>
        {menuButton.map((e)=>(
          <button className='text-sm p-2'>{e.label}</button>
        ))}
      </div>
      <div>
          <Run/>
      </div>
      <div>
        jhsf
      </div>
    </nav>
  );
};
