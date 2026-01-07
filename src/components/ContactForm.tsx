import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
import { Card } from './ui/Card';
export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.phone.trim()) newErrors.phone = 'Le numéro de téléphone est requis';
    if (!formData.description.trim()) newErrors.description = 'La description du projet est requise';else if (formData.description.length < 10) newErrors.description = 'La description est trop courte';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
    setFormData({
      name: '',
      phone: '',
      description: ''
    });
    // Reset success message after 5 seconds
    setTimeout(() => setStatus('idle'), 5000);
  };
  return <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Parlons de votre projet
            </h2>
            <p className="text-slate-400 text-lg">
              Vous avez une idée ? Je suis là pour la réaliser. Remplissez le
              formulaire ci-dessous pour démarrer la conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Contact Info Side */}
            <div className="md:col-span-2 space-y-6 text-slate-300">
              <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">
                  Coordonnées
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-1">
                      Email
                    </p>
                    <a href="mailto:contact@portfolio.com" className="text-white hover:text-indigo-400 transition-colors">
                      contact@portfolio.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-1">
                      Téléphone / WhatsApp
                    </p>
                    <a href="tel:+1234567890" className="text-white hover:text-indigo-400 transition-colors">
                      +123 456 7890
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-1">
                      Localisation
                    </p>
                    <p className="text-white">
                      Paris, France (Télétravail possible)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <Card className="md:col-span-3 bg-white text-slate-900 p-6 md:p-8 shadow-xl">
              {status === 'success' ? <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-slate-600">
                    Merci de m'avoir contacté. Je reviendrai vers vous dans les
                    plus brefs délais.
                  </p>
                  <Button variant="outline" className="mt-6" onClick={() => setStatus('idle')}>
                    Envoyer un autre message
                  </Button>
                </div> : <form onSubmit={handleSubmit} className="space-y-6">
                  <Input label="Nom du client" placeholder="Votre nom ou celui de votre entreprise" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} error={errors.name} />

                  <Input label="Numéro de téléphone" type="tel" placeholder="+33 6 12 34 56 78" value={formData.phone} onChange={e => setFormData({
                ...formData,
                phone: e.target.value
              })} error={errors.phone} />

                  <Textarea label="Description du projet" placeholder="Décrivez brièvement vos besoins..." value={formData.description} onChange={e => setFormData({
                ...formData,
                description: e.target.value
              })} error={errors.description} />

                  <Button type="submit" className="w-full" size="lg" isLoading={status === 'submitting'} rightIcon={<Send size={18} />}>
                    Envoyer la demande
                  </Button>
                </form>}
            </Card>
          </div>
        </div>
      </div>
    </section>;
}