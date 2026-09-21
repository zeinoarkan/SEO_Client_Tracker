SEO Client Tracker

SEO Client Tracker adalah aplikasi web sederhana untuk mengelola data client dan layanan SEO yang digunakan oleh masing-masing client.

Aplikasi ini dibuat menggunakan Next.js dan Prisma dengan database MySQL. Aplikasi menyediakan fitur CRUD untuk data client serta relasi antara tabel layanan dan clients menggunakan foreign key dengan relasi one-to-many.

Tech Stack
Next.js: 16.3.5
Node.js: 19.2.8
Prisma: 6.19.3
Database: postgresql
Package Manager: npm
Database Management: prisma studio

Fitur
Menampilkan daftar client
Menambahkan client baru
Mengubah data client
Menghapus data client
Memilih layanan melalui dropdown dari data tabel layanan
Validasi field wajib
Validasi format website
Relasi one-to-many antara layanan dan clients
Foreign key clients.id_layanan yang mengarah ke layanan.id_layanan
Search/filter client berdasarkan layanan dan nama client
Flash message setelah proses tambah, ubah, atau hapus.

