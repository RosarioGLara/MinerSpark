import { useEffect } from 'react'
import { supabase } from './supabaseClient'

function App() {
  useEffect(() => {
    supabase.auth.getSession().then(({ data, error }) => {
      if (error) {
        console.log('Connection error:', error.message)
      } else {
        console.log('Supabase connected successfully!', data)
      }
    })
  }, [])

  return (
    <div>
      <h1>Miner Spark</h1>
      <p>Welcome to the cohort platform.</p>
    </div>
  )
}

export default App