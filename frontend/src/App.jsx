import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Rental from './features/rentals/Rental'

import { ChooseProvider } from './context/ChooseContext'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ChooseProvider>
            <Rental/>
          </ChooseProvider>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
