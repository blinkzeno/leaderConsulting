import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);

    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const subjectInput = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !message) {
      toast({
        title: "Champs requis",
        description: "Veuillez renseigner votre nom et votre message.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const sanitizedPhone = phone.replace(/\s+/g, " ");
    const hasInvalidPhone = sanitizedPhone && !/^\+?\d[\d\s]{6,}$/.test(sanitizedPhone);

    if (hasInvalidPhone) {
      toast({
        title: "Numéro invalide",
        description: "Veuillez entrer un numéro de téléphone valide.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const subject = encodeURIComponent(subjectInput || "Nouveau message depuis le site");
    const body = encodeURIComponent(
      `Nom : ${name}\n` +
        `Téléphone : ${sanitizedPhone || "Non renseigné"}\n\n` +
        `Message : ${message}`
    );

    toast({
      title: "Message prêt",
      description: "Votre application de messagerie va s'ouvrir pour l'envoi.",
    });

    const mailtoUrl = `mailto:?to=${encodeURIComponent("leaders.consultingtg@gmail.com")}&subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setIsSubmitting(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name">Nom *</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Votre nom complet"
          required
        />
      </div>

    

      <div>
        <Label htmlFor="phone">Téléphone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+228 XX XX XX XX"
        />
      </div>

      <div>
        <Label htmlFor="subject">Sujet</Label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Objet de votre demande"
        />
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Décrivez votre projet ou votre demande..."
          rows={6}
          required
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Envoi..." : "Envoyer le message"}
      </Button>
    </form>
  );
};

export default ContactForm;
