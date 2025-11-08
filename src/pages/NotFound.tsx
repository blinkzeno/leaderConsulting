import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center bg-accent/20">
        <div className="text-center px-4 py-20">
          <h1 className="text-9xl font-heading font-bold text-primary mb-4">
            404
          </h1>
          <h2 className="text-3xl font-heading font-semibold mb-4 text-foreground">
            Page non trouvée
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Button asChild size="lg">
            <Link to="/" className="inline-flex items-center space-x-2">
              <Home className="w-5 h-5" />
              <span>Retour à l'accueil</span>
            </Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
