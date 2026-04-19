"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left px-5 py-4 hover:bg-gray-50 transition-colors focus:outline-none"
      >
        <span className="text-base font-bold text-[var(--color-brand-dark)] pr-3">{question}</span>
        <svg
          className={`w-5 h-5 shrink-0 text-[var(--color-brand-blue)] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`px-5 text-gray-600 leading-relaxed overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm">{answer}</p>
      </div>
    </div>
  );
}

export default function Contact() {
  const faqs = [
    {
      question: "How much do your cleaning services cost?",
      answer: "Our pricing depends on the size of your home, the type of service you choose, and the frequency. Contact us for a free quote and we'll tailor a plan to your needs and budget.",
    },
    {
      question: "Do I need to provide cleaning supplies?",
      answer: "No, you don't need to worry about a thing! Our professional cleaners come fully equipped with high-quality, industry-standard cleaning products and tools.",
    },
    {
      question: "How far in advance do I need to book?",
      answer: "We recommend booking at least 3–5 days in advance to secure your preferred date and time. However, we do our best to accommodate last-minute requests whenever possible.",
    },
    {
      question: "What if I'm not satisfied with the cleaning?",
      answer: "Your satisfaction is our top priority. If you're not completely happy with any aspect of our service, let us know within 24 hours and we'll come back to re-clean the areas that fell short at no additional cost.",
    },
    {
      question: "Do I need to be home during the cleaning?",
      answer: "No, you don't have to be home. Many of our clients prefer to provide a spare key or use a lockbox so our team can clean while they're away. Just let us know your preference when scheduling.",
    },
    {
      question: "How long does a typical cleaning take?",
      answer: "A standard home cleaning usually takes 2–4 hours depending on the size and condition of your home. Deep cleanings and move-in/move-out services may take longer.",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-navbar-bg)]">
      <Navbar />

      <div className="w-full bg-banner-bg py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3">
            Get in Touch
          </h1>
          <p className="text-base md:text-xl text-white/90">
            Ready to experience exceptional cleaning? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">

          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-[var(--color-brand-dark)] mb-4">
                Contact Information
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[var(--color-brand-blue)] mb-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-[var(--color-brand-dark)] mb-0.5">Phone</h3>
                  <a href="tel:+15551234567" className="text-xs text-gray-600 hover:text-[var(--color-brand-blue)] transition-colors">+1 (555) 123-4567</a>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[var(--color-brand-blue)] mb-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-[var(--color-brand-dark)] mb-0.5">Email</h3>
                  <a href="mailto:hello@ortegascleaning.com" className="text-xs text-gray-600 hover:text-[var(--color-brand-blue)] transition-colors">hello@ortegascleaning.com</a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-[var(--color-brand-dark)] mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-xl md:text-2xl font-extrabold text-[var(--color-brand-dark)] mb-4">
              Request a Quote
            </h2>
            <form className="bg-white p-7 md:p-9 rounded-2xl shadow-sm border border-gray-100 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-[var(--color-brand-dark)] mb-1.5">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] focus:border-transparent transition-all text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-[var(--color-brand-dark)] mb-1.5">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] focus:border-transparent transition-all text-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-bold text-[var(--color-brand-dark)] mb-1.5">Service Type *</label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] focus:border-transparent transition-all appearance-none bg-white text-sm"
                >
                  <option value="" disabled>Select a cleaning service</option>
                  <option value="standard">Standard House Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="move">Move-in / Move-out</option>
                  <option value="office">Office Cleaning</option>
                  <option value="custom">Custom Request</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-[var(--color-brand-dark)] mb-1.5">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] focus:border-transparent transition-all resize-none text-sm"
                  placeholder="Tell us about your cleaning needs..."
                />
              </div>
              <button
                type="submit"
                className="w-full text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-brand-blue)] bg-banner-bg"
              >
                Send Message
              </button>
              <p className="text-xs text-gray-400 text-right">* Required fields</p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
