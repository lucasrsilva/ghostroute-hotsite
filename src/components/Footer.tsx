import React from 'react';
import { GhostIcon } from './GhostIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <GhostIcon size={28} />
            <span className="font-display text-lg font-semibold text-gradient">GhostRoute</span>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Documentation</a>
            <a href="https://github.com/marcoslobo/ghostroute" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2026 GhostRoute. Privacy is a right.
          </p>
        </div>
      </div>
    </footer>
  );
};
