import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "22890115351";
    const message = encodeURIComponent(
      "Bonjour, je souhaite en savoir plus sur vos services."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-accent/30 to-background">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-foreground">
              Contactez-nous
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
              Vous souhaitez bénéficier d'un accompagnement sur mesure ? Notre
              équipe vous répond rapidement à toutes vos questions.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="animate-fade-in-up">
                <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
                  <h2 className="text-2xl font-heading font-bold mb-6 text-card-foreground">
                    Envoyez-nous un message
                  </h2>
                  <ContactForm />
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8 animate-fade-in-up">
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-6 text-foreground">
                    Nos coordonnées
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-subheading font-semibold mb-1 text-foreground">
                          Adresse
                        </h3>
                        <p className="text-muted-foreground">Lomé, Togo</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-subheading font-semibold mb-1 text-foreground">
                          Téléphone
                        </h3>
                        <p className="text-muted-foreground">
                          +228 99 75 89 99
                        </p>
                        <p className="text-muted-foreground">
                          +228 90 11 53 51
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-subheading font-semibold mb-1 text-foreground">
                          Email
                        </h3>
                        <a
                          href="mailto:leaders.consultingtg@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          leaders.consultingtg@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <div className="bg-accent/50 p-6 rounded-lg border border-border">
                  <h3 className="font-subheading font-semibold mb-3 text-foreground">
                    Besoin d'une réponse rapide ?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Contactez-nous directement sur WhatsApp pour une assistance
                    immédiate.
                  </p>
                  <button
                    onClick={handleWhatsApp}
                    className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-3 rounded-lg transition-colors font-subheading"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Discuter sur WhatsApp</span>
                  </button>
                </div>

                {/* Office Hours */}
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-subheading font-semibold mb-3 text-card-foreground">
                    Horaires d'ouverture
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi:</span>
                      <span className="font-medium">8h00 - 18h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi:</span>
                      <span className="font-medium">9h00 - 13h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche:</span>
                      <span className="font-medium">Fermé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
