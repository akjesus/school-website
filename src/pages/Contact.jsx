import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Swal from "sweetalert2";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Message Sent!",
      text: "Thank you for reaching out. We will get back to you soon.",
      icon: "success",
      confirmButtonColor: "#062E70",
    });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <PageHero
        title="Contact Us"
        subtitle="We would love to hear from you. Reach out for inquiries, admissions, or support."
      />

      {/* CONTACT INFO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">
          {[
            {
              icon: FaPhoneAlt,
              title: "Phone",
              value: "08055091883, 09150991333",
            },
            {
              icon: FaEnvelope,
              title: "Email",
              value: "college@madukauniversity.edu.ng",
            },
            {
              icon: FaMapMarkerAlt,
              title: "Location",
              value:
                "Ekwegbe, Igbo-Etiti LGA by Enugu-Nsukka new road , Enugu, Nigeria",
            },
            {
              icon: FaClock,
              title: "Office Hours",
              value: "Mon - Fri | 8AM - 4PM",
            },
          ].map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-3xl shadow-sm text-center"
              >
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-[#062E70] text-xl" />
                </div>

                <h3 className="font-bold text-lg mb-2">{item.title}</h3>

                <p className="text-gray-600 text-sm">{item.value}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-sm"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#062E70]">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                type="text"
                value={form.name}
                onChange={handleChange}
                name="name"
                placeholder="Full Name"
                className="w-full border p-4 rounded-xl border-[#062E70]"
              />

              <input
                required
                type="email"
                value={form.email}
                onChange={handleChange}
                name="email"
                placeholder="Email Address"
                className="w-full border p-4 rounded-xl border-[#062E70]"
              />

              <input
                required
                type="text"
                value={form.subject}
                onChange={handleChange}
                name="subject"
                placeholder="Subject"
                className="w-full border p-4 rounded-xl border-[#062E70]"
              />

              <textarea
                required
                value={form.message}
                onChange={handleChange}
                name="message"
                rows="6"
                placeholder="Write your message..."
                className="w-full border p-4 rounded-xl border-[#062E70]"
              />

              <button
                type="submit"
                disabled={
                  !form.name || !form.email || !form.subject || !form.message
                }
                className="w-full bg-[#062E70] hover:bg-blue-800 transition text-white py-4 rounded-xl font-semibold"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* MAP + INFO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* MAP */}
            <div className="rounded-3xl overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7924.7372988753295!2d7.506386433862307!3d6.724793436841423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044c131a634b349%3A0xdfffeb4bdc1aa176!2sMaduka%20University!5e0!3m2!1sen!2sng!4v1777484068593!5m2!1sen!2sng"
                className="w-full h-full rounded-xl border"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* QUICK INFO */}
            <div className="bg-white p-6 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-[#062E70]">
                Admissions Support
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Need assistance with admissions, applications, or school
                information? Our support team is available during office hours.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#062E70]">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-600 mt-3">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How do I apply for admission?",
                a: "Visit the admissions page and complete the online application form.",
              },
              {
                q: "Do you offer boarding facilities?",
                a: "Yes, we provide secure and comfortable boarding facilities.",
              },
              {
                q: "What curriculum do you offer?",
                a: "We combine national and international educational standards.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>

                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Our School?</h2>

          <p className="text-blue-100 mb-6">
            Begin your child’s journey toward academic excellence today.
          </p>

          <a href="/admissions">
            <button className="bg-white text-blue-800 px-8 py-4 rounded-2xl font-bold hover:cursor-pointer hover:bg-gray-100 transition">
              Apply Now
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
