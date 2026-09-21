import { prisma } from "@/lib/prisma";

export const getclients = async (query?: string) => {
    try {
        const clients = await prisma.client.findMany({
             where: query
                ? {
                      OR: [
                          {
                              nama_client: {
                                  contains: query,
                                  mode: "insensitive",
                              },
                          },
                          {
                              layanan: {
                                  nama_layanan: {
                                      contains: query,
                                      mode: "insensitive",
                                  },
                              },
                          },
                      ],
                  }
                : undefined,
            include: {
                layanan: true,
            },
            orderBy: {
                id_client: "asc",
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

export const getClientById = async (id: number) => {
    try {
        const client = await prisma.client.findUnique({
            where: {
                id_client: id,
            },
        });

        return client;
    } catch (error) {
        console.error("Error fetching client:", error);
        throw new Error("Failed to fetch client");
    }
};