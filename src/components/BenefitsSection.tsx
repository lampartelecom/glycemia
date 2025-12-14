import {
  Heart,
  ShieldCheck,
  Leaf,
  Brain,
  Zap,
  Activity,
} from "lucide-react";

const benefits = [
  {
    icon: Activity,
    title: "Régule la glycémie",
    description: "Aide à maintenir un taux de sucre sanguin équilibré naturellement.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Heart,
    title: "Protège le cœur",
    description: "Soutient la santé cardiovasculaire et améliore la circulation.",
    color: "text-destructive",
    bg: "bg-destructive/10",
  },
  {
    icon: ShieldCheck,
    title: "Réduit le stress oxydatif",
    description: "Puissant antioxydant naturel pour protéger vos cellules.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Zap,
    title: "Renforce reins et foie",
    description: "Améliore la fonction rénale et hépatique pour une meilleure détoxification.",
    color: "text-glycemia-orange",
    bg: "bg-glycemia-orange/10",
  },
  {
    icon: Leaf,
    title: "Améliore la digestion",
    description: "Favorise un transit intestinal sain et une meilleure absorption des nutriments.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Brain,
    title: "Boost l'immunité",
    description: "Renforce vos défenses naturelles contre les maladies.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

const BenefitsSection = () => {
  return (
    <section id="bienfaits" className="py-20 bg-background">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-medium mb-4">
            Les Bienfaits
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pourquoi choisir{" "}
            <span className="text-gradient">Glycemia</span> ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une formule naturelle complète à base de poudre d'igname, herbes, épices et vitamines essentielles.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-glycemia-sm card-hover group"
            >
              <div className={`w-14 h-14 ${benefit.bg} rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Usage Instructions */}
        <div className="mt-16 bg-gradient-to-r from-primary to-glycemia-blue-light rounded-3xl p-8 md:p-12 text-primary-foreground">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Mode d'emploi simple
              </h3>
              <p className="text-primary-foreground/90 text-lg mb-6">
                3 cuillères dans de l'eau chaude, matin et soir. Cure recommandée de 3 à 6 mois pour des résultats optimaux.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-primary-foreground/20 rounded-full flex items-center justify-center text-sm">1</span>
                  <span>3 cuillères de poudre</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-primary-foreground/20 rounded-full flex items-center justify-center text-sm">2</span>
                  <span>Mélanger dans de l'eau chaude</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-primary-foreground/20 rounded-full flex items-center justify-center text-sm">3</span>
                  <span>Consommer matin et soir</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="inline-block bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-5xl md:text-6xl font-bold mb-2">3-6</div>
                <div className="text-xl">mois de cure</div>
                <div className="text-sm text-primary-foreground/80 mt-2">pour des résultats durables</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
