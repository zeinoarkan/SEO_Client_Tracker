import { CreateForm } from "@/components/create-form";
import { getLayanan } from "@/lib/data";

const CreateClientsPage = async () => {
    const layanan = await getLayanan();

    return (
        <div className="max-w-md mx-auto mt-5">
            <h1 className="text-2xl text-center font-bold mb-5">
                Tambah Client
            </h1>

            <CreateForm layanan={layanan} />
        </div>
    );
};

export default CreateClientsPage;