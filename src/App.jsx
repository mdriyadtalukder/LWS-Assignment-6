import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import PostDescription from './pages/PostDescription'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='posts/:postId' element={<PostDescription></PostDescription>}></Route>
      </Routes>
    </>
  )
}

export default App
