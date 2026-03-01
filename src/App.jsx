import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatInput from './Components/ChatInput'
import ChatResponse from './Components/ChatResponse'
import { fetchChatResponse } from './services/api'

function App() {
  const [response, setResponse] = useState(null);
  const [loading , setLoaling] =useState(false);

  const handleQuestionSubmit =async (question) =>{

    setLoaling(true);
    setResponse(null);
    try {
      
      const apiResponse =await fetchChatResponse(question);
      setResponse(apiResponse);
    } catch (error) {
      alert("fails to get the response");
    }finally{
      setLoaling(false);
    }
  }

  
    // if (loading) {
    //   return  (<h1>Loading...</h1>)
        
    // }
  return (
    <div className='App'>
      <header className='bg-primary text-white text-center py-4'>

        <h1>QnA ChatBot</h1>
      </header>
       
       <ChatInput onSubmit={handleQuestionSubmit}/>
       {loading && <h1>Loading...</h1>}
       <ChatResponse response={response}/>

     
    </div>
  )
}

export default App
