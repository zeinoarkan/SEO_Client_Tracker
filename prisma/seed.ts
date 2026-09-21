import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.client.deleteMany();
    await prisma.layanan.deleteMany();

    await prisma.layanan.createMany({
        data: [
            {
                id_layanan: 1,
                nama_layanan: "SEO Audit",
            },
            {
                id_layanan: 2,
                nama_layanan: "Content SEO",
            },
            {
                id_layanan: 3,
                nama_layanan: "Keyword Research",
            },
        ],
    });

    await prisma.client.createMany({
        data: [
            {
                id_client: 1,
                nama_client: "Andi",
                website_client: "jogjadigital.id",
                id_layanan: 1,
                periode_mulai: new Date("2025-01-14"),
                periode_selesai: new Date("2025-04-14"),
            },
            {
                id_client: 2,
                nama_client: "Dina",
                website_client: "digitalisasi.com",
                id_layanan: 3,
                periode_mulai: new Date("2025-01-29"),
                periode_selesai: new Date("2025-04-29"),
            },
            {
                id_client: 3,
                nama_client: "Dani",
                website_client: "Aquatic.id",
                id_layanan: 1,
                periode_mulai: new Date("2026-01-06"),
                periode_selesai: new Date("2026-04-06"),
            },
            {
                id_client: 4,
                nama_client: "Inda",
                website_client: "jelajah.id",
                id_layanan: 2,
                periode_mulai: new Date("2026-03-19"),
                periode_selesai: new Date("2026-06-19"),
            },
            {
                id_client: 5,
                nama_client: "Ani",
                website_client: "creature.com",
                id_layanan: 2,
                periode_mulai: new Date("2026-04-01"),
                periode_selesai: new Date("2026-07-01"),
            },
        ],
    });
    console.log("Seed berhasil!");
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    });