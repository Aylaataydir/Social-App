
import './App.css'
import { SocialContextProvider } from './context/SocialContext'
import AppRouter from './router/AppRouter'

function App() {

  return (
    <SocialContextProvider>
      <AppRouter />
    </SocialContextProvider>
  )
}

export default App
