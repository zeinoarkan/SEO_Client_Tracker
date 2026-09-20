-- CreateTable
CREATE TABLE "Layanan" (
    "id_layanan" SERIAL NOT NULL,
    "nama_layanan" VARCHAR(100) NOT NULL,

    CONSTRAINT "Layanan_pkey" PRIMARY KEY ("id_layanan")
);

-- CreateTable
CREATE TABLE "Client" (
    "id_client" SERIAL NOT NULL,
    "nama_client" VARCHAR(100) NOT NULL,
    "website_client" VARCHAR(255) NOT NULL,
    "id_layanan" INTEGER NOT NULL,
    "periode_mulai" DATE NOT NULL,
    "periode_selesai" DATE NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id_client")
);

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_id_layanan_fkey" FOREIGN KEY ("id_layanan") REFERENCES "Layanan"("id_layanan") ON DELETE RESTRICT ON UPDATE CASCADE;
