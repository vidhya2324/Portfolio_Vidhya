import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Blending Machine Learning & UI Design to Build Next-Gen Apps
            </h3>

            <p className="text-muted-foreground">
              With hands-on experience in AI, machine learning, and full-stack
              development, I specialize in building intelligent, scalable web
              applications using modern frameworks like Next.js, React, and
              Flutter — delivering seamless user experiences powered by smart
              data insights.
            </p>

            <p className="text-muted-foreground">
              I’m passionate about transforming complex data challenges into
              smart, efficient solutions, continuously expanding my expertise in
              AI, machine learning, and cutting-edge web technologies to stay
              ahead in this fast-evolving tech world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Let’s Connect
              </a>

              <a
                href="public/projects/Vidhya 412622243020.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications using
                    modern frameworks like React.js and Next.js. Also
                    experienced in developing Machine Learning and Deep Learning
                    models for data-driven solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Seamless AI-Driven UX
                  </h4>
                  <p className="text-muted-foreground">
                    Designing intuitive interfaces that enhance AI-driven user
                    experiences..
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Managing intelligent web and AI projects from planning to
                    deployment with agile workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
