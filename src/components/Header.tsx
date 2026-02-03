import React from 'react';
import { GhostIcon } from './GhostIcon';
import { Button } from './ui/button';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <GhostIcon size={36} className="animate-pulse-glow" />
          <span className="font-display text-xl font-bold text-gradient">GhostRoute</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
            How it Works
          </a>
          <a href="#security" className="text-muted-foreground hover:text-primary transition-colors">
            Security
          </a>
        </nav>

        <Button variant="heroOutline" size="sm">
          Launch App
        </Button>
      </div>
    </header>
  );
};
