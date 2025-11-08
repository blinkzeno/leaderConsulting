import { Award, Target, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-team.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      label: "Intégrité",
      description: "La transparence au cœur de chaque mission.",
    },
    {
      icon: Award,
      label: "Compétence",
      description: "Une expertise reconnue dans plusieurs secteurs d'activité.",
    },
    {
      icon: Target,
      label: "Engagement",
      description: "Un accompagnement sur mesure pour chaque client.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0">
            <img
              src={aboutImage}
              alt="Professionnels en réunion chez Leaders Consulting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-foreground">
              Qui sommes-nous ?
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
              Votre partenaire de confiance pour l'audit, l'expertise comptable,
              la gestion d'entreprise et des ressources humaines.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <img
                  src={aboutImage}
                  alt="Équipe Leaders Consulting en réunion"
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">
                  Notre histoire
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Depuis sa création, LEADERS CONSULTING © accompagne les entreprises
                  togolaises et africaines dans leur développement. Notre mission :
                  fournir des solutions fiables et innovantes en matière d'audit,
                  d'expertise comptable, de gestion et de ressources humaines.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Notre équipe pluridisciplinaire met son savoir-faire au service de
                  votre réussite, dans un esprit de proximité, d'intégrité et
                  d'excellence.
                </p>
                <p className="text-lg text-muted-foreground">
                  Nous croyons fermement que chaque entreprise mérite un
                  accompagnement personnalisé et des conseils adaptés à ses
                  spécificités. C'est pourquoi nous plaçons l'écoute et la
                  compréhension de vos besoins au centre de notre démarche.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-accent/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground">
              Nos valeurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-lg shadow-md text-center border border-border hover:shadow-xl transition-shadow animate-fade-in-up"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-subheading font-semibold mb-3 text-card-foreground">
                    {value.label}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
