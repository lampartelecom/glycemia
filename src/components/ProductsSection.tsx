import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import product1 from "@/assets/glycemia-product-1.jpg";
import product2 from "@/assets/glycemia-product-3.jpg";
import product5 from "@/assets/glycemia-product-5.jpg";
import glycemaPlus from "@/assets/glycema-formule-plus.jpg";
import ginhaProduct from "@/assets/ginha-product.jpg";

const products = [
  {
    id: 1,
    name: "Glycemia Original",
    description: "L'aliment thérapeutique naturel pour réguler votre glycémie. Cure de 3 à 6 mois.",
    image: product1,
    benefits: ["Régule la glycémie", "Protège le cœur", "100% naturel"],
    weight: "1kg",
  },
  {
    id: 2,
    name: "Glycemia - Formule Métabolisme",
    description: "Votre allié contre le diabète, l'hypertension et le cholestérol élevé.",
    image: product2,
    benefits: ["Réduction du LDL", "Soutien cardiovasculaire", "Anti-stress"],
    weight: "1kg",
  },
  {
    id: 3,
    name: "Glycemia Premium",
    description: "L'équilibre naturel pour votre santé par Professeur NLENG Solange.",
    image: product5,
    benefits: ["Améliore la digestion", "Renforce l'immunité", "Aucun effet secondaire"],
    weight: "1kg",
  },
  {
    id: 4,
    name: "Glycema Formule Plus",
    description: "Formule améliorée anti-hyperglycémiante et anti-hypertensive.",
    image: glycemaPlus,
    benefits: ["Anti-inflammatoire", "Antioxydante", "Améliore le filtre rénal"],
    weight: "1kg",
  },
  {
    id: 5,
    name: "Ginha",
    description: "Poudre de maïs, extrait de soja, herbes et épices. Aliment thérapeutique complet.",
    image: ginhaProduct,
    benefits: ["Antistress", "Antifatigue", "Anti-anxiété"],
    weight: "1kg",
  },
];

const ProductsSection = () => {
  return (
    <section id="produits" className="py-20 bg-muted/30">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-medium mb-4 animate-fade-in">
            Nos Produits
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Des solutions naturelles pour votre{" "}
            <span className="text-gradient">bien-être</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-100">
            Découvrez notre gamme de produits thérapeutiques 100% naturels, développés par des experts en nutrition et santé.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`bg-card rounded-2xl overflow-hidden shadow-glycemia-sm card-hover animate-fade-in-up delay-${(index + 1) * 100}`}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {product.weight}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>

                {/* Benefits */}
                <ul className="space-y-2 mb-6">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Button variant="hero" className="w-full" asChild>
                  <a href="#contact">
                    <ShoppingBag className="w-4 h-4" />
                    Commander maintenant
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Disponible à Douala et Ebolowa
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="tel:+237699709408">Appeler pour commander</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
