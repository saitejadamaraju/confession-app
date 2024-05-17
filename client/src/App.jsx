import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import {Toaster} from 'react-hot-toast'
import SendMessage from './components/SendMessage'

function App() {
  

  return (
    <div className='bg-[#FFCDEA]'>
      <div className=''>
        <Header/>
      </div>
      <div className="flex justify-center items-center">
        <Body/>
        {/* <SendMessage/> */}
      </div>
      <Toaster/>
    </div>
   

      
  )
}

export default App
