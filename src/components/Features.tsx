import React from 'react';
import { EyeOff, Fingerprint, Zap, Globe, ShieldCheck, Wallet } from 'lucide-react';

const features = [
  {
    icon: EyeOff,
    title: 'Hidden Sender',
    description: 'Your msg.sender is never exposed. Transactions appear from our relay, not your wallet.',
  },
  {
    icon: Fingerprint,
    title: 'Zero-Knowledge Proofs',
    description: 'Generate proofs locally that verify intent without revealing identity or transaction details.',
  },
  {
    icon: Zap,
    title: 'Seamless DeFi',
    description: 'Trade on Uniswap and interact with any DeFi protocol while maintaining complete anonymity.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Execution',
    description: 'Secure relay verifies proofs cryptographically before executing, ensuring integrity.',
  },
  {
    icon: Globe,
    title: 'Chain Agnostic',
    description: 'Works across multiple EVM-compatible networks. One privacy layer, infinite possibilities.',
  },
  {
    icon: Wallet,
    title: 'Capital Flow Protection',
    description: 'Break the on-chain link between your capital movements and your identity.',
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Privacy by <span className="text-gradient">Design</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every feature engineered to protect your on-chain identity and financial sovereignty.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl glass hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(187_85%_53%/0.15)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
