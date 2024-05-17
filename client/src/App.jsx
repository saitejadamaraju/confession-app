import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import {Toaster} from 'react-hot-toast'
import SendMessage from './components/SendMessage'
import AccountCreation from './components/AccountCreation'

function App() {
  

  return (
    <div className='bg-[#FFCDEA]'>
      <div className=''>
        <Header/>
      </div>
      <div className="flex justify-center items-center">
        {/* <Body/> */}
        {/* <SendMessage/> */}
        <AccountCreation/>
      </div>
      <Toaster/>
    </div>
   

      
  )
}

export default App
