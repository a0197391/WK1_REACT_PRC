// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'antd/dist/reset.css'
import './App.css'
import Home from './assets/Pages/Home'

// import { Provider } from "react-redux";
// import Router from './Router';
// import { persistor, store } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';


const queryClient = new QueryClient()
function App() {
  // const [count, setCount] = useState(0)

  return (
    <Home />
  );
}

export default App;

