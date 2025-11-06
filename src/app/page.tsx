'use client';

import type { ReactNode, SVGProps } from 'react';
import { useState } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '#hero', label: 'Accueil' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#cases', label: 'Étude de cas' },
  { href: '#testimonials', label: 'Avis clients' },
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

const FORMATS: Array<{ id: 'iphone' | 'camera'; label: string }> = [
  { id: 'iphone', label: "Format à l'iPhone" },
  { id: 'camera', label: 'Format à la caméra' },
];

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFormat, setActiveFormat] = useState<'iphone' | 'camera'>('iphone');

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-gray-900">
      {/* Background auras */}
      <div aria-hidden className="pointer-events-none">
        <div className="absolute inset-x-0 top-[-22rem] h-[32rem] bg-gradient-to-b from-[#ede8ff] via-white to-white" />
        <div className="absolute left-[-14rem] top-[-6rem] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_top_left,_rgba(136,106,255,0.35),_transparent_65%)] blur-3xl" />
        <div className="absolute right-[-14rem] top-[-4rem] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_top_right,_rgba(93,145,255,0.35),_transparent_60%)] blur-3xl" />
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
        </main>

        <FloatingCTA />
        <Footer />
      </div>
    </div>
  );
}

function Header({ mobileOpen, onToggle }: { mobileOpen: boolean; onToggle: () => void }) {
  return (
    <header className="px-4 pt-8 md:px-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/70 bg-white/80 px-5 py-3 shadow-xl shadow-indigo-200/40 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <Link href="#hero" className="flex items-center gap-1 text-2xl font-bold tracking-tight text-indigo-600" aria-label="short – Accueil">
          <span>short</span>
          <span className="-mt-[2px] text-3xl text-indigo-500">.</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-gray-900">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="hidden rounded-full bg-black px-5 py-2 text-sm font-semibold text-white shadow transition hover:bg-gray-900 md:inline-flex"
          >
            Prendre un rendez-vous
          </a>
          <button
            type="button"
            onClick={onToggle}
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
            className="grid h-10 w-10 place-items-center rounded-lg border border-gray-200 text-gray-700 transition hover:border-gray-300 md:hidden"
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
      <div className="mx-auto mt-4 max-w-5xl rounded-3xl border border-gray-200 bg-white p-5 shadow-lg">
        <nav className="grid gap-2 text-sm font-medium text-gray-800">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-xl px-3 py-2 transition hover:bg-gray-50"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          onClick={onClose}
          className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-black px-5 py-2 text-sm font-semibold text-white"
        >
          Prendre un rendez-vous
        </a>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="px-4 pt-12 md:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <Badge>
          <span className="rounded-full bg-indigo-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-indigo-600">FR</span>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-600">L'agence vidéo verticale №1 en France</span>
        </Badge>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-[3.4rem]">
          <span className="block text-indigo-600">Explosez vos ventes</span>
          grâce à des vidéos performantes
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
          100% de clients satisfaits, +200 entreprises accompagnées et des vidéos qui apportent vraiment des résultats.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-700"
          >
            Je veux faire exploser ma marque
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-gray-700">
          <Bullet>Sans engagement.</Bullet>
          <Bullet>Modifications illimitées.</Bullet>
          <Bullet>Publicité et organique.</Bullet>
        </ul>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="px-4 pt-16 md:px-6">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/60 bg-white/80 shadow-[0_32px_120px_rgba(99,102,241,0.28)] backdrop-blur">
        <div className="relative aspect-video bg-gray-950">
          <iframe
            src="https://player.vimeo.com/video/76979871?h=7f91176328&title=0&byline=0&portrait=0"
            title="Showreel vidéo"
            className="absolute inset-0 h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <div className="absolute left-1/2 top-4 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/70 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
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
      <p className="mt-6 text-center text-sm text-gray-600">Nous avons déjà fait exploser +200 entreprises.</p>
    </section>
  );
}

function LogosSection() {
  return (
    <section id="portfolio" className="px-4 pt-12 md:px-6">
      <div className="mx-auto max-w-5xl space-y-10 text-center">
        {LOGO_ROWS.map((logos, row) => (
          <div key={row} className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold tracking-wide text-gray-600 sm:gap-10">
            {logos.map((logo) => (
              <span
                key={logo}
                className="rounded-2xl border border-gray-200/70 bg-white px-4 py-2 shadow-sm shadow-indigo-100/30 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                {logo}
              </span>
            ))}
          </div>
        ))}
        <div className="flex items-center justify-center gap-3 text-sm text-gray-700" id="testimonials">
          <span className="font-semibold text-green-600">Excellent</span>
          <TrustPilotStars />
          <span>Trustpilot</span>
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
    <section id="cases" className="px-4 pt-16 md:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-[2.2rem]">
          L'accompagnement vidéo le plus puissant de <span className="text-indigo-600">2025</span> 🏅
        </h2>
        <p className="mt-4 text-base text-gray-600 sm:text-lg">
          Le point commun entre toutes ces vidéos&nbsp;? Elles ont explosé les performances de nos clients, en publicité ou en organique.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-[13px] font-semibold uppercase tracking-wide text-indigo-600">
          <SocialBadge>Snapchat</SocialBadge>
          <SocialBadge>Instagram</SocialBadge>
          <SocialBadge>TikTok</SocialBadge>
          <SocialBadge>YouTube</SocialBadge>
        </div>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-semibold text-indigo-600">
          <SparkleIcon className="h-4 w-4" />
          Clique pour découvrir les différents formats.
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {FORMATS.map((format) => (
            <button
              key={format.id}
              type="button"
              onClick={() => onSelect(format.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeFormat === format.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                  : 'border border-gray-200 bg-white text-gray-700 hover:bg-indigo-50'
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
    <section className="px-4 pt-14 md:px-6">
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {FORMAT_CARDS.map((card) => (
          <div
            key={card.title}
            className={`group overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-xl shadow-indigo-200/40 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl ${
              activeFormat === 'iphone' && card.title.includes("iPhone")
                ? 'ring-2 ring-indigo-600/70'
                : activeFormat === 'camera' && card.title.includes('caméra')
                ? 'ring-2 ring-indigo-600/70'
                : 'ring-1 ring-transparent'
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-200 via-purple-200 to-blue-200">
              <div className="absolute inset-x-6 top-6 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-indigo-600 shadow-sm">
                {card.title}
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-4 text-left text-sm text-gray-700 shadow">
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
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-indigo-500/40 transition hover:bg-gray-900"
      >
        Prendre un rendez-vous
        <ArrowRightIcon className="h-4 w-4" />
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="px-4 pt-20 md:px-6">
      <div className="mx-auto max-w-5xl border-t border-gray-200/70 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} short. Tous droits réservés.
      </div>
    </footer>
  );
}

/* ---------- Small UI helpers ---------- */

function Badge({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-1.5 shadow-sm shadow-indigo-100/40 backdrop-blur">
      {children}
    </div>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="inline-flex items-center gap-2 text-gray-700">
      <DotIcon className="h-2.5 w-2.5 text-indigo-600" />
      {children}
    </li>
  );
}

function SocialBadge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-semibold text-indigo-600 shadow-sm">
      {children}
    </span>
  );
}

function VideoFloatingIcon({ children, label }: { children: ReactNode; label: string }) {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-full bg-white/70 text-gray-900 backdrop-blur transition hover:bg-white" aria-label={label}>
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
