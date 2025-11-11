/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Désactiver le mode strict pour réduire les problèmes d'hydratation
  // Supprime les avertissements d'hydratation causés par les extensions de navigateur
  onDemandEntries: {
    // Période pendant laquelle la page sera conservée en mémoire
    maxInactiveAge: 25 * 1000,
    // Nombre de pages à conserver en mémoire
    pagesBufferLength: 2,
  },
  // Désactive les avertissements d'hydratation
  webpack: (config, { dev }) => {
    if (dev) {
      // Supprime les avertissements d'hydratation en développement
      config.optimization = {
        ...config.optimization,
        splitChunks: false,
      }
    }
    return config
  },
  // Supprimer les erreurs d'hydratation causées par les extensions de navigateur comme Bitdefender
  experimental: {
    // Ignorer les erreurs d'hydratation liées aux attributs bis_skin_checked
    suppressHydrationWarning: true,
  }
}

module.exports = nextConfig
