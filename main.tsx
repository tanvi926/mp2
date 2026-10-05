//find potential problems during developing
import { StrictMode } from 'react'
//connect react to html
import { createRoot } from 'react-dom/client'
//import main app component
import App from './App.tsx'

//render the app inside div id="root" in index.html
createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <App />
  </StrictMode>,

)
