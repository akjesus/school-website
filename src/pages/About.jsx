import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { GraduationCap, Target, Eye, Users, LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";


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
            src="/images/about.jpeg"
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
              Message from the Proprietor
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
              — Proprietor, Maduka University College
            </p>
          </div>

          <img
            src="/images/sam.webp"
            className="rounded-3xl shadow-xl"
            alt="proprietor"
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#062E70] mb-4">
              School Anthem
            </h2>

            <p className="text-gray-600 text-lg">
              A reflection of our values, unity, and commitment to excellence.
            </p>
          </motion.div>

          {/* ANTHEM CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-sm p-8 md:p-12"
          >
            {/* OPTIONAL AUDIO */}
            <div className="mb-8">
              <audio controls className="w-full">
                <source src="/anthem.mpeg" type="audio/mpeg" />
                Your browser does not support audio playback.
              </audio>
            </div>

            {/* LYRICS */}
            <div className="space-y-6 text-gray-700 leading-8 text-center">
              <p>
                <b>Intro:</b>
                <br />
                Maduka University College A citadel of excellence
                <br />
                Maduka University College A citadel of knowledge
                <br /> <b>VERSE 1:</b>
                <br /> We'll be all we want to be
                <br />
                We'll grow to take glorious seats
                <br />
                Bringing love and light to our nation
                <br />A citadel of knowledge
                <br />
                <b>VERSE 2:</b>
                <br />
                We are nurtured and groomed
                <br />
                To save the world sinking into doom
                <br /> We'll heal the heart of humanity
                <br />A citadel of excellence
              </p>
            </div>
          </motion.div>
          {/* ANTHEM CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-sm p-8 md:p-12"
          >
            {/* LYRICS */}
            <div className="space-y-6 text-gray-700 leading-8 text-center">
              <p>
                <b>SCHOOL CREED:</b>
                <br />
                To you Maduka University College, <br />
                My alma mater, my rock; <br />
                I pledge my allegiance,
                <br />
                To harness our God-given reserves,
                <br />
                And to be a light that ignite my world,
                <br /> Living in love and service to humanity,
                <br />
                For in God I trust to excel
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-blue-800 text-white py-24 text-center">
        <h2 className="text-4xl font-bold mb-4">Join Our School Community</h2>

        <p className="text-blue-100 mb-8">
          Admissions are open for the new academic session.
        </p>
        <a href="/admissions">
          <button className="bg-white text-blue-800 px-8 py-4 rounded-2xl font-bold hover:cursor-pointer hover:bg-gray-100 transition">
            Apply Now
          </button>
        </a>
      </section>

      <Footer />
    </>
  );
}

export default About;
