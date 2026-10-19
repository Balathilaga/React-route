import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Routes,Route,Link} from 'react-router-dom'
//import { Link } from 'react-router-dom' 
import Home from './pages/Home.jsx'
import Students from'./pages/Students.jsx'
import Courses from './pages/Courses.jsx'
import About from './pages/About.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (

     <>
     <h1>Student Management System</h1>
<nav>
     <Link to="/">Home  | </Link>
     <Link to="/students">Students  |</Link>
     <Link to="/courses">Courses  |</Link>
     <Link to="/about">About</Link>
</nav>

    
   <Routes>
     <Route path='/'element={<Home/>}/>
     <Route path='/students' element={<Students/>}/>
     <Route path='/courses'element={<Courses/>}/>
     <Route path='/about' element={<About/>}/>
   </Routes>
    </>
 
    

  
  );
}

export default App
