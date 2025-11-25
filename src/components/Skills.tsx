import { Target, Search, Share2, TrendingUp, MousePointer, BarChart3, Layout, Database } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Target,
      title: "Meta Ads",
      description: "Strategic campaign creation and optimization for Facebook and Instagram advertising.",
    },
    {
      icon: Search,
      title: "Google Ads",
      description: "Search, display, and shopping campaigns with conversion-focused optimization.",
    },
    {
      icon: TrendingUp,
      title: "SEO Execution",
      description: "Technical SEO, on-page optimization, and content strategy for organic growth.",
    },
    {
      icon: Share2,
      title: "Social Media Strategy",
      description: "Comprehensive social media management and content planning across platforms.",
    },
    {
      icon: MousePointer,
      title: "Facebook Pixel & Tracking",
      description: "Advanced pixel implementation, event tracking, and conversion optimization.",
    },
    {
      icon: BarChart3,
      title: "GA4 Analytics",
      description: "Google Analytics 4 setup, tracking, and data-driven insights for decision making.",
    },
    {
      icon: Layout,
      title: "Landing Page Optimization",
      description: "CRO-focused landing page design and testing for maximum conversion rates.",
    },
    {
      icon: Database,
      title: "Basic Power BI",
      description: "Data visualization and reporting (currently learning and expanding expertise).",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-16 text-foreground">
            Skills
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group p-6 bg-background rounded-xl border-2 border-border hover:border-primary hover:shadow-purple transition-smooth"
              >
                <div className="w-14 h-14 bg-gradient-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <skill.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-display font-bold mb-2 text-foreground">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
