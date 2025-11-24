import { Target, MousePointerClick, Search, Share2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Meta Ads Management",
      description: "End-to-end Meta advertising campaigns including strategy, setup, creative development, audience targeting, and ongoing optimization for maximum conversions.",
      features: ["Campaign Setup", "Audience Research", "Creative Strategy", "Performance Optimization"],
    },
    {
      icon: MousePointerClick,
      title: "Google Ads Setup",
      description: "Comprehensive Google Ads campaigns across search, display, and shopping networks with conversion tracking, keyword research, and bid management.",
      features: ["Search Campaigns", "Display Ads", "Shopping Ads", "Conversion Tracking"],
    },
    {
      icon: Search,
      title: "SEO Audits",
      description: "In-depth technical SEO analysis, on-page optimization recommendations, keyword strategy, and actionable insights to improve organic rankings and traffic.",
      features: ["Technical SEO", "On-Page Fixes", "Keyword Strategy", "Performance Reports"],
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Strategic content planning, scheduling, community engagement, and brand building across major social platforms to grow your online presence.",
      features: ["Content Planning", "Post Scheduling", "Community Management", "Brand Strategy"],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-4 animate-fade-in">
            Services
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Specialized marketing solutions that drive real business growth
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-card border border-border rounded-2xl hover:border-primary hover:shadow-purple transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                  <service.icon className="text-primary" size={28} />
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-3 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group w-full"
                >
                  Request Details
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" size={16} />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
