import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { BookOpen, FlaskConical, Calculator, Users } from "lucide-react";

function Academics() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <PageHero
        title="Academics"
        subtitle="We provide a structured curriculum designed to build academic excellence and leadership skills."
      />

      {/* SCHOOL STRUCTURE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-3xl shadow-md hover:shadow-xl transition">
            <h2 className="text-3xl font-bold text-[#062E70] mb-4">
              Junior Secondary (JSS)
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our JSS program builds a strong foundation in core subjects
              including Mathematics, English, Basic Science, Social Studies, and
              Computer Studies.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl shadow-md hover:shadow-xl transition">
            <h2 className="text-3xl font-bold text-[#062E70] mb-4">
              Senior Secondary (SSS)
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Students specialize in Science, Arts, or Commercial streams
              preparing them for WAEC, NECO, and tertiary education.
            </p>
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-4xl font-bold text-[#062E70]">Our Departments</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
          {[
            {
              icon: <FlaskConical size={40} />,
              title: "Science",
              desc: "Physics, Chemistry, Biology, Further Maths, and ICT.",
            },
            {
              icon: <BookOpen size={40} />,
              title: "Arts",
              desc: "Literature, Government, CRS/IRS, History, and Languages.",
            },
            {
              icon: <Calculator size={40} />,
              title: "Commercial",
              desc: "Accounting, Economics, Commerce, and Business Studies.",
            },
          ].map((dept, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-md text-center hover:shadow-xl transition"
            >
              <div className="text-[#062E70] mb-4 flex justify-center">
                {dept.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">{dept.title}</h3>

              <p className="text-gray-600">{dept.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SUBJECTS GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#062E70] mb-12">
            Core Subjects
          </h2>

          <div className="grid md:grid-cols-4 gap-4 text-center">
            {[
              "Mathematics",
              "English Language",
              "Biology",
              "Chemistry",
              "Physics",
              "Economics",
              "Government",
              "Literature",
              "Commerce",
              "ICT",
              "Agricultural Science",
              "Civic Education",
            ].map((subject, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-xl shadow-sm hover:bg-blue-50 transition"
              >
                {subject}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING APPROACH */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/images/approach.jpeg"
            className="rounded-3xl shadow-xl"
            alt="learning"
          />

          <div>
            <h2 className="text-4xl font-bold text-[#062E70] mb-6">
              Our Learning Approach
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              We combine traditional teaching with modern digital tools to
              enhance student understanding and engagement.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Practical sessions, group work, and continuous assessments ensure
              students fully grasp each subject.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our goal is not just academic success but holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-800 text-white py-24 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Join Our Academic Community?
        </h2>

        <p className="text-blue-100 mb-8">
          Admissions are open for the new academic session.
        </p>

        <button className="bg-white text-blue-800 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition">
          Apply Now
        </button>
      </section>

      <Footer />
    </>
  );
}

export default Academics;
