import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {

  const [form, setForm] = useState({
    nama: '',
    email: '',
    pesan: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_hfq5dul',       
      'template_40yktke',      
      form,
      'E_RlgkEp_UMyUZV1K'      
    )
    .then(() => {
      alert("Pesan berhasil dikirim!");
      setForm({ nama: '', email: '', pesan: '' });
    })
    .catch(() => alert("Gagal mengirim, coba lagi."));
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div data-aos="fade-up" data-aos-anchor-placement="top-center">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Contact
        </h2>
      </div>

      <form
        onSubmit={sendEmail}
        className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md"
      >
        <div data-aos="fade-in" data-aos-anchor-placement="top-center">
          
          <input
            type="text"
            name="nama"
            placeholder="Nama"
            value={form.nama}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <textarea
            name="pesan"
            placeholder="Pesan"
            rows="5"
            value={form.pesan}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Kirim
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
