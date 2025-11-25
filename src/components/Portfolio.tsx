const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce ROAS Campaign",
      description: "Achieved 847.9% ROAS for a fashion e-commerce brand through strategic Meta Ads optimization.",
      gradient: "bg-gradient-purple",
    },
    {
      title: "Lead Generation Success",
      description: "Generated 200+ qualified leads for a B2B SaaS company using targeted Google Ads campaigns.",
      gradient: "bg-white border-2 border-primary",
    },
    {
      title: "SEO Traffic Growth",
      description: "Increased organic traffic by 320% in 6 months through comprehensive SEO strategy.",
      gradient: "bg-gradient-purple",
    },
    {
      title: "Social Media Engagement",
      description: "Built an engaged community of 50K+ followers across Instagram and LinkedIn for a personal brand.",
      gradient: "bg-white border-2 border-primary",
    },
    {
      title: "Landing Page Optimization",
      description: "Improved conversion rates by 180% through data-driven landing page testing and optimization.",
      gradient: "bg-gradient-purple",
    },
    {
      title: "Multi-Channel Campaign",
      description: "Orchestrated integrated campaigns across Meta, Google, and SEO delivering 5X ROI consistently.",
      gradient: "bg-white border-2 border-primary",
    },
  ];

  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-4 text-foreground">
            Portfolio
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Real results from real campaigns. Here's what happens when strategy meets execution.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${project.gradient} p-8 rounded-xl shadow-lg hover:shadow-purple hover:scale-105 transition-smooth group`}
              >
                <h3 className={`text-2xl font-display font-bold mb-4 ${
                  project.gradient.includes('gradient') ? 'text-white' : 'text-primary'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  project.gradient.includes('gradient') ? 'text-white/90' : 'text-foreground/80'
                }`}>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
