import React from 'react';
import { Button } from './ui/Button';
import { MessageCircle, ArrowRight, Download } from 'lucide-react';
export function Hero() {
  return <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
      backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)',
      backgroundSize: '32px 32px'
    }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
              Disponible pour de nouveaux projets
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
              Développeur Full Stack & <br className="hidden lg:block" />
              <span className="text-indigo-600">Créateur de Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Je transforme vos idées en expériences numériques performantes.
              Spécialisé dans la création d'interfaces modernes et
              d'applications web robustes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto" leftIcon={<MessageCircle size={20} />}>
                  Me contacter sur WhatsApp
                </Button>
              </a>

              <Button variant="outline" size="lg" className="w-full sm:w-auto" rightIcon={<ArrowRight size={20} />} onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Démarrer un projet
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-slate-500">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">5+</span>
                <span className="text-sm">Années d'expérience</span>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">50+</span>
                <span className="text-sm">Projets réalisés</span>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">100%</span>
                <span className="text-sm">Satisfaction client</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 bg-indigo-600 rounded-full opacity-10 blur-3xl transform translate-x-4 translate-y-4"></div>
              <div className="relative w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden bg-slate-200">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Portrait professionnel" className="w-full h-full object-cover" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-slate-100 hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Download className="text-green-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">
                      CV Disponible
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Télécharger
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}