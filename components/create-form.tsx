import { createClient } from "@/lib/actions";

type Layanan = {
  id_layanan: number;
  nama_layanan: string;
};

export const CreateForm = ({ layanan }: { layanan: Layanan[] }) => {
  return (
    <div>
      <form action={createClient}>
        <div className="mb-4">
          <label
            htmlFor="nama_client"
            className="block mb-1 font-medium"
          >
            Nama Client
          </label>

          <input
            type="text"
            id="nama_client"
            name="nama_client"
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label
            htmlFor="website_client"
            className="block mb-1 font-medium mt-4"
          >
            Website Client
          </label>

          <input
            type="text"
            id="website_client"
            name="website_client"
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label
            htmlFor="id_layanan"
            className="block mb-1 font-medium mt-4"
          >
            Layanan
          </label>

          <select
            id="id_layanan"
            name="id_layanan"
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Pilih Layanan</option>

            {layanan.map((item) => (
              <option
                key={item.id_layanan}
                value={item.id_layanan}
              >
                {item.nama_layanan}
              </option>
            ))}
          </select>

          <label
            htmlFor="periode_mulai"
            className="block mb-1 font-medium mt-4"
          >
            Periode Mulai
          </label>

          <input
            type="date"
            id="periode_mulai"
            name="periode_mulai"
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label
            htmlFor="periode_selesai"
            className="block mb-1 font-medium mt-4"
          >
            Periode Selesai
          </label>

          <input
            type="date"
            id="periode_selesai"
            name="periode_selesai"
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Tambah Client
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;