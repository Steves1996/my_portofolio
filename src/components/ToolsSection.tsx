import React from 'react';
import { Code2, Terminal, PenTool, Database, Globe, Cpu } from 'lucide-react';
import { Card } from './ui/Card';
const tools = [{
  name: 'VS Code',
  icon: <Code2 size={24} />,
  category: 'IDE'
}, {
  name: 'Git & GitHub',
  icon: <Terminal size={24} />,
  category: 'Version Control'
}, {
  name: 'Figma',
  icon: <PenTool size={24} />,
  category: 'Design'
}, {
  name: 'PostgreSQL',
  icon: <Database size={24} />,
  category: 'Database'
}, {
  name: 'Docker',
  icon: <Globe size={24} />,
  category: 'DevOps'
}, {
  name: 'Postman',
  icon: <Cpu size={24} />,
  category: 'API Testing'
}];
export function ToolsSection() {
  return <section className="py-20 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Mes Outils de Développement
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            L'environnement technique que j'utilise au quotidien pour concevoir
            et déployer des applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map(tool => <Card key={tool.name} className="p-6 flex flex-col items-center justify-center text-center hover:border-indigo-200 hover:bg-slate-50 transition-colors group cursor-default">
              <div className="p-3 bg-slate-100 rounded-full text-slate-600 mb-3 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                {tool.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{tool.name}</h3>
              <p className="text-xs text-slate-500 uppercase tracking-wider">
                {tool.category}
              </p>
            </Card>)}
        </div>
      </div>
    </section>;
}