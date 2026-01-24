import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Rental from './features/rentals/Rental'

import { ChooseProvider } from './context/ChooseContext'
import Login from './features/Login/Login'
import AdminPage from './features/admins/adminPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={
          <ChooseProvider>
            <Rental/>
          </ChooseProvider>
        } />

        <Route path='/login' element={<Login/>} />
        <Route path='/admin' element={<AdminPage/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
