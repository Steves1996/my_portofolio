import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { Card } from './ui/Card';
const experiences = [{
  id: 1,
  role: 'Développeur Senior Full Stack / Tech Lead',
  company: 'Proditech Digital',
  period: '2025 - Présent',
  description: "Direction technique de projets web/mobile complexes. Architecture de solutions scalables et encadrement d'une équipe de 4 développeurs juniors.",
  tags: ['React', 'Node.js', 'Nest js', 'Angular js','Coolify','Flutter','Team Lead']
}, {
  id: 2,
  role: 'Développeur Front-end',
  company: 'Creative Agency',
  period: '2019 - 2021',
  description: "Développement d'interfaces utilisateur réactives et accessibles pour des clients grands comptes. Optimisation des performances web.",
  tags: ['Vue.js', 'Sass', 'Animation', 'UI/UX']
}, {
  id: 3,
  role: 'Développeur Web Junior',
  company: 'StartUp Flow',
  period: '2018 - 2019',
  description: 'Participation au développement de la plateforme SaaS. Maintenance évolutive et correction de bugs.',
  tags: ['JavaScript', 'PHP', 'MySQL']
}];
export function ExperienceSection() {
  return <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Expérience Professionnelle
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mon parcours dans le développement web/mobile et les projets sur lesquels
            j'ai eu la chance de travailler.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => <div key={exp.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-sm transform -translate-x-[5px] md:-translate-x-1/2 mt-6 z-10 hidden md:block"></div>

                <div className="flex-1"></div>

                <div className="flex-1">
                  <Card className="p-6 hover:shadow-md transition-shadow duration-300 border-l-4 border-l-indigo-600 md:border-l-slate-200">
                    <div className="flex items-center gap-2 text-indigo-600 mb-2">
                      <Briefcase size={18} />
                      <span className="font-semibold">{exp.company}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {exp.role}
                    </h3>

                    <div className="flex items-center text-slate-500 text-sm mb-4">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>

                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">
                          {tag}
                        </span>)}
                    </div>
                  </Card>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}