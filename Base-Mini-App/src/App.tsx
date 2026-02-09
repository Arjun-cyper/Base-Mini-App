import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

function App() {
  const { isConnected } = useAccount();

  return (
    <div className="min-h-screen bg-[#050a1a] text-white flex flex-col items-center justify-center p-6 font-sans">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-blue-600/20 blur-[120px] -z-10" />

      <main className="w-full max-w-md bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl text-center">
        
        {/* NFT Preview Circle */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full animate-pulse" />
          <div className="absolute inset-1 bg-slate-900 rounded-full flex items-center justify-center overflow-hidden">
             {/* You can replace this with your pokemon024.gif */}
             <span className="text-5xl">👾</span>
          </div>
        </div>

        <h1 className="text-4xl font-black mb-4 tracking-tight">
          Poke<span className="text-blue-500">Mint</span>
        </h1>
        
        <p className="text-slate-400 mb-10 leading-relaxed">
          Connect your wallet to mint AI Exclusives, manage your collection, and prepare for <b>PokeFight</b>.
        </p>

        <div className="flex justify-center">
          <ConnectButton label="Connect Wallet" showBalance={false} />
        </div>

        {isConnected && (
          <div className="mt-8 animate-bounce">
            <button className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-blue-400 hover:text-white transition-all">
              Enter Dashboard →
            </button>
          </div>
        )}

        <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/5 pt-8 text-xs text-slate-500 uppercase tracking-widest">
          <div>
            <p className="font-bold text-white">Base</p>
            Network
          </div>
          <div>
            <p className="font-bold text-white">0.01 ETH</p>
            Mint Price
          </div>
          <div>
            <p className="font-bold text-white">PokeFight</p>
            Ready
          </div>
        </div>
      </main>

      <footer className="mt-8 text-slate-600 text-sm">
        Securely powered by <b>Coinbase</b> & <b>WalletConnect</b>
      </footer>
    </div>
  );
}

export default App;