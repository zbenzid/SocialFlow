import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Check, 
  MapPin, 
  Instagram, 
  Linkedin, 
  Facebook,
  ChevronDown,
  ChevronRight,
  Star,
  CheckCircle2,
  ExternalLink,
  Users,
  Trophy,
  Rocket
} from 'lucide-react';
import { APP_NAME, SERVICES, PROCESS_STEPS, FAQS, CLIENT_AVATARS, BOOKING_LINK, PROJECTS } from './constants';
import { SectionId } from './types';
import StickyCTA from './components/StickyCTA';
import CalEmbed from './components/CalEmbed';

// --- ANIMATION VARIANTS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToBooking = () => {
    const element = document.getElementById(SectionId.CONTACT);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLink = ({ to, label, mobile = false }: { to: string, label: string, mobile?: boolean }) => (
    <a 
      href={`#${to}`} 
      className={`${mobile ? 'block text-3xl font-display font-bold py-4 border-b border-neutral-800' : 'text-sm font-medium text-neutral-400 hover:text-white transition-colors uppercase tracking-widest'}`}
      onClick={() => mobile && setIsMobileMenuOpen(false)}
    >
      {label}
    </a>
  );

  return (
    <div className="min-h-screen bg-black text-neutral-50 font-sans selection:bg-brand-500">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-brand-500/20">
              <span className="font-display font-bold text-xl text-white">SF</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight group-hover:text-brand-500 transition-colors">{APP_NAME}</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to={SectionId.OFFER} label="Vision" />
            <NavLink to={SectionId.SERVICES} label="Services" />
            <NavLink to="projets" label="Projets" />
            <NavLink to={SectionId.ABOUT} label="Agence" />
            <button 
              onClick={scrollToBooking}
              className="bg-white text-black px-6 py-2.5 rounded-full font-bold hover:bg-brand-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,41,41,0.4)]"
            >
              Devis Express
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-white hover:text-brand-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 top-20 bg-black z-40 p-6 flex flex-col h-[calc(100vh-80px)]"
            >
              <div className="flex flex-col gap-2">
                <NavLink to={SectionId.OFFER} label="Vision" mobile />
                <NavLink to={SectionId.SERVICES} label="Services" mobile />
                <NavLink to="projets" label="Projets" mobile />
                <NavLink to={SectionId.ABOUT} label="L'Agence" mobile />
              </div>
              <div className="mt-auto mb-10">
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollToBooking();
                  }}
                  className="w-full bg-brand-600 text-white py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-2"
                >
                  Démarrer maintenant <ArrowRight />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-20">
        
        {/* --- HERO SECTION --- */}
        <section id={SectionId.HERO} className="relative min-h-[92vh] flex items-center justify-center px-6 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[120px] animate-pulse-slow pointer-events-none mix-blend-screen" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[100px] animate-float pointer-events-none" />
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8 flex flex-col items-center"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-neutral-300 hover:border-brand-500/50 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Agence Digitale & Growth • Mantes-la-Jolie (78)
              </motion.div>

              <motion.h1 variants={fadeInUp} className="font-display font-bold text-5xl md:text-7xl lg:text-9xl leading-[1.05] tracking-tight">
                Transformez votre <br />
                {/* Corrected Gradient: White to Light Grey (No Black) */}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-neutral-400 drop-shadow-lg">
                  visibilité
                </span> en <span className="text-brand-500 relative inline-block">
                  clients
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-600 -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>.
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light">
                Nous créons des écosystèmes digitaux <span className="text-white font-medium">ultra-performants</span> pour les artisans, cliniques et entreprises des Yvelines qui veulent dominer leur marché local.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 w-full sm:w-auto">
                <button 
                  onClick={scrollToBooking}
                  className="w-full sm:w-auto px-10 py-5 bg-brand-600 text-white rounded-2xl font-bold text-lg hover:bg-brand-500 transition-all hover:scale-105 shadow-[0_0_50px_rgba(237,21,21,0.4)] flex items-center justify-center gap-3 group"
                >
                  <Rocket className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                  Lancer ma croissance
                </button>
                <a 
                  href={`#${SectionId.OFFER}`}
                  className="w-full sm:w-auto px-10 py-5 bg-neutral-900/50 border border-neutral-800 text-white rounded-2xl font-medium hover:bg-neutral-800 hover:border-neutral-700 transition-all backdrop-blur-sm flex items-center justify-center gap-2"
                >
                  Voir notre approche <ChevronDown className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Social Proof Ticker */}
              <motion.div variants={fadeInUp} className="pt-12 opacity-60 flex flex-wrap justify-center gap-8 md:gap-16 grayscale">
                 <div className="flex items-center gap-2 text-sm font-display font-bold text-neutral-500 uppercase tracking-widest">
                    <CheckCircle2 className="w-4 h-4" /> +50 Projets Locaux
                 </div>
                 <div className="flex items-center gap-2 text-sm font-display font-bold text-neutral-500 uppercase tracking-widest">
                    <CheckCircle2 className="w-4 h-4" /> Expert Google Partner
                 </div>
                 <div className="flex items-center gap-2 text-sm font-display font-bold text-neutral-500 uppercase tracking-widest">
                    <CheckCircle2 className="w-4 h-4" /> ROI Focus
                 </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* --- PROJECTS SHOWCASE (NEW) --- */}
        <section id="projets" className="py-24 px-6 border-t border-white/5 bg-neutral-950/50">
           <div className="max-w-7xl mx-auto">
             <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Réalisations <span className="text-brand-500">Concrètes</span></h2>
                  <p className="text-neutral-400 text-lg max-w-md">Pas de théorie. Voici ce qu'on a accompli pour des entreprises comme la vôtre dans le 78.</p>
                </div>
                <button onClick={scrollToBooking} className="flex items-center gap-2 text-white hover:text-brand-500 transition-colors group">
                  Démarrer un projet similaire <ArrowRight className="group-hover:translate-x-1 transition-transform"/>
                </button>
             </div>

             <div className="grid md:grid-cols-3 gap-8">
                {PROJECTS.map((project, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800"
                  >
                    <div className="h-64 overflow-hidden relative">
                      <div className="absolute inset-0 bg-brand-600/20 group-hover:bg-transparent transition-colors z-10" />
                      <img src={project.image} alt={project.client} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                      <div className="absolute top-4 left-4 z-20 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10 uppercase tracking-wider">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold font-display mb-1 text-white">{project.client}</h3>
                        <p className="text-brand-500 font-medium text-sm">{project.result}</p>
                      </div>
                      <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <div className="flex items-center text-sm font-bold text-white group-hover:text-brand-500 transition-colors cursor-pointer">
                        Voir l'étude de cas <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </motion.div>
                ))}
             </div>
           </div>
        </section>

        {/* --- OFFER / APPROACH (Bento Grid) --- */}
        <section id={SectionId.OFFER} className="py-24 px-6 relative bg-black">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
                Arrêtez de perdre <br/>des <span className="text-brand-500">opportunités.</span>
              </h2>
              <p className="text-xl text-neutral-400">
                98% des sites web locaux sont des cimetières numériques. Nous construisons des machines de guerre conçues pour une seule chose : <span className="text-white">remplir votre agenda</span>.
              </p>
            </div>

            <div className="grid md:grid-cols-12 gap-6">
              {/* Feature 1 */}
              <div className="md:col-span-7 glass-card p-8 md:p-12 rounded-3xl flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute right-0 top-0 w-64 h-64 bg-brand-600/10 blur-[80px] rounded-full group-hover:bg-brand-600/20 transition-all" />
                <Trophy className="w-12 h-12 text-brand-500 mb-6" />
                <h3 className="text-3xl font-display font-bold mb-4">Design qui convertit</h3>
                <p className="text-neutral-400 text-lg max-w-md">
                  On oublie le jargon "branding 360". On crée une image de marque qui inspire confiance instantanément et pousse vos prospects à cliquer sur "Appeler".
                </p>
              </div>

              {/* Feature 2 */}
              <div className="md:col-span-5 bg-neutral-900 border border-neutral-800 p-8 md:p-12 rounded-3xl relative overflow-hidden flex flex-col justify-between">
                 <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-5"></div>
                 <div>
                   <h3 className="text-2xl font-bold mb-2">Expertise Locale 78</h3>
                   <p className="text-neutral-400">On connaît Mantes comme notre poche.</p>
                 </div>
                 <div className="mt-8 flex items-center gap-4">
                    <div className="bg-neutral-800 p-4 rounded-xl flex-1 text-center">
                       <span className="block text-2xl font-bold text-white">20km</span>
                       <span className="text-xs text-neutral-500 uppercase">Rayon d'action</span>
                    </div>
                    <div className="bg-neutral-800 p-4 rounded-xl flex-1 text-center">
                       <span className="block text-2xl font-bold text-brand-500">100%</span>
                       <span className="text-xs text-neutral-500 uppercase">Terrain</span>
                    </div>
                 </div>
              </div>

              {/* Feature 3 */}
              <div className="md:col-span-4 bg-brand-600 p-8 rounded-3xl text-white flex flex-col justify-between group cursor-pointer hover:bg-brand-500 transition-colors">
                <div>
                  <Users className="w-10 h-10 mb-6 text-white/80" />
                  <h3 className="text-2xl font-bold mb-2">Ciblage Laser</h3>
                  <p className="text-brand-100">On va chercher vos clients là où ils sont : Google, Instagram, LinkedIn.</p>
                </div>
                <div className="mt-8 flex justify-end">
                   <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* Feature 4 */}
              <div className="md:col-span-8 glass-card p-8 md:p-12 rounded-3xl flex items-center gap-8">
                 <div className="hidden md:block w-1/3">
                    <div className="aspect-square rounded-2xl bg-neutral-800 border border-neutral-700 p-4 flex items-center justify-center">
                       <div className="w-full space-y-3">
                          <div className="h-2 w-2/3 bg-neutral-700 rounded animate-pulse"></div>
                          <div className="h-2 w-full bg-neutral-700 rounded animate-pulse delay-75"></div>
                          <div className="h-2 w-1/2 bg-neutral-700 rounded animate-pulse delay-150"></div>
                          <div className="h-8 w-full bg-brand-500/20 rounded mt-4 border border-brand-500/30 flex items-center justify-center text-brand-500 font-bold text-xs">REVENUS +45%</div>
                       </div>
                    </div>
                 </div>
                 <div className="md:w-2/3">
                    <h3 className="text-3xl font-display font-bold mb-4">Data-Driven</h3>
                    <p className="text-neutral-400 text-lg mb-6">
                      Pas de "on pense que". On installe des sondes partout. Vous saurez exactement combien vous rapporte chaque euro investi.
                    </p>
                    <ul className="grid grid-cols-2 gap-2 text-sm text-neutral-300">
                       <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-500" /> Tracking Conversions</li>
                       <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-500" /> Heatmaps</li>
                       <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-500" /> Call Tracking</li>
                       <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-500" /> A/B Testing</li>
                    </ul>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SERVICES (Cards with hover glow) --- */}
        <section id={SectionId.SERVICES} className="py-32 px-6 bg-neutral-950">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 space-y-6 md:w-2/3">
              <h2 className="text-5xl md:text-7xl font-display font-bold text-white">Nos <span className="text-brand-500">Armes</span></h2>
              <p className="text-xl text-neutral-400 max-w-xl">
                Des solutions packagées pour chaque stade de votre croissance. Simple, transparent, radicalement efficace.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -15 }}
                  className={`relative p-8 rounded-[2rem] border flex flex-col h-full transition-all duration-300 group overflow-hidden ${
                    service.highlight 
                      ? 'bg-neutral-900 border-brand-500/50 shadow-[0_0_50px_rgba(255,41,41,0.15)]' 
                      : 'bg-black border-neutral-800 hover:border-neutral-600'
                  }`}
                >
                  {/* Background Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-600/0 to-brand-900/0 group-hover:to-brand-900/10 transition-all duration-500" />

                  {service.highlight && (
                    <div className="absolute top-0 left-0 right-0 bg-brand-600 text-white text-center py-1.5 text-xs font-bold tracking-widest uppercase">
                      Recommandé
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-white transition-colors duration-500 ${service.highlight ? 'bg-brand-500' : 'bg-neutral-800 group-hover:bg-brand-600'}`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-3xl font-display font-bold mb-4">{service.title}</h3>
                  <p className="text-neutral-400 mb-8 flex-grow leading-relaxed">{service.description}</p>
                  
                  <div className="mb-8 p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                    <span className="block text-sm text-neutral-500 uppercase tracking-wider mb-1">Investissement</span>
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-neutral-300">
                        <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={scrollToBooking}
                    className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                      service.highlight
                        ? 'bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                        : 'bg-white text-black hover:bg-neutral-200'
                    }`}
                  >
                    Choisir ce pack <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- AGENCY / ABOUT (Storytelling) --- */}
        <section id={SectionId.ABOUT} className="py-24 px-6 border-y border-neutral-900 bg-neutral-900/20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 md:order-1">
              <div className="inline-block text-brand-500 font-bold tracking-widest uppercase text-sm">L'Agence Social Flow</div>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Née d'une frustration <br/>simple.
              </h2>
              <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
                <p>
                  "Les artisans sont les piliers de l'économie locale, mais le digital les a oubliés."
                </p>
                <p>
                  J'ai créé Social Flow à <strong className="text-white">Mantes-la-Jolie</strong> avec une mission claire : apporter la puissance du marketing des grandes startups aux PME du 78.
                </p>
                <p>
                  Ici, pas de stagiaire qui gère votre compte. Pas de ticket support sans réponse. Vous parlez à des experts qui connaissent la différence entre le trafic et le chiffre d'affaires.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                 <div>
                    <h4 className="text-4xl font-bold text-white mb-2">10+</h4>
                    <p className="text-sm text-neutral-500 uppercase">Années d'expérience</p>
                 </div>
                 <div>
                    <h4 className="text-4xl font-bold text-white mb-2">100%</h4>
                    <p className="text-sm text-neutral-500 uppercase">Indépendance</p>
                 </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative h-[500px] rounded-3xl overflow-hidden border border-neutral-800 group">
               <img 
                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
                 alt="Agence Bureau" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
               <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-display font-bold text-2xl">L'équipe à Mantes</p>
                  <p className="text-neutral-400">Toujours dispo pour un café.</p>
               </div>
            </div>
          </div>
        </section>

        {/* --- FAQ --- */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Questions Fréquentes</h2>
            <p className="text-neutral-500">Tout ce que vous devez savoir avant de signer.</p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group bg-neutral-900 rounded-2xl border border-neutral-800 open:bg-neutral-800 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-lg list-none text-neutral-200 group-hover:text-white">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-brand-500" />
                </summary>
                <div className="px-6 pb-6 text-neutral-400 leading-relaxed border-t border-neutral-700/50 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* --- BOOKING SECTION (Final CTA) --- */}
        <section className="py-24 px-6 relative overflow-hidden bg-brand-950">
           {/* Background decorative elements */}
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-900/40 via-black to-black opacity-80 pointer-events-none" />
           
          <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
              Votre agenda ne va pas <br/>se remplir <span className="text-brand-500 underline decoration-4 underline-offset-8 decoration-brand-700">tout seul</span>.
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8">
              Chaque jour sans action est un client offert à votre concurrent. <br/>Prenez 30 minutes. C'est gratuit, sans engagement, et ça peut doubler votre CA.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 text-sm text-brand-200/80 mb-10 font-medium">
               <span className="flex items-center gap-1"><Check size={16}/> Audit Offert</span>
               <span className="flex items-center gap-1"><Check size={16}/> Stratégie Personnalisée</span>
               <span className="flex items-center gap-1"><Check size={16}/> Devis Immédiat</span>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto relative z-20">
            <CalEmbed />
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-black py-20 px-6 border-t border-neutral-900 text-neutral-400">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex items-center gap-2 text-2xl font-display font-bold text-white">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">S</div>
              {APP_NAME}
            </div>
            <p className="max-w-sm leading-relaxed">
              Agence de performance digitale à Mantes-la-Jolie. <br/>
              Nous aidons les entreprises ambitieuses du 78 à capturer leur marché grâce au design, au code et à la publicité.
            </p>
            <div className="flex gap-4">
               <a href="#" className="p-3 bg-neutral-900 rounded-full hover:bg-white hover:text-black transition-colors"><Instagram className="w-5 h-5"/></a>
               <a href="#" className="p-3 bg-neutral-900 rounded-full hover:bg-white hover:text-black transition-colors"><Linkedin className="w-5 h-5"/></a>
               <a href="#" className="p-3 bg-neutral-900 rounded-full hover:bg-white hover:text-black transition-colors"><Facebook className="w-5 h-5"/></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white">Solutions</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-brand-500 transition-colors">Création de Site Web</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Référencement SEO Local</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Publicité Google Ads</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Social Media Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-500 flex-shrink-0" />
                <span>21 Rue de la République<br/>78200 Mantes-la-Jolie</span>
              </li>
              <li className="flex items-center gap-3">
                <ExternalLink className="w-5 h-5 text-brand-500" />
                <a href={BOOKING_LINK} className="hover:text-white transition-colors">Réserver un audit</a>
              </li>
              <li className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="text-green-500">Ouvert aujourd'hui</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
          <p>© {new Date().getFullYear()} Social Flow SAS. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
          </div>
        </div>
      </footer>

      <StickyCTA onClick={scrollToBooking} />

    </div>
  );
};

export default App;