import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <HeroSlider />

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: "260+",
              subtitle: "Students",
            },
            {
              title: "70+",
              subtitle: "Teachers",
            },
            {
              title: "25+",
              subtitle: "Subjects",
            },
            {
              title: "50+",
              subtitle: "Awards",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md p-8 text-center hover:shadow-xl transition"
            >
              <h2 className="text-3xl font-bold mb-2 text-[#062E70]">
                {item.title}
              </h2>

              <p className="text-gray-500">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="/images/4.jpg"
              alt="School"
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <p className="text-[#062E70] font-semibold uppercase mb-3">
              About Our School
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Empowering Students for Excellence
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              We nurture students academically, morally, and socially through
              innovative learning and disciplined leadership.
            </p>

            <button className="bg-[#062E70] hover:bg-blue-800 text-white px-6 py-3 rounded-xl transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#062E70] mb-4">
              Why Choose Our School
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing a safe, innovative, and high-quality
              learning environment for every student.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Qualified Teachers",
                desc: "Highly trained and experienced educators dedicated to student success.",
              },
              {
                title: "Modern Facilities",
                desc: "Well-equipped classrooms, ICT labs, and science laboratories.",
              },
              {
                title: "Safe Environment",
                desc: "A secure and supportive atmosphere for learning and growth.",
              },
              {
                title: "Academic Excellence",
                desc: "Consistent outstanding performance in national examinations.",
              },
              {
                title: "Character Building",
                desc: "We instill discipline, leadership, and moral values.",
              },
              {
                title: "Technology Driven",
                desc: "Integration of digital tools for modern learning experiences.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-[#062E70] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-blue-800 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Admissions Now Open</h2>

          <p className="text-blue-100 text-lg mb-8">
            Give your child access to quality education and leadership
            development.
          </p>
            <a href="/admissions">
              <button className="bg-white text-blue-800 px-8 py-4 rounded-2xl font-bold hover:cursor-pointer hover:bg-gray-100 transition">
                Apply Today
              </button>
            </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;