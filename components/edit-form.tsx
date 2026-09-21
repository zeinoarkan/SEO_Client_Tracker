import { updateClient } from "@/lib/actions";

type Layanan = {
    id_layanan: number;
    nama_layanan: string;
};

type Client = {
    id_client: number;
    nama_client: string;
    website_client: string;
    id_layanan: number;
    periode_mulai: Date;
    periode_selesai: Date;
};

type EditFormProps = {
    client: Client;
    layanan: Layanan[];
};

export const EditForm = ({
    client,
    layanan,
}: EditFormProps) => {
    const updateClientWithId = updateClient.bind(
        null,
        client.id_client
    );

    return (
        <div>
            <form action={updateClientWithId}>
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
                        defaultValue={client.nama_client}
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
                        defaultValue={client.website_client}
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
                        defaultValue={client.id_layanan}
                        required
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">
                            Pilih Layanan
                        </option>

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
                        defaultValue={client.periode_mulai
                            .toISOString()
                            .split("T")[0]}
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
                        defaultValue={client.periode_selesai
                            .toISOString()
                            .split("T")[0]}
                        required
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        type="submit"
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Simpan Perubahan
                    </button>

                </div>
            </form>
        </div>
    );
};

export default EditForm;