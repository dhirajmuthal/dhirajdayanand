import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const floatingKeywords = [
    { text: "Meta Ads", delay: "0s", duration: "3s" },
    { text: "Google Ads", delay: "0.5s", duration: "3.5s" },
    { text: "Social Media Strategy", delay: "1s", duration: "4s" },
    { text: "SEO", delay: "1.5s", duration: "3.2s" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-split"
    >
      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Large Background Text */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h1 className="text-[10vw] md:text-[8rem] lg:text-[12rem] font-display font-bold text-foreground/5 whitespace-nowrap select-none">
                DHIRAJ DAYANAND
              </h1>
            </div>

            {/* Profile Image */}
            <div className="relative z-10 flex justify-center mb-8">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-purple">
                <img
                  src={profileImg}
                  alt="Dhiraj Dayanand"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Floating Keywords */}
          <div className="absolute inset-0 pointer-events-none">
            {floatingKeywords.map((keyword, index) => (
              <div
                key={index}
                className="absolute animate-float-slow"
                style={{
                  left: `${15 + index * 20}%`,
                  top: `${30 + (index % 2) * 30}%`,
                  animationDelay: keyword.delay,
                  animationDuration: keyword.duration,
                }}
              >
                <span className="inline-block px-6 py-3 rounded-full bg-gradient-purple text-white font-semibold text-sm md:text-base shadow-purple">
                  {keyword.text}
                </span>
              </div>
            ))}
          </div>

          {/* Hero Paragraph - NO BOLD, NO ANIMATION */}
          <div className="space-y-4 relative z-10">
            <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed font-sans">
              I'm Dhiraj Dayanand — the guy brands call when their marketing looks busy but isn't actually moving. 
              Whether it's Meta Ads, Google Ads, or SEO, my work is built on one principle: if it doesn't grow the business, 
              it's a distraction. If you like marketing that blends psychology, analytics, and creativity, you'll like working with me.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 relative z-10">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Hire Me
            </Button>
            <Button
              onClick={() => scrollToSection("work")}
              size="lg"
              variant="outline"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
