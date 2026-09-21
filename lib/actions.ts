"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createClient(data: FormData) {
    const nama_client = data.get("nama_client")?.toString().trim();
    const website_client = data.get("website_client")?.toString().trim();
    const id_layanan = Number(data.get("id_layanan"));
    const periode_mulai = data.get("periode_mulai")?.toString();
    const periode_selesai = data.get("periode_selesai")?.toString();

    if (!nama_client) {
        throw new Error("Nama client wajib diisi.");
    }

    if (!website_client) {
        throw new Error("Website client wajib diisi.");
    }

    if (!data.get("id_layanan")) {
        throw new Error("Layanan wajib dipilih.");
    }

    if (isNaN(id_layanan)) {
        throw new Error("Layanan tidak valid.");
    }

    if (!periode_mulai) {
        throw new Error("Periode mulai wajib diisi.");
    }

    if (!periode_selesai) {
        throw new Error("Periode selesai wajib diisi.");
    }

    const tanggalMulai = new Date(periode_mulai);
    const tanggalSelesai = new Date(periode_selesai);

    if (tanggalSelesai < tanggalMulai) {
        throw new Error(
            "Periode selesai tidak boleh lebih awal dari periode mulai."
        );
    }

    await prisma.client.create({
        data: {
            nama_client,
            website_client,
            id_layanan,
            periode_mulai: tanggalMulai,
            periode_selesai: tanggalSelesai,
        },
    });

    revalidatePath("/clients");
    redirect("/clients?message=Client berhasil ditambahkan");
}

export async function updateClient(
    id: number,
    data: FormData
) {
    const nama_client = data.get("nama_client")?.toString().trim();
    const website_client = data.get("website_client")?.toString().trim();
    const id_layanan = Number(data.get("id_layanan"));
    const periode_mulai = data.get("periode_mulai")?.toString();
    const periode_selesai = data.get("periode_selesai")?.toString();

    if (!nama_client) {
        throw new Error("Nama client wajib diisi.");
    }

    if (!website_client) {
        throw new Error("Website client wajib diisi.");
    }

    if (!data.get("id_layanan")) {
        throw new Error("Layanan wajib dipilih.");
    }

    if (isNaN(id_layanan)) {
        throw new Error("Layanan tidak valid.");
    }

    if (!periode_mulai) {
        throw new Error("Periode mulai wajib diisi.");
    }

    if (!periode_selesai) {
        throw new Error("Periode selesai wajib diisi.");
    }

    const tanggalMulai = new Date(periode_mulai);
    const tanggalSelesai = new Date(periode_selesai);

    if (tanggalSelesai < tanggalMulai) {
        throw new Error(
            "Periode selesai tidak boleh lebih awal dari periode mulai."
        );
    }

    await prisma.client.update({
        where: {
            id_client: id,
        },
        data: {
            nama_client,
            website_client,
            id_layanan,
            periode_mulai: tanggalMulai,
            periode_selesai: tanggalSelesai,
        },
    });

    revalidatePath("/clients");
    redirect("/clients?message=Client berhasil diperbarui");
}

export async function deleteClient(id: number) {
    await prisma.client.delete({
        where: {
            id_client: id,
        },
    });

    revalidatePath("/clients");
    redirect("/clients?message=Client berhasil dihapus");
}