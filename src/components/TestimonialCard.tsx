import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard = ({ quote, author }: TestimonialCardProps) => {
  return (
    <div className="bg-card p-8 rounded-lg shadow-md border border-border relative">
      <Quote className="w-10 h-10 text-primary/20 absolute top-4 right-4" />
      <p className="text-lg text-foreground mb-6 italic relative z-10">
        "{quote}"
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
          <span className="text-primary font-heading font-bold text-lg">
            {author.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-subheading font-semibold text-foreground">
            {author}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
