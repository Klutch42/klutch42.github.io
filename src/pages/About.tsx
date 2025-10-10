const About = () => {
  return (
    <div className="min-h-screen pt-24 px-6 pb-12">
      <div className="max-w-2xl mx-auto">
        <section className="py-16 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-semibold mb-8 tracking-wider font-mono text-gray-200">
  Krushna Dash
</h1>

          
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm a software engineer and AI specialist with a passion for building elegant solutions 
              at the intersection of technology and artificial intelligence.
            </p>
            
            <p>
              My work spans distributed systems, machine learning pipelines, and scalable infrastructure. 
              I'm particularly interested in neural network optimization, natural language processing, 
              and building tools that make complex systems more accessible.
            </p>
            
            <p>
              Currently working on projects involving deep learning frameworks, microservices architecture, 
              and computer vision systems. I believe in writing clean, maintainable code and sharing 
              knowledge with the community.
            </p>
            
            <p>
              When I'm not coding, you'll find me exploring new AI research papers, contributing to 
              open-source projects, or experimenting with emerging technologies.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex gap-8 text-sm">
              <a
                href="mailto:krushnadash@utexas.edu"
                className="hover:text-foreground transition-colors text-muted-foreground"
              >
                Email
              </a>
              <a
                href="github.com/Klutch42"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors text-muted-foreground"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/krushna-dash"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors text-muted-foreground"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors text-muted-foreground"
              >
                Twitter
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
