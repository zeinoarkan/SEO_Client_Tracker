import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="relative flex flex-1 items-center">
      <input type="text" placeholder="Cari client..." className="w-full border border-gray-200 py-2 pl-10 text-sm outline-2 rounded-sm"/>
      <IoSearch className="absolute left-3 top-2 h-5 w-5 text-gray-400 " />
    </div>
  )
}

export default Search