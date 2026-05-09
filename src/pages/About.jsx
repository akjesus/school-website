import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { GraduationCap, Target, Eye, Users } from "lucide-react";

function About() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <PageHero
        title="About Our School"
        subtitle="We are committed to raising future leaders through quality education, discipline, innovation, and moral excellence."
      />

      {/* OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/images/5.jpg"
            className="rounded-3xl shadow-xl"
            alt="school"
          />

          <div>
            <h2 className="text-4xl font-bold text-[#062E70] mb-6">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Maduka University College, MUC is a unique school in so many ways,
              the focus being the total development of its students. The major
              goal of MUC is to equip its students by utilizing its abundant
              facilities, with all they require to live a useful life in any
              part of the globe. We have the conviction that schools are not
              exclusively for academic subjects only. Rather, our students would
              be exposed to rich, valuable, pragmatic and pleasant experiences
              in their journey through Maduka University College. The products
              thus would be articulate, focused and endowed adolescents who are
              fully developed academically, skillfully, socially, spiritually,
              morally and culturally.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We provide a safe and innovative learning environment where
              students are equipped with the knowledge and skills needed to
              succeed in a competitive world.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-md text-center hover:shadow-xl transition">
            <Target className="mx-auto text-[#062E70] mb-4" size={40} />

            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>

            <p className="text-gray-600">
              To use our God-given reserves to Prepare global leaders with
              skills And good moral values, for service
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md text-center hover:shadow-xl transition">
            <Eye className="mx-auto text-[#062E70] mb-4" size={40} />

            <h3 className="text-2xl font-bold mb-3">Our Vision</h3>

            <p className="text-gray-600">
              To produce academically excellent, Innovative and entrepreneurial
              Leaders for global development
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md text-center hover:shadow-xl transition">
            <GraduationCap className="mx-auto text-[#062E70] mb-4" size={40} />

            <h3 className="text-2xl font-bold mb-3">Our Motto</h3>

            <p className="text-gray-600">
              Education for global Competitiveness
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPAL MESSAGE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#062E70] mb-6">
              Message from the Principal
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              I welcome you to the world of Maduka University College. A
              boarding school that is premised on providing a conducive,
              disciplined learning environment that will help students actualize
              their potentials that will make them relevant in the global
              community.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              We have the conviction that schools are not exclusively for
              academic subjects only. Rather, our students would be exposed to
              rich, valuable, pragmatic and pleasant experiences in their
              journey through Maduka University College. The products thus would
              be articulate, focused and endowed adolescents who are fully
              developed academically, skillfully, socially, spiritually, morally
              and culturally. The focus of the school is absolutely the
              preparation of our students for a successful future. MUC is
              desirous of allowing access to the quality education it offers to
              as many young people as possible.
            </p>

            <p className="font-semibold text-[#062E70]">
              — Principal, Maduka University College
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1600&auto=format&fit=crop"
            className="rounded-3xl shadow-xl"
            alt="principal"
          />
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-4xl font-bold text-[#062E70]">Our Core Values</h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">
          {["Discipline", "Excellence", "Integrity", "Innovation"].map(
            (value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition"
              >
                <Users className="mx-auto text-[#062E70] mb-3" size={30} />
                <h3 className="text-xl font-semibold">{value}</h3>
              </div>
            ),
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-800 text-white py-24 text-center">
        <h2 className="text-4xl font-bold mb-4">Join Our School Community</h2>

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

export default About;
