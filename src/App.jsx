// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

import 'antd/dist/reset.css'
import './App.css'
import Home from './assets/Pages/Home'




const queryClient = new QueryClient()
function App() {
  // const [count, setCount] = useState(0)

  return (
    <Home />
  );
}

export default App;

