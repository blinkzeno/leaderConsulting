import { Link } from "react-router-dom";
import { FileText, Calculator, Briefcase, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Audit et contrôle",
      description:
        "Analyse, vérification et certification des comptes pour garantir la fiabilité financière de votre entreprise. Nous effectuons des audits complets conformes aux normes internationales.",
    },
    {
      icon: Calculator,
      title: "Expertise comptable",
      description:
        "Tenue de comptabilité, établissement des états financiers, optimisation fiscale et accompagnement comptable complet. Nous vous aidons à optimiser votre gestion financière.",
    },
    {
      icon: Briefcase,
      title: "Gestion d'entreprise",
      description:
        "Stratégie, organisation, planification et performance : nous vous aidons à structurer votre croissance. Du diagnostic à la mise en œuvre, nous vous accompagnons dans tous vos projets.",
    },
    {
      icon: Users,
      title: "Ressources humaines",
      description:
        "Recrutement, formation, évaluation et optimisation des talents pour une performance durable. Nous vous aidons à bâtir des équipes performantes et engagées.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-accent/30 to-background">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-foreground">
              Nos domaines d'expertise
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
              Des solutions complètes et personnalisées pour accompagner votre
              entreprise à chaque étape de son développement.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="animate-fade-in-up">
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Besoin d'un accompagnement professionnel ?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et
              découvrir comment nous pouvons vous aider à atteindre vos objectifs.
            </p>
            <Button asChild size="lg" variant="outline" className="border-secondary-foreground text-secondary border-opacity-70 hover:bg-secondary-foreground hover:text-secondary">
              <Link to="/contact">Demander une consultation</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
