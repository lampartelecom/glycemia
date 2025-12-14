import { useState } from "react";
import { Phone, Mail, MapPin, Send, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-muted/30">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 px-4">
          <span className="inline-block text-accent font-semibold mb-3 text-sm uppercase tracking-wider">
            Contact
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Prenez contact avec{" "}
            <span className="text-gradient">nous</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Une question sur nos produits ? Besoin de conseils personnalisés ? N'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">
              Nos coordonnées
            </h3>

            <div className="space-y-4 sm:space-y-6">
              <a
                href="tel:+237699709408"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl shadow-glycemia-sm card-hover group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm sm:text-base">Téléphone</div>
                  <div className="text-muted-foreground text-sm sm:text-base">+237 699 70 94 08</div>
                </div>
              </a>

              <a
                href="tel:+237653689709"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl shadow-glycemia-sm card-hover group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm sm:text-base">Téléphone 2</div>
                  <div className="text-muted-foreground text-sm sm:text-base">+237 653 68 97 09</div>
                </div>
              </a>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl shadow-glycemia-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm sm:text-base">Points de vente</div>
                  <div className="text-muted-foreground text-sm sm:text-base">Douala & Ebolowa, Cameroun</div>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl shadow-glycemia-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-glycemia-orange/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-glycemia-orange" />
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm sm:text-base">Email</div>
                  <div className="text-muted-foreground text-sm sm:text-base">contact@glycemia.cm</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 sm:mt-8">
              <h4 className="font-medium text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Suivez-nous</h4>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-glycemia-md">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
              Envoyez-nous un message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm sm:text-base"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm sm:text-base"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm sm:text-base"
                  placeholder="+237 6XX XX XX XX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none text-sm sm:text-base"
                  placeholder="Votre message..."
                  required
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Envoyer le message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
