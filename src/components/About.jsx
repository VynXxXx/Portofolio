import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ProfileCard from "./ProfileCard";

function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();

    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Wrapper Flex */}
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Profile Card */}
          <div className="w-full md:w-1/3 flex justify-center">
            <ProfileCard
              avatarUrl="/Profil.jpg"
              miniAvatarUrl="/Profil.jpg"
              name="Kevin Benedict"
              title="Front End Developer"
              handle="kevinbenedict"
              status="Available"
              contactText="Contact Me"
              enableTilt={true}
            />
          </div>

          {/* Deskripsi */}
          <div className="w-full md:w-2/3 space-y-6">

            <div data-aos="fade-up">
              <h2 className="text-3xl font-bold text-blue-600">
                My Profile
              </h2>
            </div>

            {/* TEXT PROFILE */}
            <div data-aos ="fade-in">
            {loading ? (
              <Skeleton count={5} className="text-lg leading-relaxed" />
            ) : (
              <p className="text-gray-700 leading-relaxed text-lg">
                Halo! Saya Kevin Vincentio Benedict, mengajukan diri di bidang Development
                Pemrograman, Analisis Data, serta Perancangan Website dengan latar belakang
                pendidikan teknik informatika. Saya adalah seorang pengembang web yang antusias
                dengan pengalaman di React, JavaScript, dan UI/UX design. Saya suka membuat
                aplikasi inovatif dan user-friendly, serta tertarik pada pengembangan aplikasi modern.
              </p>
            )}
            </div>

            <div data-aos="fade-up">
              <h3 className="text-3xl font-bold text-blue-600 mt-6">
                Academic
              </h3>
            </div>

            {/* ACADEMIC LIST */}
            <div data-aos ="fade-in">
            {loading ? (
              <>
                <Skeleton width="80%" />
                <Skeleton width="75%" />
                <Skeleton width="70%" />
              </>
            ) : (
              <ul className="list-disc ml-6 text-gray-700 space-y-2 text-lg">
                <li>SMPK Baptis Bandung | July 2014 - Juni 2017</li>
                <li>SMK ICB Cinta Niaga | Accountancy | July 2017 - Juni 2020</li>
                <li>STMIK Indonesia Mandiri | Informatics Engineering | Sep 2021 - Oct 2025</li>
              </ul>
            )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
