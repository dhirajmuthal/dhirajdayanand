import profileImg from "@/assets/profile.jpg";
import { GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-16 animate-fade-in">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-primary font-semibold">Dhiraj Dayanand</span> — the guy brands call when their marketing looks busy but isn't actually moving.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it's Meta Ads, Google Ads, or SEO, my work is built on one principle:{" "}
                <span className="text-foreground font-semibold">if it doesn't grow the business, it's a distraction.</span>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                If you like marketing that blends psychology, analytics, and creativity, you'll like working with me.
              </p>

              <div className="space-y-4 pt-6">
                <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                  <GraduationCap className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground">Education</h3>
                    <p className="text-muted-foreground">BBA — Amity University Online</p>
                    <p className="text-sm text-muted-foreground">2023 – 2026</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                  <Briefcase className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground">Digital Marketing Intern</h3>
                    <p className="text-muted-foreground">Pooinfotech Digital Solutions, Pune (Remote)</p>
                    <p className="text-sm text-muted-foreground">Aug 2025 – Present</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-purple">
                <img
                  src={profileImg}
                  alt="Dhiraj Dayanand - Performance Marketer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
