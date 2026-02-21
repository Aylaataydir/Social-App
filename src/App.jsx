
import './App.css'
import { SocialContextProvider } from './context/SocialContext'
import AppRouter from './router/AppRouter'

function App() {

  return (
    <div className="bg-grd">
      <SocialContextProvider>
        <AppRouter />
      </SocialContextProvider>
    </div>

  )
}

export default App
