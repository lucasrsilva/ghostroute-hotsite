import React from 'react';
import { Button } from './ui/button';
import { GhostIcon } from './GhostIcon';
import { ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center glass rounded-3xl p-12 md:p-16">
          <GhostIcon size={60} className="mx-auto mb-6 animate-float" />
          
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Go <span className="text-gradient">Ghost</span>?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Join thousands of users who trade privately. 
            Your blockchain activity, your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Launch GhostRoute
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
