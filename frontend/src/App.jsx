import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Student from './Student'
import Create from './Create'
import Update from './Update'
function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Student/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
