import { FaWhatsapp } from "react-icons/fa6";

function App() {
  return (
    <>
      <div className="pt-5 pb-20 px-2 bg-zinc-800 flex flex-col gap-4 relative max-w-xl mx-auto">
        <Section1 />
        <Section2 />
        <div className="fixed z-10 bottom-3 flex w-full max-w-xl justify-center">
          <BuyButton />
        </div>
        <div>
          <Video />
        </div>
        <div>
          <Spesification />
        </div>
        <div>
          <p className="text-white text-sm text-center">Dengan Vacuum Cleaner Genggam 5-in-1, membersihkan rumah menjadi lebih mudah, cepat, dan efektif. Beli sekarang dan nikmati kenyamanan dalam membersihkan rumah</p>
        </div>
      </div>
    </>
  );
}

export default App;

function Section1() {
  return (
    <>
      <div className="w-full flex flex-col items-center gap-4">
        <h1 className="text-white font-bold text-center">
          Vacum Cleaner Multifungsi Penyedot Debu Portable Cordless 5 IN 1
        </h1>
        <img
          src="/assets/vacum8.jpeg"
          alt="Vacum Cleaner"
          className="w-[250px] rounded"
        />
        <h2 className="text-xl font-semibold text-white">
          <span className="text-red-500 text-base line-through">
            Rp.520.058
          </span>{" "}
          Harga Awal
        </h2>
        <h2 className="text-xl font-semibold text-white">
          Rp.307.909 - <span className="text-lg">Gratis Ongkir & Promo</span>
        </h2>
        <a
          href="https://wa.me/6282287505805"
          className="px-3 p-1 rounded-md bg-white font-semibold flex gap-1 items-center"
        >
          <FaWhatsapp className="text-xl text-green-400" />
          Pesan Disini
        </a>
      </div>
    </>
  );
}

function Section2() {
  return (
    <>
      <div className="w-full flex justify-evenly items-center gap-4">
        <img
          src="/assets/vacum7.jpeg"
          alt="Vacum Cleaner"
          className="w-[200px] h-[200px] rounded"
        />
        <p className="text-zinc-200 text-sm font-light">
          5 in 1 Penyedot debu bisa membersihkan dimana saja, rumah, kendaraan
          mobil dan tempat lainnya. 5 muncung multifungsi bisa di gunakan kapan
          saja.
        </p>
      </div>
      <div className="w-full flex justify-evenly items-center gap-4">
        <p className="text-zinc-200 text-sm font-light">
          Fleksibel dengan aksesoris yang banyak, bisa memudahkan anda
          membersihkan semua area bahkan area sempit sekalipun.
        </p>
        <img
          src="/assets/vacum6.jpeg"
          alt="Vacum Cleaner"
          className="w-[200px] h-[200px] rounded"
        />
      </div>
      <div className="w-full flex justify-evenly items-center gap-4">
        <img
          src="/assets/vacum5.jpeg"
          alt="Vacum Cleaner"
          className="w-[200px] h-[200px] rounded"
        />
        <p className="text-zinc-200 text-sm font-light">
          Mudah dibersihkan, dapat dilepas dan bagian dalam mudah dibongkar dan
          dibersihkan menjadi lebih mudah.
        </p>
      </div>
      <div className="w-full flex justify-evenly items-center gap-4">
        <p className="text-zinc-200 text-sm font-light">
          Sangat mudah untuk menggunakan Vacumnya karena bentuk yang ramping dah
          ringan. Dengan ujung yang kecil bisa membersihkan sudut - sudut
          tersembunyi.
        </p>
        <img
          src="/assets/vacum4.jpeg"
          alt="Vacum Cleaner"
          className="w-[200px] h-[200px] rounded"
        />
      </div>
      <div className="w-full flex justify-evenly items-center gap-4">
        <img
          src="/assets/vacum3.jpeg"
          alt="Vacum Cleaner"
          className="w-[200px] h-[200px] rounded"
        />
        <p className="text-zinc-200 text-sm font-light">
          Membasmi tungau-tungau di kasur dan tempat tidur anda. Dan aman untuk
          kesehatan kulit anda.
        </p>
      </div>
      <div className="w-full flex justify-evenly items-center gap-4">
        <p className="text-zinc-200 text-sm font-light">
          Designnya yang bagus dan modern. Vacum Cleaner ini cocok untuk
          penggunaan di rumah.
        </p>
        <img
          src="/assets/vacum2.jpeg"
          alt="Vacum Cleaner"
          className="w-[200px] h-[200px] rounded"
        />
      </div>
      <div className="w-full flex justify-evenly items-center gap-4">
        <img
          src="/assets/vacum1.jpeg"
          alt="Vacum Cleaner"
          className="w-[200px] h-[200px] rounded"
        />
        <p className="text-zinc-200 text-sm font-light">
          Vacum ini tidak berisik dan tidak mengganggu saat digunakan.
        </p>
      </div>
      <div className="w-full flex justify-evenly items-center gap-4">
        <p className="text-zinc-200 text-sm font-light">
          Hemat daya dan Hemat Ruang. Design produk sangat kompak dan memudahkan
          anda menyimpan produknya.
        </p>
        <img
          src="/assets/vacum10.jpeg"
          alt="Vacum Cleaner"
          className="w-[200px] h-[200px] rounded"
        />
      </div>
    </>
  );
}

function BuyButton() {
  return (
    <>
      <a
        href="https://wa.me/6282287505805"
        className="px-3 p-1 rounded-md bg-green-400 text-white text-2xl border-2 font-semibold flex gap-1 items-center"
      >
        <FaWhatsapp className="text-2xl text-white" />
        Beli Sekarang
      </a>
    </>
  );
}

function Video() {
  return (
    <>
      <div className="w-full py-5 flex items-center justify-center">
        <video width={400} controls className="rounded-md shadow-lg">
          <source src="assets/video.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}

function Spesification() {
  return (
    <>
      <div className="w-full py-4">
      <p className="font-bold text-white text-xl">Spesifikasi Produk</p>
      <ul className="text-white">
        <li>Nama Produk : Vacuum Cleaner Genggam</li>
        <li>Tegangan : 7.4V/2000mAh</li>
        <li>Waktu Cas : -+ 4 jam</li>
        <li>Jenis Baterai : Baterai Internal</li>
        <li>Daya Sedot : 20000pa</li>
      </ul>
      </div>
    </>
  )
}
