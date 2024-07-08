
import './App.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function App() {
 

  return (
    <div className='w-full flex mx-auto '>
      <div className='w-[20vw]'>
        <Sidebar/>
      </div>
      <div className='w-[80vw]'>
         <Navbar/>
      </div>
    
    </div>
  )
}

export default App
