
export default function Home() {
  return (
    <>
      <main className="px-6 py-12 max-w-5xl mx-auto space-y-10">
        <section>
          <h1 className="text-3xl font-bold">
            Solusi Transformasi Digital untuk Masa Depan Bisnis Anda
          </h1>
          <p className="mt-4 text-muted-foreground md:text-lg">
            PT Digi Media Komunika adalah mitra terpercaya dalam transformasi digital.
            Kami menyediakan layanan pengembangan web dan aplikasi, cloud & DevOps,
            keamanan siber, dan solusi AI berbasis teknologi terbaru.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Layanan Kami</h2>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-muted-foreground">
            <li>🌐 Pengembangan Web & Aplikasi</li>
            <li>☁️ Cloud & DevOps</li>
            <li>🛡️ Keamanan Siber</li>
            <li>🤖 Solusi AI & Analitik Data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Kenapa Memilih Kami?</h2>
          <p className="mt-2 text-muted-foreground">
            Dengan tim ahli dan pengalaman bertahun-tahun, kami siap mendukung bisnis Anda menuju
            digitalisasi secara efisien dan aman.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Testimoni Klien</h2>
          <blockquote className="mt-4 italic border-l-4 pl-4 text-gray-600 border-gray-300">
            “PT Digi Media Komunika telah membantu kami membangun sistem internal yang efisien dan aman.
            Tim mereka sangat profesional!”
            <br />
            <cite className="not-italic font-medium">— Budi, CTO Perusahaan X</cite>
          </blockquote>
        </section>
      </main>
    </>
  )
}
