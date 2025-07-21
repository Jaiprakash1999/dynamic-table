import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Select from './Select.jsx'

// const options=["apple","banana","mango","hdahda","adadsda","adadaydq","hadakda"]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
