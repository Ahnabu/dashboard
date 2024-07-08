
import './App.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Top from './Top'

function App() {


  return (
    <div className='w-full flex mx-auto '>
      <div className='w-[20vw]'>
        <Sidebar />
      </div>
      <div className='w-[80vw]'>
        <Navbar />
        <div className='p-3'>
          {/* charts */}
          <Top />
          {/* stats  */}

          {/* tables */}
        </div>

      </div>

    </div>
  )
}

export default App
