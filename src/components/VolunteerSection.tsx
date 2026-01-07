import React from 'react';
import { Heart, Users } from 'lucide-react';
import { Card } from './ui/Card';
export function VolunteerSection() {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-red-100 text-red-600 rounded-xl">
              <Heart size={28} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">
              Bénévolat & Engagement
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-l-4 border-l-red-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Mentor Code for Kids
                </h3>
                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                  2020 - Présent
                </span>
              </div>
              <p className="text-slate-600 mb-4">
                Animation d'ateliers d'initiation à la programmation pour des
                enfants de 8 à 12 ans. Enseignement de la logique algorithmique
                via Scratch et Python.
              </p>
              <div className="flex items-center text-sm text-slate-500">
                <Users size={16} className="mr-2" />
                Impact : +50 enfants formés
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-red-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Association Web Solidaire
                </h3>
                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                  2019 - 2021
                </span>
              </div>
              <p className="text-slate-600 mb-4">
                Création et maintenance bénévole de sites web pour des petites
                associations caritatives locales n'ayant pas de budget
                numérique.
              </p>
              <div className="flex items-center text-sm text-slate-500">
                <Users size={16} className="mr-2" />3 sites web réalisés
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
}