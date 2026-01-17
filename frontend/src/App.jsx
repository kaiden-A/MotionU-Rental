import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Rental from './features/rentals/Rental'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Rental/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
