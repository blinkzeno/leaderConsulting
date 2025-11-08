import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import sale1 from "@/assets/sale1.png";
import sale2 from "@/assets/sale2.png";
import formationImage from "@/assets/formation.jpg";
import serviceImage from "@/assets/service.jpeg";
import proposImage from "@/assets/propos.jpeg";
import contactImage from "@/assets/contact.jpeg";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const Formations = () => {
  const formations = [
    {
      title: "Auditeur Interne",
      duration: "3 mois",
      inscription: "10 000 FCFA",
      formation: "200 000 FCFA",
      modules: [
        "Fonctionnement d'une organisation : place de l'audit interne",
        "Contrôle interne",
        "Fondamentaux sur la fonction de l'audit",
        "La mission d'audit et ses différentes phases",
        "Amélioration de la qualité des processus opérationnels",
        "Techniques spécifiques d'audit (types de contrôle)",
        "Notion sur la cartographie des risques",
      ],
    },
    {
      title: "Comptable praticien & gestionnaire de caisse",
      duration: "2 mois",
      inscription: "10 000 FCFA",
      formation: "75 000 FCFA",
      modules: [
        "Maîtriser les outils nécessaires à l'organisation comptable",
        "La tenue de la comptabilité générale",
        "La gestion de trésorerie",
        "Processus de clôture de fin de période & reporting",
        "Initiation à l'utilisation de Sage Compta",
      ],
    },
    {
      title: "Entrepreneuriat & Marketing",
      duration: "2 mois",
      inscription: "10 000 FCFA",
      formation: "75 000 FCFA",
      modules: [
        "Fondamentaux de l'entrepreneuriat",
        "Le business plan",
        "Stratégie marketing",
      ],
    },
    {
      title: "Gestion des Ressources Humaines",
      duration: "3 mois",
      inscription: "10 000 FCFA",
      formation: "125 000 FCFA",
      modules: [
        "Administration du personnel",
        "Techniques de recrutement",
        "Le contrat de travail",
        "Les piliers de l'efficacité commerciale",
        "Suivi de la carrière des agents",
        "Gestion des archives",
        "Initiation au traitement de paie – Sage",
      ],
    },
    {
      title: "Contrôleur de Gestion",
      duration: "3 mois",
      inscription: "10 000 FCFA",
      formation: "150 000 FCFA",
      modules: [
        "Fonctionnement d'un organisme : place du contrôleur de gestion",
        "Gestion des objectifs",
        "Gestion budgétaire",
        "Amélioration des performances durables",
      ],
    },
    {
      title: "Fiscalité des entreprises & des collectivités locales",
      duration: "2 mois",
      inscription: "10 000 FCFA",
      formation: "75 000 FCFA",
      modules: [
        "Comprendre la fiscalité en général",
        "Les différentes taxes et leurs modalités de déclaration",
        "Les différents régimes fiscaux",
        "Les contrôles fiscaux et leurs mécanismes de réalisation en période COVID",
      ],
    },
  ];

  const benefits = [
    "Formations 100% pratiques adaptées au marché du travail",
    "Encadrement par des experts et formateurs expérimentés",
    "Attestation reconnue à la fin de chaque formation",
    "Possibilités de stage et d'insertion professionnelle",
    "Suivi personnalisé après la formation",
  ];

  const galleryImages = [
    { src: sale1, alt: "Salle de formation principale" },
    { src: sale2, alt: "Espace de travail collaboratif" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${formationImage})` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-accent/60 to-background/90" />
          <div className="relative container mx-auto px-4 animate-in fade-in slide-in-from-top-8 duration-700">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
              Nos Formations Professionnelles Pratiques
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              Développez vos compétences avec nos formations adaptées au marché professionnel.
            </p>
            <div className="flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Button asChild size="lg">
                <Link to="/contact">Inscrivez-vous dès aujourd'hui</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Training Catalog */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
              Catalogue de nos formations
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {formations.map((formation, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="animate-in fade-in slide-in-from-bottom-6 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="py-4 text-lg font-semibold hover:no-underline">
                    <div className="text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div>{formation.title}</div>
                      <div className="text-sm font-normal text-muted-foreground mt-1">
                        Durée: {formation.duration} • Inscription: {formation.inscription} • Formation: {formation.formation}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Modules :</h4>
                        <ul className="space-y-2">
                          {formation.modules.map((module, idx) => (
                            <li
                              key={idx}
                              className="flex items-start animate-in fade-in slide-in-from-left-4 duration-500"
                              style={{ animationDelay: `${idx * 80}ms` }}
                            >
                              <span className="text-accent mr-3 font-bold">•</span>
                              <span className="text-muted-foreground">{module}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Frais d'inscription :</span>
                            <div className="font-semibold text-foreground">{formation.inscription}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Frais de formation :</span>
                            <div className="font-semibold text-foreground">{formation.formation}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
              Notre salle de formation en images
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-md animate-in fade-in slide-in-from-bottom-6 duration-500"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
              Pourquoi choisir Leaders Consulting ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 animate-in fade-in slide-in-from-bottom-6 duration-500"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-secondary-foreground flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-secondary font-bold text-sm">✓</span>
                  </div>
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
              <Button asChild size="lg" variant="outline" className="border-secondary-foreground text-secondary hover:bg-secondary hover:border-white hover:text-white">
                <Link to="/contact">Voir les dates de la prochaine session</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Inscription Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-3 animate-in fade-in slide-in-from-bottom-6 duration-700">
              Inscrivez-vous maintenant
            </h2>
            <p className="text-center text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
              Réservez votre place pour la prochaine session de formation. Contactez-nous pour plus de détails.
            </p>
            <div className="flex justify-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
              <Button asChild size="lg">
                <Link to="/contact">Aller à la page de contact</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Formations;
