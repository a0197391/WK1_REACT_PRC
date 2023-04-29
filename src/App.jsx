// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'antd/dist/reset.css'
import './App.css'
import Home from './assets/Pages/Home'

//執行一次
// import { feedImages } from './api';
// feedImages();

const queryClient = new QueryClient()

function App() {
  // const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>
       <Home />
    </QueryClientProvider>
  );
}

export default App;

