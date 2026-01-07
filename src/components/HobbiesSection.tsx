import React from 'react';
import { Camera, Music, Plane, BookOpen } from 'lucide-react';
import { Card } from './ui/Card';
const hobbies = [{
  name: 'Photographie',
  icon: <Camera size={32} />,
  description: 'Capturer des moments urbains et des paysages naturels lors de mes voyages.'
}, {
  name: 'Musique',
  icon: <Music size={32} />,
  description: 'Pratique de la guitare et production musicale amateur sur MAO.'
}, {
  name: 'Voyages',
  icon: <Plane size={32} />,
  description: 'Découverte de nouvelles cultures. 15 pays visités à ce jour.'
}, {
  name: 'Lecture',
  icon: <BookOpen size={32} />,
  description: "Passionné de science-fiction et d'ouvrages sur le développement personnel."
}];
export function HobbiesSection() {
  return <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Loisirs & Intérêts
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ce qui me passionne en dehors du code et nourrit ma créativité au
            quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map(hobby => <Card key={hobby.name} className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-sm text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {hobby.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {hobby.name}
              </h3>
              <p className="text-sm text-slate-600">{hobby.description}</p>
            </Card>)}
        </div>
      </div>
    </section>;
}