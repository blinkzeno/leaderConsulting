import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">
              LEADERS CONSULTING
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Cabinet d'audit, d'expertise comptable, de gestion d'entreprise et
              de ressources humaines au Togo.
            </p>
            <p className="text-sm opacity-90">
              Votre partenaire de confiance pour piloter la croissance et la
              performance de votre entreprise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-subheading font-semibold mb-4">
              Liens rapides
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                Accueil
              </Link>
              <Link
                to="/about"
                className="text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                À propos
              </Link>
              <Link
                to="/services"
                className="text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                Services
              </Link>
              <Link
                to="/testimonials"
                className="text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                Témoignages
              </Link>
              <Link
                to="/contact"
                className="text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-subheading font-semibold mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm opacity-90">Lomé, Togo</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <div className="text-sm opacity-90">
                  <div>+228 99 75 89 99</div>
                  <div>+228 90 11 53 51</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <a
                  href="mailto:leaders.consultingco@gmail.com"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  leaders.consultingco@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} Leaders Consulting. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
