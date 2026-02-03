import React from 'react';
import { Shield, Lock, FileCheck, Users } from 'lucide-react';

const securityFeatures = [
  {
    icon: FileCheck,
    title: 'Audited Smart Contracts',
    description: 'Multiple independent security audits by leading blockchain security firms.',
  },
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All communications between your wallet and the relay are fully encrypted.',
  },
  {
    icon: Shield,
    title: 'Non-Custodial',
    description: 'We never hold your funds. You maintain complete control at all times.',
  },
  {
    icon: Users,
    title: 'Open Source',
    description: 'Transparent codebase. Verify our claims and contribute to the protocol.',
  },
];

export const Security: React.FC = () => {
  return (
    <section id="security" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Security You Can <span className="text-gradient">Trust</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Built on battle-tested cryptographic primitives. Our protocol ensures that your privacy 
              is protected by mathematics, not promises.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {securityFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse" />
              <div className="absolute inset-8 rounded-full border border-primary/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute inset-16 rounded-full border border-primary/40 animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Center shield */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl bg-primary/20 border border-primary/50 flex items-center justify-center glow">
                  <Shield className="w-16 h-16 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
