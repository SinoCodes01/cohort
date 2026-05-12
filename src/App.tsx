import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CommunitiesPreview from "./components/CommunitiesPreview";
import EventsSection from "./components/EventsSection";
import MessagingSection from "./components/MessagingSection";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cohort-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CommunitiesPreview />
        <EventsSection />
        <MessagingSection />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}