import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Residential",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-gradient-to-br from-neutral-50 via-white to-neutral-100 min-h-screen overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <div className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-20 md:py-32 overflow-hidden">
        
        {/* Decorative Blur Elements */}
        <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center px-6">
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-400 font-light">
            Let's Collaborate
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-light tracking-tight">
            Get In <span className="font-medium italic">Touch</span>
          </h1>

          <p className="mt-6 text-neutral-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            Let's create thoughtful spaces together. Share your vision and
            we'll transform it into reality with meticulous attention to detail.
          </p>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          
          {/* ========== LEFT SIDE ========== */}
          <div className="space-y-12">
            
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-neutral-900 mb-6">
                Let's Start a <span className="italic font-medium">Conversation</span>
              </h2>

              <p className="text-neutral-600 leading-relaxed text-base sm:text-lg">
                Whether you're planning a new build, renovation, or exploring
                ideas — we'd love to hear from you. Every great project starts
                with a simple conversation.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card */}
              {[
                { title: "Studio", value: "Ahmedabad, Gujarat", sub: "India" },
                { title: "Phone", value: "+91 81288 30841", sub: "Mon – Fri" },
                { title: "Email", value: "architectsds8@gmail.com", sub: "Quick response" },
                { title: "Hours", value: "10:00 AM – 6:00 PM", sub: "Monday to Friday" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition border border-neutral-100"
                >
                  <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
                    {item.title}
                  </p>
                  <p className="text-neutral-900 font-medium">
                    {item.value}
                  </p>
                  <p className="text-neutral-600 text-sm">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-neutral-200">
              <p className="text-sm font-medium text-neutral-900 mb-4">
                Follow Our Work
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/dsarchitects97?igsh=MWdsaTB2Y3V2ZWd5NA=="
                  className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition"
                >
                  <span className="text-white text-sm">Ig</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ar-deep-suthar-b09a12146?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition"
                >
                  <span className="text-white text-sm">In</span>
                </a>
                <a
                  href="https://www.facebook.com/share/16A8QLCnH8/"
                  className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition"
                >
                  <span className="text-white text-sm">Fb</span>
                </a>
              </div>
            </div>
          </div>

          {/* ========== RIGHT SIDE FORM ========== */}
          <div className="h-fit lg:sticky lg:top-10">
            <div className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl shadow-xl border border-neutral-100">
              
              <h2 className="text-2xl md:text-3xl font-light text-neutral-900 mb-6">
                Send a <span className="italic font-medium">Message</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-neutral-200 px-4 py-3 rounded-xl focus:outline-none focus:border-neutral-900 transition"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-neutral-200 px-4 py-3 rounded-xl focus:outline-none focus:border-neutral-900 transition"
                />

                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full border-2 border-neutral-200 px-4 py-3 rounded-xl focus:outline-none focus:border-neutral-900 transition"
                >
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Interior Design</option>
                  <option>Urban Planning</option>
                  <option>Consultation</option>
                </select>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-neutral-200 px-4 py-3 rounded-xl focus:outline-none focus:border-neutral-900 transition resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-neutral-900 text-white py-3.5 rounded-xl hover:bg-neutral-800 transition font-medium"
                >
                  Submit Request
                </button>

                <p className="text-xs text-neutral-500 text-center">
                  We’ll respond within 24 hours.
                </p>

              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ================= STATS SECTION ================= */}
      <div className="bg-neutral-900 text-white py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "50+", label: "Projects Completed" },
              { num: "98%", label: "Client Satisfaction" },
              { num: "7+", label: "Years Experience" },
              { num: "24h", label: "Response Time" },
            ].map((item, index) => (
              <div key={index}>
                <p className="text-3xl sm:text-4xl md:text-5xl font-light mb-2">
                  {item.num}
                </p>
                <p className="text-neutral-400 text-xs sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;