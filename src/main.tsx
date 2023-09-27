import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ModalState } from './context/ModalContext.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ModalState>
      <App />
    </ModalState>
  </BrowserRouter>
)
