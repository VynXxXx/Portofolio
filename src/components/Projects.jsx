import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
        <section id="projects" className="py-16 bg-white">  
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Project</h2>

      <div className="flex flex-wrap gap-6 justify-center">
        
        {/* Card 1 */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="border border-gray-300 p-6 w-72 rounded-xl shadow-sm hover:shadow-md transition bg-gray"
        >
          <h3 className="text-xl font-semibold mb-3">Proyek 1: Aplikasi Tasty Food</h3>
          <p className="text-gray-600 mb-3">
            Aplikasi UMKM Full Stack untuk mengelola product menggunakan Laravel.
          </p>
          <a
            href="https://github.com/VynXxXx/Tastyfood"
            className="text-blue-600 font-medium hover:underline"
          >
            Lihat Kode
          </a>
        </div>
        
        {/* Card 2 */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="border border-gray-300 p-6 w-72 rounded-xl shadow-sm hover:shadow-md transition bg-white"
        >
          <h3 className="text-xl font-semibold mb-3">Proyek 2: Website Portofolio</h3>
          <p className="text-gray-600 mb-3">
            Website ini sendiri, dibuat dengan React JS dan Tailwind CSS.
          </p>
          <a
            href="https://github.com/VynXxXx/Tastyfood"
            className="text-blue-700 font-medium hover:underline"
          >
            Lihat Demo
          </a>
        </div>
        {/* Card 3 */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="border border-gray-300 p-6 w-72 rounded-xl shadow-sm hover:shadow-md transition bg-white"
        >
          <h3 className="text-xl font-semibold mb-3">Proyek 3: Aplikasi Pemodelan Decision Tree dan Sistem Klasifikasi</h3>
          <p className="text-gray-600 mb-3">
            Aplikasi untuk mengelola Datasets dan dimplementasikan dalam program menggunakan JupyterLab dan Python.
          </p>
          <a
            href="https://github.com/VynXxXx/Project-Aplikasi-Pemodelan-Decision-Tree-dan-Sistem-Klasifikasi"
            className="text-blue-600 font-medium hover:underline"
          >
            Lihat Kode
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="border border-gray-300 p-6 w-72 rounded-xl shadow-sm hover:shadow-md transition bg-white"
        >
          <h3 className="text-xl font-semibold mb-3">Proyek 4: Aplikasi Website Converter Tools</h3>
          <p className="text-gray-600 mb-3">
             Next JS
          </p>
          <a
            href="#"
            className="text-blue-600 font-medium hover:underline"
          >
            Lihat Kode
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;
