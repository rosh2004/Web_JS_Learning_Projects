import { Link } from "react-router-dom"
import SearchInput from "./SearchInput"

function Header() {
  return (
    <div className="flex items-center justify-between px-4 border-b h-14">
      <div className="flex space-x-2 text-sm">
        <Link className="text-lg font-bold text-nowrap" to="/">NPM Registry</Link>
      </div>
      <div className="w-full max-w-lg ml-4">
        <SearchInput />
      </div>
    </div>
  )
}

export default Header