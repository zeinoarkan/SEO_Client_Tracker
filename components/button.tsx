import Link from "next/link"
import {IoAddSharp} from "react-icons/io5"

export const CreateButton = () => {
  return (
    <Link href="/clients/create" className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors rounded-sm text-sm">
      <IoAddSharp className="size={20}" />
      Tambah Client
    </Link>
  )
}
