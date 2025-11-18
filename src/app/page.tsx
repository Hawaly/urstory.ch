// app/page.tsx (SERVER COMPONENT, sans "use client")
import type { ReactNode, SVGProps } from 'react';
import Link from "next/link";
import Image from "next/image";
import VideoPlayer from './components/VideoPlayer';
import CalendlyButton from './components/CalendlyButton';
import PremiumFooter from './components/PremiumFooter';
import MethodSectionClient from './components/MethodSectionClient';
import ClientLogosCarousel from './components/ClientLogosCarousel';
import TestimonialsCarousel from './components/TestimonialsCarousel';

const NAV_LINKS = [
  { href: '#hero', label: 'Accueil' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#results', label: 'Résultats' },
  { href: '#offers', label: 'Offres' },
  { href: '#testimonials-full', label: 'Avis' },
  { href: '#faq', label: 'FAQ' },
];

const FORMAT_CARDS = [
  {
    title: 'Vidéo présentative Boca Food&Juice',
    description: 'Boca Food & Juices à Neuchâtel est un snack moderne et sain proposant wraps, açaí bowls et jus frais',
    videoId: '1135383362',
    videoTitle: 'Boca_01',
  },
  {
    title: 'Sakura Sushi',
    description: 'Sakura à Neuchâtel est un restaurant japonais moderne qui propose sushis, sashimis, poke bowls et plats chauds',
    videoId: '1135380601',
    videoTitle: 'Sakura_01',
  },
  {
    title: 'Vidéo présentative Sraps',
    description: 'Sraps à Neuchâtel est un comptoir « healthy » où l’on compose soi-même son poke bowl, son wrap ou sa salade',
    videoId: '1135382333',
    videoTitle: 'Sraps_01',
  },
];

const ADDITIONAL_VIDEOS = [
  {
    title: "Sraps",
    description: 'Sraps à Neuchâtel est un comptoir « healthy » où l’on compose soi-même son poke bowl, son wrap ou sa salade',
    videoId: '1135381558',
    videoTitle: 'Sraps_02',
  },
  {
    title: 'Melimelo barbershop',
    description: 'MeliMelo Barbershop est un salon de coiffure & barbier moderne à Neuchâte',
    videoId: '1135383645',
    videoTitle: 'melimelo_02',
  },
  {
    title: 'Le Spot',
    description: 'Un fast food qui propose des smash burger et des crousty à la chaux de fonds',
    videoId: '1135380845',
    videoTitle: 'leSpot_01',
  },
];

const KPI_CARDS = [
  {
    title: "3x plus de ventes",
    description: "En moyenne, nos clients multiplient leurs conversions grâce à des vidéos qui racontent leur histoire.",
  },
  {
    title: "10x plus d'engagement",
    description: "Vos vidéos génèrent des likes, partages et commentaires qui boostent votre visibilité organique.",
  },
  {
    title: "Retour sur investissement garanti",
    description: "Chaque franc investi dans vos vidéos vous rapporte en nouveaux clients et en notoriété.",
  },
];

const OFFERS = [
  {
    title: "Pack de 10 posts",
    price: "2000 CHF",
    description: "Stratégie marketing complète + 10 posts par mois (6 vidéos + 4 carrousels).",
    inclusions: [
      "Stratégie marketing personnalisée",
      "Analyse de votre cible & positionnement",
      "Production de 6 vidéos professionnelles",
      "Création de 4 carrousels engageants",
      "Proposition de 15 concepts créatifs",
      "Rédaction de scripts optimisés SEO",
      "Activation d'un acteur professionnel",
      "Tournage et montage complet en interne",
      "Modifications illimitées jusqu'à satisfaction",
      "Publication et suivi des performances",
    ],
  },
  {
    title: "Business Booster",
    price: "1400 CHF",
    description: "Stratégie marketing ciblée + 6 vidéos percutantes pour booster votre croissance.",
    inclusions: [
      "Stratégie marketing sur mesure",
      "Analyse de votre audience cible",
      "Production de 6 vidéos optimisées",
      "Proposition de 15 concepts créatifs",
      "Rédaction de scripts orientés conversion",
      "Activation d'un acteur professionnel",
      "Tournage et montage premium",
      "Modifications illimitées",
      "Publication clé en main",
    ],
  },
];

const TESTIMONIALS = [
  {
    quote: "YourStory a su capturer la vibe unique de ClassiGym avec une qualité exceptionnelle. Leur travail reflète parfaitement notre énergie et notre passion pour le fitness. Chaque vidéo respire l'authenticité !",
    name: "Alessio, Fondateur @ ClassiGym",
  },
  {
    quote: "Des stratégies créatives qui font la différence ! L'équipe YourStory comprend notre vision et crée des contenus dans une superbe ambiance de travail. Leur créativité booste vraiment notre image de marque.",
    name: "Sami, Fondateur @ NxtLvl",
  },
  {
    quote: "La créativité et l'ambiance que YourStory apporte à nos vidéos sont incroyables. Ils ont su créer un univers visuel qui correspond parfaitement à l'identité de Boca. Nos clients sont conquis !",
    name: "Fabio, Gérant @ Boca Food & Juice",
  },
  {
    quote: "Résultat exceptionnel : notre chiffre d'affaires a doublé grâce aux vidéos YourStory ! Leur approche professionnelle et leur compréhension de notre marché ont fait toute la différence.",
    name: "Mohammed, Directeur @ Alibaba",
  },
  {
    quote: "Process ultra professionnel de A à Z. L'équipe a capté l'essence de notre concept healthy et ça se voit dans chaque vidéo. Nos clients adorent !",
    name: "Sofian, Fondateur @ Sraps",
  },
  {
    quote: "Enfin des vidéos qui nous ressemblent ! YourStory a su mettre en valeur notre univers barbershop avec un style moderne et authentique. Résultat : +40% de nouveaux clients.",
    name: "Ahmed, Co-fondateur @ MeliMelo Barbershop",
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
    question: "Combien d&apos;itérations sont prévues ?",
    answer: "Deux séries de retours sont incluses pour affiner narration, rythme et habillage selon vos retours.",
  },
  {
    question: "Qui détient les droits d&apos;usage ?",
    answer: "Vous disposez d&apos;une licence mondiale illimitée pour la durée de la campagne sur les canaux prévus au contrat.",
  },
];

const FORMATS: Array<{ id: 'iphone' | 'camera' | 'founder' | 'all'; label: string }> = [
  { id: 'all', label: 'Tous les formats' },
  { id: 'iphone', label: "Format à l&apos;iPhone" },
  { id: 'camera', label: 'Format à la caméra' },
  { id: 'founder', label: 'Founder stories' },
];

const GUARANTEES = [
  "Sans engagement",
  "Modifications incluses",
  "Publicité & organique",
];

/* Page Server Component */
export default function Page() {
  return (
    <div suppressHydrationWarning className="relative min-h-screen bg-white text-gray-900">
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

      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <VideoSection />
          <LogosSection />
          <FormatsSection />
          <ResultsSection />
          <MethodSection />
          <OffersSection />
          <TestimonialsSection />
          <FAQSection />
          <ClientLoginSection />
          <FinalCTASection />
        </main>

        <PremiumFooter />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3">
      <div className="mx-auto flex max-w-5xl items-center justify-between glass-nav px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3.5">
        {/* Logo glow effect - hidden on mobile */}
        <div className="absolute left-6 top-1/2 -z-10 h-12 w-12 -translate-y-1/2 rounded-full bg-orange-500/20 blur-xl animate-pulse-subtle hidden md:block" />
        
        <Link href="#hero" className="flex items-center gap-2 sm:gap-3 group relative" aria-label="YourStory – Accueil">
          <div className="relative">
            <Image 
              src="/images/logos/urstoryBlack.png" 
              alt="YourStory Logo" 
              width={140} 
              height={40}
              className="h-6 w-auto sm:h-7 md:h-10 transition-all duration-300 group-hover:scale-105"
              priority
            />
            <div className="absolute -inset-1 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-orange-500/10 blur-lg rounded-full" />
          </div>
          {/* Texte YourStory - caché sur mobile */}
          <span className="hidden lg:inline text-lg md:text-xl font-bold tracking-tight text-gray-900 transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-[var(--orange-600)] group-hover:to-[var(--orange-500)] group-hover:bg-clip-text group-hover:text-transparent">YourStory</span>
        </Link>
        
        <nav className="hidden items-center gap-6 lg:gap-8 text-xs sm:text-sm font-medium text-gray-700 lg:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="relative transition-all duration-200 hover:text-[var(--accent)] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[var(--orange-500)] after:to-[var(--orange-400)] after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-2 sm:gap-3">
          <a 
            href="/login" 
            className="hidden lg:inline-flex items-center gap-2 rounded-full border-2 border-gray-200 bg-white px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:border-orange-500/40 hover:bg-orange-50 hover:text-orange-600"
          >
            <svg className="h-3.5 w-3.5 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="hidden xl:inline">Login</span>
          </a>
          <CalendlyButton className="hidden lg:inline-flex btn-primary !px-3 !py-1.5 md:!px-4 md:!py-2 !text-xs md:!text-sm">
            <span className="hidden xl:inline">Prendre un rendez-vous</span>
            <span className="xl:hidden">RDV</span>
            <ArrowRightIcon className="h-3 w-3 md:h-3.5 md:w-3.5 transition-transform duration-300 hover:translate-x-1" />
          </CalendlyButton>
          <details className="lg:hidden">
            <summary
              aria-label="Ouvrir le menu"
              className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-lg border-2 border-white/40 bg-white/40 backdrop-blur-xl text-gray-800 transition-all duration-200 hover:border-orange-500/40 hover:bg-white/50 hover:text-[var(--accent)] list-none cursor-pointer shadow-lg"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="absolute top-full left-0 right-0 mt-2 sm:mt-3 px-3 sm:px-4">
              <div className="menu-surface mx-auto max-w-5xl rounded-[var(--radius-xl)] border-2 border-white/40 bg-white/35 backdrop-blur-2xl shadow-2xl p-4 sm:p-5">
                <nav className="grid gap-2 text-sm font-semibold text-gray-800">
                  {NAV_LINKS.map((link) => (
                    <a key={link.href} href={link.href} className="rounded-lg px-4 py-2.5 sm:py-3 transition-all duration-200 hover:bg-orange-500/10 hover:text-[var(--accent)]">
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-4 space-y-2">
                  <a 
                    href="/login" 
                    className="flex items-center justify-center gap-2 rounded-lg border-2 border-gray-200 bg-white px-4 py-2.5 sm:py-3 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-orange-50 hover:border-orange-500/40 hover:text-orange-600"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Login Espace Client</span>
                  </a>
                  <CalendlyButton className="block btn-primary text-center w-full">
                    Prendre un rendez-vous
                  </CalendlyButton>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative px-4 pt-12 sm:pt-16 md:px-6 md:pt-20 lg:pt-24 section scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32">
      {/* Hero gradient halo */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] md:h-[600px] md:w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_var(--orange-alpha-15)_0%,_transparent_70%)] blur-3xl animate-pulse-subtle" />
      <div aria-hidden className="pointer-events-none absolute right-1/4 top-1/4 h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] rounded-full bg-[radial-gradient(circle,_var(--orange-alpha-10)_0%,_transparent_70%)] blur-3xl animate-float-slow" />
      
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="glass-badge inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2">
          <span className="glass-base rounded-full px-2 sm:px-2.5 py-0.5 sm:py-1 text-[8px] sm:text-[9px] font-bold uppercase tracking-wide text-[var(--accent)] shadow-sm">CH</span>
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gray-700">Agence suisse experte en vidéos verticales</span>
        </div>
        
        <h1 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-gray-900 animate-fade-up" style={{ animationDelay: '100ms' }}>
          <span className="block bg-gradient-to-r from-[var(--orange-600)] via-[var(--orange-500)] to-[var(--orange-400)] bg-clip-text text-transparent drop-shadow-sm">Votre histoire mérite d&apos;être vue</span>
          <span className="block mt-1 sm:mt-2">Nous en faisons des vidéos qui explosent vos ventes</span>
        </h1>
        
        <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-gray-700 px-2 sm:px-0 animate-fade-up" style={{ animationDelay: '200ms' }}>
          100% de clients satisfaits, +20 entreprises locales accompagnées et des vidéos qui apportent vraiment des résultats.
        </p>
        
        <div className="relative mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 px-4 sm:px-0 animate-fade-up" style={{ animationDelay: '300ms' }}>
          {/* CTA glow effect */}
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--orange-alpha-20)] blur-2xl animate-pulse-subtle" />
          
          <CalendlyButton className="btn-primary text-sm sm:text-base">
            <span className="whitespace-nowrap">Je veux faire exploser ma marque</span>
            <ArrowRightIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 hover:translate-x-1" />
          </CalendlyButton>
        </div>
        
        <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-2 px-4 sm:px-0 animate-fade-up" style={{ animationDelay: '400ms' }}>
          {GUARANTEES.map((guarantee) => (
            <span
              key={guarantee}
              className="glass-badge px-2.5 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.15em] text-gray-700"
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
    <section className="px-4 pt-8 sm:pt-10 md:pt-12 md:px-6 animate-fade-up" style={{ animationDelay: '500ms' }}>
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[var(--radius-lg)] sm:rounded-[var(--radius-xl)] border-2 border-white/40 bg-gradient-to-br from-white/40 via-orange-50/30 to-white/40 backdrop-blur-2xl shadow-2xl transition-all duration-500 hover:border-orange-500/40 hover:shadow-[0_20px_60px_rgba(253,89,4,0.15)]">
        {/* Placeholder vidéo en attente */}
        <div className="relative aspect-video flex flex-col items-center justify-center p-8 sm:p-12 md:p-16">
          {/* Effet de fond animé */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-orange-500/10 via-orange-400/5 to-transparent blur-3xl animate-pulse-subtle" />
          </div>
          
          {/* Contenu */}
          <div className="relative z-10 text-center space-y-4 sm:space-y-6">
            {/* Icône vidéo */}
            <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl shadow-orange-500/30 animate-pulse-subtle">
              <svg 
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white ml-1" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            
            {/* Texte */}
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                Vidéo en préparation
              </h3>
              <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto">
                Notre showreel arrive bientôt. En attendant, découvrez nos réalisations ci-dessous.
              </p>
            </div>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-white/80 px-4 py-2 text-xs sm:text-sm font-medium text-orange-600 backdrop-blur-md shadow-sm">
              <SparkleIcon className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Bientôt disponible</span>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-gray-600 px-2 sm:px-0 animate-fade-up" style={{ animationDelay: '600ms' }}>Nous avons déjà fait exploser <span className="font-semibold text-[var(--accent)]">+20 entreprises</span>.</p>
    </section>
  );
}

function LogosSection() {
  const clientLogos = [
    { src: '/images/logos/clientLogos/alibaba.png', alt: 'Alibaba' },
    { src: '/images/logos/clientLogos/classiGym.cpng.png', alt: 'ClassiGym' },
    { src: '/images/logos/clientLogos/ladifférence.png', alt: 'La Différence' },
    { src: '/images/logos/clientLogos/Lespot.png', alt: 'Le Spot' },
    { src: '/images/logos/clientLogos/logo_sraps.png', alt: 'Sraps' },
    { src: '/images/logos/clientLogos/logo-boca-scaled.png', alt: 'Boca Food & Juice' },
    { src: '/images/logos/clientLogos/melimeloLogo.png', alt: 'MeliMelo' },
    { src: '/images/logos/clientLogos/nxtlvl.png', alt: 'NxtLvl' },
  ];

  return (
    <section id="portfolio" className="relative overflow-hidden px-4 py-12 sm:py-16 md:px-6 md:py-20 section scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32">
      {/* Décor de fond avec orbes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] md:h-[600px] md:w-[600px] bg-gradient-radial from-[var(--orange-alpha-10)] to-transparent blur-3xl animate-pulse-subtle" />
      </div>
      
      <div className="mx-auto max-w-4xl text-center animate-fade-up" style={{ animationDelay: '700ms' }}>
        {/* Client Logos Section - Carousel avec boutons */}
        <div>
          <p className="text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8 font-medium">
            Ils nous font confiance
          </p>
          
          <ClientLogosCarousel logos={clientLogos} />
        </div>
      </div>
    </section>
  );
}

function FormatsSection() {
  return (
    <section id="cases" className="relative overflow-hidden px-4 py-16 sm:py-20 md:py-24 md:px-6 section scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32">
      {/* Section gradient */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--orange-alpha-5)] to-transparent" />
      <div className="relative mx-auto max-w-4xl text-center px-2 sm:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-semibold leading-tight text-gray-900">
          L&apos;accompagnement vidéo le plus puissant de <span className="bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] bg-clip-text text-transparent">2025</span> 🏅
        </h2>
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
          Le point commun entre toutes ces vidéos&nbsp;? Elles ont explosé les performances de nos clients, en publicité ou en organique.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-bold uppercase tracking-wide">
          <SocialBadge>Instagram</SocialBadge>
          <SocialBadge>TikTok</SocialBadge>
        </div>
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs">
          {FORMATS.slice(1).map((format) => (
            <span key={format.id} className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[var(--orange-alpha-30)] bg-white/70 px-3 sm:px-4 py-1.5 sm:py-2 font-semibold text-[var(--accent)] shadow-sm backdrop-blur-md">
              <SparkleIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
              {format.label}
            </span>
          ))}
        </div>
      </div>
      
      {/* Vidéos Vimeo - Défilement horizontal sur mobile, grid sur tablet+ */}
      <div className="mt-12 sm:mt-16">
        {/* Conteneur avec overflow pour mobile, grid pour tablet+ */}
        <div className="md:mx-auto md:max-w-5xl">
          {/* Mobile: Scroll horizontal avec snap */}
          <div className="flex gap-4 sm:gap-6 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scrollbar-hide md:hidden">
            {[...FORMAT_CARDS, ...ADDITIONAL_VIDEOS].map((card, index) => (
              <div
                key={card.title}
                className="flex-shrink-0 w-[85vw] max-w-sm snap-center"
              >
                <div className="group h-full overflow-hidden rounded-[var(--radius-lg)] sm:rounded-[var(--radius-xl)] border border-white/30 bg-white/60 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-[var(--orange-alpha-30)] hover:bg-white/70 hover:shadow-2xl hover:shadow-[var(--orange-alpha-15)]">
                  <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                    <VideoPlayer videoId={card.videoId} title={card.videoTitle} size="default" />
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-2">{card.title}</h3>
                        <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-xs font-medium text-white flex-shrink-0">
                          {index < 3 ? 'Premium' : 'Standard'}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 line-clamp-3">{card.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet & Desktop: Grid responsive */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[...FORMAT_CARDS, ...ADDITIONAL_VIDEOS].map((card, index) => (
              <div
                key={card.title}
                className="group overflow-hidden rounded-[var(--radius-xl)] border border-white/30 bg-white/60 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-[var(--orange-alpha-30)] hover:bg-white/70 hover:shadow-2xl hover:shadow-[var(--orange-alpha-15)]"
              >
                <div className="p-4 space-y-4">
                  <VideoPlayer videoId={card.videoId} title={card.videoTitle} size="default" />
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base lg:text-lg font-semibold text-gray-900">{card.title}</h3>
                      <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] px-2.5 py-0.5 text-xs font-medium text-white flex-shrink-0">
                        {index < 3 ? 'Premium' : 'Standard'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function ResultsSection() {
  return (
    <section id="results" className="relative overflow-hidden px-4 py-16 sm:py-20 md:py-24 md:px-6 section-premium scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32">
      {/* Section gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--orange-alpha-5)] to-transparent" />
      
      {/* Accent circles */}
      <div aria-hidden className="pointer-events-none absolute -left-20 top-40 h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] rounded-full bg-orange-500/5 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-20 bottom-20 h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] rounded-full bg-orange-500/5 blur-3xl" />
      
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end">
          <div className="flex-1 space-y-3 sm:space-y-4">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[var(--orange-alpha-30)] bg-white/80 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-[var(--accent)] shadow-sm backdrop-blur-md">
              <SparkleIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span>Ce que nos vidéos apportent</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight tracking-tight text-gray-900">
              Des vidéos qui <span className="bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] bg-clip-text text-transparent">génèrent des résultats concrets</span> pour votre entreprise.
            </h2>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-10 md:mt-12 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {KPI_CARDS.map((kpi, index) => (
            <div
              key={kpi.title}
              className="group relative flex h-full flex-col justify-between rounded-[var(--radius-lg)] sm:rounded-[var(--radius-xl)] border-2 border-white/40 bg-white/40 px-4 sm:px-5 md:px-6 py-6 sm:py-7 md:py-8 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 hover:scale-[1.02] sm:hover:scale-[1.03] hover:border-orange-500/40 hover:bg-white/50 hover:shadow-[0_25px_60px_rgba(253,89,4,0.15)]"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative space-y-3 sm:space-y-4 z-10">
                {/* Subtle gradient background */}
                <div className="absolute inset-0 -z-10 bg-gradient-subtle rounded-[var(--radius-lg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <span className="inline-flex w-max rounded-full border border-[var(--orange-alpha-30)] bg-white/80 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-xs font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[var(--accent)] shadow-sm backdrop-blur-sm group-hover:border-[var(--orange-500)] group-hover:bg-white transition-all duration-300">
                  KPI
                </span>
                <p className="text-2xl sm:text-3xl md:text-3xl font-semibold bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] bg-clip-text text-transparent">{kpi.title}</p>
                <p className="text-xs sm:text-sm text-black/70">{kpi.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MethodSection() {
  const steps = [
    {
      number: 1,
      title: "Stratégie",
      emoji: "🎯",
      description: "On plonge dans l'univers de ta marque pour comprendre tes clients, tes concurrents et créer un plan d'attaque vidéo qui déchire.",
      side: "left"
    },
    {
      number: 2,
      title: "Concepts",
      emoji: "💡",
      description: "On te balance une quinzaine d'idées créatives testées et approuvées, conçues pour faire stopper le scroll de ton audience.",
      side: "right"
    },
    {
      number: 3,
      title: "Scripts",
      emoji: "✍️",
      description: "On écrit des scénarios accros qui transforment ton message en histoire captivante, avec un début qui accroche et une fin qui convertit.",
      side: "left"
    },
    {
      number: 4,
      title: "Acteurs",
      emoji: "👨‍💼",
      description: "On recrute des talents pros (comédiens, créateurs ou spécialistes) qui donnent vie à ton contenu avec charisme et authenticité.",
      side: "right"
    },
    {
      number: 5,
      title: "Tournage",
      emoji: "🎬",
      description: "Notre équipe débarque avec tout le matériel pro et gère chaque prise de vue pour garantir un rendu cinématique de folie.",
      side: "left"
    },
    {
      number: 6,
      title: "Montage",
      emoji: "✂️",
      description: "On peaufine chaque seconde : cuts dynamiques, sous-titres accros, effets sonores et couleurs calibrées pour maximiser l'engagement.",
      side: "right"
    },
    {
      number: 7,
      title: "Livraison",
      emoji: "🚀",
      description: "Tu reçois tes vidéos exportées dans tous les formats nécessaires, plus un guide stratégique pour exploser tes performances.",
      side: "left"
    },
    {
      number: 8,
      title: "Satisfaction",
      emoji: "💖",
      description: "On affine ensemble jusqu'à ce que chaque détail soit parfait. Modifications illimitées jusqu'à ce que tu sois 100% satisfait.",
      side: "right"
    },
    {
      number: 9,
      title: "Analyse",
      emoji: "📊",
      description: "On track les résultats de tes vidéos et on te livre des recommandations data-driven pour optimiser tes futures campagnes.",
      side: "left"
    }
  ];

  return (
    <MethodSectionClient>
    <section className="relative overflow-hidden px-4 py-24 md:px-6 section-premium">
      {/* Ultra premium animated background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--orange-alpha-5)_0%,_transparent_50%)]" />
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--orange-alpha-10),transparent_50%),radial-gradient(ellipse_at_bottom,_var(--orange-alpha-10),transparent_50%)]" />
      </div>
      
      {/* Multiple floating orbs with different animations */}
      <div aria-hidden className="pointer-events-none absolute left-[10%] top-[15%] h-[400px] w-[400px] rounded-full bg-gradient-radial from-orange-400/25 via-orange-300/12 to-transparent blur-3xl animate-float-slow" />
      <div aria-hidden className="pointer-events-none absolute right-[15%] top-[40%] h-[350px] w-[350px] rounded-full bg-gradient-radial from-orange-500/20 via-orange-400/10 to-transparent blur-3xl animate-float-slow" style={{ animationDelay: '2s', animationDuration: '8s' }} />
      <div aria-hidden className="pointer-events-none absolute left-[20%] bottom-[20%] h-[300px] w-[300px] rounded-full bg-gradient-radial from-orange-300/25 via-orange-200/12 to-transparent blur-3xl animate-float-slow" style={{ animationDelay: '4s', animationDuration: '10s' }} />
      <div aria-hidden className="pointer-events-none absolute right-[25%] bottom-[35%] h-[250px] w-[250px] rounded-full bg-gradient-radial from-orange-400/15 via-orange-300/8 to-transparent blur-3xl animate-float-slow" style={{ animationDelay: '6s', animationDuration: '12s' }} />
      
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          aria-hidden
          className="pointer-events-none absolute w-2 h-2 rounded-full bg-orange-400/40"
          style={{
            left: `${10 + (i * 7)}%`,
            top: `${15 + (i * 6)}%`,
            animation: `float ${8 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
      
      <div className="relative mx-auto max-w-6xl">
        {/* Header with enhanced styling */}
        <div className="text-center mb-24 scroll-reveal-blur">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-orange-500/30 bg-gradient-to-r from-orange-50 to-white px-5 py-2 text-xs font-bold uppercase tracking-wider text-[var(--accent)] shadow-lg backdrop-blur-xl mb-6 hover:scale-105 transition-transform duration-300" data-animate-child>
            <SparkleIcon className="h-4 w-4 animate-pulse" />
            <span>Notre méthode</span>
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl max-w-4xl mx-auto" data-animate-child>
            La méthode pour avoir des <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[var(--orange-600)] via-[var(--orange-500)] to-[var(--orange-600)] bg-clip-text text-transparent animate-gradient">résultats</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full" />
            </span> (et enfin exploser vos performances ⭐)
          </h2>
        </div>

        {/* Enhanced Timeline */}
        <div className="relative">
          {/* Animated vertical line with progressive reveal */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden md:block parallax-element animated-timeline">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/30 via-orange-500/60 to-orange-500/30 rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 via-orange-400/40 to-orange-500/20 blur-sm animate-pulse" />
          </div>
          
          {/* Steps with advanced animations */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${step.side === 'left' ? 'scroll-reveal-left' : 'scroll-reveal-right'} ${step.side === 'right' ? 'md:flex-row-reverse' : ''}`}
                style={{ 
                  transitionDelay: `${index * 120}ms`
                }}
              >
                {/* Ultra premium Card */}
                <div className={`flex-1 ${step.side === 'left' ? 'md:pr-12' : 'md:pl-12'} w-full`} data-animate-child>
                  <div className="group relative perspective-1000 parallax-element">
                    {/* Multi-layer glow effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700 animate-pulse-slow" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                    
                    {/* Main card with 3D effect */}
                    <div className="relative rounded-2xl border-2 border-white/60 bg-gradient-to-br from-white/98 via-white/95 to-orange-50/90 p-8 shadow-2xl backdrop-blur-2xl transition-all duration-700 group-hover:-translate-y-4 group-hover:scale-[1.04] group-hover:shadow-[0_35px_80px_rgba(253,89,4,0.35)] group-hover:rotate-x-2 overflow-hidden">
                      {/* Animated gradient overlay with shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/8 via-transparent to-orange-400/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      {/* Shimmer effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <div className={`flex items-center gap-4 mb-4 ${step.side === 'left' ? 'md:justify-end' : ''}`} data-animate-child>
                          {/* Animated emoji with bounce */}
                          <div className="relative scroll-reveal-elastic">
                            <div className="absolute inset-0 bg-orange-500/20 rounded-2xl blur-xl group-hover:bg-orange-500/40 transition-all duration-500" />
                            <span className="relative text-5xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 inline-block">{step.emoji}</span>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-orange-600 group-hover:to-orange-500 transition-all duration-500">{step.title}</h3>
                            <div className="h-0.5 w-0 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full group-hover:w-full transition-all duration-500 mt-1" />
                          </div>
                        </div>
                        <p className={`text-base leading-relaxed text-gray-700 group-hover:text-gray-900 transition-colors duration-300 ${step.side === 'left' ? 'md:text-right' : ''}`} data-animate-child>
                          {step.description}
                        </p>
                      </div>
                      
                      {/* Decorative corner accent */}
                      <div className={`absolute ${step.side === 'left' ? 'top-0 left-0' : 'top-0 right-0'} w-20 h-20 bg-gradient-to-br from-orange-500/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    </div>
                  </div>
                </div>

                {/* Ultra premium Number circle */}
                <div className="relative z-20 flex-shrink-0 group/circle scroll-reveal-scale" data-animate-child style={{ transitionDelay: `${index * 150 + 200}ms` }}>
                  {/* Multiple pulsing rings */}
                  <div className="absolute inset-0 rounded-full bg-orange-500/20 animate-ping" style={{ animationDuration: '3s' }} />
                  <div className="absolute -inset-1 rounded-full bg-orange-400/15 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
                  
                  {/* Rotating glow layer */}
                  <div className="absolute -inset-3 rounded-full opacity-50 group-hover/circle:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 rounded-full blur-lg animate-spin-slow" />
                  </div>
                  
                  {/* Main circle with premium effects */}
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-[var(--orange-600)] via-[var(--orange-500)] to-[var(--orange-600)] text-4xl font-black text-white shadow-2xl shadow-orange-500/60 transition-all duration-700 hover:scale-[1.35] hover:rotate-[360deg] cursor-pointer group-hover/circle:border-orange-200">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400/0 via-orange-300/20 to-orange-400/0 animate-spin-slow" />
                    
                    <span className="relative z-10 transition-all duration-700 group-hover/circle:scale-110">{step.number}</span>
                    
                    {/* Enhanced shine effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/50 via-white/20 to-transparent opacity-70" />
                    <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-white/30 blur-sm" />
                    
                    {/* Sparkle on hover */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover/circle:opacity-100 transition-opacity duration-300 animate-pulse" />
                  </div>
                  
                  {/* Animated connection line */}
                  <div className={`absolute top-1/2 ${step.side === 'left' ? 'right-full' : 'left-full'} w-12 h-1 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 hidden md:block`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-400 to-transparent rounded-full" />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-transparent blur-sm animate-pulse" />
                  </div>
                  
                  {/* Progress indicator dots */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-orange-500/40 group-hover/circle:bg-orange-500 transition-all duration-300"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA accent */}
        <div className="mt-20 text-center scroll-reveal-spiral">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-gradient-to-r from-white to-orange-50 px-6 py-3 text-sm font-semibold text-gray-700 shadow-lg backdrop-blur-xl hover:scale-110 hover:shadow-2xl transition-all duration-500">
            <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>9 étapes claires pour des résultats garantis</span>
          </div>
        </div>
      </div>
    </section>
    </MethodSectionClient>
  );
}

function OffersSection() {
  return (
    <section id="offers" className="relative overflow-hidden px-4 py-16 sm:py-20 md:py-24 md:px-6 section-premium scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32">
      {/* Section gradient divider */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-20 sm:h-32 md:h-40 bg-gradient-to-b from-white to-transparent" />
      
      {/* Accent circles */}
      <div aria-hidden className="pointer-events-none absolute right-0 top-20 h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] rounded-full bg-orange-500/5 blur-3xl animate-pulse-subtle" />
      <div aria-hidden className="pointer-events-none absolute left-0 bottom-20 h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[350px] md:w-[350px] rounded-full bg-orange-500/5 blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }} />
      
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:gap-6 text-center mb-10 sm:mb-12 md:mb-16">
          <div className="mx-auto space-y-3 sm:space-y-4 px-2 sm:px-0">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[var(--orange-alpha-30)] bg-white/80 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-[var(--accent)] shadow-sm backdrop-blur-md">
              <SparkleIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span>Offres YourStory</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-gray-900 max-w-4xl mx-auto">
              Des packs <span className="bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] bg-clip-text text-transparent">tout-en-un</span> pour votre contenu vidéo
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Stratégie, production, montage et publication. Tout ce dont vous avez besoin pour booster votre présence en ligne.
            </p>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-10 md:mt-12 grid gap-6 sm:gap-8 md:grid-cols-2">
          {OFFERS.map((offer, index) => {
            const isPopular = index === 0; // Pack de 10 posts est populaire
            return (
              <div
                key={offer.title}
                className={`group relative flex h-full flex-col rounded-[var(--radius-xl)] transition-all duration-500 hover:-translate-y-3 ${
                  isPopular 
                    ? 'border-3 border-orange-500/50 bg-gradient-to-br from-white/70 via-white/60 to-orange-50/40 shadow-2xl shadow-orange-500/20 hover:shadow-[0_40px_90px_rgba(253,89,4,0.25)] scale-[1.02] md:scale-[1.05]' 
                    : 'border-2 border-white/40 bg-white/40 shadow-xl hover:border-orange-500/30 hover:shadow-2xl'
                } backdrop-blur-2xl`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full blur-lg opacity-60" />
                      <span className="relative inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        MEILLEURE VALEUR
                      </span>
                    </div>
                  </div>
                )}
                
                <div className={`space-y-6 sm:space-y-8 relative z-10 ${isPopular ? 'px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12' : 'px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10'}`}>
                  {/* Header */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                        isPopular 
                          ? 'bg-orange-500/10 text-orange-700 border border-orange-500/30' 
                          : 'bg-white/80 text-gray-700 border border-gray-200'
                      }`}>
                        {offer.title}
                      </span>
                    </div>
                    
                    <div>
                      <div className="flex items-baseline gap-1.5 sm:gap-2">
                        <p className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight ${
                          isPopular 
                            ? 'bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent' 
                            : 'text-gray-900'
                        }`}>
                          {offer.price.split(' ')[0]}
                        </p>
                        <span className="text-lg sm:text-xl font-semibold text-gray-500">CHF</span>
                      </div>
                      <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-600 font-medium">{offer.description}</p>
                    </div>
                  </div>
                  
                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                  
                  {/* Inclusions */}
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wide">Ce qui est inclus :</h3>
                    <ul className="space-y-2.5 sm:space-y-3">
                      {offer.inclusions.map((item, idx) => (
                        <li 
                          key={item} 
                          className="flex items-start gap-2.5 sm:gap-3 group-hover:translate-x-1 transition-transform duration-300"
                          style={{ transitionDelay: `${idx * 30}ms` }}
                        >
                          <span className={`mt-0.5 inline-flex h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 items-center justify-center rounded-md transition-all duration-300 ${
                            isPopular 
                              ? 'bg-gradient-to-br from-orange-500 to-orange-600 shadow-md shadow-orange-500/30' 
                              : 'bg-gradient-to-br from-gray-400 to-gray-500 shadow-sm'
                          }`}>
                            <svg className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className={`mt-auto ${isPopular ? 'px-4 sm:px-6 md:px-8 pb-8 sm:pb-10 md:pb-12' : 'px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 md:pb-10'}`}>
                  <CalendlyButton className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    isPopular 
                      ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 hover:scale-105 focus-visible:ring-orange-500' 
                      : 'bg-white text-gray-900 border-2 border-gray-200 shadow-lg hover:border-orange-500/50 hover:bg-orange-50 hover:scale-105 focus-visible:ring-gray-400'
                  }`}>
                    <span>Choisir ce pack</span>
                    <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </CalendlyButton>
                  
                  {isPopular && (
                    <p className="mt-3 sm:mt-4 text-center text-[10px] sm:text-xs text-gray-500">
                      🔥 Pack le plus populaire • Réponse sous 24h
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Trust section */}
        <div className="mt-10 sm:mt-12 md:mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 rounded-xl sm:rounded-2xl border-2 border-white/40 bg-white/40 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 shadow-xl backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 border border-green-500/30">
                <svg className="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-gray-900">100% Satisfait</p>
                <p className="text-xs text-gray-500">Garantie qualité</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/30">
                <svg className="h-6 w-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-gray-900">+200 Projets</p>
                <p className="text-xs text-gray-500">Déjà réalisés</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/30">
                <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-gray-900">Réponse 24h</p>
                <p className="text-xs text-gray-500">Service rapide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials-full" className="relative overflow-hidden px-4 py-16 sm:py-20 md:py-24 md:px-6 section-premium scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32">
      {/* Section gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--orange-alpha-5)] to-transparent" />
      
      {/* Accent circles */}
      <div aria-hidden className="pointer-events-none absolute left-0 bottom-20 h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[350px] md:w-[350px] rounded-full bg-orange-500/5 blur-3xl animate-pulse-subtle" />
      
      <div className="relative mx-auto max-w-6xl">
        <div className="space-y-3 sm:space-y-4 text-center px-2 sm:px-0">
          <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[var(--orange-alpha-30)] bg-white/80 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-[var(--accent)] shadow-sm backdrop-blur-md">
            <SparkleIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>Avis & trust</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight tracking-tight text-gray-900">
            Nos clients en parlent <span className="bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] bg-clip-text text-transparent">mieux que nous</span>.
          </h2>
        </div>
        
        <div className="mt-10 sm:mt-12 md:mt-16">
          <TestimonialsCarousel testimonials={TESTIMONIALS} />
        </div>
        
        {/* Trust badge */}
        <div className="mt-10 sm:mt-12 md:mt-16 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-full border border-white/40 bg-white/70 px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-700 shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <span className="font-bold text-green-600">Excellent</span>
            <TrustPilotStars />
            <span className="font-semibold">Trustpilot</span>
            <span className="text-[10px] sm:text-xs text-gray-500 ml-1 sm:ml-2">4.9/5 (120+ avis)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="relative overflow-hidden px-4 py-16 sm:py-20 md:py-24 md:px-6 section-premium scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32">
      {/* Section gradient divider */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-20 sm:h-32 md:h-40 bg-gradient-to-b from-white to-transparent" />
      
      {/* Accent circles */}
      <div aria-hidden className="pointer-events-none absolute right-0 bottom-0 h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] rounded-full bg-orange-500/5 blur-3xl animate-pulse-subtle" />
      
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md space-y-3 sm:space-y-4">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[var(--orange-alpha-30)] bg-white/80 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-[var(--accent)] shadow-sm backdrop-blur-md">
              <SparkleIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span>FAQ</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight tracking-tight text-gray-900">
              Vos questions sur la <span className="bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] bg-clip-text text-transparent">production</span> et la <span className="bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] bg-clip-text text-transparent">performance</span>.
            </h2>
            
            <p className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-4">
              Nous sommes transparents sur notre processus et nos résultats. Voici les questions les plus fréquentes.
            </p>
          </div>
          
          <div className="flex-1 mt-6 md:mt-0">
            <div className="divide-y divide-gray-200/40 rounded-[var(--radius-lg)] sm:rounded-[var(--radius-xl)] border-2 border-white/40 bg-white/35 shadow-2xl backdrop-blur-2xl overflow-hidden">
              {FAQ_ITEMS.map((item, idx) => (
                <details key={item.question} className="group" open={idx === 0}>
                  <summary className="flex w-full cursor-pointer items-center justify-between gap-3 sm:gap-4 px-4 sm:px-5 md:px-6 py-4 sm:py-5 text-left text-sm sm:text-base font-semibold text-gray-900 transition-all duration-300 hover:bg-[var(--orange-alpha-5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 group-hover:text-[var(--accent)] list-none">
                    <span className="transition-colors duration-300 pr-2">{item.question}</span>
                    <span aria-hidden="true" className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 border-white/40 bg-white/70 text-base sm:text-lg font-bold text-gray-900 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110 group-hover:border-[var(--orange-alpha-30)] group-hover:text-[var(--accent)] flex-shrink-0">
                      +
                    </span>
                  </summary>
                  <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-xs sm:text-sm leading-relaxed text-gray-700">
                    <div className="p-3 sm:p-4 rounded-[var(--radius-lg)] bg-white/60 border border-white/50 backdrop-blur-sm">
                      {item.answer}
                    </div>
                  </div>
                </details>
              ))}
            </div>
            
            <div className="mt-6 sm:mt-8 text-center">
              <CalendlyButton className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[var(--accent)] hover:underline">
                <span>Une autre question ?</span>
                <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </CalendlyButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientLoginSection() {
  return (
    <section id="client-login" className="relative overflow-hidden px-4 py-12 sm:py-16 md:px-6">
      {/* Background gradient */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/30 to-transparent" />
      
      <div className="relative mx-auto max-w-4xl">
        <div className="rounded-[var(--radius-lg)] sm:rounded-[var(--radius-xl)] border-2 border-white/50 bg-gradient-to-br from-white/70 via-white/60 to-white/50 p-6 sm:p-8 md:p-12 shadow-2xl backdrop-blur-xl">
          <div className="text-center space-y-4 sm:space-y-6">
            {/* Icon */}
            <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30">
              <svg className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            
            {/* Heading */}
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                Déjà client ?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium">
                Log toi à l&apos;espace client alors ! 🚀
              </p>
            </div>
            
            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
              Accède à ton tableau de bord personnalisé, suis l&apos;avancement de tes projets, télécharge tes vidéos et consulte tes statistiques de performance.
            </p>
            
            {/* CTA Button */}
            <div className="pt-2 sm:pt-4">
              <a 
                href="/login"
                className="inline-flex items-center gap-2 sm:gap-3 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                <span className="whitespace-nowrap">Accéder à l&apos;espace client</span>
                <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
            
            {/* Additional info */}
            <div className="pt-3 sm:pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Accès sécurisé</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>Support 24/7</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                <span>Statistiques en temps réel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section id="final-cta" className="relative overflow-hidden px-4 py-16 sm:py-20 md:py-24 md:px-6 section-premium">
      {/* Final CTA gradient halo */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] md:h-[600px] md:w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_var(--orange-alpha-15)_0%,_transparent_70%)] blur-3xl animate-pulse-subtle" />
      <div className="relative mx-auto max-w-5xl px-2 sm:px-4 text-center md:px-6">
        <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[var(--orange-alpha-30)] bg-white/80 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-[var(--accent)] shadow-sm backdrop-blur-md">
          <SparkleIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          <span>Prêt à écrire la suite ?</span>
        </span>
        <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-gray-900">
          Vos histoires méritent un <span className="bg-gradient-to-r from-[var(--orange-600)] to-[var(--orange-500)] bg-clip-text text-transparent">format qui performe</span>.
        </h2>
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto px-2 sm:px-0">
          Réservons un appel découverte : nous répondons sous 24h avec un plan d&apos;action et des idées de narration sur-mesure.
        </p>
        <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row sm:gap-6">
          <CalendlyButton className="inline-flex items-center gap-2 rounded-full bg-gradient-premium px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-xl shadow-[var(--shadow-accent)] transition-all duration-300 hover:scale-105 hover:bg-[var(--orange-600)] hover:shadow-2xl hover:shadow-[var(--shadow-accent-lg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2">
            <span>Réserver un appel</span>
            <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </CalendlyButton>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-gray-700 shadow-sm backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="whitespace-nowrap">Réponse sous 24h • Sans engagement</span>
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---------- Small UI helpers ---------- */

function SocialBadge({ children }: { children: ReactNode }) {
  return (
    <span className="glass-base inline-block cursor-pointer rounded-full px-4 py-2 text-[var(--accent)] glass-hover-accent">
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
