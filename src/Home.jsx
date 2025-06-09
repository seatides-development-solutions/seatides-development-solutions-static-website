
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </script>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-gradient-to-b from-[#007fff] to-[#cfe8ff] text-white">
        <img src="/seatides-logo-icon.svg" alt="Seatides Logo" className="h-24 mb-4" />
        <h1 className="text-5xl font-bold text-white">Seatides Development Solutions</h1>
        <p className="text-xl mt-4 max-w-xl text-white">
          Custom software solutions for visionary businesses — from startups to enterprise.
        </p>
        <Button className="mt-6 bg-white text-[#007fff] hover:bg-gray-200">Get in Touch</Button>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-[#007fff]">Bespoke Development for Any Scale</h2>
        <p className="text-lg text-gray-700">
          Whether you’re a growing business with a unique product vision or an established enterprise like a national retailer or financial institution, Seatides delivers tailored software crafted to integrate seamlessly into your world. From prototypes to production, we build with your future in mind.
        </p>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#007fff]">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#007fff]">Product Development</h3>
              <p className="text-gray-700 text-sm">
                From the first sketch to the final release, we craft custom software products that reflect your brand and solve real-world problems.
              </p>
            </div>
          </Card>
          <Card>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#007fff]">Enterprise Integration</h3>
              <p className="text-gray-700 text-sm">
                Designed to work with major corporate systems — whether you're building for Spar, banks, logistics, or beyond.
              </p>
            </div>
          </Card>
          <Card>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#007fff]">Scalable Architecture</h3>
              <p className="text-gray-700 text-sm">
                While we're tech-agnostic here, we deliver backend and frontend systems that scale with confidence and clarity.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#007fff]">Welcome to Seatides</h2>
        <p className="text-lg text-gray-700">
          We’re here to build what you imagine. No generic tools. No cookie-cutter solutions. Just focused, intelligent software built around your specific goals.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-[#f0f8ff]">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#007fff]">Contact</h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="max-w-xl mx-auto bg-white p-6 rounded shadow"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#007fff] text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
        <p className="text-center text-sm mt-6 text-gray-500">
          You can also reach us at <a href="mailto:hello@seatides.dev" className="underline">hello@seatides.dev</a>
        </p>
      </section>
    </div>
  );
}
