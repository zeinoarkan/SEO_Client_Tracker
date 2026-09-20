import { getclients } from "@/lib/data";
import { EditButton, DeleteButton } from "./button";

const ClientTable = async () => {
  const clients = await getclients();

  return (
    <table className="w-full text-sm text-left text-gray-500"> 
        <thead className="text-sm text-gray-700 uppercase bg-gray-50">
            <tr>
                <th>#</th>
                <th className="px-6 py-3">Nama Client</th>
                <th className="px-6 py-3">Website</th>
                <th className="px-6 py-3">Layanan</th>
                <th className="px-6 py-3">Periode Mulai</th>
                <th className="px-6 py-3">Periode Selesai</th>
                <th className="px-6 py-3 text-center">Aksi</th>
            </tr>
        </thead>
        <tbody>
            {clients.map((client, index) => (
            <tr key={client.id_client} className="bg-white border-b">
                <td className="px-6 py-3">{index + 1}</td>
                <td className="px-6 py-3">{client.nama_client}</td>
                <td className="px-6 py-3">{client.website_client}</td>
                <td className="px-6 py-3">{client.layanan.nama_layanan}</td>
                <td className="px-6 py-3">{client.periode_mulai? new Date(client.periode_mulai).toLocaleDateString("id-ID"): "N/A"}</td>
                <td className="px-6 py-3">{client.periode_selesai? new Date(client.periode_selesai).toLocaleDateString("id-ID"): "N/A"}</td>
                <td className="px-6 py-3 flex justify-center gap-2">
                    <EditButton />
                    <DeleteButton />
                </td>
            </tr>
                ))}
        </tbody>
    </table>
  )
}

export default ClientTable