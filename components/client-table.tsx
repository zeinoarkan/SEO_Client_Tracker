const ClientTable = () => {
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
            <tr>
                <td className="px-6 py-3"></td>
                <td className="px-6 py-3"></td>
                <td className="px-6 py-3"></td>
                <td className="px-6 py-3"></td>
                <td className="px-6 py-3"></td>
            </tr>
        </tbody>
    </table>
  )
}

export default ClientTable