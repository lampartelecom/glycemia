import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marie-Claire N.",
    location: "Douala",
    rating: 5,
    text: "Après 3 mois d'utilisation de Glycemia, ma glycémie s'est stabilisée de façon remarquable. Je recommande vivement ce produit naturel !",
    avatar: "MC",
  },
  {
    id: 2,
    name: "Jean-Paul K.",
    location: "Ebolowa",
    rating: 5,
    text: "Mon médecin a été surpris par l'amélioration de mes résultats. Glycemia est devenu un allié indispensable pour ma santé.",
    avatar: "JP",
  },
  {
    id: 3,
    name: "Françoise M.",
    location: "Douala",
    rating: 5,
    text: "Produit 100% naturel et efficace. J'ai retrouvé mon énergie et ma digestion s'est beaucoup améliorée. Merci Glycemia !",
    avatar: "FM",
  },
  {
    id: 4,
    name: "Emmanuel T.",
    location: "Yaoundé",
    rating: 5,
    text: "Excellent produit ! Le goût est agréable et les résultats sont visibles. Ma tension artérielle s'est également améliorée.",
    avatar: "ET",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="temoignages" className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 px-4">
          <span className="inline-block text-accent font-semibold mb-3 text-sm uppercase tracking-wider">
            Témoignages
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Ce que disent nos{" "}
            <span className="text-gradient">clients</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les expériences de nos clients satisfaits qui ont transformé leur santé avec Glycemia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-glycemia-sm card-hover relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 text-primary/10" />

              {/* Stars */}
              <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-glycemia-gold text-glycemia-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed pr-8">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm sm:text-base">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
