import { useState } from "react";
import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Swal from "sweetalert2";
import { createApplication } from "../api";
import { sub } from "framer-motion/client";

function Admissions() {
  const steps = ["Student Info", "Academic Info", "Parent Info", "Review"];
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    dob: "",
    classApplied: "",
    examPreference: "",
    parentName: "",
    parentPhone: "",
    paymentProof: null,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    if (file && !file.type.startsWith("image/")) {
      setForm((prev) => ({ ...prev, paymentProof: null }));
      setErrors((prev) => ({
        ...prev,
        paymentProof: "Please upload a valid image file.",
      }));
      return;
    }

    setForm((prev) => ({ ...prev, paymentProof: file }));
    setErrors((prev) => ({ ...prev, paymentProof: "" }));
  };

  const isFieldComplete = (field) =>
    field === "paymentProof" ? !!form.paymentProof : !!form[field]?.trim();

  const validateField = (fieldName) => {
    if (!isFieldComplete(fieldName)) {
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
    ["fullName", "email", "phone", "gender", "dob"],
    ["address", "classApplied", "examPreference"],
    ["parentName", "parentPhone"],
    ["paymentProof"],
  ];

  const fieldLabels = {
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    address: "Home Address",
    gender: "Gender",
    dob: "Date of Birth",
    classApplied: "Class Applying For",
    examPreference: "Exam Preference",
    parentName: "Parent Name",
    parentPhone: "Parent Phone Number",
    paymentProof: "Proof of Payment",
  };

  const validateStep = () => {
    const missingFields = requiredFieldsByStep[step].filter(
      (field) => !isFieldComplete(field),
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
    requiredFieldsByStep[step].every((field) => isFieldComplete(field));

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFinalSubmit = async () => {
    setSubmitting(true);
    try {
      const result = await Swal.fire({
        title: "Confirm Submission",
        text: "Are you sure you want to submit your application? Please review your details before confirming.",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#047b2c",
        cancelButtonColor: "#e64c13",
        confirmButtonText: "Yes, Submit",
        cancelButtonText: "Cancel",
      });

      if (result.isConfirmed) {
        let paymentProofUrl = "";
        if (form.paymentProof) {
          const formData = new FormData();
          formData.append("file", form.paymentProof);
          formData.append("upload_preset", "ml_default");
          const cloudinaryRes = await fetch(
            import.meta.env.VITE_APP_CLOUDINARY_UPLOAD_URL,
            {
              method: "POST",
              body: formData,
            },
          );
          const cloudinaryData = await cloudinaryRes.json();
          paymentProofUrl = cloudinaryData.secure_url;
        }
        const response = await createApplication({
          ...form,
          paymentProof: paymentProofUrl,
        });
        console.log(response);
        if (response.data.success) {
          setSubmitted(true);
          Swal.fire({
            title: "Success!",
            text: "Your application has been submitted successfully!",
            icon: "success",
          });
          setForm({
            fullName: "",
            email: "",
            phone: "",
            address: "",
            gender: "",
            dob: "",
            classApplied: "",
            examPreference: "",
            parentName: "",
            parentPhone: "",
            paymentProof: null,
          });
        } else {
          console.log(response);
          Swal.fire({
            icon: "error",
            title: "Submission Failed",
            text: `${response.message || "An error occurred while submitting your application"}`,
          });
        }
        setErrors({});
        setStep(0);
      } else {
        setSubmitted(false);
      }
    } catch (error) {
      console.log( error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: `${error.response.data.message || "An error occurred while submitting your application"}.`,
      });
      setSubmitting(false);
    }
    
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
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#062E70] mb-6 text-center">
            Admission Requirements
          </h2>

          <div className="list-disc pl-6 space-y-2 text-gray-600 text-center ">
            <p>
              Applications are open for suitably qualified candidates for
              admission into <b>JS 1, JS 2, and SS 1</b> for 2026/2027 Academic
              Session.
            </p>
            <p>
              The admission form is <b>Ten thousand naira (N10,000.00)</b> only,
              payable into:{" "}
            </p>
            <p>
              <b>SAMUEL MADUKA ONYISHI FOUNDATION </b>
            </p>
            <p>
              <b>(MUC Main Account) 1012682217 Keystone Bank</b>
            </p>
            <p>Entrance Exam holds on <b>Saturday May 23rd 2026</b> at 10:00 AM. </p>
              <p className="text-gray-600 mb-8">A virtual exam option is available.</p>
              <h2 className="text-3xl font-bold text-[#062E70] mb-8 text-center">
                FILL THE FORM BELOW TO GET STARTED.
              </h2>
          </div>
        </div>
      </section>

      {/* FORM */}
      <div className="max-w-4xl mx-auto px-2 mb-5">
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
                  placeholder="Phone Number (whatsapp preferred)"
                  value={form.phone}
                  className={`w-full border p-3 rounded-xl ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                  onChange={handleChange}
                  onBlur={(e) => validateField(e.target.name)}
                  required
                />
                {errors.phone && (
                  <p className="text-sm text-red-600">{errors.phone}</p>
                )}

                <select
                  name="gender"
                  value={form.gender}
                  className={`w-full border p-3 rounded-xl ${errors.gender ? "border-red-500" : "border-gray-300"}`}
                  onChange={handleChange}
                  onBlur={(e) => validateField(e.target.name)}
                  required
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                {errors.gender && (
                  <p className="text-sm text-red-600">{errors.gender}</p>
                )}
                <input
                  name="dob"
                  type="date"
                  placeholder="Date of Birth"
                  value={form.dob}
                  className={`w-full border p-3 rounded-xl ${errors.dob ? "border-red-500" : "border-gray-300"}`}
                  onChange={handleChange}
                  onBlur={(e) => validateField(e.target.name)}
                  required
                />
                {errors.dob && (
                  <p className="text-sm text-red-600">{errors.dob}</p>
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

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <select
                      name="classApplied"
                      value={form.classApplied}
                      className={`w-full border p-3 rounded-xl ${errors.classApplied ? "border-red-500" : "border-gray-300"}`}
                      onChange={handleChange}
                      onBlur={(e) => validateField(e.target.name)}
                      required
                    >
                      <option value="">Select Class</option>
                      <option>JSS1</option>
                      <option>JSS2</option>
                      <option>SSS1</option>
                    </select>
                    {errors.classApplied && (
                      <p className="text-sm text-red-600">
                        {errors.classApplied}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <select
                      name="examPreference"
                      value={form.examPreference}
                      className={`w-full border p-3 rounded-xl ${errors.examPreference ? "border-red-500" : "border-gray-300"}`}
                      onChange={handleChange}
                      onBlur={(e) => validateField(e.target.name)}
                      required
                    >
                      <option value="">Select Exam Preference</option>
                      <option> Physical</option>
                      <option> Virtual</option>
                    </select>
                    {errors.examPreference && (
                      <p className="text-sm text-red-600">
                        {errors.examPreference}
                      </p>
                    )}
                  </div>
                </div>
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
                    <b>Gender:</b> {form.gender}
                  </p>
                  <p>
                    <b>Date of Birth:</b> {form.dob}
                  </p>
                  <p>
                    <b>Class:</b> {form.classApplied}
                  </p>
                  <p>
                    <b>Exam Preference:</b> {form.examPreference}
                  </p>
                  <p>
                    <b>Parent:</b> {form.parentName}
                  </p>
                  <p>
                    <b>Parent Phone:</b> {form.parentPhone}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-dashed border-gray-300">
                  <label className="block text-sm font-medium text-gray-700">
                    Upload Proof of Payment
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="mt-3 w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#062E70] file:text-white hover:file:bg-[#044a49]"
                  />
                  {errors.paymentProof && (
                    <p className="text-sm text-red-600 mt-2">
                      {errors.paymentProof}
                    </p>
                  )}
                  {form.paymentProof && (
                    <p className="text-sm text-gray-600 mt-2">
                      Selected file: {form.paymentProof.name}
                    </p>
                  )}
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
                  disabled={submitted || !form.paymentProof}
                  className={`ml-auto px-6 py-3 rounded-xl text-white ${
                    submitted || !form.paymentProof
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {" "}
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <LoaderCircle className="animate-spin" size={18} />{" "}
                      Submitting...
                    </span>
                  ) : (
                    "Submit Application"
                  )}
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
