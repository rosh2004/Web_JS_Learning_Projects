import { Link } from "react-router-dom"
import { useAuth } from "./components/AuthProvider"

function App() {
  const {authToken, handleLogin, handleLogout}= useAuth()
  return (
  <div className="flex flex-col items-center m-4 contner">
    <h1 className="text-2xl font-bold">This is great</h1>
    <Link className="my-3" to={'/protected'}>Protected Route</Link>
    {authToken?
    <button className="border rounded-2xl p-3 w-full bg-blue-500 text-white text-xl hover:bg-blue-600" onClick={handleLogout}>Logout</button>:
    <button className="border rounded-2xl p-3 w-full bg-green-500 text-white text-xl hover:bg-green-600" onClick={handleLogin}>Login</button>
    }
  </div>
  )
}

export default App
