// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'antd/dist/reset.css'
import './App.css'
import Home from './assets/Pages/Home'


const queryClient = new QueryClient()
function App() {
  // const [count, setCount] = useState(0)

  return (
    // <Home />
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;

