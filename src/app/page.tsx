'use client';

import type { ReactNode, SVGProps } from 'react';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
  },
  {
    title: 'Format à la caméra',
    description: 'Production premium, studio et multi-caméras.',
  },
  {
    title: 'Founder stories',
    description: 'Mettez votre équipe en scène avec un script impactant.',
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

const FORMATS: Array<{ id: 'iphone' | 'camera'; label: string }> = [
  { id: 'iphone', label: "Format à l'iPhone" },
  { id: 'camera', label: 'Format à la caméra' },
];

const GUARANTEES = [
  "Sans engagement",
  "Modifications incluses",
  "Publicité & organique",
];

/* Add custom animations */
export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFormat, setActiveFormat] = useState<'iphone' | 'camera'>('iphone');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-gray-900">
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
        .anim-pulse { animation: pulseAnim 4s ease-in-out infinite; }
        .anim-pulse-slow { animation: pulseAnim 8s ease-in-out infinite; }
        .anim-float { animation: floatAnim 6s ease-in-out infinite; }
        .anim-float-slow { animation: floatAnim 10s ease-in-out infinite 1s; }
        .anim-float-slower { animation: floatAnim 15s ease-in-out infinite 2s; }
      `}</style>
      {/* Clean white background with orange accents */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* Subtle orange glow at top */}
        <div className="absolute inset-x-0 top-0 h-[400px] bg-gradient-to-b from-orange-50/40 via-orange-50/20 to-transparent" />
        
        {/* Soft radial gradients */}
        <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] animate-glow rounded-full bg-gradient-radial from-orange-100/20 via-orange-50/10 to-transparent blur-3xl" />
        <div className="absolute -right-1/4 bottom-1/4 h-[500px] w-[500px] animate-glow rounded-full bg-gradient-radial from-orange-100/15 via-orange-50/8 to-transparent blur-3xl" style={{animationDelay: '4s'}} />
      </div>

      <div className="relative z-10 pb-28">
        <Header mobileOpen={mobileOpen} onToggle={() => setMobileOpen((open) => !open)} />
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}

        <main>
          <HeroSection />
          <VideoSection />
          <LogosSection />
          <FormatsSection activeFormat={activeFormat} onSelect={setActiveFormat} />
          <FormatCards activeFormat={activeFormat} />
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
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/30 bg-white px-6 py-3.5 shadow-lg shadow-orange-500/10 backdrop-blur-xl transition-all duration-300 hover:border-[var(--orange-alpha-20)] hover:bg-white hover:shadow-xl hover:shadow-[var(--orange-alpha-10)]">
        <Link href="#hero" className="flex items-center gap-3 group" aria-label="YourStory – Accueil">
          <Image 
            src="/images/logos/urstoryBlack.png" 
            alt="YourStory Logo" 
            width={140} 
            height={40}
            className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
            priority
          />
          <span className="text-xl font-bold tracking-tight text-gray-900 transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-[var(--orange-600)] group-hover:to-[var(--orange-500)] group-hover:bg-clip-text group-hover:text-transparent">YourStory</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="relative transition-colors duration-200 hover:text-[var(--accent)] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[var(--orange-500)] after:to-[var(--orange-400)] after:transition-all after:duration-300 hover:after:w-full">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="hidden rounded-full bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[var(--orange-alpha-20)] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[var(--orange-alpha-30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 md:inline-flex"
          >
            Prendre un rendez-vous
          </a>
          <button
            type="button"
            onClick={onToggle}
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
            className="glass grid h-10 w-10 place-items-center rounded-xl text-gray-700 transition-all duration-200 hover:scale-105 hover:border-[var(--orange-alpha-20)] hover:text-[var(--accent)] md:hidden"
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
      <div className="mx-auto mt-4 max-w-5xl rounded-3xl border border-white/30 bg-white/60 p-6 shadow-xl backdrop-blur-xl">
        <nav className="grid gap-3 text-sm font-semibold text-gray-800">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={onClose} className="rounded-xl px-4 py-3 transition-all duration-200 hover:bg-[var(--orange-alpha-5)] hover:text-[var(--accent)]">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          onClick={onClose}
          className="mt-4 block rounded-full bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-[var(--orange-alpha-20)] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[var(--orange-alpha-30)]"
        >
          Prendre un rendez-vous
        </a>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative px-4 pt-32 md:px-6 lg:pt-36">
      {/* Hero gradient halo */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_var(--orange-alpha-15)_0%,_transparent_70%)] blur-3xl" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Badge>
          <span className="rounded-full border border-[var(--orange-alpha-30)] bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[var(--accent)] shadow-sm backdrop-blur-sm">CH</span>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-700">Agence suisse experte en vidéos verticales</span>
        </Badge>
        <h1 className="mt-8 text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-[4rem]">
          <span className="block bg-gradient-to-r from-[var(--orange-600)] via-[var(--orange-500)] to-[var(--orange-400)] bg-clip-text text-transparent drop-shadow-sm">Explosez vos ventes</span>
          grâce à des vidéos performantes
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
          100% de clients satisfaits, +20 entreprises locales accompagnées et des vidéos qui apportent vraiment des résultats.
        </p>
        <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
          {/* CTA glow effect */}
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--orange-alpha-20)] blur-2xl" />
          <a
            href="#cta"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-[var(--orange-alpha-30)] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--orange-alpha-30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
          >
            <span className="relative z-10">Je veux faire exploser ma marque</span>
            <ArrowRightIcon className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            <span aria-hidden className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[var(--orange-700)] to-[var(--orange-600)] transition-transform duration-500 group-hover:translate-x-0" />
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {GUARANTEES.map((guarantee) => (
            <span
              key={guarantee}
              className="rounded-full border border-white/40 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-700 shadow-sm backdrop-blur-md"
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
    <section className="px-4 pt-20 md:px-6">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[var(--radius-xl)] border border-white/30 bg-white/60 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-[1.01] hover:border-[var(--orange-alpha-20)] hover:bg-white/70 hover:shadow-[0_30px_80px_rgba(253,89,4,0.15)]">
        <div className="relative aspect-video bg-gray-950">
          <iframe
            src="https://player.vimeo.com/video/76979871?h=7f91176328&title=0&byline=0&portrait=0"
            title="Showreel vidéo"
            className="absolute inset-0 h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <div className="absolute left-1/2 top-4 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/40 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-900 shadow-lg backdrop-blur-xl">
            <span>Unmute</span>
          </div>
          <div className="absolute right-4 top-4 grid gap-2">
            <VideoFloatingIcon label="Favoris" className="hover:scale-110 transition-transform duration-300">
              <HeartIcon className="h-3.5 w-3.5" />
            </VideoFloatingIcon>
            <VideoFloatingIcon label="Partager" className="hover:scale-110 transition-transform duration-300">
              <ShareIcon className="h-3.5 w-3.5" />
            </VideoFloatingIcon>
            <VideoFloatingIcon label="Enregistrer" className="hover:scale-110 transition-transform duration-300">
              <BookmarkIcon className="h-3.5 w-3.5" />
            </VideoFloatingIcon>
          </div>
        </div>
      </div>
      <p className="mt-6 text-center text-sm text-gray-600">Nous avons déjà fait exploser +200 entreprises.</p>
    </section>
  );
}

function LogosSection() {
  return (
    <section id="portfolio" className="relative overflow-hidden px-4 py-20 md:px-6">
      {/* Section gradient divider */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      <div className="mx-auto max-w-5xl space-y-10 text-center">
        {LOGO_ROWS.map((logos, row) => (
          <div key={row} className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold tracking-wide text-gray-600 sm:gap-10">
            {logos.map((logo) => (
              <span
                key={logo}
                className="group cursor-pointer rounded-[var(--radius-md)] border border-white/40 bg-white/70 px-4 py-2.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-[var(--orange-alpha-30)] hover:bg-white/80 hover:shadow-lg"
              >
                <span className="transition-colors duration-300 group-hover:text-[var(--color-accent)]">{logo}</span>
              </span>
            ))}
          </div>
        ))}
        <div className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 bg-white/70 px-6 py-3 text-sm font-medium text-gray-700 shadow-md backdrop-blur-xl" id="testimonials">
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
  activeFormat: 'iphone' | 'camera';
  onSelect: (format: 'iphone' | 'camera') => void;
}) {
  return (
    <section id="cases" className="relative overflow-hidden px-4 py-24 md:px-6">
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
    </section>
  );
}

function FormatCards({ activeFormat }: { activeFormat: 'iphone' | 'camera' }) {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-6">
      {/* Section gradient divider */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {FORMAT_CARDS.map((card) => (
          <div
            key={card.title}
            className={`group cursor-pointer overflow-hidden rounded-[var(--radius-xl)] border border-white/30 bg-white/60 p-6 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-[var(--orange-alpha-30)] hover:bg-white/70 hover:shadow-2xl hover:shadow-[var(--orange-alpha-15)] ${
              activeFormat === 'iphone' && card.title.includes("iPhone")
                ? 'border-[var(--orange-500)] shadow-[var(--orange-alpha-30)]'
                : activeFormat === 'camera' && card.title.includes('caméra')
                ? 'border-[var(--orange-500)] shadow-[var(--orange-alpha-30)]'
                : ''
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] bg-gradient-to-br from-gray-50 to-white transition-all duration-500 group-hover:from-[var(--orange-50)] group-hover:to-white">
              <div className="absolute inset-x-6 top-6 rounded-full border border-[var(--orange-alpha-30)] bg-white/80 px-4 py-1.5 text-xs font-bold text-[var(--accent)] shadow-md backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-[var(--orange-500)] group-hover:bg-white group-hover:shadow-lg">
                {card.title}
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-[var(--radius-lg)] border border-white/40 bg-white/80 p-4 text-left text-sm text-gray-700 shadow-lg backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[var(--orange-alpha-20)] group-hover:bg-white/90 group-hover:shadow-xl">
                {card.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FloatingCTA() {
  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-20 hidden md:block" id="cta">
      <a
        href="#cta"
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] px-6 py-3 text-sm font-semibold text-white shadow-2xl shadow-[var(--orange-alpha-30)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--orange-alpha-30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
      >
        Prendre un rendez-vous
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
}

function ResultsSection() {
  return (
    <section id="results" className="relative overflow-hidden px-4 py-24 md:px-6">
      {/* Section gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--orange-alpha-5)] to-transparent" />
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end">
          <div className="flex-1 space-y-4">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500">
              Résultats & récits
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-[2.75rem]">
              Des campagnes pilotées par la data, prêtes à devenir vos prochaines études de cas.
            </h2>
          </div>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {KPI_CARDS.map((kpi) => (
            <div
              key={kpi.title}
              className="group flex h-full flex-col justify-between rounded-[var(--radius-xl)] border border-white/30 bg-white/60 px-6 py-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-[var(--orange-alpha-30)] hover:bg-white/70 hover:shadow-2xl hover:shadow-[var(--orange-alpha-15)]"
            >
              <div className="space-y-4">
                <span className="inline-flex w-max rounded-full border border-[var(--orange-alpha-30)] bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)] shadow-sm backdrop-blur-sm">
                  KPI
                </span>
                <p className="text-3xl font-semibold text-[#FD5904]">{kpi.title}</p>
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
    <section id="offers" className="relative overflow-hidden px-4 py-24 md:px-6">
      {/* Section gradient divider */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500">
              Offres YourStory
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-[2.75rem]">
              Deux packs modulables pour rythmer vos lancements et nourrir vos funnels.
            </h2>
          </div>
          <p className="text-sm font-medium text-gray-600">
            Sans engagement, optimisés pour vos campagnes paid & organiques.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {OFFERS.map((offer) => (
            <div
              key={offer.title}
              className="flex h-full flex-col justify-between rounded-[var(--radius-xl)] border border-white/30 bg-white/60 px-8 py-10 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-[var(--orange-alpha-30)] hover:bg-white/70 hover:shadow-2xl hover:shadow-[var(--orange-alpha-15)]"
            >
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500">
                    {offer.title}
                  </p>
                  <p className="mt-4 text-3xl font-bold text-gray-900">{offer.price}</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{offer.description}</p>
                </div>
                <ul className="space-y-3 text-sm text-gray-700">
                  {offer.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-br from-[var(--orange-600)] to-[var(--orange-500)]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#cta"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[var(--orange-alpha-30)] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--orange-alpha-30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
              >
                Démarrer
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
    <section id="testimonials-full" className="relative overflow-hidden px-4 py-24 md:px-6">
      {/* Section gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--orange-alpha-5)] to-transparent" />
      <div className="relative mx-auto max-w-6xl">
        <div className="space-y-4">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500">
            Avis & trust
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-[2.75rem]">
            Nos clients en parlent mieux que nous.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-[var(--radius-xl)] border border-white/30 bg-white/60 px-6 py-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-[var(--orange-alpha-30)] hover:bg-white/70 hover:shadow-2xl hover:shadow-[var(--orange-alpha-15)]"
            >
              <p className="text-lg font-semibold leading-relaxed text-black">
                "{testimonial.quote}"
              </p>
              <p className="mt-4 text-sm text-black/60">{testimonial.name}</p>
            </div>
          ))}
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
    <section id="faq" className="relative overflow-hidden px-4 py-24 md:px-6">
      {/* Section gradient divider */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md space-y-4">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500">
              FAQ
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-[2.75rem]">
              Vos questions sur la production et la performance.
            </h2>
          </div>
          <div className="flex-1">
            <div className="divide-y divide-gray-200/50 rounded-[var(--radius-xl)] border border-white/30 bg-white/60 shadow-2xl backdrop-blur-xl">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={item.question}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-gray-900 transition-colors hover:bg-[var(--orange-alpha-5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
                    >
                      <span>{item.question}</span>
                      <span
                        aria-hidden="true"
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-full border-2 text-lg font-bold shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110 ${
                          isOpen ? "rotate-45 border-[var(--orange-500)] bg-gradient-to-br from-[var(--orange-600)] to-[var(--orange-500)] text-white shadow-lg shadow-[var(--orange-alpha-30)]" : "border-white/40 bg-white/70 text-gray-900"
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid overflow-hidden transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-5 text-sm leading-relaxed text-gray-700">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section id="final-cta" className="relative overflow-hidden px-4 py-24 md:px-6">
      {/* Final CTA gradient halo */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_var(--orange-alpha-15)_0%,_transparent_70%)] blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-4 text-center md:px-6">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500">
          Prêt à écrire la suite ?
        </p>
        <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Vos histoires méritent un format qui performe.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-gray-700 md:text-lg">
          Réservons un appel découverte : nous répondons sous 24h avec un plan d'action et des idées de narration sur-mesure.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-[var(--orange-alpha-30)] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--orange-alpha-30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
          >
            Réserver un appel
            <ArrowRightIcon className="h-5 w-5" />
          </a>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-md">
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
    <div className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/70 px-5 py-2 shadow-md backdrop-blur-xl">
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
    <span className="inline-block cursor-pointer rounded-full border border-[var(--orange-alpha-30)] bg-white/70 px-4 py-2 text-[var(--accent)] shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-[var(--orange-500)] hover:bg-white/80 hover:shadow-md">
      {children}
    </span>
  );
}

function VideoFloatingIcon({ children, label, className = '' }: { children: ReactNode; label: string; className?: string }) {
  return (
    <span className={`grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-white/70 text-gray-900 shadow-md backdrop-blur-xl transition-all duration-200 hover:scale-110 hover:border-[var(--orange-alpha-30)] hover:bg-white/80 ${className}`} aria-label={label}>
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
