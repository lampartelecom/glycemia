import { Target, Users, Award, Leaf } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="a-propos" className="py-20 bg-muted/30">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-accent font-medium mb-4">
              À propos de nous
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              L'équilibre naturel pour{" "}
              <span className="text-gradient">votre santé</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Glycemia est née de la passion pour la santé naturelle et la prévention du diabète. 
              Développée par le Professeur NLENG Solange et l'Association pour la Promotion du Bien-être 
              et du Développement Durable (Assoc.iot), notre gamme de produits thérapeutiques 
              offre une alternative naturelle et efficace.
            </p>

            {/* Values */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Notre Mission</h3>
                  <p className="text-muted-foreground">
                    Offrir des solutions naturelles accessibles pour la gestion de la glycémie et la prévention des maladies métaboliques.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <Leaf className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">100% Naturel</h3>
                  <p className="text-muted-foreground">
                    Tous nos produits sont formulés à partir d'ingrédients naturels sans effets secondaires indésirables.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-glycemia-orange/10 rounded-xl flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-glycemia-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Expertise reconnue</h3>
                  <p className="text-muted-foreground">
                    Formulé par des experts en nutrition et santé, avec des années de recherche et d'expérience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-8 rounded-2xl shadow-glycemia-sm text-center card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Clients satisfaits</div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-glycemia-sm text-center card-hover">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Ingrédients naturels</div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-glycemia-sm text-center card-hover">
              <div className="w-16 h-16 bg-glycemia-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-glycemia-orange" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-glycemia-orange mb-2">5+</div>
              <div className="text-muted-foreground">Produits thérapeutiques</div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-glycemia-sm text-center card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2</div>
              <div className="text-muted-foreground">Points de vente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
