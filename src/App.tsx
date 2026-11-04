/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ContactStrip } from './components/ContactStrip';
import { AboutUs } from './components/AboutUs';
import { ProgramsShowcase } from './components/ProgramsShowcase';
import { AcademicExperience } from './components/AcademicExperience';
import { MeetOurFaculty } from './components/MeetOurFaculty';
import { FacilitiesShowcase } from './components/FacilitiesShowcase';
import { SchoolLife } from './components/SchoolLife';
import { ShineBrandExperience } from './components/ShineBrandExperience';
import { TestimonialsEvents } from './components/TestimonialsEvents';
import { UniformGuide } from './components/UniformGuide';
import { AdmissionsProcess } from './components/AdmissionsProcess';
import { Admissions } from './components/Admissions';
import { AdmissionsFaq } from './components/AdmissionsFaq';
import { Gallery } from './components/Gallery';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { ScrollProgress } from './components/ScrollProgress';
import { useSectionRevealObserver } from './components/ScrollReveal';
import { MessageCircle } from 'lucide-react';
import { SCHOOL_INFO } from './data/schoolData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [showQuickContact, setShowQuickContact] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{
    url: string;
    title: string;
    caption: string;
  } | null>(null);


  // Cinematic IntersectionObserver section scroll reveal
  useSectionRevealObserver();

  // Night Sky Theme (Forest-green nocturnal celestial theme active all through)
  const [isNightMode, setIsNightMode] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('mas_night_mode');
      // Always maintain night sky theme by default unless explicitly overridden
      if (stored === null || stored === 'false') {
        localStorage.setItem('mas_night_mode', 'true');
        return true;
      }
      return stored === 'true';
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (isNightMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [isNightMode]);

  // The floating WhatsApp action stays out of the hero (which already has its
  // own admissions call to action) and appears once the visitor scrolls in.
  useEffect(() => {
    const handleQuickContact = () => {
      setShowQuickContact(window.scrollY > window.innerHeight * 0.7);
    };
    handleQuickContact();
    window.addEventListener('scroll', handleQuickContact, { passive: true });
    return () => window.removeEventListener('scroll', handleQuickContact);
  }, []);

  const toggleNightMode = () => {
    setIsNightMode((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('mas_night_mode', String(next));
      } catch (err) {
        console.error('Error saving night mode:', err);
      }
      return next;
    });
  };

  // Track active section for top bar indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'about',
        'programs',
        'academics',
        'faculty',
        'facilities',
        'school-life',
        'community',
        'uniforms',
        'admissions',
        'faq',
        'gallery',
        'contact'
      ];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToAdmissions = () => {
    const el = document.getElementById('admissions');
    if (el) {
      el.classList.add('reveal-visible');
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const input = document.getElementById('parentName');
        if (input) {
          input.focus();
        }
      }, 600);
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-sans selection:bg-[#087A50] selection:text-white transition-colors duration-400 ${
        isNightMode ? 'bg-[#041c12] text-[#F2F3F2]' : 'bg-white text-[#252B28]'
      }`}
    >
      {/* Slim Emerald-Green Scroll Progress Indicator at the very top */}
      <ScrollProgress />

      {/* Sticky Navigation with Top Utility Bar & Subtle Shine Mode Toggle */}
      <Navbar
        onOpenEnquiry={handleScrollToAdmissions}
        activeSection={activeSection}
        isNightMode={isNightMode}
        onToggleNightMode={toggleNightMode}
      />

      <main className="flex-grow">
        {/* Full-Screen Cinematic Hero with Docked Value Highlights */}
        <Hero onOpenEnquiry={handleScrollToAdmissions} />

        {/* Contact band: phone, WhatsApp and campus details near the top */}
        <ContactStrip />

        {/* About The School: "A Place to Grow. A Place to Shine." */}
        <AboutUs />

        {/* Academic Levels & Curriculum: Structured Pathways for Every Stage */}
        <ProgramsShowcase onOpenEnquiry={handleScrollToAdmissions} />

        {/* Academic Experience & Pedagogical Core */}
        <AcademicExperience onOpenEnquiry={handleScrollToAdmissions} />

        {/* Meet Our Faculty: Profiles & Credentials Modal */}
        <MeetOurFaculty onOpenEnquiry={handleScrollToAdmissions} />

        {/* School Facilities & Serene Kapsoya Campus */}
        <FacilitiesShowcase onSelectImage={setLightboxImage} />

        {/* School Life: Documentary Photography, Co-Curricular & Dynamic Grid */}
        <SchoolLife onSelectImage={setLightboxImage} />

        {/* Signature Brand Experience: "SHINE EVERY DAY." */}
        <ShineBrandExperience onOpenEnquiry={handleScrollToAdmissions} />

        {/* Community Voice (Parent Testimonials) & School Calendar */}
        <TestimonialsEvents onOpenEnquiry={handleScrollToAdmissions} />

        {/* Uniform Guide: Primary & Junior School Dress Code and P.E. Kit */}
        <UniformGuide onSelectImage={setLightboxImage} />

        {/* 3-Step Admissions Enrollment Flow */}
        <AdmissionsProcess onOpenEnquiry={handleScrollToAdmissions} />

        {/* Admissions Form & Validation */}
        <Admissions />

        {/* Admissions FAQ Accordion */}
        <AdmissionsFaq onOpenEnquiry={handleScrollToAdmissions} />

        {/* Visual Gallery with Category Filtering */}
        <Gallery onSelectImage={setLightboxImage} />

        {/* Location & Contact: Kapsoya Estate & Silas Police Station */}
        <LocationContact onOpenEnquiry={handleScrollToAdmissions} />
      </main>

      {/* Forest Green Footer with Full Navigation Mirror */}
      <Footer />

      {/* Lightbox Modal for High-Fidelity Photos */}
      <LightboxModal
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />


      {/* Floating WhatsApp Quick Action Button (appears after the hero) */}
      {showQuickContact && (
        <aside aria-label="WhatsApp quick contact">
          <a
            href={SCHOOL_INFO.contactPlaceholders.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp with Admissions: 0768 358 487"
            aria-label="WhatsApp 0768 358 487 — chat with admissions"
            className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#075E54] hover:bg-[#054d45] text-white shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/30"
          >
            <MessageCircle className="h-6 w-6 fill-white text-[#25D366]" />
          </a>
        </aside>
      )}
    </div>
  );
}
