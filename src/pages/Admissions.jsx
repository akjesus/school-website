import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Swal from "sweetalert2";

function Admissions() {
  const steps = ["Student Info", "Academic Info", "Parent Info", "Review"];
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    classApplyingFor: "",
    parentName: "",
    parentPhone: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => {
    if (!validateStep()) return;
    setStep((prev) => prev + 1);
  };
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateField = (fieldName) => {
    if (!form[fieldName]?.trim()) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: `${fieldLabels[fieldName]} is required.`,
      }));
      return false;
    }

    setErrors((prev) => ({ ...prev, [fieldName]: "" }));
    return true;
  };

  const requiredFieldsByStep = [
    ["fullName", "email", "phone"],
    ["address", "classApplyingFor"],
    ["parentName", "parentPhone"],
    [],
  ];

  const fieldLabels = {
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    address: "Home Address",
    classApplyingFor: "Class Applying For",
    parentName: "Parent Name",
    parentPhone: "Parent Phone Number",
  };

  const validateStep = () => {
    const missingFields = requiredFieldsByStep[step].filter(
      (field) => !form[field]?.trim(),
    );

    if (missingFields.length > 0) {
      const newErrors = missingFields.reduce(
        (acc, field) => ({
          ...acc,
          [field]: `${fieldLabels[field]} is required.`,
        }),
        {},
      );
      setErrors((prev) => ({ ...prev, ...newErrors }));

      Swal.fire({
        icon: "error",
        title: "Complete this step",
        text: `Please fill in ${missingFields
          .map((field) => fieldLabels[field])
          .join(", ")} before proceeding.`,
      });
      return false;
    }

    return true;
  };

  const isStepComplete = () =>
    requiredFieldsByStep[step].every((field) => form[field]?.trim());

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFinalSubmit = () => {
    Swal.fire({
      title: "Confirm Submission",
      text: "Are you sure you want to submit your application? Please review your details before confirming.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#047b2c",
      cancelButtonColor: "#e64c13",
      confirmButtonText: "Yes, Submit",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        setSubmitted(true);
        Swal.fire({
          title: "Success!",
          text: "Your application has been submitted successfully!",
          icon: "success",
        }).then(() => {
          setForm({
            fullName: "",
            email: "",
            phone: "",
            address: "",
            classApplyingFor: "",
            parentName: "",
            parentPhone: "",
          });
          setErrors({});
          setStep(0);
          setSubmitted(false);
        });
      }
    });
  };
  return (
    <>
      <Navbar />

      {/* HERO */}
      <PageHero
        title="Admissions"
        subtitle="Apply now to join our school community and gain access to quality education and leadership development."
      />

      {/* REQUIREMENTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#062E70] mb-6 text-center">
            Admission Requirements
          </h2>

          <div className="list-disc pl-6 space-y-2 text-gray-600 text-center ">
            <p>Completed application form</p>
            <p>Recent passport photograph</p>
            <p>Previous school report</p>
            <p>Birth certificate</p>
            <p>Entrance examination (for new students)</p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <div className="max-w-4xl mx-auto px-6 mb-10">
        <div className="flex justify-between text-sm mb-2">
          {steps.map((s, i) => (
            <span
              key={i}
              className={`${
                i <= step ? "text-[#062E70] font-semibold" : "text-gray-400"
              }`}
            >
              {s}
            </span>
          ))}
        </div>

        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="bg-[#062E70] h-2 rounded-full transition-all duration-300"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#062E70] mb-8 text-center">
            Application Form
          </h2>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-3xl shadow-md max-w-4xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* STUDENT INFO */}
            {step === 0 && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold">Student Information</h3>

                <input
                  name="fullName"
                  placeholder="Full Name"
                  value={form.fullName}
                  className={`w-full border p-3 rounded-xl ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
                  onChange={handleChange}
                  onBlur={(e) => validateField(e.target.name)}
                  required
                />
                {errors.fullName && (
                  <p className="text-sm text-red-600">{errors.fullName}</p>
                )}

                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  className={`w-full border p-3 rounded-xl ${errors.email ? "border-red-500" : "border-gray-300"}`}
                  onChange={handleChange}
                  onBlur={(e) => validateField(e.target.name)}
                  required
                />
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email}</p>
                )}

                <input
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  className={`w-full border p-3 rounded-xl ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                  onChange={handleChange}
                  onBlur={(e) => validateField(e.target.name)}
                  required
                />
                {errors.phone && (
                  <p className="text-sm text-red-600">{errors.phone}</p>
                )}
              </motion.div>
            )}
            {/* CLASS */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold">Academic Information</h3>

                <input
                  name="address"
                  placeholder="Home Address"
                  value={form.address}
                  className={`w-full border p-3 rounded-xl ${errors.address ? "border-red-500" : "border-gray-300"}`}
                  onChange={handleChange}
                  onBlur={(e) => validateField(e.target.name)}
                  required
                />
                {errors.address && (
                  <p className="text-sm text-red-600">{errors.address}</p>
                )}

                <select
                  name="classApplyingFor"
                  value={form.classApplyingFor}
                  className={`w-full border p-3 rounded-xl ${errors.classApplyingFor ? "border-red-500" : "border-gray-300"}`}
                  onChange={handleChange}
                  onBlur={(e) => validateField(e.target.name)}
                  required
                >
                  <option value="">Select Class</option>
                  <option>JSS1</option>
                  <option>JSS2</option>
                  <option>JSS3</option>
                  <option>SSS1 Science</option>
                  <option>SSS1 Arts</option>
                  <option>SSS1 Commercial</option>
                </select>
                {errors.classApplyingFor && (
                  <p className="text-sm text-red-600">
                    {errors.classApplyingFor}
                  </p>
                )}
              </motion.div>
            )}

            {/* PARENT INFO */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold">Parent / Guardian Info</h3>

                <input
                  name="parentName"
                  placeholder="Parent Name"
                  value={form.parentName}
                  className={`w-full border p-3 rounded-xl ${errors.parentName ? "border-red-500" : "border-gray-300"}`}
                  onChange={handleChange}
                  onBlur={(e) => validateField(e.target.name)}
                  required
                />
                {errors.parentName && (
                  <p className="text-sm text-red-600">{errors.parentName}</p>
                )}

                <input
                  name="parentPhone"
                  placeholder="Parent Phone Number"
                  value={form.parentPhone}
                  className={`w-full border p-3 rounded-xl ${errors.parentPhone ? "border-red-500" : "border-gray-300"}`}
                  onChange={handleChange}
                  onBlur={(e) => validateField(e.target.name)}
                  required
                />
                {errors.parentPhone && (
                  <p className="text-sm text-red-600">{errors.parentPhone}</p>
                )}
              </motion.div>
            )}
            {step === 3 && (
              <div className="space-y-3">
                <h3 className="text-xl font-bold">Review Your Details</h3>

                <div className="bg-gray-50 p-4 rounded-xl">
                  <p>
                    <b>Name:</b> {form.fullName}
                  </p>
                  <p>
                    <b>Email:</b> {form.email}
                  </p>
                  <p>
                    <b>Phone:</b> {form.phone}
                  </p>
                  <p>
                    <b>Class:</b> {form.classApplyingFor}
                  </p>
                  <p>
                    <b>Parent:</b> {form.parentName}
                  </p>
                </div>
              </div>
            )}
            <div className="flex justify-between pt-6">
              {step > 0 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 bg-gray-200 rounded-xl"
                >
                  Back
                </button>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepComplete()}
                  className={`ml-auto px-6 py-3 rounded-xl text-white ${
                    isStepComplete()
                      ? "bg-[#062E70] hover:bg-blue-800"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleFinalSubmit}
                  disabled={submitted}
                  className={`ml-auto px-6 py-3 rounded-xl text-white ${
                    submitted
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {submitted ? "Submitted..." : "Submit Application"}
                </button>
              )}
            </div>
          </motion.form>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-800 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Need Help With Admission?</h2>

        <p className="text-blue-100 mb-6">
          Contact our admissions office for assistance.
        </p>

        <a href="/contact">
          <button className="bg-white text-blue-800 px-8 py-4 rounded-2xl font-bold hover:cursor-pointer hover:bg-gray-100 transition">
            Contact Us
          </button>
        </a>
      </section>

      <Footer />
    </>
  );
}

export default Admissions;
