import Link from "next/link"
import {IoAddSharp, IoPencil, IoTrashBin} from "react-icons/io5"

export const CreateButton = () => {
  return (
    <Link href="/clients/create" className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors rounded-sm text-sm">
      <IoAddSharp className="size={20}" />
      Tambah Client
    </Link>
  )
}

export const EditButton = () => {
  return (
    <Link href="/clients/edit" 
    className="rounded-sm border p-1 hover:bg-green-200">
      <IoPencil className="size={20}" />
    </Link>
  )
}

export const DeleteButton = () => {
  return (
    <Link href="/clients/delete" 
    className="rounded-sm border p-1 hover:bg-red-200">
      <IoTrashBin className="size={20}" />
    </Link>
  )
}
