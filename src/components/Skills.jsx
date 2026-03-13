import React from "react";

function Skills() {
  const skills = [
    {
      title: "React JS",
      icon: "fab fa-react",
      desc:
        "React digunakan untuk membuat UI interaktif dan reusable component. Sangat cocok untuk SPA (Single Page Application).",
    },
    {
      title: "JavaScript",
      icon: "fab fa-js-square",
      desc:
        "Digunakan untuk membuat logika aplikasi frontend, DOM manipulation, event handling, dan API fetch.",
    },
    {
      title: "HTML & CSS",
      icon: "fas fa-code",
      desc:
        "HTML untuk struktur halaman, CSS untuk styling. Dasar dalam membangun layout responsif modern.",
    },
    {
      title: "Laravel",
      icon: "fab fa-laravel",
      desc:
        "Laravel digunakan untuk backend, REST API, authentication, routing, dan pengelolaan database (ORM Eloquent).",
    },
    {
      title: "JupyterLab",
      icon: "fas fa-book-open",
      desc:
        "Dipakai untuk analisis data, eksplorasi dataset, visualisasi, dan machine learning melalui notebook.",
    },
    {
      title: "Python",
      icon: "fab fa-python",
      desc:
        "Digunakan untuk ML, automasi, backend server (FastAPI), data processing, dan scripting.",
    },
    {
      title: "Git & GitHub",
      icon: "fab fa-github-square",
      desc:
        "Untuk version control, kolaborasi tim, branch workflow, dan deployment ke GitHub Pages.",
    },
  ];

  return (
    <section id="skills" className="py-16">
      <div data-aos="fade-in">
      <h2 className="text-4xl font-bold text-blue-600 text-center mb-10">My Skill</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {skills.map((s, index) => (
          <div key={index} className="flip-card w-full h-64 cursor-pointer">
            <div className="flip-inner w-full h-full relative">

              {/* FRONT */}
              <div className="flip-front absolute w-full h-full bg-blue-600 text-white rounded-2xl shadow-xl p-6 flex flex-col justify-center items-center">
                <i className={`${s.icon} text-5xl mb-4`}></i>
                <h3 className="text-xl font-bold">{s.title}</h3>
              </div>

              {/* BACK */}
              <div className="flip-back absolute w-full h-full bg-white text-gray-900 rounded-2xl shadow-xl p-6 flex flex-col justify-center items-center text-center">
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p>{s.desc}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
