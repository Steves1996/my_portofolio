import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { Card } from './ui/Card';
const education = [{
  id: 1,
  degree: 'Master en Ingénierie Informatique',
  school: 'École Supérieure du Numérique',
  year: '2018',
  description: 'Spécialisation en architecture logicielle et développement web avancé.'
}, {
  id: 2,
  degree: 'Licence Informatique',
  school: 'Université des Sciences',
  year: '2016',
  description: "Fondamentaux de l'informatique, algorithmique et bases de données."
}, {
  id: 3,
  degree: 'Baccalauréat Scientifique',
  school: 'Lycée Victor Hugo',
  year: '2013',
  description: 'Option Mathématiques, Mention Bien.'
}];
export function EducationSection() {
  return <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/3 sticky top-24">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-xl text-indigo-600 mb-6">
              <GraduationCap size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Parcours Scolaire
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Une formation solide combinant théorie académique et projets
              pratiques pour maîtriser les enjeux du numérique.
            </p>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <Award className="text-yellow-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Certifications</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    AWS Certified Developer
                  </p>
                  <p className="text-sm text-slate-600">
                    Google UX Design Certificate
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 grid gap-6">
            {education.map(edu => <Card key={edu.id} className="p-6 transition-all hover:border-indigo-200 hover:shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {edu.degree}
                    </h3>
                    <p className="text-indigo-600 font-medium">{edu.school}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium whitespace-nowrap">
                    {edu.year}
                  </span>
                </div>
                <p className="text-slate-600">{edu.description}</p>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
}