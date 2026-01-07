import React from 'react';
const skills = [{
  name: 'JavaScript / TypeScript',
  level: 95,
  color: 'bg-yellow-400'
}, {
  name: 'React & Next.js',
  level: 90,
  color: 'bg-cyan-400'
}, {
  name: 'Node.js & Express',
  level: 85,
  color: 'bg-green-500'
}, {
  name: 'HTML5 & CSS3 / Tailwind',
  level: 95,
  color: 'bg-orange-500'
}, {
  name: 'Python / Django',
  level: 75,
  color: 'bg-blue-500'
}, {
  name: 'SQL / NoSQL',
  level: 80,
  color: 'bg-purple-500'
}];
export function SkillsSection() {
  return <section id="skills" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Compétences Techniques
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Maîtrise approfondie des technologies web modernes. Je m'efforce
              de rester à jour avec les dernières évolutions pour proposer des
              solutions pérennes et performantes.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                <div className="text-3xl font-bold text-indigo-400 mb-1">
                  Frontend
                </div>
                <p className="text-sm text-slate-400">
                  Interfaces réactives et UX soignée
                </p>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                <div className="text-3xl font-bold text-emerald-400 mb-1">
                  Backend
                </div>
                <p className="text-sm text-slate-400">
                  API robustes et bases de données
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full space-y-6">
            {skills.map(skill => <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-slate-200">
                    {skill.name}
                  </span>
                  <span className="text-slate-400">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`} style={{
                width: `${skill.level}%`
              }}></div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}