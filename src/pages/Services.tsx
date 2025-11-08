import { Link } from "react-router-dom";
import { FileText, Calculator, Briefcase, Users, CheckCircle, BarChart3, BookOpen, Zap, Users2, Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import serviceImage from "@/assets/service.jpeg";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Audit",
      description:
        "Analyse complète de la situation financière et organisationnelle de votre entreprise pour optimiser ses performances.",
    },
    {
      icon: Briefcase,
      title: "Conseil en gestion d'entreprise",
      description:
        "Accompagnement stratégique pour améliorer la rentabilité et la gestion quotidienne de votre activité.",
    },
    {
      icon: CheckCircle,
      title: "Aide à la création d'entreprise",
      description:
        "Assistance complète pour le lancement de votre entreprise, du business plan à l'immatriculation.",
    },
    {
      icon: Calculator,
      title: "Assistance comptable et fiscale",
      description:
        "Gestion de votre comptabilité et de vos déclarations fiscales en toute conformité.",
    },
    {
      icon: BarChart3,
      title: "Élaboration et certification des états financiers",
      description:
        "Production de rapports financiers fiables et certifiés pour vos partenaires ou investisseurs.",
    },
    {
      icon: Trophy,
      title: "Business Plan",
      description:
        "Conception et rédaction de business plans convaincants pour attirer des investisseurs ou obtenir des financements.",
    },
    {
      icon: Zap,
      title: "Outils de gestion",
      description:
        "Mise en place et formation à des outils efficaces pour la gestion quotidienne de votre entreprise.",
    },
    {
      icon: Users,
      title: "Gestion des ressources humaines",
      description:
        "Optimisation de la gestion RH : recrutement, évaluation, et gestion du personnel.",
    },
    {
      icon: Users2,
      title: "Recrutement – Intérim",
      description:
        "Mise à disposition de personnel qualifié selon vos besoins à court ou long terme.",
    },
    {
      icon: BookOpen,
      title: "Formation professionnelle pratique",
      description:
        "Formations concrètes pour renforcer les compétences de vos équipes et améliorer la performance globale.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20">
        <div className="absolute inset-0">
            <img
              src={serviceImage}
              alt="Professionnels en réunion chez Leaders Consulting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-foreground">
              COMMENT NOUS VOUS AIDONS ?
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
