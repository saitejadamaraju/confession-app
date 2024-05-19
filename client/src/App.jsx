import './App.css'
import Header from './components/Header'
import {Route,Routes,Navigate} from 'react-router-dom';
import Body from './components/Body'
import {Toaster} from 'react-hot-toast'
import SendMessage from './components/SendMessage'
import AccountCreation from './components/AccountCreation'
import useAppStore from './zustand/useAppStore.js';
import ErrorPage from './components/ErrorPage';

function App() {
  
  const {authUser} = useAppStore();
  return (
    <div className='bg-[#FFCDEA]'>
      <div className=''>
        <Header/>
      </div>
      <div className="flex justify-center items-center">
        <Routes>
            <Route path="/" element={<Navigate to={ authUser? "/home" : "/signin"} />} />
            <Route path="/home" element={authUser ? <Body/> : <Navigate to={"/signin"} />  } />
            <Route path="/send/:username" element={<SendMessage/>} />
            <Route path="/signin" element={authUser ? <Navigate to={"/"}/> : <AccountCreation />}/>
        </Routes>
      </div>
      <Toaster/>
    </div>
   

      
  )
}

export default App
