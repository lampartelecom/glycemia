import { Button } from "@/components/ui/button";
import { ShoppingBag, Check, Phone, MapPin, Sparkles } from "lucide-react";
import product1 from "@/assets/glycemia-product-1.jpg";
import product3 from "@/assets/glycemia-product-3.jpg";
import product5 from "@/assets/glycemia-product-5.jpg";
import glycemaPlus from "@/assets/glycema-formule-plus.jpg";
import ginhaProduct from "@/assets/ginha-product.jpg";

const products = [
  {
    id: 1,
    name: "GLYCEMIA Original",
    tagline: "Naturel. Puissant. Essentiel.",
    description: "L'aliment thérapeutique qui prend soin de vous. Formulé par Professeur NLENG Solange.",
    image: product1,
    benefits: [
      "Régule la glycémie",
      "Protège le cœur",
      "Réduit le stress oxydatif",
      "Renforce les reins et le foie",
      "Améliore la digestion et l'immunité",
    ],
    usage: "3 cuillères dans de l'eau chaude, matin et soir",
    duration: "Cure de 3 à 6 mois",
    weight: "1kg",
    badge: "Bestseller",
    featured: true,
  },
  {
    id: 2,
    name: "GLYCEMIA Métabolisme",
    tagline: "Reprenez le contrôle de votre métabolisme",
    description: "Votre allié contre le diabète, l'hypertension et le cholestérol élevé.",
    image: product3,
    benefits: [
      "Réduction du LDL (mauvais cholestérol)",
      "Augmentation du HDL (bon cholestérol)",
      "Amélioration de la sensibilité à l'insuline",
      "Réduction du stress et de l'anxiété",
      "Soutien cardiovasculaire et rénal",
    ],
    nutrients: ["Diosgénines", "Vitamine C, B3", "Oméga-3", "Magnésium", "Potassium", "Fibres solubles"],
    weight: "1kg",
    badge: "Populaire",
  },
  {
    id: 3,
    name: "GLYCEMIA Premium",
    tagline: "L'équilibre naturel pour votre santé",
    description: "Formule exclusive à base de poudre d'igname, herbes et épices naturelles.",
    image: product5,
    benefits: [
      "Régule la glycémie naturellement",
      "Protège le cœur",
      "Réduit le stress oxydatif",
      "Renforce les reins et le foie",
      "Améliore la digestion et l'immunité",
    ],
    usage: "3 cuillères dans de l'eau chaude, matin et soir",
    duration: "Cure de 3 à 6 mois",
    weight: "1kg",
    ingredients: "Poudre d'igname",
    badge: "Premium",
  },
  {
    id: 4,
    name: "Glycema FORMULE PLUS",
    tagline: "La formule avancée complète",
    description: "Formule améliorée pour une action globale sur votre santé métabolique.",
    image: glycemaPlus,
    benefits: [
      "Anti-hyperglycémiante",
      "Anti-hypertensive",
      "Améliore le filtre rénal",
      "Anti-obésogène",
      "Anti-inflammatoire",
      "Antioxydante",
      "Anti-constipation",
    ],
    weight: "1kg",
    badge: "Nouveau",
    featured: true,
  },
  {
    id: 5,
    name: "GINHA",
    tagline: "Aliment thérapeutique complet",
    description: "Poudre de maïs, extrait de soja, herbes et épices. Formule unique pour votre bien-être.",
    image: ginhaProduct,
    benefits: [
      "Antistress",
      "Antifatigue",
      "Anti-anxiété",
      "Régulateur de la glycémie",
      "Antihypercholestérolémiant",
    ],
    weight: "1kg",
    ingredients: "Maïs, Soja, Herbes & Épices",
    badge: "Exclusif",
  },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  return (
    <div
      className={`group relative bg-card rounded-2xl overflow-hidden shadow-glycemia-sm card-hover animate-fade-in-up ${
        product.featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
          <Sparkles className="w-3 h-3" />
          {product.badge}
        </div>
      )}

      {/* Product Image */}
      <div className="relative aspect-[4/3] sm:aspect-[3/2] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={`${product.name} - Produit Glycemia pour la gestion de la glycémie`}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
        
        {/* Weight Badge */}
        <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
          {product.weight}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{product.name}</h3>
          <p className="text-sm text-accent font-medium">{product.tagline}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>

        {/* Benefits */}
        <div className="mb-4">
          <ul className="space-y-1.5">
            {product.benefits.slice(0, 4).map((benefit, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground">
                <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
            {product.benefits.length > 4 && (
              <li className="text-xs text-muted-foreground pl-6">
                +{product.benefits.length - 4} autres bienfaits
              </li>
            )}
          </ul>
        </div>

        {/* Nutrients if available */}
        {product.nutrients && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {product.nutrients.slice(0, 4).map((nutrient, i) => (
              <span
                key={i}
                className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md"
              >
                {nutrient}
              </span>
            ))}
          </div>
        )}

        {/* Usage Info */}
        {product.usage && (
          <div className="mb-4 p-3 bg-muted/50 rounded-lg border border-border/50">
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Posologie:</span> {product.usage}
            </p>
            {product.duration && (
              <p className="text-xs text-accent font-medium mt-1">{product.duration}</p>
            )}
          </div>
        )}

        {/* CTA Button */}
        <Button variant="hero" className="w-full text-sm" asChild>
          <a href="#contact">
            <ShoppingBag className="w-4 h-4" />
            Commander maintenant
          </a>
        </Button>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  return (
    <section id="produits" className="py-12 sm:py-16 lg:py-24 bg-muted/30">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-accent font-semibold mb-3 text-sm uppercase tracking-wider animate-fade-in">
            Nos Produits Thérapeutiques
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-in-up">
            Des solutions naturelles pour votre{" "}
            <span className="text-gradient">bien-être</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up delay-100 px-4">
            Découvrez notre gamme de produits 100% naturels, développés par des experts en nutrition et santé. 
            Aucun effet secondaire.
          </p>
        </div>

        {/* Key Benefits Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12">
          {[
            { label: "100% Naturel", icon: "🌿" },
            { label: "Sans effets secondaires", icon: "✓" },
            { label: "Sachet de 1kg", icon: "📦" },
            { label: "Cure 3-6 mois", icon: "📅" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-2 bg-card p-3 sm:p-4 rounded-xl shadow-sm border border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="text-lg sm:text-xl">{item.icon}</span>
              <span className="text-xs sm:text-sm font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-card rounded-2xl shadow-glycemia-md border border-border/50">
            <div className="flex items-center gap-3 text-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm sm:text-base font-medium">Disponible à Douala et Ebolowa</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <Button variant="hero" size="lg" asChild>
              <a href="tel:+237699709408" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +237 699 70 94 08
              </a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Appelez maintenant pour commander ou obtenir des conseils personnalisés
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
