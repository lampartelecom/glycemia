import { Heart, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container-section">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">G</span>
              </div>
              <span className="text-2xl font-bold">GLYCEMIA</span>
            </div>
            <p className="text-background/70 mb-6">
              L'aliment thérapeutique naturel pour réguler votre glycémie et prévenir le diabète. Naturel. Puissant. Essentiel.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#accueil" className="text-background/70 hover:text-background transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#produits" className="text-background/70 hover:text-background transition-colors">
                  Produits
                </a>
              </li>
              <li>
                <a href="#bienfaits" className="text-background/70 hover:text-background transition-colors">
                  Bienfaits
                </a>
              </li>
              <li>
                <a href="#a-propos" className="text-background/70 hover:text-background transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#temoignages" className="text-background/70 hover:text-background transition-colors">
                  Témoignages
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4">Nos produits</h4>
            <ul className="space-y-3">
              <li>
                <a href="#produits" className="text-background/70 hover:text-background transition-colors">
                  Glycemia Original
                </a>
              </li>
              <li>
                <a href="#produits" className="text-background/70 hover:text-background transition-colors">
                  Glycemia Premium
                </a>
              </li>
              <li>
                <a href="#produits" className="text-background/70 hover:text-background transition-colors">
                  Glycema Formule Plus
                </a>
              </li>
              <li>
                <a href="#produits" className="text-background/70 hover:text-background transition-colors">
                  Ginha
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+237699709408" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                  <Phone className="w-5 h-5" />
                  +237 699 70 94 08
                </a>
              </li>
              <li>
                <a href="tel:+237653689709" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                  <Phone className="w-5 h-5" />
                  +237 653 68 97 09
                </a>
              </li>
              <li>
                <a href="mailto:contact@glycemia.cm" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                  <Mail className="w-5 h-5" />
                  contact@glycemia.cm
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                Douala & Ebolowa, Cameroun
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm text-center md:text-left">
              © {currentYear} Glycemia - Association pour la Promotion du Bien-être et du Développement Durable (Assoc.iot). Tous droits réservés.
            </p>
            <p className="text-background/60 text-sm flex items-center gap-1">
              Fait avec <Heart className="w-4 h-4 text-destructive" /> au Cameroun
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
