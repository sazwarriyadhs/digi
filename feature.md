# Fitur Aplikasi

Dokumen ini merinci fitur-fitur utama dari website profil perusahaan PT Digi Media Komunika.

## 1. Fitur Inti

- **Desain Responsif:** Tata letak yang sepenuhnya adaptif untuk tampilan optimal di desktop, tablet, dan perangkat seluler.
- **Dukungan Multi-Bahasa:** Konten tersedia dalam Bahasa Indonesia (ID) dan Inggris (EN), mudah dialihkan melalui kontrol di header.
- **Dukungan Multi-Mata Uang:** Harga layanan dapat ditampilkan dalam Rupiah Indonesia (IDR) dan Dolar AS (USD), dengan konversi waktu nyata.

## 2. Halaman & Bagian Utama

- **Halaman Utama:**
  - Bagian hero dengan carousel yang berputar otomatis dan konten dinamis.
  - Bagian untuk Tentang, Layanan, Portofolio, FAQ, dan Kontak.
- **Bagian Tentang:**
  - Tinjauan dan misi perusahaan.
  - Gambar berkualitas tinggi yang mewakili tim/perusahaan.
- **Bagian Layanan:**
  - Daftar semua layanan bergaya akordeon dengan deskripsi terperinci.
  - Informasi harga yang jelas untuk setiap layanan.
  - Penawaran paket untuk layanan yang dibundel.
- **Galeri Portofolio & Demo:**
  - Halaman khusus yang menampilkan proyek klien dan studi kasus.
  - Demo langsung aplikasi web yang disematkan.
- **Halaman Tim:**
  - Profil untuk anggota tim kunci.
  - Dialog pop-up dengan biografi terperinci.
  - Tautan media sosial.
- **Halaman Kontak:**
  - Formulir kontak dengan validasi dan pemberitahuan email (melalui Nodemailer).
  - Informasi kontak perusahaan (telepon, email, alamat).
  - Gambar peta yang disematkan.

## 3. AI & Interaktivitas

- **FAQ Berbasis AI:**
  - Pengguna dapat mengajukan pertanyaan dalam bahasa alami.
  - Didukung oleh Google Genkit, dilatih dengan informasi spesifik perusahaan.
  - Memberikan jawaban yang instan dan sadar konteks.
- **Bantuan AI Umum:**
  - Halaman asisten AI terpisah untuk pertanyaan yang lebih luas dan umum.
- **Unduhan vCard Digital:**
  - Halaman khusus untuk kartu kontak CTO Azwar Riyadh.
  - Pengguna memasukkan email mereka untuk menerima tautan unduhan vCard dalam format PDF.
  - Termasuk pratinjau visual vCard.
- **Integrasi Kode QR:**
  - Pratinjau vCard menyertakan kode QR yang mengarah langsung ke halaman "Minta Proposal".

## 4. Alat Keterlibatan Klien

- **Penjadwalan Janji Temu:** Formulir bagi klien untuk memesan sesi konsultasi, dengan pemilih tanggal dan waktu.
- **Formulir Permintaan Proposal:** Formulir terperinci bagi calon klien untuk mengirimkan persyaratan proyek dan menerima proposal khusus.
- **Unduhan Brosur:** Halaman yang memungkinkan pengguna mengunduh PDF brosur layanan perusahaan.
- **Halaman Investor & Kemitraan:** Informasi untuk calon investor dan mitra.

## 5. Teknologi & Infrastruktur

- **Framework:** Next.js 15 dengan App Router.
- **Styling:** Tailwind CSS dengan komponen ShadCN UI.
- **Mesin AI:** Google Genkit dengan keluarga model Gemini.
- **Layanan Email:** Nodemailer untuk email transaksional.
- **Peta Situs & SEO:** `next-sitemap` dikonfigurasi untuk pembuatan peta situs otomatis guna meningkatkan visibilitas di mesin pencari.
