// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'antd/dist/reset.css'
import './App.css'
import Home from './assets/Pages/Home'


// import { feedImages } from './api';
// feedImages();

function App() {
  // const [count, setCount] = useState(0)
  useEffect(() => {
    feedImages();
  }, []);

  return (
    <Home />
  );
}

export default App;

