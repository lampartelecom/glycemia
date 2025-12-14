import { ArrowRight, Heart, Shield, Leaf, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-[100dvh] flex items-center pt-16 sm:pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-section relative z-10 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 animate-fade-in">
              <Leaf className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">100% Naturel • Sans effets secondaires</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 sm:mb-6 animate-fade-in-up">
              Votre santé,{" "}
              <span className="text-gradient">notre priorité</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-100">
              Découvrez Glycemia, l'aliment thérapeutique naturel qui vous aide à réguler votre glycémie et prévenir le diabète.
            </p>

            {/* Benefits Quick List */}
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 animate-fade-in-up delay-200">
              <div className="flex items-center gap-2 text-foreground text-sm sm:text-base">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span>Protège le cœur</span>
              </div>
              <div className="flex items-center gap-2 text-foreground text-sm sm:text-base">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span>Renforce l'immunité</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                <a href="#produits">
                  Découvrir nos produits
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <a href="tel:+237699709408" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Appeler maintenant
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 sm:gap-6 mt-8 sm:mt-10 justify-center lg:justify-start animate-fade-in-up delay-400">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">1kg</div>
                <div className="text-xs sm:text-sm text-muted-foreground">par sachet</div>
              </div>
              <div className="w-px h-8 sm:h-10 bg-border" />
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">3-6</div>
                <div className="text-xs sm:text-sm text-muted-foreground">mois de cure</div>
              </div>
              <div className="w-px h-8 sm:h-10 bg-border" />
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-accent">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">naturel</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in delay-200 order-1 lg:order-2">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-glycemia-lg">
              <img
                src={heroImage}
                alt="Glycemia - Suppléments naturels pour la gestion de la glycémie"
                className="w-full h-auto object-cover aspect-[4/3] sm:aspect-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-6 bg-card p-3 sm:p-4 rounded-xl shadow-glycemia-lg animate-float">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm sm:text-base">Ingrédients naturels</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Poudre d'igname, herbes & épices</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
