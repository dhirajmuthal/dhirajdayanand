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

  const skills = ["Meta Ads", "Google Ads", "SEO", "Social Media Strategy"];

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
      
      {/* Floating animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      {/* Floating skill tags */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {skills.map((skill, index) => (
          <div
            key={skill}
            className={`absolute px-4 py-2 bg-background/80 backdrop-blur-sm border border-primary/30 rounded-full text-sm font-semibold text-primary shadow-lg animate-float-tag-${index + 1}`}
            style={{
              top: `${20 + (index * 15)}%`,
              left: index % 2 === 0 ? `${5 + (index * 3)}%` : 'auto',
              right: index % 2 !== 0 ? `${5 + (index * 3)}%` : 'auto',
            }}
          >
            {skill}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-tight animate-hero-title">
              Performance Marketer Who Turns Attention Into Revenue.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-hero-subtitle">
              The guy who prefers to measure every marketing effort in "outcomes". If you like marketing that blends <span className="text-primary font-semibold">psychology</span>, <span className="text-primary font-semibold">data</span>, & <span className="text-primary font-semibold">creativity</span>, you'll like working with me.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-lg md:hidden animate-fade-in-up">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-background/80 backdrop-blur-sm border border-primary/30 rounded-full text-sm font-semibold text-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-hero-buttons">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group shadow-purple hover:shadow-purple-lg transition-all duration-300 hover:scale-105"
            >
              Work With Me
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" size={20} />
            </Button>
            <Button
              onClick={() => scrollToSection("work")}
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground group hover:scale-105 transition-all duration-300"
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
