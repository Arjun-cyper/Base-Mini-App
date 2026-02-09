import { useState } from 'react'
import './App.css'

function App() {
  const [walletConnected, setWalletConnected] = useState(false)

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans p-6 flex flex-col items-center">
      {/* Header / Nav */}
      <nav className="w-full max-w-2xl flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold tracking-tighter text-blue-400">PokeMint</h1>
        <button 
          onClick={() => setWalletConnected(!walletConnected)}
          className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full font-medium transition-all"
        >
          {walletConnected ? "0x...4eth" : "Connect Wallet"}
        </button>
      </nav>

      {/* Main Content */}
      <main className="w-full max-w-md bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700 text-center">
        <div className="mb-6">
           <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
             <span className="text-4xl">🔵</span>
           </div>
           <h2 className="text-3xl font-extrabold mb-2">Base Mini App</h2>
           <p className="text-slate-400">Mint AI Exclusives & Battle in PokeFight</p>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-1 gap-4 mb-8">
          <button className="w-full py-4 bg-slate-700 hover:bg-slate-600 rounded-2xl font-bold border border-slate-600 transition-colors">
            🚀 Mint New Poke
          </button>
          <button className="w-full py-4 bg-slate-700 hover:bg-slate-600 rounded-2xl font-bold border border-slate-600 transition-colors text-slate-300">
            ⚔️ PokeFight (Coming Soon)
          </button>
        </div>

        {/* Stats Section */}
        <div className="flex justify-around py-4 border-t border-slate-700">
          <div>
            <p className="text-xs text-slate-500 uppercase">My Pokes</p>
            <p className="text-xl font-bold">12</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase">Rank</p>
            <p className="text-xl font-bold">#42</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto pt-10 text-slate-500 text-sm">
        Built on <span className="text-blue-500 font-semibold">Base</span>
      </footer>
    </div>
  )
}

export default App