import './App.css';
import Main from './components/Main';
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <div className="flex flex-col h-full">
      <Main />
      <Toaster />
    </div>

  )
}

export default App
