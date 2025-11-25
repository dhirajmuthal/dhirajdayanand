const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-12 text-foreground">
            About Me
          </h2>

          <div className="space-y-8">
            <div className="bg-muted p-8 rounded-xl shadow-lg">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                I'm a performance marketer who believes in results over noise. My approach combines 
                data-driven strategy with creative execution to deliver campaigns that actually move the needle.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                With expertise spanning Meta Ads, Google Ads, SEO, and social media strategy, I help brands 
                cut through the clutter and connect with their audience in meaningful ways that drive real business growth.
              </p>
            </div>

            {/* Skills List */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-purple p-6 rounded-xl shadow-purple">
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  Core Expertise
                </h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Meta Ads & Facebook Marketing</li>
                  <li>• Google Ads & PPC Campaigns</li>
                  <li>• SEO & Content Strategy</li>
                  <li>• Social Media Management</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-primary p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-display font-bold text-primary mb-3">
                  Technical Skills
                </h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Facebook Pixel & Tracking</li>
                  <li>• GA4 Analytics</li>
                  <li>• Landing Page Optimization</li>
                  <li>• Basic Power BI (Learning)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
