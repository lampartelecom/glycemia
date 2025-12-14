import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#produits", label: "Produits" },
    { href: "#bienfaits", label: "Bienfaits" },
    { href: "#a-propos", label: "À propos" },
    { href: "#temoignages", label: "Témoignages" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-glycemia-sm">
      <div className="container-section">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg sm:text-xl">G</span>
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary">GLYCEMIA</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium text-sm xl:text-base"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <a href="tel:+237699709408" className="flex items-center gap-2 text-primary font-medium text-sm">
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">+237 699 70 94 08</span>
            </a>
            <Button variant="hero" size="default" className="text-sm" asChild>
              <a href="#contact">Nous contacter</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <nav className="container-section py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors duration-200 font-medium py-3 px-3 rounded-lg text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-border space-y-3">
              <a 
                href="tel:+237699709408" 
                className="flex items-center justify-center gap-2 text-primary font-medium py-2"
              >
                <Phone className="w-4 h-4" />
                +237 699 70 94 08
              </a>
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Nous contacter</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
