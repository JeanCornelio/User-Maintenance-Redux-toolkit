

import { Toaster } from 'sonner'
import './App.css'
import { UserTable } from './components/UserTable'

function App() {
  return (
    <main className='p-5 px-20'>
      <h1 className='font-bold text-3xl text-gray-600 text-center mb-5'>Maintenance Redux Toolkit</h1>
      <UserTable/>
      <Toaster richColors />
    </main>
  )
}

export default App
