'use client';

import type { ReactNode, SVGProps } from 'react';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants pour Framer Motion
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const NAV_LINKS = [
  { href: '#hero', label: 'Accueil' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#results', label: 'Résultats' },
  { href: '#offers', label: 'Offres' },
  { href: '#testimonials-full', label: 'Avis' },
  { href: '#faq', label: 'FAQ' },
];

const LOGO_ROWS = [
  ['Bunch', 'Fitness Camp', 'Nobinobi', 'heïo', 'Gusp Studio', 'PERE&FISH', 'epycure', 'VIZB'],
  ['Design Elite', 'Capitaine Study', 'ALEO', 'Insight', 'Youdji', 'Hypnoledge', 'Spliiit', 'Cfix'],
];

const FORMAT_CARDS = [
  {
    title: "Format à l'iPhone",
    description: 'Réactivité maximale pour vos pubs Meta & TikTok.',
    videoId: '1135381558',
    videoTitle: 'Sraps_02',
  },
  {
    title: 'Format à la caméra',
    description: 'Production premium, studio et multi-caméras.',
    videoId: '1135380601',
    videoTitle: 'Sakura_01',
  },
  {
    title: 'Founder stories',
    description: 'Mettez votre équipe en scène avec un script impactant.',
    videoId: '1135380845',
    videoTitle: 'leSpot_01',
  },
];

const ADDITIONAL_VIDEOS = [
  {
    title: 'Témoignage client',
    description: 'Témoignages authentiques de clients satisfaits',
    videoId: '1135383362',
    videoTitle: 'Boca_01',
  },
  {
    title: 'Présentation produit',
    description: 'Mise en valeur des caractéristiques principales',
    videoId: '1135383645',
    videoTitle: 'melimelo_02',
  },
  {
    title: 'Tutoriel',
    description: 'Guides pratiques et démonstrations',
    videoId: '1135382333',
    videoTitle: 'Sraps_01',
  },
];

const KPI_CARDS = [
  {
    title: "CPA -52%",
    description: "Acquisition pilotée par nos contenus story-driven.",
  },
  {
    title: "ROAS +30%",
    description: "Séquences paid centrées sur vos preuves sociales.",
  },
  {
    title: "+50% d'inscriptions",
    description: "Série founder qui raconte l'ADN produit avec impact.",
  },
];

const OFFERS = [
  {
    title: "Pack 6 vidéos",
    price: "2 900 CHF",
    description: "Parfait pour déclencher un sprint de tests créatifs.",
    inclusions: [
      "Direction stratégique & script",
      "1 jour de tournage multi-formats",
      "Montage premium & sound design",
      "Sous-titres dynamiques",
      "Livrables prêts pour paid & organique",
    ],
  },
  {
    title: "Pack 10 vidéos",
    price: "4 500 CHF",
    description: "Pensé pour alimenter vos funnels sur plusieurs semaines.",
    inclusions: [
      "Storyboard orienté conversion",
      "Casting & direction artistique",
      "Tournage multi-spots",
      "Variantes hooks & UGC",
      "Livraison continue & optimisations",
    ],
  },
];

const TESTIMONIALS = [
  {
    quote: "Votre équipe a transformé nos insights clients en un récit puissant qui convertit.",
    name: "Sarah, VP Growth @ Loop",
  },
  {
    quote: "Process hyper fluide, livrables impeccables et analyse data actionnable.",
    name: "Ibrahim, Head of Marketing @ Mora",
  },
  {
    quote: "Chaque vidéo raconte notre histoire avec une simplicité désarmante.",
    name: "Nora, Fondatrice @ Atelier Nord",
  },
];

const FAQ_ITEMS = [
  {
    question: "Quels sont les délais moyens de production ?",
    answer: "Comptez 3 à 4 semaines de la stratégie à la livraison des premiers formats, avec des versions rapides disponibles sous 10 jours pour vos tests urgents.",
  },
  {
    question: "Que comprennent les packs YourStory ?",
    answer: "Chaque pack inclut stratégie, script, tournage, montage, sous-titres et exports optimisés pour paid et organique.",
  },
  {
    question: "Combien d'itérations sont prévues ?",
    answer: "Deux séries de retours sont incluses pour affiner narration, rythme et habillage selon vos retours.",
  },
  {
    question: "Qui détient les droits d'usage ?",
    answer: "Vous disposez d'une licence mondiale illimitée pour la durée de la campagne sur les canaux prévus au contrat.",
  },
];

const FORMATS: Array<{ id: 'iphone' | 'camera' | 'founder' | 'all'; label: string }> = [
  { id: 'all', label: 'Tous les formats' },
  { id: 'iphone', label: "Format à l'iPhone" },
  { id: 'camera', label: 'Format à la caméra' },
  { id: 'founder', label: 'Founder stories' },
];

const GUARANTEES = [
  "Sans engagement",
  "Modifications incluses",
  "Publicité & organique",
];

/* Add custom animations */
export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFormat, setActiveFormat] = useState<'iphone' | 'camera' | 'founder' | 'all'>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div suppressHydrationWarning className="relative min-h-screen overflow-hidden bg-white text-gray-900">
      <style jsx>{`
        @keyframes pulseAnim {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes floatAnim {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes shineAnim {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        @keyframes moveGradient {
          0% { transform: translate(0%, 0%); }
          25% { transform: translate(10%, 10%); }
          50% { transform: translate(0%, 20%); }
          75% { transform: translate(-10%, 10%); }
          100% { transform: translate(0%, 0%); }
        }
        .anim-pulse { animation: pulseAnim 4s ease-in-out infinite; }
        .anim-pulse-slow { animation: pulseAnim 8s ease-in-out infinite; }
        .anim-float { animation: floatAnim 6s ease-in-out infinite; }
        .anim-float-slow { animation: floatAnim 10s ease-in-out infinite 1s; }
        .anim-float-slower { animation: floatAnim 15s ease-in-out infinite 2s; }
        .scroll-left { animation: scrollLeft 30s linear infinite; }
        .scroll-right { animation: scrollRight 35s linear infinite; }
        .moving-gradient { animation: moveGradient 30s ease-in-out infinite; }
        
        /* Noise texture */
        .noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.015;
          pointer-events: none;
        }
      `}</style>
      
      {/* Premium background with multiple layers */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/10 to-white" />
        
        {/* Moving radial gradients */}
        <div className="absolute -left-1/4 top-0 h-[800px] w-[800px] moving-gradient rounded-full bg-gradient-radial from-orange-100/20 via-orange-50/10 to-transparent blur-3xl" />
        <div className="absolute -right-1/4 bottom-1/4 h-[700px] w-[700px] moving-gradient rounded-full bg-gradient-radial from-orange-100/15 via-orange-50/8 to-transparent blur-3xl" style={{animationDelay: '5s'}} />
        <div className="absolute left-1/3 bottom-0 h-[600px] w-[600px] moving-gradient rounded-full bg-gradient-radial from-orange-100/10 via-orange-50/5 to-transparent blur-3xl" style={{animationDelay: '10s'}} />
        
        {/* Accent highlights */}
        <div className="absolute right-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-gradient-radial from-orange-200/20 via-orange-100/10 to-transparent blur-3xl animate-pulse-slow" />
        <div className="absolute left-1/3 top-1/2 h-[200px] w-[200px] rounded-full bg-gradient-radial from-orange-300/15 via-orange-200/5 to-transparent blur-3xl animate-pulse-slow" style={{animationDelay: '3s'}} />
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 noise" />
      </div>

      <div className="relative z-10 pb-28">
        <Header mobileOpen={mobileOpen} onToggle={() => setMobileOpen((open) => !open)} />
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}

        <main>
          <HeroSection />
          <VideoSection />
          <LogosSection />
          <FormatsSection activeFormat={activeFormat} onSelect={setActiveFormat} />
          <ResultsSection />
          <OffersSection />
          <TestimonialsSection />
          <FAQSection openFaq={openFaq} setOpenFaq={setOpenFaq} />
          <FinalCTASection />
        </main>

        <FloatingCTA />
        <Footer />
      </div>
    </div>
  );
}

function Header({ mobileOpen, onToggle }: { mobileOpen: boolean; onToggle: () => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between glass-nav px-6 py-3.5">
        {/* Logo glow effect */}
        <div className="absolute left-6 top-1/2 -z-10 h-12 w-12 -translate-y-1/2 rounded-full bg-orange-500/20 blur-xl animate-pulse-subtle" />
        
        <Link href="#hero" className="flex items-center gap-3 group relative" aria-label="YourStory – Accueil">
          <div className="relative">
            <Image 
              src="/images/logos/urstoryBlack.png" 
              alt="YourStory Logo" 
              width={140} 
              height={40}
              className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
              priority
            />
            <div className="absolute -inset-1 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-orange-500/10 blur-lg rounded-full" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900 transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-[var(--orange-600)] group-hover:to-[var(--orange-500)] group-hover:bg-clip-text group-hover:text-transparent">YourStory</span>
        </Link>
        
        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="relative transition-all duration-200 hover:text-[var(--accent)] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[var(--orange-500)] after:to-[var(--orange-400)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="hidden btn-primary md:inline-flex"
          >
            <span>Prendre un rendez-vous</span>
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 hover:translate-x-1" />
          </a>
          <button
            type="button"
            onClick={onToggle}
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
            className="glass-base grid h-10 w-10 place-items-center rounded-xl text-gray-700 transition-all duration-200 hover:scale-105 hover:border-[var(--orange-alpha-20)] hover:text-[var(--accent)] md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="px-4 md:hidden">
      <div className="mx-auto mt-4 max-w-5xl glass-modal p-6">
        <nav className="grid gap-3 text-sm font-semibold text-gray-800">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={onClose} 
              className="glass-base rounded-xl px-4 py-3 transition-all duration-200 hover:glass-hover hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          onClick={onClose}
          className="mt-4 block btn-primary w-full text-center"
        >
          <span>Prendre un rendez-vous</span>
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative px-4 pt-24 md:px-6 lg:pt-28 section scroll-mt-28 md:scroll-mt-32">
      {/* Hero gradient halo */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_var(--orange-alpha-15)_0%,_transparent_70%)] blur-3xl animate-pulse-subtle" />
      <div aria-hidden className="pointer-events-none absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_var(--orange-alpha-10)_0%,_transparent_70%)] blur-3xl animate-float-slow" />
      
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="glass-badge inline-flex items-center gap-3 px-5 py-2">
          <span className="glass-base rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-[var(--accent)] shadow-sm">CH</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-700">Agence suisse experte en vidéos verticales</span>
        </div>
        
        <h1 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-[3.25rem] animate-fade-up" style={{ animationDelay: '100ms' }}>
          <span className="block bg-gradient-to-r from-[var(--orange-600)] via-[var(--orange-500)] to-[var(--orange-400)] bg-clip-text text-transparent drop-shadow-sm">Explosez vos ventes</span>
          grâce à des vidéos performantes
        </h1>
        
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-700 sm:text-base animate-fade-up" style={{ animationDelay: '200ms' }}>
          100% de clients satisfaits, +20 entreprises locales accompagnées et des vidéos qui apportent vraiment des résultats.
        </p>
        
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: '300ms' }}>
          {/* CTA glow effect */}
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--orange-alpha-20)] blur-2xl animate-pulse-subtle" />
          
          <a href="#cta" className="btn-primary">
            <span>Je veux faire exploser ma marque</span>
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 hover:translate-x-1" />
          </a>
        </div>
        
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 animate-fade-up" style={{ animationDelay: '400ms' }}>
          {GUARANTEES.map((guarantee) => (
            <span
              key={guarantee}
              className="glass-badge px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-gray-700"
            >
              {guarantee}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="px-4 pt-12 md:px-6 animate-fade-up" style={{ animationDelay: '500ms' }}>
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[var(--radius-xl)] glass-elevated glass-hover shadow-[var(--shadow-xl)]">
        <div className="relative aspect-video bg-gray-950">
          <iframe
            src="https://player.vimeo.com/video/76979871?h=7f91176328&title=0&byline=0&portrait=0"
            title="Showreel vidéo"
            className="absolute inset-0 h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <div className="absolute left-1/2 top-4 flex -translate-x-1/2 items-center gap-2 glass-badge px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-900">
            <span>Unmute</span>
          </div>
          <div className="absolute right-4 top-4 grid gap-2">
            <VideoFloatingIcon label="Favoris">
              <HeartIcon className="h-3.5 w-3.5" />
            </VideoFloatingIcon>
            <VideoFloatingIcon label="Partager">
              <ShareIcon className="h-3.5 w-3.5" />
            </VideoFloatingIcon>
            <VideoFloatingIcon label="Enregistrer">
              <BookmarkIcon className="h-3.5 w-3.5" />
            </VideoFloatingIcon>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-sm text-gray-600 animate-fade-up" style={{ animationDelay: '600ms' }}>Nous avons déjà fait exploser <span className="font-semibold text-[var(--accent)]">+200 entreprises</span>.</p>
    </section>
  );
}

function LogosSection() {
  // Créer une liste combinée de tous les logos pour le défilé
  const allLogos = [...LOGO_ROWS[0], ...LOGO_ROWS[1]];
  
  return (
    <section id="portfolio" className="relative overflow-hidden px-4 py-20 md:px-6 section scroll-mt-28 md:scroll-mt-32">
      {/* Section gradient divider */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      
      {/* Gradients de masquage sur les côtés */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      
      <div className="mx-auto max-w-7xl space-y-8 text-center animate-fade-up" style={{ animationDelay: '700ms' }}>
        {/* Défilé de logos */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 scroll-left">
            {/* Première série de logos */}
            {allLogos.map((logo, index) => (
              <span
                key={`logo-${index}`}
                className="glass-base rounded-[var(--radius-md)] px-6 py-3 whitespace-nowrap flex-shrink-0 glass-hover-accent cursor-pointer"
              >
                <span className="text-sm font-semibold tracking-wide text-gray-600 transition-colors duration-300 group-hover:text-[var(--accent)]">{logo}</span>
              </span>
            ))}
            {/* Duplication pour un défilement continu */}
            {allLogos.map((logo, index) => (
              <span
                key={`logo-dup-${index}`}
                className="glass-base rounded-[var(--radius-md)] px-6 py-3 whitespace-nowrap flex-shrink-0 glass-hover-accent cursor-pointer"
              >
                <span className="text-sm font-semibold tracking-wide text-gray-600 transition-colors duration-300 group-hover:text-[var(--accent)]">{logo}</span>
              </span>
            ))}
          </div>
        </div>
        
        {/* Badge Trustpilot */}
        <div className="glass-overlay inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-medium text-gray-700" id="testimonials">
          <span className="font-bold text-green-600">Excellent</span>
          <TrustPilotStars />
          <span className="font-semibold">Trustpilot</span>
        </div>
      </div>
    </section>
  );
}

function FormatsSection({
  activeFormat,
  onSelect,
}: {
  activeFormat: 'iphone' | 'camera' | 'founder' | 'all';
  onSelect: (format: 'iphone' | 'camera' | 'founder' | 'all') => void;
}) {
  return (
    <section id="cases" className="relative overflow-hidden px-4 py-24 md:px-6 section scroll-mt-28 md:scroll-mt-32">
      {/* Section gradient */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--orange-alpha-5)] to-transparent" />
      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl md:text-[2.5rem]">
          L'accompagnement vidéo le plus puissant de <span className="bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] bg-clip-text text-transparent">2025</span> 🏅
        </h2>
        <p className="mt-6 text-base leading-relaxed text-gray-700 sm:text-lg">
          Le point commun entre toutes ces vidéos&nbsp;? Elles ont explosé les performances de nos clients, en publicité ou en organique.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-bold uppercase tracking-wide">
          <SocialBadge>Snapchat</SocialBadge>
          <SocialBadge>Instagram</SocialBadge>
          <SocialBadge>TikTok</SocialBadge>
          <SocialBadge>YouTube</SocialBadge>
        </div>
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--orange-alpha-30)] bg-white/70 px-5 py-2.5 text-xs font-semibold text-[var(--accent)] shadow-sm backdrop-blur-md">
          <SparkleIcon className="h-4 w-4" />
          Clique pour découvrir les différents formats.
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {FORMATS.map((format) => (
            <button
              key={format.id}
              type="button"
              onClick={() => onSelect(format.id)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 ${
                activeFormat === format.id
                  ? 'bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] text-white shadow-xl shadow-[var(--orange-alpha-30)] scale-105'
                  : 'border border-white/40 bg-white/70 text-gray-700 backdrop-blur-md hover:scale-105 hover:border-[var(--orange-alpha-30)] hover:bg-white/80 hover:text-[var(--accent)]'
              }`}
            >
              {format.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Vidéos Vimeo */}
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
        {/* Afficher les vidéos selon le format sélectionné */}
        {(activeFormat === 'all' ? [...FORMAT_CARDS, ...ADDITIONAL_VIDEOS] : 
          activeFormat === 'iphone' ? FORMAT_CARDS.filter(card => card.title.includes("iPhone")) :
          activeFormat === 'camera' ? FORMAT_CARDS.filter(card => card.title.includes("caméra")) :
          FORMAT_CARDS.filter(card => card.title.includes("Founder"))
        ).map((card, index) => (
          <div
            key={card.title}
            className="group overflow-hidden rounded-[var(--radius-xl)] border border-white/30 bg-white/60 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-[var(--orange-alpha-30)] hover:bg-white/70 hover:shadow-2xl hover:shadow-[var(--orange-alpha-15)]"
          >
            <div className="p-4 space-y-4">
              <div className="relative overflow-hidden rounded-[var(--radius-lg)]" style={{ padding: '177.78% 0 0 0' }}>
                <iframe 
                  src={`https://player.vimeo.com/video/${card.videoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  title={card.videoTitle}
                  className="absolute inset-0 h-full w-full"
                  allowFullScreen
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                  <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] px-2.5 py-0.5 text-xs font-medium text-white">
                    {index < 3 ? 'Premium' : 'Standard'}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Script Vimeo Player API - chargé une seule fois */}
      <script src="https://player.vimeo.com/api/player.js" async></script>
    </section>
  );
}

function FloatingCTA() {
  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-20 hidden md:block" id="cta">
      {/* Glow effect */}
      <div className="absolute -inset-2 bg-orange-500/20 rounded-full blur-xl animate-pulse-subtle" />
      <a
        href="#cta"
        className="pointer-events-auto btn-primary shadow-[var(--shadow-accent-lg)]"
      >
        <span>Prendre un rendez-vous</span>
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 hover:translate-x-1" />
      </a>
    </div>
  );
}

function ResultsSection() {
  return (
    <section id="results" className="relative overflow-hidden px-4 py-24 md:px-6 section-premium scroll-mt-28 md:scroll-mt-32">
      {/* Section gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--orange-alpha-5)] to-transparent" />
      
      {/* Accent circles */}
      <div aria-hidden className="pointer-events-none absolute -left-20 top-40 h-[300px] w-[300px] rounded-full bg-orange-500/5 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-20 bottom-20 h-[250px] w-[250px] rounded-full bg-orange-500/5 blur-3xl" />
      
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end">
          <div className="flex-1 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--orange-alpha-30)] bg-white/80 px-4 py-1.5 text-xs font-semibold text-[var(--accent)] shadow-sm backdrop-blur-md">
              <SparkleIcon className="h-3.5 w-3.5" />
              <span>Résultats & récits</span>
            </span>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-[2.75rem]">
              Des campagnes <span className="bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] bg-clip-text text-transparent">pilotées par la data</span>, prêtes à devenir vos prochaines études de cas.
            </h2>
          </div>
        </div>
        
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {KPI_CARDS.map((kpi, index) => (
            <div
              key={kpi.title}
              className="group flex h-full flex-col justify-between rounded-[var(--radius-xl)] border border-white/30 bg-white/60 px-6 py-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-[var(--orange-alpha-30)] hover:bg-white/70 hover:shadow-2xl hover:shadow-[var(--orange-alpha-15)]"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative space-y-4 z-10">
                {/* Subtle gradient background */}
                <div className="absolute inset-0 -z-10 bg-gradient-subtle rounded-[var(--radius-lg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <span className="inline-flex w-max rounded-full border border-[var(--orange-alpha-30)] bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)] shadow-sm backdrop-blur-sm group-hover:border-[var(--orange-500)] group-hover:bg-white transition-all duration-300">
                  KPI
                </span>
                <p className="text-3xl font-semibold bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] bg-clip-text text-transparent">{kpi.title}</p>
                <p className="text-sm text-black/70">{kpi.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OffersSection() {
  return (
    <section id="offers" className="relative overflow-hidden px-4 py-24 md:px-6 section-premium scroll-mt-28 md:scroll-mt-32">
      {/* Section gradient divider */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
      
      {/* Accent circles */}
      <div aria-hidden className="pointer-events-none absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-3xl animate-pulse-subtle" />
      
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--orange-alpha-30)] bg-white/80 px-4 py-1.5 text-xs font-semibold text-[var(--accent)] shadow-sm backdrop-blur-md">
              <SparkleIcon className="h-3.5 w-3.5" />
              <span>Offres YourStory</span>
            </span>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-[2.75rem]">
              Deux packs <span className="bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] bg-clip-text text-transparent">modulables</span> pour rythmer vos lancements et nourrir vos funnels.
            </h2>
          </div>
          <p className="text-sm font-medium text-gray-600 rounded-full border border-white/30 bg-white/70 px-5 py-2.5 shadow-sm backdrop-blur-md">
            Sans engagement, optimisés pour vos campagnes paid & organiques.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {OFFERS.map((offer, index) => (
            <div
              key={offer.title}
              className="group flex h-full flex-col justify-between rounded-[var(--radius-xl)] border border-white/30 bg-white/60 px-8 py-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-[var(--orange-alpha-30)] hover:bg-white/70 hover:shadow-2xl hover:shadow-[var(--orange-alpha-15)]"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 -z-10 bg-gradient-subtle rounded-[var(--radius-xl)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="space-y-6 relative z-10">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--orange-alpha-30)] bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[var(--accent)] shadow-sm backdrop-blur-sm group-hover:border-[var(--orange-500)] group-hover:bg-white transition-all duration-300">
                    {offer.title}
                  </span>
                  <p className="mt-4 text-3xl font-bold bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] bg-clip-text text-transparent">{offer.price}</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{offer.description}</p>
                </div>
                <ul className="space-y-3 text-sm text-gray-700">
                  {offer.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-br from-[var(--orange-600)] to-[var(--orange-500)] shadow-sm shadow-orange-500/20" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#cta"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-premium px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[var(--shadow-accent)] transition-all duration-300 hover:scale-105 hover:bg-[var(--orange-600)] hover:shadow-2xl hover:shadow-[var(--shadow-accent-lg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
              >
                <span>Démarrer</span>
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials-full" className="relative overflow-hidden px-4 py-24 md:px-6 section-premium scroll-mt-28 md:scroll-mt-32">
      {/* Section gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--orange-alpha-5)] to-transparent" />
      
      {/* Accent circles */}
      <div aria-hidden className="pointer-events-none absolute left-0 bottom-20 h-[350px] w-[350px] rounded-full bg-orange-500/5 blur-3xl animate-pulse-subtle" />
      
      <div className="relative mx-auto max-w-6xl">
        <div className="space-y-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--orange-alpha-30)] bg-white/80 px-4 py-1.5 text-xs font-semibold text-[var(--accent)] shadow-sm backdrop-blur-md">
            <SparkleIcon className="h-3.5 w-3.5" />
            <span>Avis & trust</span>
          </span>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-[2.75rem]">
            Nos clients en parlent <span className="bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] bg-clip-text text-transparent">mieux que nous</span>.
          </h2>
        </div>
        
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group rounded-[var(--radius-xl)] border border-white/30 bg-white/60 px-6 py-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-[var(--orange-alpha-30)] hover:bg-white/70 hover:shadow-2xl hover:shadow-[var(--orange-alpha-15)]"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote icon */}
              <div className="mb-4 flex justify-end">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--orange-200)] to-[var(--orange-100)] text-[var(--orange-500)] opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.58 17c-1.6 0-2.905-1.3-2.905-2.9 0-1.6 1.3-2.9 2.905-2.9.43 0 .845.1 1.225.27-.54-1.17-1.685-2-3.03-2.07v-2.2c2.905.14 5.18 2.47 5.18 5.36 0 2.47-2.01 4.44-4.5 4.44zm8.5 0c-1.6 0-2.905-1.3-2.905-2.9 0-1.6 1.305-2.9 2.905-2.9.435 0 .845.1 1.23.27-.54-1.17-1.69-2-3.035-2.07v-2.2c2.905.14 5.18 2.47 5.18 5.36 0 2.47-2.01 4.44-4.5 4.44z" />
                  </svg>
                </span>
              </div>
              
              <p className="text-lg font-semibold leading-relaxed text-black">
                "{testimonial.quote}"
              </p>
              
              <div className="mt-6 flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--orange-500)] to-[var(--orange-400)] text-white shadow-md shadow-orange-500/20">
                  {testimonial.name.charAt(0)}
                </span>
                <p className="text-sm font-medium text-black/70">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust badge */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 bg-white/70 px-8 py-4 text-sm font-medium text-gray-700 shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <span className="font-bold text-green-600">Excellent</span>
            <TrustPilotStars />
            <span className="font-semibold">Trustpilot</span>
            <span className="text-xs text-gray-500 ml-2">4.9/5 (120+ avis)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection({ openFaq, setOpenFaq }: { openFaq: number | null; setOpenFaq: (index: number | null) => void }) {
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="relative overflow-hidden px-4 py-24 md:px-6 section-premium scroll-mt-28 md:scroll-mt-32">
      {/* Section gradient divider */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
      
      {/* Accent circles */}
      <div aria-hidden className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-3xl animate-pulse-subtle" />
      
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--orange-alpha-30)] bg-white/80 px-4 py-1.5 text-xs font-semibold text-[var(--accent)] shadow-sm backdrop-blur-md">
              <SparkleIcon className="h-3.5 w-3.5" />
              <span>FAQ</span>
            </span>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-[2.75rem]">
              Vos questions sur la <span className="bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] bg-clip-text text-transparent">production</span> et la <span className="bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] bg-clip-text text-transparent">performance</span>.
            </h2>
            
            <p className="text-base text-gray-600 mt-4">
              Nous sommes transparents sur notre processus et nos résultats. Voici les questions les plus fréquentes.
            </p>
          </div>
          
          <div className="flex-1">
            <div className="divide-y divide-gray-200/50 rounded-[var(--radius-xl)] border border-white/30 bg-white/60 shadow-2xl backdrop-blur-xl overflow-hidden">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={item.question} className="group">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-gray-900 transition-all duration-300 hover:bg-[var(--orange-alpha-5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 group-hover:text-[var(--accent)]"
                    >
                      <span className="transition-colors duration-300">{item.question}</span>
                      <span
                        aria-hidden="true"
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-full border-2 text-lg font-bold shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110 ${
                          isOpen ? "rotate-45 border-[var(--orange-500)] bg-gradient-premium text-white shadow-lg shadow-[var(--shadow-accent)]" : "border-white/40 bg-white/70 text-gray-900 group-hover:border-[var(--orange-alpha-30)] group-hover:text-[var(--accent)]"
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid overflow-hidden transition-all duration-300 ease-premium ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 text-sm leading-relaxed text-gray-700 bg-gradient-subtle">
                          <div className="p-4 rounded-[var(--radius-lg)] bg-white/60 border border-white/50 backdrop-blur-sm">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 text-center">
              <a href="#cta" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline">
                <span>Une autre question ?</span>
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section id="final-cta" className="relative overflow-hidden px-4 py-24 md:px-6 section-premium">
      {/* Final CTA gradient halo */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_var(--orange-alpha-15)_0%,_transparent_70%)] blur-3xl animate-pulse-subtle" />
      <div className="relative mx-auto max-w-5xl px-4 text-center md:px-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--orange-alpha-30)] bg-white/80 px-4 py-1.5 text-xs font-semibold text-[var(--accent)] shadow-sm backdrop-blur-md">
          <SparkleIcon className="h-3.5 w-3.5" />
          <span>Prêt à écrire la suite ?</span>
        </span>
        <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Vos histoires méritent un <span className="bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] bg-clip-text text-transparent">format qui performe</span>.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-gray-700 md:text-lg max-w-3xl mx-auto">
          Réservons un appel découverte : nous répondons sous 24h avec un plan d'action et des idées de narration sur-mesure.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-premium px-8 py-4 text-base font-semibold text-white shadow-xl shadow-[var(--shadow-accent)] transition-all duration-300 hover:scale-105 hover:bg-[var(--orange-600)] hover:shadow-2xl hover:shadow-[var(--shadow-accent-lg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
          >
            <span>Réserver un appel</span>
            <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Réponse sous 24h • Sans engagement
          </span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative px-4 pt-24 pb-8 md:px-6">
      {/* Footer gradient divider */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="relative mx-auto max-w-5xl border-t border-gray-200 pt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} YourStory. Tous droits réservés.
      </div>
    </footer>
  );
}

/* ---------- Small UI helpers ---------- */

function Badge({ children }: { children: ReactNode }) {
  return (
    <div className="glass-badge inline-flex items-center gap-3 px-5 py-2">
      {children}
    </div>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="inline-flex items-center gap-2 text-gray-700">
      <DotIcon className="h-2.5 w-2.5 text-[var(--accent)]" />
      {children}
    </li>
  );
}

function SocialBadge({ children }: { children: ReactNode }) {
  return (
    <span className="glass-base inline-block cursor-pointer rounded-full px-4 py-2 text-[var(--accent)] glass-hover-accent">
      {children}
    </span>
  );
}

function VideoFloatingIcon({ children, label }: { children: ReactNode; label: string }) {
  return (
    <span className="glass-base grid h-10 w-10 place-items-center rounded-full text-gray-900 transition-all duration-200 hover:scale-110 hover:glass-hover-accent" aria-label={label}>
      {children}
    </span>
  );
}

function TrustPilotStars() {
  return (
    <span className="inline-flex items-center gap-1 text-green-500">
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon key={index} className="h-4 w-4" />
      ))}
    </span>
  );
}

/* ---------- Icons ---------- */

function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5 12h12m0 0-4-4m4 4-4 4" />
    </svg>
  );
}

function DotIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 8 8" aria-hidden="true" {...props}>
      <circle cx="4" cy="4" r="4" fill="currentColor" />
    </svg>
  );
}

function SparkleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 3.5 13.4 8.6l5.1 1.4-5.1 1.4L12 16.5l-1.4-5.1-5.1-1.4 5.1-1.4L12 3.5Z" opacity="0.25" />
      <path d="M12 5.5 13 9l3.5 1-3.5 1L12 14l-1-3.5L7.5 10 11 9l1-3.5Z" />
    </svg>
  );
}

function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9.05 2.927c.35-.898 1.55-.898 1.9 0l1.51 3.865a1 1 0 0 0 .87.63l4.15.31c.97.07 1.37 1.267.63 1.856l-3.2 2.57a1 1 0 0 0-.34 1.02l1.01 3.99c.23.93-.78 1.66-1.58 1.14l-3.5-2.23a1 1 0 0 0-1.08 0l-3.5 2.23c-.8.52-1.81-.21-1.58-1.14l1.01-3.99a1 1 0 0 0-.34-1.02l-3.2-2.57c-.74-.59-.34-1.786.63-1.856l4.15-.31a1 1 0 0 0 .87-.63l1.51-3.865Z" />
    </svg>
  );
}

function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 20.5S3.5 15 3.5 8.7a4.2 4.2 0 0 1 7.2-2.9l1.3 1.28 1.3-1.29a4.2 4.2 0 0 1 7.2 2.9C20.5 15 12 20.5 12 20.5Z" />
    </svg>
  );
}

function ShareIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
      <path d="M16 8 12 4 8 8" />
      <path d="M12 4v12" />
    </svg>
  );
}

function BookmarkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1Z" />
    </svg>
  );
}
