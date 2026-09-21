import { getClientById, getLayanan } from "@/lib/data";
import EditForm from "@/components/edit-form";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

const EditClientPage = async ({ params }: Props) => {
    const { id } = await params;

    const clientId = Number(id);

    if (isNaN(clientId)) {
        notFound();
    }

    const client = await getClientById(clientId);
    const layanan = await getLayanan();

    if (!client) {
        notFound();
    }

    return (
        <div className="max-w-md mx-auto mt-5">
            <h1 className="text-2xl text-center font-bold mb-5">
                Edit Client
            </h1>

            <EditForm
                client={client}
                layanan={layanan}
            />
        </div>
    );
};

export default EditClientPage;