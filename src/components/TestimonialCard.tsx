
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  logo: string;
}

const TestimonialCard = ({ quote, author, logo }: TestimonialCardProps) => {
  return (
    <div className="bg-card p-8 rounded-lg shadow-md border border-border relative">
      <Quote className="w-10 h-10 text-primary/20 absolute top-4 right-4" />
      <p className="text-lg text-foreground mb-6 italic relative z-10">
        "{quote}"
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 border  bg-slate-300 border-border overflow-hidden rounded-full flex items-center justify-center mr-4">
          <span className=" font-heading font-bold text-lg">
            {logo ? (
              <img src={logo} alt="" className="object-cover w-full h-full" />
            ) : (
              <>{author.charAt(0)}</>
            )}
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
