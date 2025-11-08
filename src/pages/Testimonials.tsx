import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Grâce à Leaders Consulting, notre comptabilité est désormais claire et nos décisions plus stratégiques. Leur accompagnement a vraiment fait la différence.",
      author: "Directeur financier, PME locale",
    },
    {
      quote:
        "Un accompagnement professionnel et humain, adapté à nos besoins réels. L'équipe est toujours disponible et à l'écoute.",
      author: "Responsable RH, société de services",
    },
    {
      quote:
        "L'audit réalisé par Leaders Consulting nous a permis d'identifier des axes d'amélioration importants. Nous recommandons vivement leurs services.",
      author: "Gérant, entreprise commerciale",
    },
    {
      quote:
        "Excellente expertise en gestion d'entreprise. Ils ont su nous guider dans notre restructuration avec professionnalisme et efficacité.",
      author: "Directrice générale, ONG internationale",
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
              Ils nous font confiance
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
              Nous collaborons avec des entreprises, ONG et institutions de toutes
              tailles. Découvrez ce que disent nos partenaires :
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="animate-fade-in-up">
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
              <div className="animate-fade-in-up">
                <div className="text-5xl font-heading font-bold mb-2">100+</div>
                <p className="text-lg opacity-90">Clients satisfaits</p>
              </div>
              <div className="animate-fade-in-up">
                <div className="text-5xl font-heading font-bold mb-2">10+</div>
                <p className="text-lg opacity-90">Années d'expérience</p>
              </div>
              <div className="animate-fade-in-up">
                <div className="text-5xl font-heading font-bold mb-2">500+</div>
                <p className="text-lg opacity-90">Missions réalisées</p>
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
