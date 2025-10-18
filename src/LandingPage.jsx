import { useEffect } from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fungsi scroll ke kontak
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left bg-gradient-to-b from-white to-gray-50 px-6 md:px-20 gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="/images/lem-produk.png"
            alt="Lem Perekat Tembok"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Lem Perekat Tembok Tanpa Paku — Kuat, Praktis, & Rapi!
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Pasang rak, gantungan, dan dekorasi tanpa bor dan tanpa ribet.
            Lem super kuat yang menempel di segala permukaan, tanpa merusak tembok.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full shadow-md 
               transition-all duration-300 
               hover:bg-green-500 hover:text-white hover:-translate-y-2 
               hover:shadow-2xl hover:scale-105"
          >
            Pesan Sekarang
          </button>
        </motion.div>
      </section>

      {/* Keunggulan Produk */}
      <section id="about" className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Kenapa Harus Lem Tembok Tanpa Paku?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Solusi terbaik untuk Anda yang ingin menempelkan sesuatu di dinding tanpa repot mengebor dan merusak cat. Cukup oles, tempel, dan beres!
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Daya Rekat Super Kuat",
              desc: "Menempel kuat di berbagai permukaan — kayu, tembok, keramik, hingga besi.",
              img: "/images/daya-rekat-kuat.png",
            },
            {
              title: "Tanpa Merusak Dinding",
              desc: "Tidak meninggalkan bekas, tidak merontokkan cat, dan mudah dibersihkan.",
              img: "/images/tanpa-merusak-dinding.png",
            },
            {
              title: "Tahan Lama & Tahan Air",
              desc: "Cocok untuk indoor maupun outdoor, tetap kuat meski terkena air atau panas.",
              img: "/images/tahan-lama.png",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="shadow-md border rounded-2xl p-8 flex flex-col items-center text-center 
                   transition-all duration-300 hover:shadow-2xl hover:brightness-110 hover:-translate-y-2 bg-white"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-50 h-50 object-contain mb-4"
              />
              <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimoni" className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-12">Cerita dari Pengguna Kami</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Dedi, Bandung",
              text: "Awalnya ragu, tapi ternyata kuat banget! Rak dapur nempel tanpa paku sampai sekarang.",
            },
            {
              name: "Rina, Tangerang",
              text: "Suka banget! Pasang dekorasi kamar jadi rapi tanpa takut cat dinding rusak.",
            },
            {
              name: "Arif, Surabaya",
              text: "Dipakai di kamar mandi juga tetap nempel kuat meski sering kena air. Mantap!",
            },
          ].map((t, i) => (
            <div key={i} className="shadow-md bg-white rounded-xl p-6">
              <p className="italic text-gray-600 mb-4">“{t.text}”</p>
              <h4 className="font-semibold">{t.name}</h4>
              <p className="text-sm text-gray-500">Pelanggan Puas</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-center text-white px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6"
        >
          Siap Pasang Tanpa Paku?  
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg mb-8 max-w-2xl mx-auto"
        >
          Gunakan <span className="font-semibold">LemTembokPro</span> — solusi cepat, kuat, dan rapi untuk semua kebutuhan menempel Anda!
        </motion.p>
        <motion.button
          onClick={scrollToContact}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white text-blue-700 font-semibold text-lg px-10 py-4 rounded-full shadow-lg 
               transition-all duration-300 
               hover:bg-green-500 hover:text-white hover:-translate-y-2 
               hover:shadow-2xl hover:scale-105"
        >
          Pesan Sekarang
        </motion.button>
      </section>
{/* Form Pemesanan */}
<section id="contact" className="py-20 px-6 bg-gray-50 text-center">
  <h2 className="text-3xl font-semibold mb-6">Pesan Sekarang LemTembokPro!</h2>
  <p className="text-gray-600 mb-8">
    Isi formulir di bawah ini untuk melakukan pemesanan. Tim kami akan segera menghubungi Anda untuk konfirmasi dan pengiriman produk.
  </p>

  <form
    className="max-w-lg mx-auto grid gap-4 text-left"
    onSubmit={(e) => {
      e.preventDefault();
      const name = e.target[0].value;
      const phone = e.target[1].value;
      const address = e.target[2].value;

      // Format pesan otomatis ke WhatsApp
      const message =
        `Halo, saya ingin memesan produk *Lem Tembok*.\n\n` +
        `Berikut data saya:\n` +
        ` Nama: ${name}\n` +
        ` Nomor WA: ${phone}\n` +
        ` Alamat: ${address}\n\n` +
        `Mohon konfirmasi ketersediaan produk, ya!`;

      const url = `https://wa.me/6285900405885?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }}
  >
    <input
      type="text"
      placeholder="Nama Penerima"
      className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
    />

    <input
      type="text"
      placeholder="Nomor Telepon/Whatsapp"
      className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
    />

    <textarea
      placeholder="Alamat Penerima"
      rows={3}
      className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
      required
    ></textarea>

    <button
      type="submit"
      className="bg-blue-600 text-white w-full py-3 text-lg rounded-full shadow-md 
                 font-semibold transition-all duration-300
                 hover:bg-green-500 hover:text-white hover:-translate-y-2 
                 hover:shadow-2xl hover:scale-105"
    >
      Pesan Sekarang
    </button>
  </form>
</section>



      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-gray-300 text-center">
        <p>© {new Date().getFullYear()} Lem Tembok. All rights reserved. Built with ❤️ for Indonesian developers.</p>
      </footer>
    </div>
  );
}
