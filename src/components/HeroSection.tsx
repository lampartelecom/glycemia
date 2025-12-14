import { ArrowRight, Heart, Shield, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-section relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">100% Naturel • Sans effets secondaires</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
              Votre santé,{" "}
              <span className="text-gradient">notre priorité</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-100">
              Découvrez Glycemia, l'aliment thérapeutique naturel qui vous aide à réguler votre glycémie et prévenir le diabète. Naturel. Puissant. Essentiel.
            </p>

            {/* Benefits Quick List */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up delay-200">
              <div className="flex items-center gap-2 text-foreground">
                <Heart className="w-5 h-5 text-accent" />
                <span>Protège le cœur</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Shield className="w-5 h-5 text-accent" />
                <span>Renforce l'immunité</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
              <Button variant="hero" size="xl" asChild>
                <a href="#produits">
                  Découvrir nos produits
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#a-propos">En savoir plus</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start animate-fade-in-up delay-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1kg</div>
                <div className="text-sm text-muted-foreground">par sachet</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3-6</div>
                <div className="text-sm text-muted-foreground">mois de cure</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">naturel</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in delay-200">
            <div className="relative rounded-3xl overflow-hidden shadow-glycemia-lg">
              <img
                src={heroImage}
                alt="Glycemia - Suppléments naturels pour la gestion de la glycémie"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-glycemia-lg animate-float hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Ingrédients naturels</div>
                  <div className="text-sm text-muted-foreground">Poudre d'igname, herbes & épices</div>
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
