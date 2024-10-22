import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage/MainPage'

function App() {

  return (
    <Routes>
      <Route path='/' element=''>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  )
}

export default App
