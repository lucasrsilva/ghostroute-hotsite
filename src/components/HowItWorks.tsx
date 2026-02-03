import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Generate Proof Locally',
    description: 'Your wallet creates a zero-knowledge proof of your transaction intent entirely on your device. No data leaves your machine.',
  },
  {
    number: '02',
    title: 'Submit to Secure Relay',
    description: 'The encrypted proof is sent to our decentralized relay network. Your identity remains completely hidden.',
  },
  {
    number: '03',
    title: 'Verify & Execute',
    description: 'The relay cryptographically verifies the proof and executes the transaction. The blockchain only sees the relay address.',
  },
  {
    number: '04',
    title: 'Confirmation',
    description: 'You receive confirmation of your anonymous transaction. No trace links back to your original wallet.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            How <span className="text-gradient">GhostRoute</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to complete privacy in your DeFi transactions.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="flex gap-8 items-start mb-8">
                {/* Number */}
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-gradient">{step.number}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="font-display text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-10 top-20 w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Visual flow indicator */}
        <div className="flex justify-center items-center gap-4 mt-12 text-muted-foreground">
          <span className="text-sm">Your Wallet</span>
          <ArrowRight className="w-4 h-4 text-primary" />
          <span className="text-sm">ZK Proof</span>
          <ArrowRight className="w-4 h-4 text-primary" />
          <span className="text-sm">Relay</span>
          <ArrowRight className="w-4 h-4 text-primary" />
          <span className="text-sm">Blockchain</span>
        </div>
      </div>
    </section>
  );
};
