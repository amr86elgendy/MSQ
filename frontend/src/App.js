import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Question from './components/Question'

function App() {
  
  const dispatch = useDispatch()
  const { username } = useSelector((state) => state)

  useEffect(() => {
    const name = window.prompt('Enter Your Name')
    dispatch({ type: 'USER_NAME', payload: name })
  }, [dispatch])

  return (
    <div>
      <h1 className='text-center'>{username ? `Hello ${username}` : 'Please Reload And Enter Your Name'}</h1>
      {username && <Question />}
    </div>
  )
}

export default App
