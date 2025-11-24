import { Target, Search, BarChart3, Share2 } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Target,
      title: "Meta Ads",
      description: "Campaign setup, audience research, creative strategy, and optimization for maximum ROAS.",
    },
    {
      icon: Search,
      title: "Google Ads",
      description: "Search, display, and shopping campaigns with conversion tracking and performance optimization.",
    },
    {
      icon: BarChart3,
      title: "SEO & Audits",
      description: "Technical SEO, on-page optimization, keyword research, and comprehensive site audits.",
    },
    {
      icon: Share2,
      title: "Social Media",
      description: "Content strategy, scheduling, community management, and brand building across platforms.",
    },
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-16 animate-fade-in">
            What I Do Best
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group p-6 bg-background rounded-xl border border-border hover:border-primary hover:shadow-purple transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <skill.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{skill.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
