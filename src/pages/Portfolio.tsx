import React from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { ExperienceSection } from '../components/ExperienceSection';
import { EducationSection } from '../components/EducationSection';
import { ToolsSection } from '../components/ToolsSection';
import { SkillsSection } from '../components/SkillsSection';
import { HobbiesSection } from '../components/HobbiesSection';
import { VolunteerSection } from '../components/VolunteerSection';
import { ContactForm } from '../components/ContactForm';
export function Portfolio() {
  return <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navigation />

      <main>
        <Hero />
        <ExperienceSection />
        <ToolsSection />
        <EducationSection />
        <SkillsSection />
        <VolunteerSection />
        <HobbiesSection />
        <ContactForm />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Mon Portfolio Professionnel. Tous
            droits réservés.
          </p>
          <p className="text-xs mt-2 text-slate-600">
            Fait avec passion avec React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>;
}