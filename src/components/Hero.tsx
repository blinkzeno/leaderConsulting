import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-consulting.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Équipe professionnelle Leaders Consulting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="mb-4 animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-subheading">
              Conseils & Services
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 animate-fade-in-up">
            <span className="text-primary">LEADERS</span>{" "}
            <span className="text-secondary">CONSULTING</span>
            <span className="font-normal text-base"> CORPORATION SARL</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-subheading text-foreground mb-4 animate-fade-in-up">
             Cabinet d'audit, d'expertise comptable, de gestion d'entreprise et
              de ressources humaines, intérim et Formations Professionnels
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up">
            Votre partenaire de confiance pour piloter la croissance et la
            performance de votre entreprise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Button asChild size="lg" variant="default">
              <Link to="/contact">Contactez-nous</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Demandez un devis gratuit</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-2 bg-secondary"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-2 bg-primary"></div>
    </section>
  );
};

export default Hero;
