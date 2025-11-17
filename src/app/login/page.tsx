import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-50 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500/20 rounded-2xl blur-xl group-hover:bg-orange-500/30 transition-all" />
              <Image
                src="/logo.svg"
                alt="YourStory"
                width={60}
                height={60}
                className="relative"
              />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              Your<span className="text-orange-500">Story</span>
            </span>
          </Link>
        </div>

        {/* Main card */}
        <div className="relative rounded-3xl border-2 border-white/60 bg-white/80 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          {/* Gradient overlay */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none" />
          
          {/* Content */}
          <div className="relative">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl animate-pulse" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-600 to-orange-500 shadow-xl shadow-orange-500/30">
                  <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-3">
              Espace Client
            </h1>

            {/* Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-50 px-4 py-1.5 text-sm font-semibold text-orange-600">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                En cours de développement
              </span>
            </div>

            {/* Description */}
            <p className="text-center text-gray-600 leading-relaxed mb-8">
              Nous travaillons actuellement sur votre espace client personnalisé. Vous pourrez bientôt accéder à vos projets, télécharger vos vidéos et suivre vos performances en temps réel.
            </p>

            {/* Features list */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
                  <svg className="h-4 w-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Dashboard interactif</p>
                  <p className="text-xs text-gray-600">Suivi en temps réel de vos projets</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
                  <svg className="h-4 w-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Bibliothèque vidéo</p>
                  <p className="text-xs text-gray-600">Téléchargez vos vidéos à tout moment</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
                  <svg className="h-4 w-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Analytics avancés</p>
                  <p className="text-xs text-gray-600">Mesurez l'impact de vos contenus</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              href="/"
              className="block w-full rounded-full bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-4 text-center text-base font-semibold text-white shadow-xl shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/40"
            >
              Retour à l'accueil
            </Link>

            {/* Contact info */}
            <p className="text-center text-sm text-gray-500 mt-6">
              Des questions ? Contactez-nous à{' '}
              <a href="mailto:contact@urstory.ch" className="font-medium text-orange-600 hover:text-orange-700 transition-colors">
                contact@urstory.ch
              </a>
            </p>
          </div>
        </div>

        {/* Timeline estimate */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            🚀 Lancement prévu : <span className="font-semibold text-orange-600">Bientôt disponible</span>
          </p>
        </div>
      </div>
    </div>
  );
}
