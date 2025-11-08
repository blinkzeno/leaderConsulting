import { Link } from "react-router-dom";
import { CheckCircle, TrendingUp, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Expertise reconnue",
      description:
        "Une équipe de professionnels certifiés avec des années d'expérience dans le domaine de l'audit et du conseil.",
    },
    {
      icon: TrendingUp,
      title: "Solutions personnalisées",
      description:
        "Chaque entreprise est unique. Nous adaptons nos services à vos besoins spécifiques et à votre secteur d'activité.",
    },
    {
      icon: Users,
      title: "Accompagnement durable",
      description:
        "Nous construisons des partenariats à long terme basés sur la confiance, l'intégrité et l'excellence.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <section className="py-20 bg-accent/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">
              Nos points forts
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Découvrez ce qui fait de Leaders Consulting votre partenaire idéal
              pour la croissance de votre entreprise.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="animate-fade-in-up">
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Notre équipe d'experts est à votre écoute pour vous accompagner dans
              tous vos projets de développement et d'optimisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Contactez-nous</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/services">Découvrir nos services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
