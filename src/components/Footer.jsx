import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* SCHOOL INFO */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#062E70] p-3 rounded-2xl">
                <img src="/logo.jpg" alt="Logo" className="h-10 w-15" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  Maduka University College
                </h2>

                <p className="text-sm text-gray-400">
                  Education for Global Competitiveness
                </p>
              </div>
            </div>

            <p className="leading-relaxed text-gray-400 mb-6">
              We are committed to raising future leaders through quality
              education, discipline, innovation, and moral excellence.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4">
              {[FaFacebookF, FaInstagram, FaXTwitter, FaYoutube].map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="bg-gray-900 hover:bg-[#062E70] transition p-3 rounded-xl"
                  >
                    <Icon size={20} />
                  </button>
                ),
              )}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {[
                "Home",
                "About Us",
                "Admissions",
                "Academics",
                "Gallery",
                "Student Portal",
                "Contact Us",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-blue-400 transition"
                  >
                    <ArrowRight size={16} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ACADEMICS */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Academics</h3>

            <ul className="space-y-4">
              {[
                "Junior Secondary",
                "Senior Secondary",
                "Science Department",
                "Arts Department",
                "Commercial Department",
                "School Library",
                "ICT Center",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-blue-400 transition"
                  >
                    <ArrowRight size={16} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Contact Us
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gray-900 p-3 rounded-xl">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-white font-medium">Phone Number</p>

                  <p className="text-gray-400">
                    08055091883, 09150991333
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-900 p-3 rounded-xl">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-white font-medium">Email Address</p>

                  <p className="text-gray-400">
                    college@madukauniversity.edu.ng
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-900 p-3 rounded-xl">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-white font-medium">School Address</p>

                  <p className="text-gray-400">
                    Ekwegbe, Igbo-Etiti LGA by Enugu-Nsukka new road , Enugu,
                    Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="mt-20 bg-gradient-to-r from-[#062E70] to-blue-900 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="uppercase tracking-widest text-blue-200 mb-3">
                Newsletter
              </p>

              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Stay Updated With School News
              </h2>

              <p className="text-blue-100 leading-relaxed">
                Get the latest updates on admissions, events, announcements, and
                academic activities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white px-5 py-4 rounded-2xl outline-none text-gray-800"
              />

              <button className="bg-gray-950 hover:bg-black text-white px-8 py-4 rounded-2xl font-semibold transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-center md:text-left">
              © 2026 Maduka University College. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-gray-500">
              <a href="#" className="hover:text-blue-400 transition">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-blue-400 transition">
                Terms & Conditions
              </a>

              <a href="#" className="hover:text-blue-400 transition">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}