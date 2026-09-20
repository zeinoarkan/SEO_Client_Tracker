import { prisma } from "@/lib/prisma";

export const getclients = async () => {
    try {
        const clients = await prisma.client.findMany({
            include: {
                layanan: true,
            },
        });
        return clients;
    } catch (error) {
        console.error("Error fetching clients:", error);
        throw new Error("Failed to fetch clients");
    }
};

export const getLayanan = async () => {
    try {
        const layanan = await prisma.layanan.findMany();
        return layanan;
    } catch (error) {
        console.error("Error fetching layanan:", error);
        throw new Error("Failed to fetch layanan");
    }
};