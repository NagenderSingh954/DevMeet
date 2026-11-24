import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage.tsx';
import { RoomPage } from './pages/RoomPage.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<HomePage />} />
        
        <Route path="/room/:roomId" element={<RoomPage />} />
        
     
        <Route path="/roo/:roomId" element={<RoomPage />} />

    
       <Route path="*" element={<Navigate to="/" replace />} />  {/*fall back  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
