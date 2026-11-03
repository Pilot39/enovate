import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Fund Innovation On-Chain
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Enovate is a decentralized crowdfunding platform built on Stellar. 
            Launch campaigns, secure funding, and build the future together.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/campaigns"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse Campaigns
            </Link>
            <Link
              href="/create"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Start a Campaign
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Enovate?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-gray-800">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Decentralized</h3>
              <p>Built on Stellar blockchain for transparency and security</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-800">
              <div className="w-12 h-12 bg-green-600 rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Low Cost</h3>
              <p>Stellar's efficient network means minimal fees for everyone</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-800">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Fast & Secure</h3>
              <p>5-second finality and smart contracts protecting all funds</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Connect your Freighter wallet and launch your first campaign today.
        </p>
        <Link
          href="/campaigns"
          className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-block"
        >
          Explore Campaigns
        </Link>
      </section>
    </div>
  )
}
