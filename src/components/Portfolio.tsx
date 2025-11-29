import { TrendingUp, Users, Target } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      icon: Users,
      title: "Wellness Coaches Lead Generation",
      metric: "200+",
      label: "Qualified Leads",
      description: "Generated high-quality leads for wellness coaching services",
      stats: [
        { label: "Leads Generated", value: "200+" },
        { label: "Conversions", value: "20-25" },
        { label: "Conversion Rate", value: "10-12%" },
      ],
    },
    {
      icon: TrendingUp,
      title: "Fitness + Wellness Business",
      metric: "847.9%",
      label: "ROAS",
      description: "Achieved exceptional return on ad spend within targeted months",
      stats: [
        { label: "ROAS", value: "847.9%" },
        { label: "Revenue Generated", value: "8.5x" },
        { label: "Campaign Period", value: "3 months" },
      ],
    },
    {
      icon: Target,
      title: "Wellness Brand Lead Campaign",
      metric: "804+",
      label: "Qualified Leads",
      description: "Scaled lead generation with optimized ad spend efficiency",
      stats: [
        { label: "Leads Generated", value: "804+" },
        { label: "Monthly Ad Spend", value: "~₹33k" },
        { label: "Cost per Lead", value: "₹41" },
      ],
    },
  ];

  return (
    <section id="work" className="py-24 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-4 animate-fade-in">
            Proven Results
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Real campaigns, real numbers, real growth
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-8 hover:border-primary hover:shadow-purple transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                  <project.icon className="text-primary" size={28} />
                </div>

                <div className="mb-6">
                  <div className="text-5xl font-display font-bold text-primary mb-2">
                    {project.metric}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-2">
                    {project.label}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3 pt-6 border-t border-border">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                      <span className="text-sm font-semibold text-foreground">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
