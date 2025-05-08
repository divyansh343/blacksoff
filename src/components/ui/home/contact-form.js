"use client"

import { useState } from "react"
import { Container } from '../containers'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ fullName: "", email: "", subject: "", message: "" })
  }

  return (
    <section className="w-full bg-[#0067B1] text-white">
      <Container className="container mx-auto px-4 py-16 md:py-44">
        <div className="flex flex-col md:flex-row md:space-x-12 lg:space-x-24">
          {/* Contact Information */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-4xl font-medium mb-8">Get in touch</h2>
            <div className="w-12 h-1 bg-white mb-8"></div>

            <p className="mb-8">For general enquiries</p>

            <div className="space-y-6">
              <div>
                <p className="font-medium">Address :</p>
                <p>110, 16th Road, Chembur, Mumbai - 400071</p>
              </div>

              <div>
                <p className="font-medium">Phone :</p>
                <p>+91 22 25208822</p>
              </div>

              <div>
                <p className="font-medium">Email :</p>
                <a href='mailto:info@supremegroup.co.in' >info@supremegroup.co.in</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="w-full bg-transparent border-b border-white pb-2 outline-none placeholder-white placeholder-opacity-90"
                  required
                />
              </div>

              <div className="mb-8">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-mail"
                  className="w-full bg-transparent border-b border-white pb-2 outline-none placeholder-white placeholder-opacity-90"
                  required
                />
              </div>

              <div className="mb-8">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full bg-transparent border-b border-white pb-2 outline-none placeholder-white placeholder-opacity-90"
                  required
                />
              </div>

              <div className="mb-8">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-transparent border-b border-white pb-2 outline-none placeholder-white placeholder-opacity-90 resize-none"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-white text-black rounded-full px-8 py-2 font-medium hover:bg-blue-50 transition-colors duration-300"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}