import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import testimonialImage from "@/assets/temoignages.jpg";
import ctaImage from "@/assets/hero-consulting.jpg";
import locamat from "@/assets/locamat.png";
import megatram from "@/assets/megatram.png";
import prosoft from "@/assets/prosoft.png";
import synergie from "@/assets/synergie.png";
import thermerys from "@/assets/thermerys.png";
import tomtogo from "@/assets/tomtogo.png";
import visionnumerique from "@/assets/visionNumerique.png";
import archicomm from "@/assets/archicomm.png";
import editionmasquenoir from "@/assets/editionmasquenoir.png";
import bwa from "@/assets/bwa.png";
import { LogOut } from "lucide-react";







const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Leaders Consulting nous a aidés à structurer nos processus financiers avec rigueur. Nous avons gagné en visibilité et en efficacité opérationnelle.",
      author: "Locamat",
      logo: locamat,
    },
    {
      quote:
        "Une équipe à l'écoute qui comprend les enjeux du terrain. Leurs conseils ont solidifié notre organisation interne.",
      author: "BWA",
      logo: bwa,

    },
    {
      quote:
        "Le management de la performance mis en place avec leur accompagnement a permis de sécuriser nos projets stratégiques.",
      author: "SNMP TOGO",
      logo: ""
    },
    {
      quote:
        "Ils ont su traduire nos ambitions architecturales en processus structurés et pragmatiques.",
      author: "Concept ArchiComm",
      logo: archicomm,
    },
    {
      quote:
        "Nos équipes bénéficient désormais d'indicateurs fiables pour piloter nos missions sociales.",
      author: "Consult Services & Synergie",
      logo: synergie,
    },
    {
      quote:
        "Un partenaire solide pour moderniser notre gouvernance et renforcer la confiance de nos partenaires.",
      author: "TOM - TOGO",
      logo: tomtogo,
    },
    {
      quote:
        "Leur expertise comptable a apporté clarté et sérénité à notre structure financière.",
      author: "BEMUSCO FINANCE",
      logo:"" 
    },
    {
      quote:
        "Nous apprécions leur sens du détail et leur capacité à valoriser nos projets éditoriaux.",
      author: "EDITIONS MASQUE NOIR",
      logo: editionmasquenoir
    },
    {
      quote:
        "Accompagnement agile et vision stratégique : un duo gagnant pour nos activités de conseil.",
      author: "THEMERYS",
      logo: thermerys
    },
    {
      quote:
        "Leaders Consulting nous a permis de fiabiliser nos tableaux de bord et d'accélérer nos décisions.",
      author: "MEGATRAM",
      logo: megatram
    },
    {
      quote:
        "Des formations actionnables et un suivi exemplaire pour notre transformation numérique.",
      author: "VISION NUMERIQUE",
      logo: visionnumerique
    },
  ];

  const partners = [
    {
      name: "AMEIN'S Cabinet",
      description: "Conseil en stratégie et accompagnement opérationnel pour les entreprises africaines.",
    },
    {
      name: "PROSOFT",
      description: "Solutions numériques et logiciels de gestion adaptés aux organisations togolaises.",
    },
    {
      name: "Succes +",
      description: "Centre de formation et coaching orienté performance et leadership.",
    },
  ];

  const externalLinks = [
    { name: "Locamat", url: "https://locamat-togo.com/" },
    { name: "BWA", url: "https://baptistworld.org/fr/member/togo-baptist-convention/" },
    { name: "SNMP TOGO", url: "https://cfetogo.tg/annonces-legales/details-annonce-11076.html" },
    { name: "Concept ArchiComm", url: "https://conceptarchicomm.com/" },
    { name: "Consult Services & Synergie", url: "https://cssynergie.com/" },
    { name: "TOM - TOGO", url: "https://tg-tom.com/" },
    { name: "BEMUSCO FINANCE", url: "https://wa.me/22890265391" },
    { name: "EDITIONS MASQUE NOIR", url: "https://editions-lemasquenoir.com/" },
    { name: "THEMERYS", url: "https://themeryspro.com/" },
    { name: "MEGATRAM", url: "https://megatram.biz/" },
    { name: "VISION NUMERIQUE", url: "https://showroomafrica.com/annuaire/communication-publicite/imprimeries/vision-numerique" },
    { name: "AMEIN'S Cabinet", url: "" },
    { name: "PROSOFT", url: "https://www.prosoft-togo.com/" },
    { name: "Succes +", url: "https://wa.me/22891307111" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={testimonialImage}
              className="w-full h-full object-cover"
              alt="Consultants africains en réunion dans un cabinet moderne"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
          </div>
          <div className="relative container mx-auto px-4 z-10 text-center space-y-6">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold uppercase tracking-widest">
              Témoignages
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              La satisfaction de nos clients est notre meilleure vitrine
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Organisations privées, institutions et entrepreneurs nous font confiance pour des accompagnements sur mesure fiables et durables.
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Ils témoignent de leur collaboration avec nous
              </h2>
              <p className="text-lg text-muted-foreground">
                Chaque projet est une histoire de confiance partagée. Découvrez comment nous accompagnons les entreprises togolaises et africaines vers des résultats concrets.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up transition-transform duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    logo={testimonial.logo}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-24 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-14 space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Nos partenaires de confiance
              </h2>
              <p className="text-lg text-muted-foreground">
                Nous co-construisons des solutions durables avec des acteurs engagés, complémentaires à nos expertises métiers.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-xl shadow-sm px-8 py-6 w-full sm:w-[300px] text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* External Links Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Explorer nos clients et partenaires
              </h2>
              <p className="text-lg text-muted-foreground">
                Retrouvez en un clin d'œil les entreprises qui collaborent avec Leaders Consulting et accédez à leurs plateformes externes.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {externalLinks.map((item, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg px-6 py-5 bg-background shadow-sm flex items-center justify-between gap-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <span className="text-base font-semibold text-foreground">{item.name}</span>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Visiter
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">Lien à venir</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={ctaImage}
              className="w-full h-full object-cover"
              alt="Consultant accueillant un client dans un bureau moderne"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
          </div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-3xl space-y-6 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Prêt à bâtir des collaborations durables ?
              </h2>
              <p className="text-lg text-muted-foreground">
                Échangeons sur vos enjeux et concevons des solutions sur mesure pour propulser votre organisation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild size="lg">
                  <Link to="/contact">Contactez-nous</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-background/90">
                  <Link to="/services">Découvrir nos services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;
