
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// ... [SNIPPED FOR BREVITY] ...

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
      {/* Other sections follow... */}
    </div>
  );
}
