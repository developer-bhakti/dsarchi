import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Residential',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  return (
    <section className="bg-gradient-to-br from-neutral-50 via-white to-neutral-100 min-h-screen">
      {/* Hero Header with Gradient */}
      <div className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-32 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 text-center px-6">
          <div className="inline-block mb-4">
            <span className="text-xs tracking-[0.3em] uppercase text-neutral-400 font-light">
              Let's Collaborate
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            Get In <span className="font-medium italic">Touch</span>
          </h1>
          <p className="mt-6 text-neutral-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Let's create thoughtful spaces together. Share your vision and we'll 
            transform it into reality with meticulous attention to detail.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column - Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-6">
                Let's Start a <span className="italic font-medium">Conversation</span>
              </h2>
              <p className="text-neutral-600 leading-relaxed text-lg">
                Whether you're planning a new build, renovation, or just exploring 
                ideas — we'd love to hear from you. Every great project starts with 
                a simple conversation.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Address Card */}
              <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-neutral-300">
                <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Studio</p>
                <p className="text-neutral-900 font-medium">Ahmedabad, Gujarat
</p>
                <p className="text-neutral-600 text-sm">India</p>
              </div>

              {/* Phone Card */}
              <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-neutral-300">
                <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Phone</p>
                <p className="text-neutral-900 font-medium">+91 81288 30841</p>
                <p className="text-neutral-600 text-sm">Mon – Fri</p>
              </div>

              {/* Email Card */}
              <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-neutral-300">
                <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Email</p>
                <p className="text-neutral-900 font-medium">architectsds8@gmail.com</p>
                <p className="text-neutral-600 text-sm">Quick response</p>
              </div>

              {/* Hours Card */}
              <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-neutral-300">
                <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Hours</p>
                <p className="text-neutral-900 font-medium">10:00 AM – 6:00 PM</p>
                <p className="text-neutral-600 text-sm">Monday to Friday</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-neutral-200">
              <p className="text-sm font-medium text-neutral-900 mb-4">Follow Our Work</p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/dsarchitects97?igsh=MWdsaTB2Y3V2ZWd5NA==" className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition-colors">
                  <span className="text-white text-sm font-medium">Ig</span>
                </a>
                <a href="https://www.linkedin.com/in/ar-deep-suthar-b09a12146?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition-colors">
                  <span className="text-white text-sm font-medium">In</span>
                </a>
                <a href="https://www.facebook.com/share/16A8QLCnH8/" className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition-colors">
                  <span className="text-white text-sm font-medium">Fb</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Form */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-neutral-100">
              <div className="mb-8">
                <h2 className="text-3xl font-light text-neutral-900 mb-3">
                  Send a <span className="italic font-medium">Message</span>
                </h2>
                <p className="text-neutral-600 text-sm">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="group">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full border-2 border-neutral-200 px-4 py-3.5 rounded-xl focus:outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 transition-all"
                  />
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full border-2 border-neutral-200 px-4 py-3.5 rounded-xl focus:outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 transition-all"
                  />
                </div>

                {/* Project Type */}
                <div className="group">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Project Type *
                  </label>
                  <div className="relative">
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full border-2 border-neutral-200 px-4 py-3.5 rounded-xl focus:outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 transition-all appearance-none bg-white cursor-pointer"
                    >
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Interior Design</option>
                      <option>Urban Planning</option>
                      <option>Consultation</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us about your project vision, timeline, and any specific requirements..."
                    required
                    className="w-full border-2 border-neutral-200 px-4 py-3.5 rounded-xl focus:outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full bg-neutral-900 text-white py-4 rounded-xl hover:bg-neutral-800 transition-all duration-300 font-medium text-base shadow-lg hover:shadow-xl relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Submit Request
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>

                <p className="text-xs text-neutral-500 text-center mt-4">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-neutral-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-light mb-2">150+</p>
              <p className="text-neutral-400 text-sm">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-light mb-2">98%</p>
              <p className="text-neutral-400 text-sm">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-light mb-2">12+</p>
              <p className="text-neutral-400 text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-light mb-2">24h</p>
              <p className="text-neutral-400 text-sm">Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact