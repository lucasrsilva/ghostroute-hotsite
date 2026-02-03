import React from 'react';
import { Button } from './ui/button';
import { GhostIcon } from './GhostIcon';
import { Shield, Eye, Lock } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div 
        className="absolute inset-0 grid-pattern opacity-30"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Floating ghost icon */}
      <div className="absolute top-1/4 right-1/4 opacity-10 animate-float">
        <GhostIcon size={200} />
      </div>
      <div className="absolute bottom-1/3 left-1/5 opacity-5 animate-float" style={{ animationDelay: '2s' }}>
        <GhostIcon size={150} />
      </div>

      <div className="container mx-auto px-6 pt-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Zero-Knowledge Privacy Protocol</span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Transact <span className="text-gradient glow-text">Invisibly</span>
            <br />
            on the Blockchain
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Shield your identity with cryptographic certainty. 
            GhostRoute decouples your wallet from on-chain actions using Zero-Knowledge Proofs.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl">
              Start Private Trading
            </Button>
            <Button variant="heroOutline" size="xl">
              Read Whitepaper
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Eye className="w-5 h-5 text-primary" />
              <span>No Identity Leaks</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Lock className="w-5 h-5 text-primary" />
              <span>Cryptographic Security</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span>Audited Protocol</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
