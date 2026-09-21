import { deleteClient } from "@/lib/actions"
import Link from "next/link"
import {IoAddSharp} from "react-icons/io5"

export const CreateButton = () => {
  return (
    <Link href="/clients/create" className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors rounded-sm text-sm">
      <IoAddSharp className="size={20}" />
      Tambah Client
    </Link>
  )
}

export const EditButton = ({ id }: { id: number }) => {
    return (
        <Link href={`/clients/${id}/edit`} className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600">
            Edit
        </Link>
    );
};

export const DeleteButton = ({ id }: { id: number }) => {
    const deleteClientWithId = deleteClient.bind(null, id);

    return (
        <form action={deleteClientWithId}>
            <button type="submit" className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                Delete
            </button>
        </form>
    );
};
