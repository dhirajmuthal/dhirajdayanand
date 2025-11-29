import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/40 to-background/60 backdrop-blur-[2px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-tight">
              Performance Marketer Who Turns Attention Into Revenue.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              The guy brands call when their marketing looks busy but isn't actually moving.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-lg">
            <span className="text-primary font-semibold">Meta Ads</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-primary font-semibold">Google Ads</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-primary font-semibold">SEO</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-primary font-semibold">Social Media Management</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group shadow-purple"
            >
              Work With Me
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" size={20} />
            </Button>
            <Button
              onClick={() => scrollToSection("work")}
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
            >
              View My Results
              <TrendingUp className="ml-2 group-hover:translate-y-[-2px] transition-smooth" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
