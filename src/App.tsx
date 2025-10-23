import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router';
import MainView from '@/views/MainView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
